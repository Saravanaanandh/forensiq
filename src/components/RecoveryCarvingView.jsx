import React, { useState } from 'react';
import { 
  Cpu, 
  Layers, 
  Play, 
  Scissors, 
  CheckCircle2, 
  Database, 
  AlertCircle, 
  Clock, 
  HardDrive,
  FileCheck,
  TrendingUp,
  RefreshCw
} from 'lucide-react';

export default function RecoveryCarvingView({ onTriggerWorkerNotice }) {
  const [activeCarvedClip, setActiveCarvedClip] = useState(0);

  const carvedClips = [
    {
      id: "FRAG_CH02_0014",
      channel: "CH2 - Cash Vault",
      time: "21:38:19 - 21:44:02 UTC",
      duration: "05m 43s",
      fragmentsCount: 42,
      recoveryConfidence: "96.4%",
      codec: "H.264 High Profile",
      status: "Re-sequenced by Embedded PTS",
      previewNote: "Tampering with vault door lock mechanism; suspect wearing black hoodie"
    },
    {
      id: "FRAG_CH06_0032",
      channel: "CH6 - Rear Loading Bay",
      time: "22:01:10 - 22:05:22 UTC",
      duration: "04m 12s",
      fragmentsCount: 32,
      recoveryConfidence: "89.1%",
      codec: "H.265 Main Profile",
      status: "Header-Footer Validated",
      previewNote: "Loading of unmarked crates into van rear compartment"
    },
    {
      id: "FRAG_CH02_0015",
      channel: "CH2 - Cash Vault",
      time: "22:14:40 - 22:18:15 UTC",
      duration: "03m 35s",
      fragmentsCount: 26,
      recoveryConfidence: "92.8%",
      codec: "H.264 High Profile",
      status: "Re-sequenced by Embedded PTS",
      previewNote: "Subject exit via emergency stairwell corridor"
    }
  ];

  // Cluster visualization: 60 blocks showing allocated, fragmented, and carved
  const clusterBlocks = Array.from({ length: 64 }, (_, i) => {
    if ([8, 9, 14, 21, 22, 23, 34, 45, 46, 52, 53].includes(i)) return 'carved';
    if ([5, 12, 18, 30, 40].includes(i)) return 'corrupted';
    if (i < 38) return 'allocated';
    return 'unallocated';
  });

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="glass-panel-glow p-5 rounded-xl border border-cyan-500/30">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-amber-500/20 text-amber-400 rounded-md border border-amber-500/30">
                <Scissors className="w-4 h-4" />
              </span>
              <h2 className="text-base font-bold text-white tracking-wide">
                Frame-Level Deep Video Carving & NAL-Unit Reassembly
              </h2>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Innovation #02
              </span>
            </div>
            <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
              When surveillance disks are overwritten or formatted, file allocations are wiped but video stream fragments persist. ForenSIQ scans raw disk sectors for H.264/H.265 NAL headers (SPS/PPS/IDR frames) and reconstructs clips using original timestamps — <strong className="text-amber-300">achieving 87.2% recovery benchmark on fragmented streams</strong>.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onTriggerWorkerNotice({
                name: "Deep Carving Worker Service",
                component: "Python 3 + C++ pybind11 NAL Extractor",
                progress: 68,
                customMessage: "Raw bitstream carver worker daemon is under development for SIH Grand Finale. Showing 3 pre-carved recovered video sequences."
              })}
              className="flex items-center gap-1.5 px-3 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-mono font-semibold transition shadow-md shadow-amber-600/20"
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Trigger Carving Worker</span>
            </button>
          </div>
        </div>
      </div>

      {/* Cluster Map & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Disk Cluster Allocation Grid */}
        <div className="lg:col-span-7 bg-navy-900 border border-slate-800 rounded-xl p-5 space-y-4">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-cyan-400" />
              Raw Disk Cluster Allocation Map (HDD-01)
            </span>
            <span className="text-slate-400">Sector Size: 4096 B</span>
          </div>

          {/* Visual Grid */}
          <div className="grid grid-cols-8 sm:grid-cols-16 gap-1.5 p-3 bg-navy-950 rounded-lg border border-slate-800/80">
            {clusterBlocks.map((status, idx) => {
              let colorClass = "bg-slate-750 border-slate-700";
              if (status === 'carved') colorClass = "bg-amber-500 border-amber-400 shadow-sm shadow-amber-500/50 animate-pulse";
              if (status === 'allocated') colorClass = "bg-cyan-900/60 border-cyan-800/80";
              if (status === 'corrupted') colorClass = "bg-rose-900/80 border-rose-700";
              if (status === 'unallocated') colorClass = "bg-slate-850/50 border-slate-800/50";

              return (
                <div
                  key={idx}
                  title={`Cluster #0x${(idx * 0x4000).toString(16)}: ${status.toUpperCase()}`}
                  className={`aspect-square rounded-[3px] border ${colorClass} cursor-pointer hover:scale-125 transition-transform duration-150`}
                />
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 pt-1 border-t border-slate-800 gap-2">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-cyan-900/80 border border-cyan-800"></span>
              Allocated FS
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-amber-500 border border-amber-400"></span>
              Carved NAL Units (Recovered)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-rose-900 border border-rose-700"></span>
              Corrupted / Padded
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-slate-850 border border-slate-800"></span>
              Unallocated
            </span>
          </div>

          {/* Technical Specs box */}
          <div className="p-3 bg-navy-950/70 rounded-lg border border-slate-800/80 text-xs font-mono space-y-1.5">
            <div className="flex justify-between text-slate-400">
              <span>NAL-Unit Header Detection:</span>
              <span className="text-emerald-400 font-semibold">0x000001 (SPS 0x67 / PPS 0x68 / IDR 0x65)</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Fragment Reassembly Metric:</span>
              <span className="text-cyan-300 font-semibold">87.2% Valid Streams (Peer-Reviewed [4])</span>
            </div>
            <div className="flex justify-between text-slate-400">
              <span>Partial Clip Padding Policy:</span>
              <span className="text-amber-400 font-semibold">Flagged Partial, Never Synthetically Padded</span>
            </div>
          </div>
        </div>

        {/* Right: Recovered Video Fragments List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between font-mono text-xs text-slate-400">
            <span className="uppercase tracking-wider font-semibold">Recovered Video Fragments (3)</span>
            <span className="text-amber-400">14 Overwritten Clips Carved</span>
          </div>

          {carvedClips.map((clip, idx) => {
            const isSelected = activeCarvedClip === idx;
            return (
              <div
                key={clip.id}
                onClick={() => setActiveCarvedClip(idx)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-navy-850 border-amber-500/60 shadow-lg shadow-amber-950/40'
                    : 'bg-navy-900 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <FileCheck className="w-3.5 h-3.5" />
                    {clip.id}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-500/20 font-bold">
                    {clip.recoveryConfidence} Confidence
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white mb-1">
                  {clip.channel}
                </h4>

                <div className="font-mono text-[11px] text-slate-400 space-y-1 mb-2.5">
                  <div className="flex justify-between">
                    <span>Timeline Window:</span>
                    <span className="text-slate-200">{clip.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Carved Fragments:</span>
                    <span className="text-cyan-400">{clip.fragmentsCount} NAL clusters ({clip.duration})</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed bg-navy-950/70 p-2.5 rounded-lg border border-slate-800/80">
                  <strong className="text-slate-200">Investigator Note:</strong> {clip.previewNote}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
