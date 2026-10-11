import React from 'react';
import { 
  FileText, 
  Printer, 
  Download, 
  ShieldCheck, 
  CheckCircle, 
  Scale, 
  Award,
  Hash,
  AlertTriangle
} from 'lucide-react';
import { PROJECT_DETAILS, CUSTODY_LEDGER } from '../data/mockData';

export default function BSACertificateView({ onTriggerWorkerNotice }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-panel-glow p-5 rounded-xl border border-cyan-500/30">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="p-1.5 bg-emerald-500/20 text-emerald-400 rounded-md border border-emerald-500/30">
                <Scale className="w-4 h-4" />
              </span>
              <h2 className="text-base font-bold text-white tracking-wide">
                Section 63 Bharatiya Sakshya Adhiniyam (BSA 2023) Certificate
              </h2>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Statutory Court Compliance
              </span>
            </div>
            <p className="text-xs text-slate-300 max-w-3xl leading-relaxed">
              Under <strong>BNSS 2023 §176(3)</strong>, forensic collection is mandatory for offenses punishable by 7+ years. ForenSIQ auto-drafts the §63 BSA digital evidence certificate (replacing former Section 65B IEA), complete with SHA-256 hash chains and hardware write-blocker compliance logs for admissibility in Indian courts.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-2 bg-navy-850 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-lg text-xs font-mono font-medium transition"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print Certificate</span>
            </button>

            <button
              onClick={() => onTriggerWorkerNotice({
                name: "ReportLab PDF & DSC Signer",
                component: "Python ReportLab / eMudhra PKI Module",
                progress: 88,
                customMessage: "Statutory PDF generation is ready. Cryptographic DSC e-token USB signing daemon is currently under active development."
              })}
              className="flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-mono font-semibold transition shadow-md shadow-emerald-600/20"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Signed PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Official Certificate Paper Document */}
      <div className="max-w-4xl mx-auto bg-slate-900 border-2 border-slate-700/80 rounded-xl p-8 sm:p-12 text-slate-200 shadow-2xl relative overflow-hidden font-serif">
        {/* Subtle Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none opacity-5">
          <span className="text-8xl font-black text-slate-100 tracking-widest uppercase rotate-[-25deg]">
            FORENSIQ · BSA §63
          </span>
        </div>

        {/* Certificate Header */}
        <div className="text-center pb-6 border-b-2 border-slate-700 space-y-2">
          <div className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-bold">
            GOVERNMENT OF INDIA / FORENSIC SCIENCE LABORATORY
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-wide font-sans">
            CERTIFICATE UNDER SECTION 63 OF THE BHARATIYA SAKSHYA ADHINIYAM, 2023
          </h1>
          <p className="text-xs font-mono text-slate-400">
            (Regarding Admissibility of Electronic Records in Judicial Proceedings)
          </p>
        </div>

        {/* Case Metadata Grid */}
        <div className="my-6 grid grid-cols-2 gap-4 font-mono text-xs bg-navy-950/80 p-4 rounded-lg border border-slate-800">
          <div>
            <span className="text-slate-400">Police Station: </span>
            <span className="text-white font-semibold">Cyber Crime Police Station, Central</span>
          </div>
          <div>
            <span className="text-slate-400">FIR Number: </span>
            <span className="text-cyan-400 font-bold">FIR-0142/2026</span>
          </div>
          <div>
            <span className="text-slate-400">Statutory Mandate: </span>
            <span className="text-amber-400 font-semibold">BNSS 2023 §176(3) (7+ Year Offence)</span>
          </div>
          <div>
            <span className="text-slate-400">Evidence ID: </span>
            <span className="text-white font-semibold">HDD-01 (Seized DVR Drive)</span>
          </div>
          <div>
            <span className="text-slate-400">Filesystem Identified: </span>
            <span className="text-emerald-400 font-semibold">Hikvision HIKFS (Auto-Detected)</span>
          </div>
          <div>
            <span className="text-slate-400">Examination Date: </span>
            <span className="text-white font-semibold">10-OCT-2026</span>
          </div>
        </div>

        {/* Statutory Clauses */}
        <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300 text-justify">
          <p>
            I, <strong>Inspr. R. Sharma</strong>, Digital Forensic Examiner, hereby certify pursuant to Section 63(4) of the Bharatiya Sakshya Adhiniyam, 2023 that:
          </p>

          <ol className="list-decimal pl-6 space-y-2.5">
            <li>
              The electronic record described herein consists of digital video surveillance footage acquired from the physical hard drive labeled <strong>HDD-01</strong>, seized in connection with <strong>Case FIR-0142/2026</strong>.
            </li>
            <li>
              The acquisition of the electronic record was executed using hardware write-blocking equipment (Tableau T8u) and captured into an uncompressed forensic container (E01) complying with <strong>ISO/IEC 27037:2012</strong> and <strong>SWGDE 17-V-002</strong> international forensic guidelines.
            </li>
            <li>
              At all material times during the extraction, analysis, frame carving, and export of said surveillance recordings, the forensic workstation and software tool (<strong>FORENSIQ Workbench v0.9</strong>) were operating properly and under my lawful management and control.
            </li>
            <li>
              The digital evidence retains its tamper-evident integrity. The computed cryptographic checksums match the source drive bit-for-bit:
            </li>
          </ol>

          {/* Cryptographic Hash Summary */}
          <div className="my-4 p-3 bg-navy-950 rounded-lg border border-slate-800 font-mono text-xs space-y-1">
            <div className="text-cyan-400 font-bold mb-1">
              CRYPTOGRAPHIC INTEGRITY ATTESTATION (SHA-256)
            </div>
            <div className="text-slate-300 break-all">
              Source Drive Hash: <span className="text-emerald-400">9c1e78a42bc942d93e541b63ef1803274cb3d168128e4695e993952fb584a71e</span>
            </div>
            <div className="text-slate-300 break-all">
              Carved Export Hash: <span className="text-emerald-400">9c1e78a42bc942d93e541b63ef1803274cb3d168128e4695e993952fb584a71e</span>
            </div>
            <div className="text-emerald-300 text-[11px] pt-1">
              STATUS: Cryptographic Match Confirmed (Bit-Stream Verifiable)
            </div>
          </div>

          <p>
            To the best of my knowledge and belief, no alteration, omission, or unauthorized manipulation of the digital video surveillance stream has occurred during the forensic process.
          </p>
        </div>

        {/* Signature Box */}
        <div className="mt-10 pt-6 border-t-2 border-slate-700 flex flex-col sm:flex-row justify-between items-end gap-6 text-xs font-mono">
          <div className="space-y-1">
            <div className="text-slate-400">Forensic Software Stack:</div>
            <div className="text-cyan-400 font-bold">FORENSIQ · SIH 2026 (Hexatex)</div>
            <div className="text-[11px] text-slate-500">ISO/IEC 27037 Standard SOP</div>
          </div>

          <div className="text-right space-y-1">
            <div className="w-48 border-b border-dashed border-slate-500 mb-2"></div>
            <div className="text-white font-bold">Inspr. R. Sharma (ID: CYB-8912)</div>
            <div className="text-slate-400">Senior Digital Forensics Examiner</div>
            <div className="text-[11px] text-amber-400">State Forensic Science Laboratory (SFSL)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
