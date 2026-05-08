1. Vision statement
We exist to make physical intelligence compositional, because every skill a robot needs today requires a new dataset, so that a world where robots are taught, not trained, becomes possible.
2. The specific future we're creating
A future where teaching a robot a new skill takes a handful of demos and a few minutes, not a dataset and a training run of hours. The robot already understands the physics and things about the world. It just needs to learn the combination of things it learnt.
3. The status quo
Robot learning today is usually done in three ways, and all three have the same problem: every new skill needs new data.
Behavior cloning and imitation learning need thousands of demos per skill and don't transfer across embodiments. Architectures like ACT and Diffusion Policy hit decent in-distribution performance but fail on anything outside the training.
Pixel and latent-space world models like Dreamer models predict raw observations or unstructured latents instead of physical structure. They can simulate a scene but can't reason about why it evolves the way it does. The latent has no semantic axis you can probe or transfer across embodiments.
Foundation models for robotics get breadth through scale, but they need massive curated datasets and don't actually compose. Adding a new skill means adding it to training , not getting it from what's already there.
4. The 10x solution
Nine components: The whole system learns from self-directed play, builds a library of skills, and composes those skills into new behaviour with minimal to no retraining, to make a new foundation model 9I think this is classified as one of those)
The pieces:

Multi-environment curriculum. The robot trains across many tabletop environments, not one. Different objects, different geometries, different physics. This is what forces the rest of the system to learn invariants instead of memorising one specific scene.
Perception encoder. Takes raw camera input and produces a structured scene at three levels: pixel features, object slots (one per object in the scene), and scene-level relationships. Different downstream components consume different levels.
Memory bank. Hierarchical, with a router on top and category specialists underneath. Stores every (state, action, outcome, goal, success) tuple from past episodes. The router decides which category a new experience belongs to and creates new categories when nothing fits. This is what prevents catastrophic forgetting. New skills don't overwrite old ones.
Forward outcome predictor. A small world model. Takes (state, primitive, params) and predicts the outcome. It squeezes everything through a 16-dim bottleneck in the middle. The bottleneck is small enough that the model can't memorise lookups, it has to find shared structure. The hope is that physics-like things (contact, constraint, momentum) emerge in those 16 dims because they're the most compressible way to describe what happens when you push, pull, or grasp something. Used two ways: surprise detection (if predicted vs actual is way off, there's something to learn) and tie-breaking when the action component isn't sure what to do.
Active learning module. Picks what to do next during training. Instead of random play, the robot goes after experiences predicted to make it learn the most. Replaces the "LLM watches frames and decides what's interesting" approach with a learned signal.
Skill discovery + skill-utility evaluator. Watches trajectories, segments them at stability points (where the scene stops changing), and clusters the segments. Each cluster is a candidate skill stored as (precondition, action stats, effect). The evaluator scores skills on reuse rate, outcome reliability, and coverage uniqueness, and prunes the bad ones. This is the library of primitives the rest of the system composes over.
Goal encoder. Takes a goal in any modality (language, image, demo, partial state) and projects it into the same embedding space the rest of the system uses. So "set the table" and a picture of a set table land in the same place.
Goal graph builder. Takes a top-level goal and decomposes it into a graph of sub-goals over the skill library. Updates the graph when surprise fires. This is what turns a high-level goal like "set the table" into a sequence of skills the action component can execute.
Step predictor. The action component. Takes (current scene, active sub-goal, retrieved memories, candidate skills) and outputs the next action plus a confidence score. High confidence acts directly. Skill match invokes the skill. Low confidence asks the outcome predictor to evaluate candidates.
5. 1M
I would do a held-out primitive test on the world model (component 4).
The whole architecture needs the 16-dim bottleneck learning physics-like structure, not just primitive-specific lookups. If it isn't, skills don't compose and its not really that big of a deal so this is the foundation experiment.

Setup: Train the world model on three primitives (push, pull, grasp) with 5,000 transitions. Hand-script a fourth primitive (tap, a brief contact event with no grasping) and collect 500 transitions. The world model never sees tap during training.

Test: Run tap transitions through the trained encoder to get 16-dim concept embeddings. Two checks: (a) nearest-neighbour, find the closest training embedding across push/pull/grasp and use its outcome as the prediction; (b) linear probe, freeze the encoder and train a small linear layer to predict tap outcomes from a small split of tap data. Compare both against a random-init baseline.

Pass condition. MSE under 50% of random baseline on both. That means the 16-dim layer learned something that generalises to a primitive it has never seen.

1M Buys: GPU compute to train at scales where compositional structure is more likely to happen.