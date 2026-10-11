import React from 'react';
import { 
  ShieldCheck, 
  HardDrive, 
  Layers, 
  Cpu, 
  FileText, 
  Info, 
  Binary, 
  Sparkles, 
  CheckCircle2, 
  Play, 
  Download,
  AlertTriangle,
  Server
} from 'lucide-react';
import { PROJECT_DETAILS } from '../data/mockData';

export default function Navbar({ activeTab, setActiveTab, onTriggerWorkerNotice }) {
  const navTabs = [
    { id: 'workbench', label: 'Forensic Workbench', icon: Layers, badge: 'Live Grid' },
    { id: 'hex-inspector', label: 'Disk Auto-ID & Hex', icon: Binary, badge: 'OEM Parser' },
    { id: 'carving', label: 'Deep NAL Carving', icon: Cpu, badge: '87.2%' },
    { id: 'ai-triage', label: 'AI Video Triage', icon: Sparkles, badge: 'YOLOv8' },
    { id: 'custody', label: 'Custody Chain', icon: ShieldCheck, badge: 'SHA-256' },
    { id: 'bsa-cert', label: '§63 BSA Certificate', icon: FileText, badge: 'Court Ready' },
    { id: 'project-info', label: 'SIH 2026 Details', icon: Info, badge: 'Hexatex' },
  ];

  return (
    <header className="bg-navy-900 border-b border-slate-800 sticky top-0 z-40 backdrop-blur-md bg-opacity-95">
      {/* Top Meta Bar */}
      <div className="border-b border-slate-800/80 px-4 py-1.5 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 gap-2 bg-navy-950/60">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            SIH 2026 · PS ID #{PROJECT_DETAILS.problemStatementId}
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-300">Team: <strong className="text-white">{PROJECT_DETAILS.teamName}</strong> (ID: {PROJECT_DETAILS.teamId})</span>
          <span className="text-slate-600">|</span>
          <span className="hidden sm:inline text-slate-400">Theme: {PROJECT_DETAILS.theme}</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-emerald-400 bg-emerald-950/30 px-2 py-0.5 rounded border border-emerald-500/20">
            <CheckCircle2 className="w-3 h-3" />
            SHA-256 9f2c…a71e ✔ Sealed
          </span>
          <span className="hidden md:inline text-slate-400">
            Compliance: <span className="text-amber-400 font-medium">BNSS 2023 §176(3) & BSA §63</span>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="px-4 py-2.5 flex items-center justify-between gap-4">
        {/* Brand & Case Info */}
        <div className="flex items-center gap-3.5 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 p-0.5 shadow-lg shadow-cyan-500/20 flex items-center justify-center">
              <div className="w-full h-full bg-navy-900 rounded-[7px] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg font-extrabold tracking-wider text-white">
                  FORENSIQ<span className="text-cyan-400">.</span>
                </h1>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-cyan-950/80 text-cyan-400 border border-cyan-500/30 font-semibold">
                  v0.9-DEMO
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-mono tracking-tight hidden sm:block">
                Multi-Vendor DVR/NVR Surveillance Evidence Workbench
              </p>
            </div>
          </div>

          {/* Current Case Badge */}
          <div className="hidden lg:flex items-center gap-2 pl-3 ml-2 border-l border-slate-800">
            <div className="px-2.5 py-1 rounded-md bg-navy-850 border border-slate-700/80 font-mono text-[11px]">
              <span className="text-slate-400">Case: </span>
              <span className="text-cyan-300 font-semibold">FIR-0142/2026</span>
              <span className="mx-1.5 text-slate-600">·</span>
              <span className="text-slate-400">Disk: </span>
              <span className="text-amber-300 font-semibold">HDD-01 (Hikvision 4TB)</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="hidden xl:flex items-center gap-1">
          {navTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm shadow-cyan-500/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 border border-transparent'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-400' : 'text-slate-500'}`} />
                <span>{tab.label}</span>
                {tab.badge && (
                  <span className={`text-[9px] font-mono px-1 rounded ${
                    isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-500'
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onTriggerWorkerNotice({
              name: "Hardware Write-Blocker Daemon",
              component: "libewf / dd USB-3 SATA kernel driver",
              progress: 72,
              customMessage: "Hardware Write-Blocker daemon connection is currently under active development. Seized disk is operating in safe software-emulated write-block mode."
            })}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-navy-850 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono transition"
            title="Mount new physical DVR drive"
          >
            <HardDrive className="w-3.5 h-3.5 text-cyan-400" />
            <span>Mount Drive</span>
          </button>

          <button
            onClick={() => onTriggerWorkerNotice({
              name: "E01 Raw Bitstream Export Worker",
              component: "libewf / OpenSSL SHA-256 Worker Service",
              progress: 64,
              customMessage: "Raw E01 forensic bitstream exporter worker is currently under development. Demonstrating forensic timeline export and §63 BSA Certificate generator."
            })}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs font-mono shadow-md shadow-cyan-600/25 transition"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export Case</span>
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Tab Overflow Row */}
      <div className="xl:hidden flex items-center gap-1 px-4 py-1.5 overflow-x-auto custom-scrollbar border-t border-slate-800/60 bg-navy-950/40">
        {navTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs whitespace-nowrap font-medium transition ${
                isActive
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <Icon className="w-3 h-3" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
