import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  Lock, 
  Link2, 
  CheckCircle, 
  AlertTriangle, 
  Cpu, 
  Layers, 
  RefreshCw,
  ExternalLink,
  Fingerprint
} from 'lucide-react';
import { CUSTODY_LEDGER } from '../data/mockData';

export default function CustodyLedger({ onTriggerWorkerNotice }) {
  const [isTampered, setIsTampered] = useState(false);

  return (
    <div className="space-y-6">
      {/* Top Banner explaining Innovation #03 */}
      <div className="glass-panel-glow p-5 rounded-xl border border-cyan-500/30">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-cyan-500/20 text-cyan-400 rounded-md border border-cyan-500/30">
                <ShieldCheck className="w-4 h-4" />
              </span>
              <h2 className="text-base font-bold text-white tracking-wide">
                Tamper-Evident SHA-256 Custody Chain Ledger
              </h2>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Innovation #03
              </span>
            </div>
            <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
              Every forensic step is cryptographically sealed to the preceding block using SHA-256: <code className="text-cyan-300 font-mono">hₙ = SHA256(hₙ₋₁ ‖ action ‖ officer ‖ UTC)</code>. Any alteration in court or transit visibly breaks the entire subsequent cryptographic chain.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsTampered(!isTampered)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono font-semibold transition border ${
                isTampered 
                  ? 'bg-emerald-600 hover:bg-emerald-500 text-white border-emerald-400' 
                  : 'bg-rose-950/60 hover:bg-rose-900/60 text-rose-300 border-rose-500/40'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>{isTampered ? 'Restore Valid Chain' : 'Simulate Evidence Tamper'}</span>
            </button>

            <button
              onClick={() => onTriggerWorkerNotice({
                name: "Hyperledger Fabric Gateway Worker",
                component: "Custody Chain Distributed Ledger Broker",
                progress: 55,
                customMessage: "Hyperledger Fabric inter-agency anchor worker is currently under development. Local cryptographic SHA-256 chain is fully operational."
              })}
              className="flex items-center gap-1.5 px-3 py-2 bg-navy-850 hover:bg-slate-800 text-cyan-400 border border-cyan-500/40 rounded-lg text-xs font-mono transition"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Anchor to Fabric</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tamper Alert Warning if active */}
      {isTampered && (
        <div className="p-4 bg-rose-950/40 border border-rose-500/50 rounded-xl text-xs text-rose-200 flex items-start gap-3 animate-fadeIn">
          <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5 animate-bounce" />
          <div className="space-y-1">
            <h4 className="font-bold text-rose-300 font-mono text-sm">
              CRYPTOGRAPHIC CHAIN INTEGRITY BROKEN AT BLOCK #2!
            </h4>
            <p className="text-slate-300 leading-relaxed font-sans">
              Simulation: 1 byte in Block #2 was modified by an unauthorized party. As guaranteed by SHA-256 cascade properties, the hash mismatch was detected instantly. In court, this provides mathematical certainty of evidence tampering.
            </p>
          </div>
        </div>
      )}

      {/* Chain Blocks List */}
      <div className="space-y-4">
        {CUSTODY_LEDGER.map((block, idx) => {
          const isBroken = isTampered && idx >= 2;

          return (
            <div 
              key={block.index}
              className={`p-5 rounded-xl border transition-all ${
                isBroken 
                  ? 'bg-rose-950/20 border-rose-500/60 shadow-lg shadow-rose-950/30' 
                  : 'bg-navy-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Block Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                    isBroken 
                      ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40' 
                      : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                  }`}>
                    #{block.index}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">
                      {block.action}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400">
                      Operator: <span className="text-slate-200 font-medium">{block.officer}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="text-slate-400">{block.timestamp}</span>
                  {isBroken ? (
                    <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/40 font-bold flex items-center gap-1">
                      <ShieldAlert className="w-3.5 h-3.5" /> HASH MISMATCH
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> VERIFIED SEAL
                    </span>
                  )}
                </div>
              </div>

              {/* Hashes Representation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
                <div className="p-2.5 bg-navy-950/70 rounded-lg border border-slate-800/80">
                  <div className="text-[10px] uppercase text-slate-500 mb-1 flex items-center gap-1">
                    <Link2 className="w-3 h-3 text-slate-400" />
                    <span>Previous Block Hash (hₙ₋₁)</span>
                  </div>
                  <div className="text-slate-300 truncate text-[11px]">
                    {block.prevHash}
                  </div>
                </div>

                <div className={`p-2.5 rounded-lg border ${
                  isBroken 
                    ? 'bg-rose-950/40 border-rose-500/40 text-rose-300' 
                    : 'bg-navy-950/70 border-slate-800/80 text-cyan-300'
                }`}>
                  <div className="text-[10px] uppercase text-slate-500 mb-1 flex items-center gap-1">
                    <Fingerprint className="w-3 h-3 text-cyan-400" />
                    <span>Sealed Current Hash (hₙ)</span>
                  </div>
                  <div className="truncate text-[11px] font-semibold">
                    {isBroken ? 'BAD_HASH_' + block.hash.slice(9) : block.hash}
                  </div>
                </div>
              </div>

              {/* Block Details */}
              <div className="mt-3 text-xs text-slate-300 leading-relaxed font-sans flex items-start gap-2">
                <span className="text-slate-500 font-mono text-[11px] shrink-0 mt-0.5">Details:</span>
                <span>{block.details}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
