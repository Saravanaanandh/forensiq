import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WorkerAlertBanner from './components/WorkerAlertBanner';
import WorkerModal from './components/WorkerModal';
import WorkbenchView from './components/WorkbenchView';
import HexInspector from './components/HexInspector';
import RecoveryCarvingView from './components/RecoveryCarvingView';
import AITriageView from './components/AITriageView';
import CustodyLedger from './components/CustodyLedger';
import BSACertificateView from './components/BSACertificateView';
import ProjectInfoView from './components/ProjectInfoView';
import { WORKER_SERVICES } from './data/mockData';
import { Cpu, ShieldCheck, Server, AlertTriangle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('workbench');
  const [modalWorkerInfo, setModalWorkerInfo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenWorkerNotice = (workerData) => {
    setModalWorkerInfo(workerData);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Banner indicating UI Demonstration and Remaining Workers in Development */}
      <WorkerAlertBanner 
        onOpenWorkerDetails={(worker) => handleOpenWorkerNotice(worker)} 
      />

      {/* Main Navigation Bar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onTriggerWorkerNotice={(info) => handleOpenWorkerNotice(info)} 
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        {activeTab === 'workbench' && (
          <WorkbenchView 
            onTriggerWorkerNotice={handleOpenWorkerNotice}
            onSelectTab={setActiveTab}
          />
        )}

        {activeTab === 'hex-inspector' && (
          <HexInspector 
            onTriggerWorkerNotice={handleOpenWorkerNotice}
          />
        )}

        {activeTab === 'carving' && (
          <RecoveryCarvingView 
            onTriggerWorkerNotice={handleOpenWorkerNotice}
          />
        )}

        {activeTab === 'ai-triage' && (
          <AITriageView 
            onTriggerWorkerNotice={handleOpenWorkerNotice}
          />
        )}

        {activeTab === 'custody' && (
          <CustodyLedger 
            onTriggerWorkerNotice={handleOpenWorkerNotice}
          />
        )}

        {activeTab === 'bsa-cert' && (
          <BSACertificateView 
            onTriggerWorkerNotice={handleOpenWorkerNotice}
          />
        )}

        {activeTab === 'project-info' && (
          <ProjectInfoView 
            onTriggerWorkerNotice={handleOpenWorkerNotice}
          />
        )}
      </main>

      {/* Global Interactive Worker Notice Modal */}
      <WorkerModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        workerInfo={modalWorkerInfo} 
      />

      {/* Persistent Bottom Status Bar (Forensic Workstation Telemetry) */}
      <footer className="bg-navy-950 border-t border-slate-800/80 px-4 py-2 font-mono text-[11px] text-slate-400 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Workstation: AIR-GAPPED OFFLINE (PORT 8000 ISOLATED)
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <span className="hidden md:inline text-slate-400">
              Kernel Write-Block: <strong className="text-cyan-300">Active</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleOpenWorkerNotice({
                name: "All Background Workers Overview",
                component: "Daemon Process Manager (C++ / FastAPI)",
                progress: 68,
                customMessage: "Background workers (Write-Blocker Daemon, Kaitai OEM Carving Worker, YOLOv8 ONNX Engine, Hyperledger Fabric Node) are actively under development for the SIH 2026 Grand Finale."
              })}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1 underline underline-offset-2 transition"
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Remaining Workers: Under Development (4 Services)</span>
            </button>
            <span className="text-slate-600">|</span>
            <span className="text-slate-500">
              Team Hexatex · PS #26150
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
