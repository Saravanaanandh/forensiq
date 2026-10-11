import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  ExternalLink, 
  CheckCircle, 
  XCircle, 
  MinusCircle, 
  ArrowRight, 
  Layers, 
  Scale, 
  BookOpen, 
  TrendingUp, 
  Users, 
  Lock, 
  DollarSign, 
  Leaf,
  Cpu
} from 'lucide-react';
import { PROJECT_DETAILS, COMPARISON_MATRIX, RESEARCH_CITATIONS } from '../data/mockData';

export default function ProjectInfoView({ onTriggerWorkerNotice }) {
  const steps = [
    { num: 1, title: "Acquire", desc: "Write-blocked E01 image + SHA-256 seal", tech: "Hardware write-blocker, libewf" },
    { num: 2, title: "Identify", desc: "Reads disk signature, picks parser automatically", tech: "Kaitai Struct, raw sector scan" },
    { num: 3, title: "Parse", desc: "HIK, DHFS + 6 more FS per channel", tech: "Embedded timestamp & camera ID retention" },
    { num: 4, title: "Recover", desc: "Carves deleted & overwritten H.264 / H.265 frames", tech: "NAL-unit carving, 87.2% reassembly" },
    { num: 5, title: "Analyse", desc: "Timeline + person/vehicle triage", tech: "OpenCV · YOLOv8 ONNX (Offline CPU)" },
    { num: 6, title: "Report", desc: "PDF report + §63 BSA certificate", tech: "Court-admissible tamper-evident chain" }
  ];

  return (
    <div className="space-y-8 pb-8">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl">
        <div className="max-w-4xl space-y-3 relative z-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-semibold border border-cyan-500/30">
              {PROJECT_DETAILS.event}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 font-mono text-xs font-semibold border border-amber-500/30">
              Problem Statement ID: {PROJECT_DETAILS.problemStatementId}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-xs font-semibold border border-indigo-500/30">
              Team: {PROJECT_DETAILS.teamName} (ID: {PROJECT_DETAILS.teamId})
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {PROJECT_DETAILS.name}
          </h1>

          <p className="text-base sm:text-lg text-cyan-300 font-medium font-sans">
            {PROJECT_DETAILS.tagline}
          </p>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-3xl">
            <strong>Proposed Solution:</strong> An offline desktop tool that images a seized DVR/NVR disk, recognises the vendor on its own, rebuilds deleted footage, and hands investigators an air-tight report that stands up in court.
          </p>
        </div>
      </div>

      {/* End-to-End Pipeline */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            Detailed Explanation — One Recording, End to End
          </h2>
          <span className="text-xs font-mono text-slate-400">6-Step Forensic Flow</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
          {steps.map((st) => (
            <div 
              key={st.num}
              className="bg-navy-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between hover:border-cyan-500/40 transition group"
            >
              <div>
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono font-bold text-xs flex items-center justify-center mb-2.5 group-hover:scale-110 transition-transform">
                  0{st.num}
                </div>
                <h3 className="font-bold text-white text-sm mb-1 group-hover:text-cyan-300">
                  {st.title}
                </h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-800 text-[10px] font-mono text-slate-500">
                {st.tech}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competitive Benchmark: ForenSIQ vs Commercial Suites */}
      <div className="bg-navy-900 border border-slate-800 rounded-xl p-6 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
              <Award className="w-4 h-4 text-cyan-400" />
              Where FORENSIQ Stands (Benchmark & Capability Gaps)
            </h3>
            <p className="text-xs text-slate-400 font-sans mt-0.5">
              Compared with Magnet DVR Examiner, SalvationDATA VIP 2.0, and proprietary vendor players (iVMS-4200, SmartPSS).
            </p>
          </div>
          <span className="text-[11px] font-mono px-2 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30 self-start sm:self-auto">
            Slide 5 Comparison
          </span>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                <th className="py-3 px-3">Forensic Capability</th>
                <th className="py-3 px-3 text-cyan-300 bg-cyan-950/40 border-x border-cyan-500/20">FORENSIQ</th>
                <th className="py-3 px-3">Commercial Suites*</th>
                <th className="py-3 px-3">Vendor Players**</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {COMPARISON_MATRIX.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/40">
                  <td className="py-3 px-3 font-sans font-medium text-slate-200">
                    {row.feature}
                  </td>
                  <td className="py-3 px-3 font-semibold text-cyan-300 bg-cyan-950/30 border-x border-cyan-500/20">
                    {row.forensiq}
                  </td>
                  <td className="py-3 px-3 text-slate-400">
                    {row.commercial}
                  </td>
                  <td className="py-3 px-3 text-slate-500">
                    {row.vendorPlayers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Target Audience Benefits & Impacts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Police & Cyber Cells",
            icon: Users,
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            desc: "Footage in hours, not after weeks of vendor support tickets or closed proprietary codecs."
          },
          {
            title: "State & Central FSLs",
            icon: ShieldCheck,
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
            desc: "One single standardized SOP for every brand; eliminates case backlog under BNSS 2023 mandates."
          },
          {
            title: "Courts & Prosecutors",
            icon: Scale,
            color: "text-amber-400",
            bg: "bg-amber-500/10",
            desc: "Verifiable mathematical hash trail with §63 BSA certificates, minimizing evidence admissibility disputes."
          },
          {
            title: "NTRO & Critical Sites",
            icon: Lock,
            color: "text-emerald-400",
            bg: "bg-emerald-500/10",
            desc: "100% offline Atmanirbhar capability. Sensitive surveillance evidence never leaves an air-gapped machine."
          }
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="bg-navy-900 border border-slate-800 rounded-xl p-4 space-y-2">
              <div className={`w-8 h-8 rounded-lg ${item.bg} ${item.color} flex items-center justify-center`}>
                <Icon className="w-4 h-4" />
              </div>
              <h4 className="font-bold text-white text-sm">{item.title}</h4>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Research Citations from Slide 6 */}
      <div className="bg-navy-900 border border-slate-800 rounded-xl p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white font-mono flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-cyan-400" />
            Research & Standards Grounding
          </h3>
          <span className="text-xs font-mono text-slate-400">Slide 6 Citations</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-mono text-xs">
          {RESEARCH_CITATIONS.map((cit) => (
            <div key={cit.id} className="p-3 bg-navy-950 rounded-lg border border-slate-800 space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-cyan-400 font-bold">{cit.ref}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                  {cit.type}
                </span>
              </div>
              <p className="text-slate-300 font-sans text-xs line-clamp-2">
                {cit.title}
              </p>
              <div className="text-[10px] text-slate-500 pt-1">
                Source: {cit.link}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
