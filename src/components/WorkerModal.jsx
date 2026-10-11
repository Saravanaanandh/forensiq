import React from 'react';
import { AlertTriangle, Hammer, Cog, Cpu, X, ExternalLink, ShieldCheck } from 'lucide-react';

export default function WorkerModal({ isOpen, onClose, workerInfo }) {
  if (!isOpen || !workerInfo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-navy-900 border border-amber-500/40 rounded-xl shadow-2xl overflow-hidden">
        {/* Top Warning Strip */}
        <div className="bg-gradient-to-r from-amber-600/30 via-amber-500/20 to-transparent p-4 border-b border-amber-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg border border-amber-500/30 animate-pulse">
              <Hammer className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                Worker Service Notice
              </span>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                Under Development
              </h3>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <div className="p-3.5 bg-navy-850 rounded-lg border border-slate-700/60 font-mono text-xs">
            <div className="flex justify-between text-slate-400 mb-1">
              <span>Target Engine:</span>
              <span className="text-cyan-400 font-semibold">{workerInfo.name || "Backend Processing Worker"}</span>
            </div>
            <div className="flex justify-between text-slate-400 mb-1">
              <span>Underlying Stack:</span>
              <span className="text-slate-200">{workerInfo.component || "C++ / Python Daemon"}</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Target Milestone:</span>
              <span className="text-amber-400 font-semibold">{workerInfo.targetCompletion || "SIH 2026 Grand Finale"}</span>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {workerInfo.customMessage || (
              <>
                The background worker service for <strong>{workerInfo.name}</strong> is currently under active development by Team Hexatex for SIH 2026.
              </>
            )}
          </p>

          <div className="p-3 bg-amber-950/20 border border-amber-500/20 rounded-lg text-xs text-amber-300/90 leading-relaxed flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <span>
              This interactive dashboard is currently operating in <strong>UI Demonstration Mode</strong> with simulated offline telemetry and pre-indexed case samples.
            </span>
          </div>

          {/* Development Progress */}
          <div>
            <div className="flex justify-between text-xs font-mono text-slate-400 mb-1.5">
              <span>Worker Engine Implementation:</span>
              <span className="text-cyan-400">{workerInfo.progress || 65}%</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-700">
              <div 
                className="bg-gradient-to-r from-amber-500 to-cyan-400 h-full rounded-full transition-all duration-500" 
                style={{ width: `${workerInfo.progress || 65}%` }}
              />
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-navy-950 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-cyan-500" /> SIH PS-26150 Hexatex
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold rounded-lg shadow-md transition font-mono"
          >
            Acknowledge & Continue Preview
          </button>
        </div>
      </div>
    </div>
  );
}
