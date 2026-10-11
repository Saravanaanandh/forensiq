import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  Maximize2, 
  ShieldCheck, 
  Clock, 
  Video, 
  AlertCircle, 
  Layers, 
  Film, 
  CheckCircle2, 
  Sparkles, 
  Download, 
  Sliders,
  Scissors
} from 'lucide-react';
import { CHANNELS } from '../data/mockData';

export default function WorkbenchView({ onTriggerWorkerNotice, onSelectTab }) {
  const [selectedChannelId, setSelectedChannelId] = useState("CH2");
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTimeSec, setCurrentTimeSec] = useState(78); // 01:18 in
  const [timelineHour, setTimelineHour] = useState("21:42:05");

  const currentChannel = CHANNELS.find(c => c.id === selectedChannelId) || CHANNELS[1];

  return (
    <div className="space-y-6">
      {/* Workbench Header Info Strip (Page 3 Mock) */}
      <div className="bg-navy-900 border border-slate-800 rounded-xl p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-cyan-950/70 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-mono font-bold">
            01
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-white font-mono">
                FORENSIQ · Case FIR-0142/2026 · HDD-01
              </h2>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                E01 Imaged
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Evidence: <span className="text-slate-200">HDD-01 (WD Purple 4TB)</span> · Vendor: <span className="text-amber-400 font-semibold">Hikvision HIKFS</span> · Channels: <span className="text-cyan-300">1 – 8 Indexed</span>
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 text-emerald-300 border border-emerald-500/30">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>SHA-256 9f2c…a71e ✔ matches source image</span>
          </div>

          <button
            onClick={() => onTriggerWorkerNotice({
              name: "Deep Frame Carving Worker",
              component: "H.264/H.265 NAL Unit Carving Daemon",
              progress: 68,
              customMessage: "NAL-unit Carver worker is under development. In this preview, CH2 and CH6 have pre-carved frame datasets."
            })}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600/20 hover:bg-amber-600/30 text-amber-300 border border-amber-500/30 transition"
          >
            <Scissors className="w-3.5 h-3.5" />
            <span>Carve Deleted</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Channels Matrix & Active Player */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: 8-Channel Surveillance Grid */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span className="uppercase tracking-wider font-semibold">CCTV Surveillance Channels (8)</span>
            <span className="text-cyan-400 text-[11px]">2 Recovered by Carving</span>
          </div>

          <div className="grid grid-cols-2 gap-2.5">
            {CHANNELS.map((ch) => {
              const isSelected = ch.id === selectedChannelId;
              return (
                <div
                  key={ch.id}
                  onClick={() => setSelectedChannelId(ch.id)}
                  className={`relative p-2.5 rounded-xl border transition-all cursor-pointer group ${
                    isSelected
                      ? 'bg-navy-850 border-cyan-400 shadow-md shadow-cyan-950/60 ring-1 ring-cyan-400/40'
                      : 'bg-navy-900/80 border-slate-800 hover:border-slate-700 hover:bg-navy-850/60'
                  }`}
                >
                  {/* Channel Header */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs font-bold text-white group-hover:text-cyan-300">
                      {ch.id}
                    </span>
                    {ch.isRecovered ? (
                      <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse">
                        RECOVERED
                      </span>
                    ) : (
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                        SYNCED
                      </span>
                    )}
                  </div>

                  {/* Channel Simulated Video Thumbnail */}
                  <div className="aspect-video bg-[#050811] rounded-lg border border-slate-800/80 overflow-hidden relative flex flex-col justify-between p-2 crt-overlay">
                    <div className="flex justify-between items-center text-[10px] font-mono text-cyan-400/80">
                      <span>CAM_{ch.id}</span>
                      <span className="text-slate-400">{timelineHour}</span>
                    </div>

                    {/* Camera Name overlay */}
                    <div className="text-[11px] font-medium text-white/90 truncate drop-shadow-md">
                      {ch.name}
                    </div>

                    {/* Footer indicator */}
                    <div className="flex items-center justify-between text-[9px] font-mono">
                      <span className="text-slate-400 truncate">{ch.codec.split(' ')[0]}</span>
                      {isSelected && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                      )}
                    </div>
                  </div>

                  <div className="mt-2 text-[10px] text-slate-400 font-mono truncate flex justify-between">
                    <span>{ch.resolution.split(' ')[0]}</span>
                    <span className="text-slate-500">{ch.size}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Active Surveillance Player & Inspector */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-navy-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col">
            {/* Player Header */}
            <div className="bg-navy-950 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse"></span>
                <span className="text-white font-bold">{currentChannel.id}: {currentChannel.name}</span>
                {currentChannel.isRecovered && (
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded font-semibold">
                    Overwritten Cluster Carved
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                <span>Codec: <strong className="text-slate-200">{currentChannel.codec}</strong></span>
                <span>PTS Intact</span>
              </div>
            </div>

            {/* Video Viewport Mock with Forensic Watermark */}
            <div className="relative aspect-video bg-[#03060c] flex items-center justify-center overflow-hidden group select-none">
              <div className="absolute inset-0 crt-overlay opacity-80 pointer-events-none"></div>

              {/* Simulated Surveillance Feed Graphics */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between z-10 pointer-events-none font-mono">
                <div className="flex items-start justify-between text-xs text-white/90 drop-shadow-md">
                  <div>
                    <div className="text-cyan-400 font-bold tracking-wider">FORENSIQ SECURE VIEWER</div>
                    <div className="text-[11px] text-slate-300">EVIDENCE CONTAINER: E01_FIR0142.E01</div>
                    <div className="text-[10px] text-slate-400">OFFSET: 0x0A921000 - 0x0B810000</div>
                  </div>
                  <div className="text-right">
                    <div className="text-amber-400 font-bold">{timelineHour} UTC</div>
                    <div className="text-[10px] text-slate-300">FPS: 25.00 · BITRATE: 4120 Kbps</div>
                    <div className="text-[10px] text-emerald-400">HASH: 9c1e78a4... MATCHED</div>
                  </div>
                </div>

                {/* Bounding box simulation for recovered or AI-detected video */}
                {currentChannel.isRecovered && (
                  <div className="absolute top-1/4 left-1/3 w-48 h-40 border-2 border-amber-400/80 rounded bg-amber-500/10 pointer-events-auto p-2">
                    <div className="text-[10px] font-mono bg-amber-500 text-black font-bold px-1 py-0.5 rounded inline-block">
                      RECOVERED FRAGMENT #14 · CONFIDENCE 94%
                    </div>
                    <p className="text-[10px] text-amber-200 mt-1 leading-tight font-sans">
                      Timestamp: 21:42:05 UTC (Re-sequenced by embedded PTS NAL header)
                    </p>
                  </div>
                )}

                <div className="flex items-end justify-between text-[11px] text-slate-400 drop-shadow">
                  <span>CAMERA: {currentChannel.name.toUpperCase()}</span>
                  <span className="text-cyan-300">STANDARDS: ISO/IEC 27037:2012 COMPLIANT</span>
                </div>
              </div>

              {/* Center Play Overlay if paused */}
              {!isPlaying && (
                <div className="z-20 p-4 bg-cyan-600/80 text-white rounded-full backdrop-blur-sm shadow-xl">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </div>
              )}
            </div>

            {/* Video Controls & Timeline Bar */}
            <div className="p-4 bg-navy-950 border-t border-slate-800 space-y-3 font-mono">
              {/* Timeline scrubber bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Timeline: 21:00:00 — 23:59:59 (Incident Window)</span>
                  </span>
                  <span className="text-cyan-300 font-bold">{timelineHour}</span>
                </div>

                {/* Scrubber slider */}
                <input
                  type="range"
                  min="0"
                  max="180"
                  value={currentTimeSec}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    setCurrentTimeSec(val);
                    const mins = Math.floor(val / 60) + 38;
                    const secs = val % 60;
                    setTimelineHour(`21:${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`);
                  }}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />

                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>21:00:00 (Incident Start)</span>
                  <span className="text-amber-400 font-semibold">21:42:05 (Intrusion Event in Vault)</span>
                  <span>23:59:59</span>
                </div>
              </div>

              {/* Control Buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition shadow-sm"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                  </button>

                  <button
                    onClick={() => {
                      setCurrentTimeSec(0);
                      setTimelineHour("21:00:00");
                    }}
                    className="p-2 rounded-lg bg-navy-850 hover:bg-slate-800 text-slate-300 border border-slate-700 transition"
                    title="Reset to 21:00"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <span className="text-xs text-slate-300 px-2 font-mono">
                    Speed: <strong>1.0x</strong> (Direct Remux)
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onTriggerWorkerNotice({
                      name: "AI Bounding Box Extractor",
                      component: "YOLOv8 ONNX Offline Engine",
                      progress: 60,
                      customMessage: "AI object tracking worker daemon is currently under active development. Showing simulated target bounding boxes."
                    })}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-850 hover:bg-slate-800 text-cyan-300 border border-cyan-500/30 text-xs transition"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Run AI Triage</span>
                  </button>

                  <button
                    onClick={() => onSelectTab('bsa-cert')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs transition font-semibold"
                  >
                    <span>Generate §63 BSA</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Key Evidence Events for Selected Channel */}
          <div className="bg-navy-900 border border-slate-800 rounded-xl p-4 space-y-3 font-mono">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-bold uppercase tracking-wider">
                Event Log for {currentChannel.id} ({currentChannel.name})
              </span>
              <span className="text-[11px] text-cyan-400">
                {currentChannel.keyEvents.length} Verified Segments
              </span>
            </div>

            <div className="space-y-2">
              {currentChannel.keyEvents.map((evt, idx) => (
                <div 
                  key={idx}
                  className="p-2.5 rounded-lg bg-navy-950/80 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 text-[11px] font-bold">
                      {evt.time}
                    </span>
                    <span className="text-slate-200 font-semibold">{evt.type}</span>
                  </div>
                  <span className="text-slate-400 text-[11px] font-sans">
                    {evt.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
