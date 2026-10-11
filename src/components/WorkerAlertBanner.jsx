import React, { useState } from 'react';
import { AlertCircle, Hammer, ChevronDown, ChevronUp, Cpu, Sparkles, Server } from 'lucide-react';
import { WORKER_SERVICES } from '../data/mockData';

export default function WorkerAlertBanner({ onOpenWorkerDetails }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gradient-to-r from-amber-950/40 via-navy-900 to-amber-950/30 border-b border-amber-500/30 px-4 py-2.5 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-mono font-medium border border-amber-500/30 text-[11px] animate-pulse">
            <Hammer className="w-3.5 h-3.5" />
            WORKERS IN DEVELOPMENT
          </span>
          <span className="text-slate-300 font-medium">
            Frontend UI Demonstration: Background forensic worker daemons (Kaitai Carving, Write-Blocker Daemon, YOLOv8 ONNX Engine) are currently under development.
          </span>
        </div>

        <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto justify-end">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-slate-400 hover:text-amber-300 transition font-mono text-[11px] px-2 py-1 rounded bg-slate-800/60 hover:bg-slate-800"
          >
            <span>{isExpanded ? 'Hide Worker Status' : 'Worker Engine Status (4)'}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Expanded Worker Details Drawer */}
      {isExpanded && (
        <div className="max-w-7xl mx-auto mt-3 pt-3 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 animate-fadeIn">
          {WORKER_SERVICES.map((worker) => (
            <div 
              key={worker.id}
              onClick={() => onOpenWorkerDetails(worker)}
              className="p-2.5 rounded-lg bg-navy-850/90 border border-slate-700/60 hover:border-amber-500/50 cursor-pointer transition hover:bg-navy-800 group"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] text-slate-400 group-hover:text-amber-300 flex items-center gap-1">
                  <Server className="w-3 h-3 text-cyan-400" />
                  {worker.targetCompletion}
                </span>
                <span className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded ${
                  worker.status === 'development' 
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                    : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                }`}>
                  {worker.status === 'development' ? 'In Dev' : 'Ready UI'}
                </span>
              </div>
              <h4 className="font-semibold text-slate-200 text-xs truncate group-hover:text-white">
                {worker.name}
              </h4>
              <p className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                {worker.component}
              </p>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                  <div 
                    className="bg-amber-400 h-full rounded-full" 
                    style={{ width: `${worker.progress}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-slate-400">{worker.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
