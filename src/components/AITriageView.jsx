import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  User, 
  Car, 
  Eye, 
  Search, 
  Filter, 
  CheckCircle, 
  AlertCircle,
  Play,
  Activity,
  Layers
} from 'lucide-react';

export default function AITriageView({ onTriggerWorkerNotice }) {
  const [filterType, setFilterType] = useState('all');

  const detections = [
    {
      id: "DET_01",
      type: "person",
      channel: "CH2 (Cash Vault)",
      time: "21:42:05 UTC",
      confidence: "94.8%",
      box: "[140, 220, 480, 560]",
      description: "Person detected near electronic lock console (Unusual after-hours activity)",
      anomalyScore: "HIGH"
    },
    {
      id: "DET_02",
      type: "vehicle",
      channel: "CH1 (Front Gate)",
      time: "21:14:02 UTC",
      confidence: "97.1%",
      box: "[320, 110, 780, 490]",
      description: "White SUV (License match DL-08-AB-4921) entered without security pass",
      anomalyScore: "MEDIUM"
    },
    {
      id: "DET_03",
      type: "motion",
      channel: "CH7 (North Boundary)",
      time: "22:20:11 UTC",
      confidence: "88.4%",
      box: "[50, 400, 310, 700]",
      description: "Rapid motion detected over perimeter fence boundary",
      anomalyScore: "CRITICAL"
    },
    {
      id: "DET_04",
      type: "person",
      channel: "CH8 (Fire Stairwell B)",
      time: "22:18:50 UTC",
      confidence: "91.3%",
      box: "[200, 150, 600, 520]",
      description: "Subject fleeing via fire stairwell carrying canvas duffel bag",
      anomalyScore: "HIGH"
    },
    {
      id: "DET_05",
      type: "vehicle",
      channel: "CH1 (Front Gate)",
      time: "22:45:10 UTC",
      confidence: "96.5%",
      box: "[280, 140, 810, 530]",
      description: "Vehicle egress at high speed (45 km/h in restricted gate bay)",
      anomalyScore: "HIGH"
    }
  ];

  const filtered = filterType === 'all' 
    ? detections 
    : detections.filter(d => d.type === filterType);

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="glass-panel-glow p-5 rounded-xl border border-cyan-500/30">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-cyan-500/20 text-cyan-400 rounded-md border border-cyan-500/30">
                <Sparkles className="w-4 h-4" />
              </span>
              <h2 className="text-base font-bold text-white tracking-wide">
                Offline AI Surveillance Intelligence & Triage
              </h2>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                YOLOv8 + ONNX Runtime (CPU)
              </span>
            </div>
            <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
              Instead of manually reviewing hundreds of hours of raw footage, ForenSIQ deploys <strong className="text-cyan-300">100% offline, air-gapped CPU models</strong> using ONNX Runtime. Automatically indexes motion spikes, scene changes, person encounters, and vehicle traffic without leaking data to cloud APIs.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onTriggerWorkerNotice({
                name: "YOLOv8 ONNX Triage Worker",
                component: "ONNX Runtime (CPU Air-Gapped Engine)",
                progress: 60,
                customMessage: "YOLOv8 offline inferencing worker is currently under development. Showing pre-indexed model classification results from case FIR-0142/2026."
              })}
              className="flex items-center gap-1.5 px-3 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg text-xs font-mono font-semibold transition shadow-md shadow-cyan-600/20"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Run Offline AI Worker</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filter and Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Filter Bar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-navy-900 border border-slate-800 rounded-xl p-4 space-y-3 font-mono text-xs">
            <span className="text-slate-400 uppercase tracking-wider font-semibold block">
              Filter by Intelligence Category
            </span>

            <div className="space-y-1.5">
              {[
                { id: 'all', label: 'All Detections', count: 5 },
                { id: 'person', label: 'Persons & Intruders', count: 2, icon: User },
                { id: 'vehicle', label: 'Vehicles & Plates', count: 2, icon: Car },
                { id: 'motion', label: 'Motion Anomalies', count: 1, icon: Activity }
              ].map(btn => (
                <button
                  key={btn.id}
                  onClick={() => setFilterType(btn.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition ${
                    filterType === btn.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <span>{btn.label}</span>
                  <span className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">
                    {btn.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Model Status Card */}
          <div className="bg-navy-900 border border-slate-800 rounded-xl p-4 font-mono text-xs space-y-2">
            <div className="text-white font-bold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>Offline Inference Environment</span>
            </div>
            <div className="text-slate-400 text-[11px] space-y-1">
              <div className="flex justify-between">
                <span>Network Sandbox:</span>
                <span className="text-emerald-400">Air-Gapped (0 Egress)</span>
              </div>
              <div className="flex justify-between">
                <span>Inference Device:</span>
                <span className="text-slate-200">Standard CPU (AVX2)</span>
              </div>
              <div className="flex justify-between">
                <span>Model Weights:</span>
                <span className="text-cyan-300">yolov8n-surveillance.onnx</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Detections Feed */}
        <div className="lg:col-span-8 space-y-3">
          <div className="flex items-center justify-between font-mono text-xs text-slate-400">
            <span className="uppercase tracking-wider font-semibold">Triage Event Stream</span>
            <span className="text-cyan-400">{filtered.length} Indexed Anomalies</span>
          </div>

          {filtered.map(item => (
            <div
              key={item.id}
              className="bg-navy-900 border border-slate-800 hover:border-slate-700 rounded-xl p-4 space-y-2.5 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className={`p-1.5 rounded-lg border ${
                    item.type === 'person' 
                      ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                      : item.type === 'vehicle'
                      ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                      : 'bg-rose-500/20 text-rose-400 border-rose-500/30'
                  }`}>
                    {item.type === 'person' && <User className="w-4 h-4" />}
                    {item.type === 'vehicle' && <Car className="w-4 h-4" />}
                    {item.type === 'motion' && <Activity className="w-4 h-4" />}
                  </span>

                  <div>
                    <h4 className="text-sm font-bold text-white font-mono">{item.channel}</h4>
                    <span className="text-[11px] font-mono text-slate-400">{item.time}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs">
                  <span className="px-2 py-0.5 rounded bg-navy-950 border border-slate-700 text-slate-300">
                    Confidence: <strong className="text-cyan-400">{item.confidence}</strong>
                  </span>
                  <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                    item.anomalyScore === 'CRITICAL'
                      ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                  }`}>
                    {item.anomalyScore} PRIORITY
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans bg-navy-950/60 p-2.5 rounded-lg border border-slate-800/80">
                {item.description}
              </p>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Bounding Box: {item.box}</span>
                <span className="text-cyan-400">Motion Heatmap Indexed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
