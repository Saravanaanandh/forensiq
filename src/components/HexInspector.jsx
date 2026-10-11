import React, { useState } from 'react';
import { Binary, CheckCircle, Search, RefreshCw, Cpu, Layers, FileCode, AlertTriangle } from 'lucide-react';
import { DISK_SIGNATURES } from '../data/mockData';

export default function HexInspector({ onTriggerWorkerNotice }) {
  const [selectedVendorIndex, setSelectedVendorIndex] = useState(0);
  const currentSig = DISK_SIGNATURES[selectedVendorIndex];

  // Hex dump display generator
  const hexLines = [
    { offset: "0x0200", hex: "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", ascii: "................" },
    { offset: "0x0210", hex: "48 49 4B 56 49 53 49 4F 4E 40 48 41 4E 47 5A 48", ascii: "HIKVISION@HANGZH" },
    { offset: "0x0220", hex: "4F 55 00 00 00 00 00 00 12 04 20 26 01 00 08 00", ascii: "OU........ &...." },
    { offset: "0x0230", hex: "FF FF 00 00 53 59 53 54 45 4D 5F 49 4E 46 4F 00", ascii: "....SYSTEM_INFO." },
    { offset: "0x0240", hex: "08 00 00 00 04 00 00 00 20 48 44 44 2D 30 31 00", ascii: "........ HDD-01." },
    { offset: "0x0250", hex: "9C 1E 78 A4 2B C9 42 D9 3E 54 1B 63 EF 18 03 27", ascii: "..x.+.B.>T.c...'"},
  ];

  const dahuaHexLines = [
    { offset: "0x0000", hex: "44 48 46 53 34 2E 31 00 20 20 20 20 00 00 00 00", ascii: "DHFS4.1.    ...." },
    { offset: "0x0010", hex: "44 41 48 55 41 20 53 45 43 55 52 49 54 59 00 00", ascii: "DAHUA SECURITY.." },
    { offset: "0x0020", hex: "01 00 10 00 00 08 00 00 00 00 00 00 00 00 00 00", ascii: "................" },
    { offset: "0x0030", hex: "56 49 44 45 4F 5F 43 48 30 31 00 00 00 00 00 00", ascii: "VIDEO_CH01......" },
  ];

  const displayLines = selectedVendorIndex === 1 ? dahuaHexLines : hexLines;

  return (
    <div className="space-y-6">
      {/* Overview Banner */}
      <div className="glass-panel-glow p-5 rounded-xl border border-cyan-500/30">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-cyan-500/20 text-cyan-400 rounded-md border border-cyan-500/30">
                <Binary className="w-4 h-4" />
              </span>
              <h2 className="text-base font-bold text-white tracking-wide">
                Signature-Based Auto-ID & Raw Byte Inspector
              </h2>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Innovation #01
              </span>
            </div>
            <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
              Vendor, model family and proprietary filesystem version detected directly from raw disk sectors — <strong className="text-cyan-300">even when the DVR itself is dead or password-locked</strong>. No vendor software required, zero guessing by the examiner.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onTriggerWorkerNotice({
                name: "OEM Plugin SDK Compiler",
                component: "Kaitai Struct Compiler / C++ pybind11",
                progress: 60,
                customMessage: "Custom OEM Plugin compiler is under development. Team Hexatex is standardizing Kaitai format specs across 8 DVR vendors."
              })}
              className="flex items-center gap-2 px-3 py-2 bg-navy-850 hover:bg-slate-800 text-cyan-400 border border-cyan-500/40 rounded-lg text-xs font-mono font-medium transition shadow-sm"
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Compile Kaitai Spec</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Vendor Switcher & Hex Dump */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Vendor Selector List */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold flex items-center justify-between">
            <span>OEM Filesystem Signatures</span>
            <span className="text-[10px] text-cyan-400">4 Supported Signatures</span>
          </div>

          {DISK_SIGNATURES.map((sig, idx) => {
            const isSelected = selectedVendorIndex === idx;
            return (
              <div
                key={sig.vendor}
                onClick={() => setSelectedVendorIndex(idx)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-navy-850 border-cyan-500/60 shadow-lg shadow-cyan-950/50'
                    : 'bg-navy-900/60 border-slate-800 hover:border-slate-700 hover:bg-navy-850/50'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">{sig.vendor}</span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                      {sig.code}
                    </span>
                  </div>
                  {sig.detected ? (
                    <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                      <CheckCircle className="w-3 h-3" /> Auto-Detected
                    </span>
                  ) : (
                    <span className="text-[10px] font-mono text-slate-500">
                      Standby
                    </span>
                  )}
                </div>

                <div className="font-mono text-[11px] text-slate-400 space-y-0.5 mt-2">
                  <div className="flex justify-between">
                    <span>Signature Offset:</span>
                    <span className="text-cyan-400">{sig.offset}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Target Parser:</span>
                    <span className="text-slate-200 truncate ml-2">{sig.parserLoaded}</span>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="p-3 bg-navy-950/80 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-2">
            <span className="text-amber-400 font-mono text-[11px] flex items-center gap-1.5 font-semibold">
              <AlertTriangle className="w-3.5 h-3.5" /> Note to Examiners
            </span>
            <p className="text-[11px] leading-relaxed text-slate-300">
              Unlike consumer operating systems that prompt for disk initialization (which destroys evidence), ForenSIQ prevents OS write mounting and matches signatures in the first 4096 bytes.
            </p>
          </div>
        </div>

        {/* Right: Hex Viewer */}
        <div className="lg:col-span-8 bg-navy-900 border border-slate-800 rounded-xl overflow-hidden shadow-xl flex flex-col">
          {/* Hex Terminal Header */}
          <div className="bg-navy-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <div className="flex gap-1.5 mr-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
              </div>
              <span>RAW DISK SECTOR VIEWER · Offset {currentSig.offset}</span>
            </div>

            <div className="flex items-center gap-3 text-slate-400 text-[11px]">
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                Signature Matched: {currentSig.vendor}
              </span>
            </div>
          </div>

          {/* Hex Data Display */}
          <div className="p-4 bg-[#050811] font-mono text-xs overflow-x-auto custom-scrollbar flex-1 space-y-1.5 select-text">
            {displayLines.map((line, idx) => (
              <div key={idx} className="flex items-center gap-4 py-0.5 hover:bg-slate-900/60 rounded px-1 group">
                <span className="text-cyan-500/80 w-16 select-none shrink-0 group-hover:text-cyan-400 font-semibold">
                  {line.offset}
                </span>
                <span className="text-slate-300 tracking-wider shrink-0">
                  {line.hex.split(" ").map((byte, bIdx) => {
                    const isHighlight = (idx === 1 && line.offset === "0x0210" && bIdx < 16) || (line.offset === "0x0000" && bIdx < 8);
                    return (
                      <span 
                        key={bIdx} 
                        className={`mr-1.5 ${isHighlight ? 'text-amber-400 font-bold bg-amber-400/10 px-0.5 rounded' : 'text-slate-400'}`}
                      >
                        {byte}
                      </span>
                    );
                  })}
                </span>
                <span className="text-slate-600 select-none">|</span>
                <span className={`tracking-widest ${idx === 1 && line.offset === "0x0210" ? 'text-amber-300 font-bold' : 'text-emerald-400/90'}`}>
                  {line.ascii}
                </span>
              </div>
            ))}
          </div>

          {/* Hex Terminal Status Footer */}
          <div className="bg-navy-950 p-3.5 border-t border-slate-800 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-0.5">
              <div className="text-slate-400 flex items-center gap-2">
                <span>Loaded Parser Engine:</span>
                <span className="text-cyan-300 font-bold">{currentSig.parserLoaded}</span>
              </div>
              <div className="text-[11px] text-slate-500">
                Kaitai Spec: <span className="text-slate-300">spec/formats/{currentSig.vendor.toLowerCase()}_fs.ksy</span> · Parser mode: Read-Only Isolated
              </div>
            </div>

            <button
              onClick={() => onTriggerWorkerNotice({
                name: "Raw Sector Carving Daemon",
                component: "pybind11 C++ Carving Worker",
                progress: 68,
                customMessage: "Direct raw sector re-carving is in development. Using cached Kaitai Struct sector indexes."
              })}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-mono transition border border-slate-700 self-start sm:self-auto"
            >
              Re-Scan Disk Header
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
