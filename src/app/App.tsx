import { Brain, Zap, Target, Database, Eye, Cpu, TrendingUp, Network, MessageSquare, GitBranch, Activity, Clock, ArrowRight, CheckCircle, Layers, BarChart3, Repeat, XCircle, Award, Workflow, Binary, Box, Boxes, AlertTriangle, Flame, Sparkles, TrendingDown, Info } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, AreaChart, Area, LineChart, Line, ComposedChart, ScatterChart, Scatter } from 'recharts';

export default function App() {
  const skillCompositionData = [
    { name: 'Learned Skills', value: 60, color: '#10b981' },
    { name: 'Composed Skills', value: 40, color: '#3b82f6' }
  ];

  const validationData = [
    { metric: 'Push', value: 85 },
    { metric: 'Pull', value: 82 },
    { metric: 'Grasp', value: 88 },
    { metric: 'Tap (New)', value: 76 }
  ];

  const learningCurveData = [
    { episodes: 0, traditional: 0, compositional: 0 },
    { episodes: 100, traditional: 15, compositional: 35 },
    { episodes: 200, traditional: 28, compositional: 62 },
    { episodes: 300, traditional: 38, compositional: 78 },
    { episodes: 400, traditional: 45, compositional: 88 },
    { episodes: 500, traditional: 50, compositional: 95 }
  ];

  const componentImpactData = [
    { component: 'Multi-Env', impact: 85 },
    { component: 'Perception', impact: 92 },
    { component: 'Memory', impact: 88 },
    { component: 'Predictor', impact: 95 },
    { component: 'Learning', impact: 82 },
    { component: 'Discovery', impact: 90 },
    { component: 'Goal Enc', impact: 87 },
    { component: 'Graph', impact: 89 },
    { component: 'Executor', impact: 91 }
  ];

  const approachComparisonData = [
    { approach: 'Imitation Learning', data: 95, transfer: 15, compose: 10, speed: 20 },
    { approach: 'World Models', data: 80, transfer: 30, compose: 25, speed: 35 },
    { approach: 'Foundation Models', data: 98, transfer: 60, compose: 40, speed: 15 },
    { approach: 'Our Solution', data: 25, transfer: 90, compose: 95, speed: 98 }
  ];

  const memoryRetentionData = [
    { skills: 10, traditional: 95, compositional: 98 },
    { skills: 50, traditional: 75, compositional: 97 },
    { skills: 100, traditional: 45, compositional: 95 },
    { skills: 200, traditional: 25, compositional: 93 },
    { skills: 500, traditional: 10, compositional: 90 },
    { skills: 1000, traditional: 5, compositional: 88 }
  ];

  const primitivePerformanceData = [
    { primitive: 'Push', seen: 88, unseen: 82 },
    { primitive: 'Pull', seen: 90, unseen: 79 },
    { primitive: 'Grasp', seen: 92, unseen: 85 },
    { primitive: 'Rotate', seen: 87, unseen: 81 },
    { primitive: 'Tap', seen: 0, unseen: 76 }
  ];

  const timeBreakdownData = [
    { phase: 'Setup', traditional: 30, ours: 5 },
    { phase: 'Data Collection', traditional: 120, ours: 10 },
    { phase: 'Training', traditional: 480, ours: 6 },
    { phase: 'Validation', traditional: 60, ours: 8 },
    { phase: 'Deployment', traditional: 30, ours: 3 }
  ];

  const costComparisonData = [
    { category: 'Compute', traditional: 100, ours: 1.5 },
    { category: 'Data Labeling', traditional: 100, ours: 0.5 },
    { category: 'Engineering Time', traditional: 100, ours: 12 },
    { category: 'Infrastructure', traditional: 100, ours: 8 }
  ];

  const skillScalingData = [
    { skills: 1, traditional: 100, ours: 100 },
    { skills: 5, traditional: 500, ours: 180 },
    { skills: 10, traditional: 1000, ours: 250 },
    { skills: 25, traditional: 2500, ours: 420 },
    { skills: 50, traditional: 5000, ours: 680 },
    { skills: 100, traditional: 10000, ours: 1100 }
  ];

  const datasetSizeComparison = [
    { method: 'Status Quo', demos: 1000, transfer: 5 },
    { method: 'Our Solution', demos: 5, transfer: 90 }
  ];

  const problemAreaData = [
    { issue: 'Catastrophic Forgetting', severity: 95 },
    { issue: 'Data Inefficiency', severity: 98 },
    { issue: 'Poor Transfer', severity: 90 },
    { issue: 'No Composability', severity: 92 }
  ];

  // Dot grid pattern
  const DotGrid = () => (
    <div className="absolute top-20 right-20 grid grid-cols-6 gap-4 opacity-20">
      {Array.from({ length: 30 }).map((_, i) => (
        <div key={`dot-grid-${i}`} className="w-2 h-2 bg-slate-500 rounded-full"></div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      <DotGrid />

      <div className="max-w-7xl mx-auto p-12">
        {/* Header with left accent bar */}
        <div className="mb-12 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-400 to-emerald-600"></div>
          <div className="pl-12">
            <h1 className="text-white text-6xl font-bold mb-6 tracking-tight">ATLAS</h1>
            <p className="text-emerald-400 text-xl tracking-widest mb-4">
              A MOONSHOT FOR ROBOTS THAT ARE TAUGHT, NOT TRAINED
            </p>
            <p className="text-slate-400 text-sm mb-8 max-w-4xl leading-relaxed">
              We exist to make physical intelligence compositional, because every skill a robot needs today requires a new dataset.
              Our vision: a world where teaching a robot a new skill takes a handful of demos and a few minutes, not datasets and hours of training.
              The robot already understands physics—it just needs to learn new combinations of existing knowledge.
            </p>

            <div className="grid grid-cols-3 gap-12 pt-8 border-t border-slate-700">
              <div>
                <p className="text-slate-500 text-xs tracking-widest mb-3">THESIS</p>
                <p className="text-white font-semibold mb-2">Concept-level world models</p>
                <p className="text-slate-400 text-xs">Learning physics-like structure through compositional understanding rather than pattern memorization</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs tracking-widest mb-3">ARCHITECTURE</p>
                <p className="text-white font-semibold mb-2">16-dim concept bottleneck</p>
                <p className="text-slate-400 text-xs">Forces the model to discover shared physical structure instead of memorizing primitive-specific lookups</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs tracking-widest mb-3">CRUX TEST</p>
                <p className="text-white font-semibold mb-2">The held-out primitive</p>
                <p className="text-slate-400 text-xs">Can the system generalize to unseen actions by composing learned physics concepts?</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mb-12 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-l-4 border-emerald-500 rounded-r-lg p-6">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
            <div>
              <p className="text-white font-semibold mb-2">The Core Innovation</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Traditional robot learning treats every skill as independent, requiring thousands of demonstrations per task.
                ATLAS introduces compositional physical intelligence: a 9-component system that learns from self-directed play,
                builds a library of primitive skills, and composes them into new behaviors with minimal retraining.
                The key is a 16-dimensional bottleneck that forces the model to learn physics-like structure—contact, momentum, constraints—
                rather than memorizing specific examples.
              </p>
            </div>
          </div>
        </div>

        {/* Key Stats Bar with Comparison */}
        <div className="mb-12">
          <div className="grid grid-cols-5 gap-4 mb-6">
            <div className="bg-slate-800/50 border-2 border-emerald-500/50 rounded-lg p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full -mr-10 -mt-10"></div>
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-emerald-400" />
                <p className="text-slate-400 text-xs">SPEED UP</p>
              </div>
              <p className="text-emerald-400 text-3xl font-bold">99%</p>
              <p className="text-slate-500 text-xs mt-1">faster training</p>
            </div>
            <div className="bg-slate-800/50 border-2 border-emerald-500/50 rounded-lg p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full -mr-10 -mt-10"></div>
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-4 h-4 text-emerald-400" />
                <p className="text-slate-400 text-xs">DATA REDUCTION</p>
              </div>
              <p className="text-emerald-400 text-3xl font-bold">200x</p>
              <p className="text-slate-500 text-xs mt-1">fewer demos</p>
            </div>
            <div className="bg-slate-800/50 border-2 border-emerald-500/50 rounded-lg p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full -mr-10 -mt-10"></div>
              <div className="flex items-center gap-2 mb-2">
                <Repeat className="w-4 h-4 text-emerald-400" />
                <p className="text-slate-400 text-xs">TRANSFER</p>
              </div>
              <p className="text-emerald-400 text-3xl font-bold">90%</p>
              <p className="text-slate-500 text-xs mt-1">cross-skill</p>
            </div>
            <div className="bg-slate-800/50 border-2 border-emerald-500/50 rounded-lg p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full -mr-10 -mt-10"></div>
              <div className="flex items-center gap-2 mb-2">
                <Boxes className="w-4 h-4 text-emerald-400" />
                <p className="text-slate-400 text-xs">COMPOSITION</p>
              </div>
              <p className="text-emerald-400 text-3xl font-bold">40%</p>
              <p className="text-slate-500 text-xs mt-1">auto-emerged</p>
            </div>
            <div className="bg-slate-800/50 border-2 border-emerald-500/50 rounded-lg p-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full -mr-10 -mt-10"></div>
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-emerald-400" />
                <p className="text-slate-400 text-xs">ZERO-SHOT</p>
              </div>
              <p className="text-emerald-400 text-3xl font-bold">76%</p>
              <p className="text-slate-500 text-xs mt-1">unseen tasks</p>
            </div>
          </div>

          {/* Status Quo Problems Banner */}
          <div className="bg-gradient-to-r from-orange-900/40 via-red-900/40 to-orange-900/40 border-2 border-orange-500/30 rounded-lg p-4">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500/20 p-2 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-orange-400" />
              </div>
              <div className="flex-1">
                <p className="text-orange-400 text-sm font-semibold mb-2">STATUS QUO CHALLENGES</p>
                <p className="text-slate-300 text-xs mb-3">Current approaches suffer from fundamental limitations that prevent scalable robot learning</p>
                <div className="grid grid-cols-4 gap-4">
                  <div>
                    <p className="text-white text-xs font-semibold">Catastrophic Forgetting</p>
                    <div className="bg-slate-800 h-1 rounded-full mt-1 overflow-hidden">
                      <div className="bg-orange-500 h-full" style={{ width: '95%' }}></div>
                    </div>
                    <p className="text-slate-400 text-xs mt-1">New skills overwrite old ones</p>
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Data Inefficiency</p>
                    <div className="bg-slate-800 h-1 rounded-full mt-1 overflow-hidden">
                      <div className="bg-orange-500 h-full" style={{ width: '98%' }}></div>
                    </div>
                    <p className="text-slate-400 text-xs mt-1">1000s of demos per skill</p>
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Poor Transfer</p>
                    <div className="bg-slate-800 h-1 rounded-full mt-1 overflow-hidden">
                      <div className="bg-orange-500 h-full" style={{ width: '90%' }}></div>
                    </div>
                    <p className="text-slate-400 text-xs mt-1">No cross-embodiment learning</p>
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">No Composability</p>
                    <div className="bg-slate-800 h-1 rounded-full mt-1 overflow-hidden">
                      <div className="bg-orange-500 h-full" style={{ width: '92%' }}></div>
                    </div>
                    <p className="text-slate-400 text-xs mt-1">Can't combine learned skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Problem vs Solution - Enhanced */}
        <div className="mb-12 border-t border-slate-700 pt-12">
          <p className="text-slate-500 text-xs tracking-widest mb-2">THE PARADIGM SHIFT</p>
          <p className="text-slate-400 text-sm mb-6">From data-hungry memorization to compositional understanding</p>
          <div className="grid grid-cols-2 gap-6">
            {/* Status Quo */}
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border-2 border-orange-500/30 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-orange-500/20 p-2 rounded-lg">
                  <Flame className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-orange-400 text-sm font-bold tracking-wide">STATUS QUO</p>
                  <p className="text-slate-400 text-xs">Traditional approaches</p>
                </div>
              </div>
              <p className="text-slate-300 text-xs mb-4 leading-relaxed">
                Behavior cloning, imitation learning, and foundation models all share the same fundamental flaw:
                every new skill requires massive new datasets and hours of training. No skill transfer, no composition, no scaling.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-sm font-semibold">Demos Required</span>
                    <span className="text-orange-400 text-sm font-bold">1,000</span>
                  </div>
                  <div className="bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-sm font-semibold">Training Time</span>
                    <span className="text-orange-400 text-sm font-bold">8 hours</span>
                  </div>
                  <div className="bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-sm font-semibold">Skill Transfer</span>
                    <span className="text-orange-400 text-sm font-bold">5%</span>
                  </div>
                  <div className="bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-full" style={{ width: '5%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-sm font-semibold">Composability</span>
                    <span className="text-orange-400 text-sm font-bold">10%</span>
                  </div>
                  <div className="bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 h-full" style={{ width: '10%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Solution */}
            <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border-2 border-emerald-500/50 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-emerald-500/20 p-2 rounded-lg">
                  <Sparkles className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-emerald-400 text-sm font-bold tracking-wide">OUR SOLUTION</p>
                  <p className="text-slate-400 text-xs">Compositional intelligence</p>
                </div>
              </div>
              <p className="text-slate-300 text-xs mb-4 leading-relaxed">
                A 9-component system that learns physics-like structure through a 16-dim bottleneck, enabling skills to compose
                and transfer. The robot learns from self-directed play and builds a reusable primitive library.
              </p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-sm font-semibold">Demos Required</span>
                    <span className="text-emerald-400 text-sm font-bold">5</span>
                  </div>
                  <div className="bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-full" style={{ width: '0.5%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-sm font-semibold">Training Time</span>
                    <span className="text-emerald-400 text-sm font-bold">6 minutes</span>
                  </div>
                  <div className="bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-full" style={{ width: '1.25%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-sm font-semibold">Skill Transfer</span>
                    <span className="text-emerald-400 text-sm font-bold">90%</span>
                  </div>
                  <div className="bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-sm font-semibold">Composability</span>
                    <span className="text-emerald-400 text-sm font-bold">95%</span>
                  </div>
                  <div className="bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-400 to-teal-400 h-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cost & Scaling Comparison */}
        <div className="mb-12 border-t border-slate-700 pt-12">
          <p className="text-slate-500 text-xs tracking-widest mb-2">COST & SCALING EFFICIENCY</p>
          <p className="text-slate-400 text-sm mb-6">The economic advantage grows exponentially as skills scale</p>
          <div className="grid grid-cols-2 gap-6">
            {/* Cost Breakdown */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <TrendingDown className="w-5 h-5 text-emerald-400" />
                <p className="text-white text-sm font-semibold">Cost Reduction by Category (Relative Scale)</p>
              </div>
              <p className="text-slate-400 text-xs mb-4">98.5% reduction in compute costs, 99.5% in data labeling</p>
              <ResponsiveContainer width="100%" height={330}>
                <BarChart data={costComparisonData} margin={{ top: 25, right: 10, left: 10, bottom: 5 }}>
                  <CartesianGrid key="cost-grid" strokeDasharray="3 3" stroke="#475569" />
                  <XAxis
                    key="cost-xaxis"
                    dataKey="category"
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                    angle={-35}
                    textAnchor="end"
                    height={90}
                  />
                  <YAxis key="cost-yaxis" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 11 }} domain={[0, 115]} />
                  <Tooltip
                    key="cost-tooltip"
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Legend key="cost-legend" wrapperStyle={{ fontSize: '9px' }} iconSize={8} layout="horizontal" align="center" verticalAlign="bottom" iconType="rect" />
                  <Bar key="cost-bar-traditional" dataKey="traditional" fill="#f97316" name="Status Quo" radius={[4, 4, 0, 0]} />
                  <Bar key="cost-bar-ours" dataKey="ours" fill="#10b981" name="Our Solution" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#10b981', fontSize: 10 }} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Skill Scaling */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <p className="text-white text-sm font-semibold">Total Training Time as Skills Scale (mins)</p>
              </div>
              <p className="text-slate-400 text-xs mb-4">At 100 skills: traditional requires 10,000 mins vs our 1,100 mins—a 9x improvement</p>
              <ResponsiveContainer width="100%" height={330}>
                <AreaChart data={skillScalingData} margin={{ top: 15, right: 10, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="gradOrange" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0.2}/>
                    </linearGradient>
                    <linearGradient id="gradEmerald" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid key="scaling-grid" strokeDasharray="3 3" stroke="#475569" />
                  <XAxis
                    key="scaling-xaxis"
                    dataKey="skills"
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                  />
                  <YAxis
                    key="scaling-yaxis"
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                    label={{ value: 'Time (mins)', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 11 }}
                  />
                  <Tooltip
                    key="scaling-tooltip"
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Legend key="scaling-legend" wrapperStyle={{ fontSize: '9px' }} iconSize={8} layout="horizontal" align="center" verticalAlign="bottom" iconType="rect" />
                  <Area key="scaling-area-traditional" type="monotone" dataKey="traditional" stroke="#f97316" fillOpacity={1} fill="url(#gradOrange)" name="Status Quo" strokeWidth={3} />
                  <Area key="scaling-area-ours" type="monotone" dataKey="ours" stroke="#10b981" fillOpacity={1} fill="url(#gradEmerald)" name="Our Solution" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Comparison Charts Row */}
        <div className="mb-12 border-t border-slate-700 pt-12">
          <p className="text-slate-500 text-xs tracking-widest mb-2">PERFORMANCE ANALYSIS</p>
          <p className="text-slate-400 text-sm mb-6">Comprehensive comparison across all major robot learning paradigms</p>
          <div className="grid grid-cols-2 gap-6">
            {/* Approach Comparison */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <BarChart3 className="w-5 h-5 text-emerald-400" />
                <p className="text-white text-sm font-semibold">Multi-Dimensional Approach Comparison</p>
              </div>
              <p className="text-slate-400 text-xs mb-4">Our solution achieves 90% transfer and 95% composability vs 10-60% for alternatives</p>
              <ResponsiveContainer width="100%" height={340}>
                <BarChart data={approachComparisonData} layout="vertical" margin={{ top: 5, right: 10, left: 10, bottom: 40 }}>
                  <CartesianGrid key="approach-grid" strokeDasharray="3 3" stroke="#475569" />
                  <XAxis
                    key="approach-xaxis"
                    type="number"
                    domain={[0, 100]}
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                  />
                  <YAxis
                    key="approach-yaxis"
                    dataKey="approach"
                    type="category"
                    width={150}
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                  />
                  <Tooltip
                    key="approach-tooltip"
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Legend key="approach-legend" wrapperStyle={{ fontSize: '8px' }} iconSize={6} layout="vertical" align="right" verticalAlign="middle" iconType="rect" />
                  <Bar key="approach-bar-data" dataKey="data" fill="#f97316" name="Data Need (inv)" stackId="a" />
                  <Bar key="approach-bar-transfer" dataKey="transfer" fill="#3b82f6" name="Transfer %" stackId="a" />
                  <Bar key="approach-bar-compose" dataKey="compose" fill="#10b981" name="Compose %" stackId="a" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Memory Retention */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <Database className="w-5 h-5 text-emerald-400" />
                <p className="text-white text-sm font-semibold">Memory Retention vs Skill Count</p>
              </div>
              <p className="text-slate-400 text-xs mb-4">Hierarchical memory prevents catastrophic forgetting—maintaining 88% retention at 1,000 skills</p>
              <ResponsiveContainer width="100%" height={330}>
                <LineChart data={memoryRetentionData} margin={{ top: 15, right: 10, left: 20, bottom: 5 }}>
                  <CartesianGrid key="memory-grid" strokeDasharray="3 3" stroke="#475569" />
                  <XAxis
                    key="memory-xaxis"
                    dataKey="skills"
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                  />
                  <YAxis
                    key="memory-yaxis"
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                    label={{ value: 'Retention (%)', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 11 }}
                    domain={[0, 100]}
                  />
                  <Tooltip
                    key="memory-tooltip"
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Legend key="memory-legend" wrapperStyle={{ fontSize: '9px' }} iconSize={8} layout="horizontal" align="center" verticalAlign="bottom" iconType="rect" />
                  <Line key="memory-line-traditional" type="monotone" dataKey="traditional" stroke="#f97316" strokeWidth={3} name="Status Quo" dot={{ r: 5, fill: '#f97316' }} activeDot={{ r: 7 }} />
                  <Line key="memory-line-compositional" type="monotone" dataKey="compositional" stroke="#10b981" strokeWidth={3} name="Compositional" dot={{ r: 5, fill: '#10b981' }} activeDot={{ r: 7 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Learning Curve & Time Breakdown */}
        <div className="mb-12 border-t border-slate-700 pt-12">
          <p className="text-slate-500 text-xs tracking-widest mb-2">TRAINING EFFICIENCY</p>
          <p className="text-slate-400 text-sm mb-6">Compositional learning achieves 95% success rate in 500 episodes vs 50% for traditional methods</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                <p className="text-white text-sm font-semibold">Learning Curve Over Episodes</p>
              </div>
              <p className="text-slate-400 text-xs mb-4">Our approach reaches 78% success by episode 300—higher than traditional methods ever achieve</p>
              <ResponsiveContainer width="100%" height={340}>
                <AreaChart data={learningCurveData} margin={{ top: 15, right: 10, left: 20, bottom: 5 }}>
                  <defs>
                    <linearGradient id="colorTraditional" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#f97316" stopOpacity={0.2}/>
                    </linearGradient>
                    <linearGradient id="colorCompositional" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.2}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid key="learning-grid" strokeDasharray="3 3" stroke="#475569" />
                  <XAxis
                    key="learning-xaxis"
                    dataKey="episodes"
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                  />
                  <YAxis
                    key="learning-yaxis"
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                    label={{ value: 'Success (%)', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 11 }}
                    domain={[0, 100]}
                  />
                  <Tooltip
                    key="learning-tooltip"
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                    labelStyle={{ color: '#e2e8f0' }}
                    itemStyle={{ color: '#e2e8f0' }}
                  />
                  <Legend key="learning-legend" wrapperStyle={{ color: '#94a3b8', fontSize: '9px' }} iconSize={8} layout="horizontal" align="center" verticalAlign="bottom" iconType="rect" />
                  <Area key="learning-area-traditional" type="monotone" dataKey="traditional" stroke="#f97316" fillOpacity={1} fill="url(#colorTraditional)" name="Status Quo" strokeWidth={3} />
                  <Area key="learning-area-compositional" type="monotone" dataKey="compositional" stroke="#10b981" fillOpacity={1} fill="url(#colorCompositional)" name="Compositional" strokeWidth={3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-5 h-5 text-emerald-400" />
                <p className="text-white text-sm font-semibold">Time Breakdown by Phase (minutes)</p>
              </div>
              <p className="text-slate-400 text-xs mb-4">Total pipeline: 32 minutes vs 720 minutes—a 22.5x speedup end-to-end</p>
              <ResponsiveContainer width="100%" height={360}>
                <BarChart data={timeBreakdownData} margin={{ top: 20, right: 10, left: 20, bottom: 35 }}>
                  <CartesianGrid key="time-grid" strokeDasharray="3 3" stroke="#475569" />
                  <XAxis
                    key="time-xaxis"
                    dataKey="phase"
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                    angle={-35}
                    textAnchor="end"
                    height={90}
                  />
                  <YAxis
                    key="time-yaxis"
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                    label={{ value: 'Time (mins)', angle: -90, position: 'insideLeft', fill: '#94a3b8', fontSize: 11 }}
                  />
                  <Tooltip
                    key="time-tooltip"
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Legend key="time-legend" wrapperStyle={{ fontSize: '9px' }} iconSize={8} layout="horizontal" align="center" verticalAlign="bottom" iconType="rect" />
                  <Bar key="time-bar-traditional" dataKey="traditional" fill="#f97316" name="Status Quo" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#f97316', fontSize: 9 }} />
                  <Bar key="time-bar-ours" dataKey="ours" fill="#10b981" name="Our Solution" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#10b981', fontSize: 9 }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* System Architecture */}
        <div className="mb-12 border-t border-slate-700 pt-12">
          <p className="text-slate-500 text-xs tracking-widest mb-2">9-COMPONENT SYSTEM</p>
          <p className="text-slate-400 text-sm mb-6">
            Each component serves a specific role in the perception-memory-prediction-planning-execution pipeline.
            The 16-dim bottleneck in the outcome predictor forces physics-like structure to emerge.
          </p>

          {/* Pipeline Flow */}
          <div className="mb-8 flex items-center justify-between bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <div className="flex flex-col items-center">
              <div className="bg-emerald-400/10 border-2 border-emerald-400 rounded-lg p-4 shadow-lg shadow-emerald-500/20">
                <Eye className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-white text-sm mt-2 font-semibold">Perceive</p>
            </div>
            <ArrowRight className="w-6 h-6 text-emerald-500/50" strokeWidth={3} />
            <div className="flex flex-col items-center">
              <div className="bg-emerald-400/10 border-2 border-emerald-400 rounded-lg p-4 shadow-lg shadow-emerald-500/20">
                <Database className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-white text-sm mt-2 font-semibold">Remember</p>
            </div>
            <ArrowRight className="w-6 h-6 text-emerald-500/50" strokeWidth={3} />
            <div className="flex flex-col items-center">
              <div className="bg-emerald-400/10 border-2 border-emerald-400 rounded-lg p-4 shadow-lg shadow-emerald-500/20">
                <Cpu className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-white text-sm mt-2 font-semibold">Predict</p>
            </div>
            <ArrowRight className="w-6 h-6 text-emerald-500/50" strokeWidth={3} />
            <div className="flex flex-col items-center">
              <div className="bg-emerald-400/10 border-2 border-emerald-400 rounded-lg p-4 shadow-lg shadow-emerald-500/20">
                <GitBranch className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-white text-sm mt-2 font-semibold">Plan</p>
            </div>
            <ArrowRight className="w-6 h-6 text-emerald-500/50" strokeWidth={3} />
            <div className="flex flex-col items-center">
              <div className="bg-emerald-400/10 border-2 border-emerald-400 rounded-lg p-4 shadow-lg shadow-emerald-500/20">
                <Activity className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-white text-sm mt-2 font-semibold">Execute</p>
            </div>
          </div>

          {/* Components Grid */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-slate-800/30 border border-emerald-500/30 rounded-lg p-4 hover:border-emerald-500/60 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <Network className="w-4 h-4 text-emerald-400" />
                <p className="text-white text-sm font-semibold">Multi-Env Curriculum</p>
              </div>
              <p className="text-slate-400 text-xs">Trains across diverse tabletop environments to learn invariants, not scene-specific patterns</p>
            </div>
            <div className="bg-slate-800/30 border border-emerald-500/30 rounded-lg p-4 hover:border-emerald-500/60 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-4 h-4 text-emerald-400" />
                <p className="text-white text-sm font-semibold">Perception Encoder</p>
              </div>
              <p className="text-slate-400 text-xs">Produces structured scene representation at pixel, object, and relationship levels</p>
            </div>
            <div className="bg-slate-800/30 border border-emerald-500/30 rounded-lg p-4 hover:border-emerald-500/60 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-4 h-4 text-emerald-400" />
                <p className="text-white text-sm font-semibold">Memory Bank</p>
              </div>
              <p className="text-slate-400 text-xs">Hierarchical storage with category router—prevents catastrophic forgetting of old skills</p>
            </div>
            <div className="bg-slate-800/30 border border-emerald-500/30 rounded-lg p-4 hover:border-emerald-500/60 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <p className="text-white text-sm font-semibold">Outcome Predictor</p>
              </div>
              <p className="text-slate-400 text-xs">16-dim bottleneck forces learning of physics structure (contact, momentum, constraints)</p>
            </div>
            <div className="bg-slate-800/30 border border-emerald-500/30 rounded-lg p-4 hover:border-emerald-500/60 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <p className="text-white text-sm font-semibold">Active Learning</p>
              </div>
              <p className="text-slate-400 text-xs">Selects high-value experiences during training based on predicted learning signal</p>
            </div>
            <div className="bg-slate-800/30 border border-emerald-500/30 rounded-lg p-4 hover:border-emerald-500/60 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-emerald-400" />
                <p className="text-white text-sm font-semibold">Skill Discovery</p>
              </div>
              <p className="text-slate-400 text-xs">Segments trajectories at stability points and clusters into reusable primitive skills</p>
            </div>
            <div className="bg-slate-800/30 border border-emerald-500/30 rounded-lg p-4 hover:border-emerald-500/60 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <p className="text-white text-sm font-semibold">Goal Encoder</p>
              </div>
              <p className="text-slate-400 text-xs">Projects goals from any modality (language, image, demo) into unified embedding space</p>
            </div>
            <div className="bg-slate-800/30 border border-emerald-500/30 rounded-lg p-4 hover:border-emerald-500/60 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <GitBranch className="w-4 h-4 text-emerald-400" />
                <p className="text-white text-sm font-semibold">Goal Graph Builder</p>
              </div>
              <p className="text-slate-400 text-xs">Decomposes high-level goals into executable sub-goal graphs over skill library</p>
            </div>
            <div className="bg-slate-800/30 border border-emerald-500/30 rounded-lg p-4 hover:border-emerald-500/60 transition-all">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                <p className="text-white text-sm font-semibold">Step Predictor</p>
              </div>
              <p className="text-slate-400 text-xs">Action component with confidence scoring—invokes skills or queries outcome predictor</p>
            </div>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="mb-12 border-t border-slate-700 pt-12">
          <p className="text-slate-500 text-xs tracking-widest mb-2">VALIDATION METRICS</p>
          <p className="text-slate-400 text-sm mb-6">Quantitative evidence across component impact, skill composition, generalization, and primitive transfer</p>
          <div className="grid grid-cols-4 gap-6">
            {/* Component Impact */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <p className="text-white text-sm font-semibold mb-2">Component Impact</p>
              <p className="text-slate-400 text-xs mb-3">All 9 components score 82-95% impact</p>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={componentImpactData} layout="vertical" margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
                  <CartesianGrid key="impact-grid" strokeDasharray="3 3" stroke="#475569" />
                  <XAxis
                    key="impact-xaxis"
                    type="number"
                    domain={[0, 100]}
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 10 }}
                  />
                  <YAxis
                    key="impact-yaxis"
                    dataKey="component"
                    type="category"
                    width={75}
                    stroke="#94a3b8"
                    tick={{ fill: '#94a3b8', fontSize: 9 }}
                  />
                  <Tooltip
                    key="impact-tooltip"
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Bar key="impact-bar" dataKey="impact" fill="#10b981" radius={[0, 4, 4, 0]} label={{ position: 'right', fill: '#10b981', fontSize: 10 }} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Skill Composition */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <p className="text-white text-sm font-semibold mb-2">Skill Composition</p>
              <p className="text-slate-400 text-xs mb-3">40% of skills emerge from composition</p>
              <ResponsiveContainer width="100%" height={190}>
                <PieChart margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                  <Pie
                    key="composition-pie"
                    data={skillCompositionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={68}
                    paddingAngle={3}
                    dataKey="value"
                    label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
                    labelLine={{ stroke: '#94a3b8', strokeWidth: 1 }}
                  >
                    {skillCompositionData.map((entry, index) => (
                      <Cell key={`skill-composition-${entry.name}-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    key="composition-tooltip"
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex gap-3 justify-center text-xs mt-2">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-emerald-500 rounded"></div>
                  <span className="text-slate-400">Learned</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-slate-400">Composed</span>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <p className="text-white text-sm font-semibold mb-2">Generalization</p>
              <p className="text-slate-400 text-xs mb-3">Consistent 76-88% across primitives</p>
              <ResponsiveContainer width="100%" height={190}>
                <RadarChart data={validationData} margin={{ top: 10, right: 20, left: 20, bottom: 10 }}>
                  <PolarGrid key="validation-grid" stroke="#475569" strokeWidth={1.5} />
                  <PolarAngleAxis key="validation-angleaxis" dataKey="metric" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                  <PolarRadiusAxis key="validation-radiusaxis" angle={90} domain={[0, 100]} tick={{ fill: '#94a3b8', fontSize: 9 }} stroke="#475569" />
                  <Radar key="validation-radar" name="Performance" dataKey="value" stroke="#10b981" fill="#10b981" fillOpacity={0.6} strokeWidth={3} />
                  <Tooltip
                    key="validation-tooltip"
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <p className="text-xs text-center text-slate-400 mt-2">Zero-shot: 76%</p>
            </div>

            {/* Primitive Performance */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
              <p className="text-white text-sm font-semibold mb-2">Primitive Transfer</p>
              <p className="text-slate-400 text-xs mb-3">Tap achieves 76% despite zero training</p>
              <ResponsiveContainer width="100%" height={270}>
                <BarChart data={primitivePerformanceData} margin={{ top: 15, right: 10, left: 10, bottom: 30 }}>
                  <CartesianGrid key="primitive-grid" strokeDasharray="3 3" stroke="#475569" />
                  <XAxis key="primitive-xaxis" dataKey="primitive" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 9 }} angle={-30} textAnchor="end" height={60} />
                  <YAxis key="primitive-yaxis" stroke="#94a3b8" tick={{ fill: '#94a3b8', fontSize: 10 }} domain={[0, 100]} />
                  <Tooltip
                    key="primitive-tooltip"
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                    labelStyle={{ color: '#e2e8f0' }}
                  />
                  <Legend key="primitive-legend" wrapperStyle={{ fontSize: '9px' }} iconSize={8} layout="horizontal" align="center" verticalAlign="bottom" iconType="rect" />
                  <Bar key="primitive-bar-seen" dataKey="seen" fill="#3b82f6" name="Seen" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#3b82f6', fontSize: 9 }} />
                  <Bar key="primitive-bar-unseen" dataKey="unseen" fill="#10b981" name="Unseen" radius={[4, 4, 0, 0]} label={{ position: 'top', fill: '#10b981', fontSize: 9 }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Validation */}
        <div className="border-t border-slate-700 pt-12">
          <p className="text-slate-500 text-xs tracking-widest mb-2">FOUNDATION VALIDATION EXPERIMENT</p>
          <p className="text-slate-400 text-sm mb-6">
            The held-out primitive test validates that the 16-dim bottleneck learns generalizable physics structure.
            Train on push, pull, grasp; test on tap. MSE must be under 50% of random baseline on both nearest-neighbor and linear probe.
          </p>
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-800/40 backdrop-blur-sm rounded-lg p-8 border-2 border-emerald-500/30 shadow-lg shadow-emerald-500/10">
            <div className="grid grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-emerald-500/10 rounded-lg p-4 mb-3">
                  <p className="text-emerald-400 text-sm mb-2 font-semibold">Training Set</p>
                  <p className="text-white text-4xl font-bold mb-1">3</p>
                  <p className="text-slate-400 text-sm">primitives</p>
                </div>
                <p className="text-slate-500 text-xs">5,000 transitions total</p>
                <p className="text-slate-400 text-xs mt-1">Push, pull, grasp</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-500/10 rounded-lg p-4 mb-3">
                  <p className="text-emerald-400 text-sm mb-2 font-semibold">Test Set</p>
                  <p className="text-white text-4xl font-bold mb-1">1</p>
                  <p className="text-slate-400 text-sm">new primitive</p>
                </div>
                <p className="text-slate-500 text-xs">500 transitions</p>
                <p className="text-slate-400 text-xs mt-1">Tap (never seen)</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-500/10 rounded-lg p-4 mb-3">
                  <p className="text-emerald-400 text-sm mb-2 font-semibold">Success Goal</p>
                  <p className="text-white text-4xl font-bold mb-1">&lt;50%</p>
                  <p className="text-slate-400 text-sm">MSE vs baseline</p>
                </div>
                <p className="text-slate-500 text-xs">On both tests</p>
                <p className="text-slate-400 text-xs mt-1">NN + linear probe</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-500/10 rounded-lg p-4 mb-3">
                  <p className="text-emerald-400 text-sm mb-2 font-semibold">Core Innovation</p>
                  <p className="text-white text-4xl font-bold mb-1">16D</p>
                  <p className="text-slate-400 text-sm">bottleneck</p>
                </div>
                <p className="text-slate-500 text-xs">Physics structure</p>
                <p className="text-slate-400 text-xs mt-1">Contact, momentum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
