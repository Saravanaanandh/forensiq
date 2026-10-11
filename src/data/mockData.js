export const PROJECT_DETAILS = {
  name: "FORENSIQ",
  tagline: "Acquire, recover and prove CCTV evidence from any DVR/NVR",
  subheading: "A vendor-agnostic forensic workbench for DVR/NVR surveillance evidence",
  event: "SMART INDIA HACKATHON 2026",
  problemStatementId: "26150",
  problemStatementTitle: "Development of a Multi-Vendor DVR/NVR Forensic Analysis Tool for Standardized Acquisition, Recovery, and Analysis of Surveillance Evidence",
  theme: "Blockchain & Cybersecurity",
  category: "Software",
  teamId: "172169",
  teamName: "Hexatex",
  demoLink: "forensiq.gces.net.in",
  legalAct: "Bharatiya Sakshya Adhiniyam, 2023 (§63) & BNSS 2023 §176(3)",
  standard: "ISO/IEC 27037:2012 & SWGDE 17-V-002"
};

export const WORKER_SERVICES = [
  {
    id: "worker-acquire",
    name: "Hardware Write-Blocker & E01 Imager",
    component: "libewf / dd Kernel Daemon",
    status: "development",
    progress: 72,
    description: "Write-blocked physical disk stream acquisition and SHA-256 seal generator.",
    targetCompletion: "SIH Grand Finale",
    simulatedOutput: "Write-block verified on /dev/sdb (USB-3 SATA Dock). E01 chunking ready."
  },
  {
    id: "worker-carve",
    name: "Kaitai Deep Frame Carving Engine",
    component: "Python 3 + C++ (pybind11) / Kaitai Struct",
    status: "development",
    progress: 68,
    description: "Frame-level carving for overwritten/fragmented H.264/H.265 NAL units and re-sequencing.",
    targetCompletion: "SIH Grand Finale",
    simulatedOutput: "Header-footer frame validator active. 87.2% fragment reassembly rate."
  },
  {
    id: "worker-ai",
    name: "YOLOv8 + OpenCV AI Triage Engine",
    component: "ONNX Runtime (CPU, 100% Offline)",
    status: "development",
    progress: 60,
    description: "Automated motion, scene-change, person, and vehicle triage on raw surveillance streams.",
    targetCompletion: "SIH Grand Finale",
    simulatedOutput: "ONNX models loaded in offline sandbox. Zero external network egress."
  },
  {
    id: "worker-fabric",
    name: "Hyperledger Fabric Inter-Agency Ledger",
    component: "Custody Chain Anchor Gateway",
    status: "development",
    progress: 55,
    description: "Cross-jurisdiction tamper-evident ledger anchoring for police and FSL sharing.",
    targetCompletion: "SIH Scale Phase (+3 Months)",
    simulatedOutput: "Local SHA-256 ledger active. Multi-node consensus broker queued."
  },
  {
    id: "worker-bsa",
    name: "§63 BSA Certificate Generator",
    component: "ReportLab PDF Engine & Digital Signer",
    status: "mock-active",
    progress: 90,
    description: "Automated §63 Bharatiya Sakshya Adhiniyam affidavit generator for Indian courts.",
    targetCompletion: "Available in UI Preview",
    simulatedOutput: "Certificate templates compiled with Section 63 BSA 2023 statutory clauses."
  }
];

export const DISK_SIGNATURES = [
  {
    vendor: "Hikvision",
    code: "HIK_FS",
    detected: true,
    offset: "0x0210",
    hexString: "48 49 4B 56 49 53 49 4F 4E 40 48 41 4E 47 5A 48 4F 55 00 00 00 00 00 00",
    ascii: "HIKVISION@HANGZHOU......",
    parserLoaded: "Hikvision native parser v2.4 (HIKFS)",
    supportedVersions: ["v2.0", "v2.2", "v2.4", "v3.0"]
  },
  {
    vendor: "Dahua",
    code: "DHFS4.1",
    detected: false,
    offset: "0x0000",
    hexString: "44 48 46 53 34 2E 31 00 20 20 20 20 00 00 00 00 44 41 48 55 41 20 20 20",
    ascii: "DHFS4.1.    ....DAHUA   ",
    parserLoaded: "Dahua DHFS4.1 stream carver",
    supportedVersions: ["DHFS4.0", "DHFS4.1", "DHFS4.2"]
  },
  {
    vendor: "Honeywell",
    code: "HNWY_NVR",
    detected: false,
    offset: "0x0100",
    hexString: "48 4E 57 59 4E 56 52 32 30 32 36 00 00 00 00 00 53 45 43 55 52 49 54 59",
    ascii: "HNWYNVR2026.....SECURITY",
    parserLoaded: "Honeywell Black FS parser",
    supportedVersions: ["NVR2000", "MaxPro NVR"]
  },
  {
    vendor: "CP Plus",
    code: "CPPLUS_OEM",
    detected: false,
    offset: "0x0080",
    hexString: "43 50 50 4C 55 53 5F 4F 52 41 4E 47 45 00 00 00 4F 45 4D 5F 53 54 52 4D",
    ascii: "CPPLUS_ORANGE...OEM_STRM",
    parserLoaded: "CP Plus Orange Series Stream Demuxer",
    supportedVersions: ["Orange 2.x", "Cosmic 4.x"]
  }
];

export const CUSTODY_LEDGER = [
  {
    index: 1,
    action: "Evidence Seizure & Image Creation",
    officer: "Inspr. R. Sharma (ID: CYB-8912)",
    timestamp: "2026-10-10 18:32:04 UTC",
    prevHash: "0000000000000000000000000000000000000000000000000000000000000000",
    hash: "9c1e78a42bc942d93e541b63ef1803274cb3d168128e4695e993952fb584a71e",
    details: "Physical drive imaged with Tableau T8u write-blocker to E01 raw container. Integrity verified."
  },
  {
    index: 2,
    action: "Auto-Identify & Signature Scan",
    officer: "System Auto-Parser (ForenSIQ Core)",
    timestamp: "2026-10-10 18:38:15 UTC",
    prevHash: "9c1e78a42bc942d93e541b63ef1803274cb3d168128e4695e993952fb584a71e",
    hash: "3a9f4c810d7a90b62e49c76251ec85c8e71b29a9e3f7402a4bf74d715a31a982",
    details: "Sector 0x0210 matched signature 'HIKVISION@HANGZHOU'. Loaded native HIKFS parser."
  },
  {
    index: 3,
    action: "Index & Channel Demuxing",
    officer: "System Auto-Parser (ForenSIQ Core)",
    timestamp: "2026-10-10 18:45:50 UTC",
    prevHash: "3a9f4c810d7a90b62e49c76251ec85c8e71b29a9e3f7402a4bf74d715a31a982",
    hash: "4be0c67de29f3815db4b15ce8923a45c381d69a23c4a20b395e5482319efb014",
    details: "8 video channels extracted. Original camera IDs, audio tracks, and timestamps retained."
  },
  {
    index: 4,
    action: "Frame-Level Carving & Reassembly",
    officer: "Forensic Analyst P. Verma (FSL-DL-04)",
    timestamp: "2026-10-10 19:12:44 UTC",
    prevHash: "4be0c67de29f3815db4b15ce8923a45c381d69a23c4a20b395e5482319efb014",
    hash: "88f2190e29b10214a14fce862901a51138bca87b094231b578c7b4e9f78310c2",
    details: "NAL-unit carving rebuilt 14 deleted/overwritten H.264 video fragments on CH2 and CH6."
  },
  {
    index: 5,
    action: "Offline AI Triage (YOLOv8 ONNX)",
    officer: "ForenSIQ Vision Module (CPU Offline)",
    timestamp: "2026-10-10 19:35:10 UTC",
    prevHash: "88f2190e29b10214a14fce862901a51138bca87b094231b578c7b4e9f78310c2",
    hash: "2db78310fe64b819e917d05ca48c129fbb138a09885821c900e7041a98cb3721",
    details: "4 key motion anomalies tagged: 2 suspicious person entries (21:42 & 22:15) on CH2 Vault."
  },
  {
    index: 6,
    action: "Evidence Exported & §63 BSA Sealed",
    officer: "Inspr. R. Sharma (ID: CYB-8912)",
    timestamp: "2026-10-10 20:00:22 UTC",
    prevHash: "2db78310fe64b819e917d05ca48c129fbb138a09885821c900e7041a98cb3721",
    hash: "d71a4f02a9b3c481e8201bcf5a290117ec8942b109e2541a774b9a8cf398124b",
    details: "Exported ISO/IEC 27037 compliant dossier with auto-drafted Section 63 BSA Certificate."
  }
];

export const CHANNELS = [
  {
    id: "CH1",
    name: "Front Gate (Main Entry)",
    resolution: "1920x1080 @ 25fps",
    codec: "H.264 High Profile",
    status: "Normal Stream",
    isRecovered: false,
    color: "#06b6d4",
    motionAlerts: 14,
    size: "18.4 GB",
    timeSpan: "2026-10-10 00:00 - 23:59",
    thumbnailBadge: "LIVE / SYNCED",
    keyEvents: [
      { time: "21:14:02", type: "Vehicle Ingress", note: "White SUV (DL-08-AB-4921) entered perimeter" },
      { time: "22:45:10", type: "Vehicle Egress", note: "Vehicle departed at high speed" }
    ]
  },
  {
    id: "CH2",
    name: "Cash Vault / Safe Room",
    resolution: "2560x1440 @ 30fps",
    codec: "H.264 (Carved NAL)",
    status: "Recovered [Deleted Clips]",
    isRecovered: true,
    color: "#f59e0b",
    motionAlerts: 8,
    size: "8.2 GB (Carved)",
    timeSpan: "2026-10-10 21:00 - 23:59",
    thumbnailBadge: "RECOVERED (CARVED)",
    keyEvents: [
      { time: "21:38:19", type: "Overwritten Gap", note: "DVR recorded over 12 mins. Carved via SPS/PPS search." },
      { time: "21:42:05", type: "Person Detected", note: "Individual in dark attire tampering with lock mechanism" }
    ]
  },
  {
    id: "CH3",
    name: "Underground Parking",
    resolution: "1920x1080 @ 25fps",
    codec: "H.265 Main Profile",
    status: "Normal Stream",
    isRecovered: false,
    color: "#3b82f6",
    motionAlerts: 22,
    size: "24.1 GB",
    timeSpan: "2026-10-10 00:00 - 23:59",
    thumbnailBadge: "INDEXED",
    keyEvents: [
      { time: "21:16:30", type: "Motion Trigger", note: "Driver parked in bay B-04" }
    ]
  },
  {
    id: "CH4",
    name: "Main Office Reception",
    resolution: "1920x1080 @ 25fps",
    codec: "H.264 Baseline",
    status: "Normal Stream",
    isRecovered: false,
    color: "#10b981",
    motionAlerts: 31,
    size: "14.8 GB",
    timeSpan: "2026-10-10 00:00 - 23:59",
    thumbnailBadge: "INDEXED",
    keyEvents: [
      { time: "20:00:15", type: "Shift Change", note: "Security guard logoff recorded" }
    ]
  },
  {
    id: "CH5",
    name: "Server Room / DVR Rack",
    resolution: "1920x1080 @ 20fps",
    codec: "H.264 Main Profile",
    status: "Normal Stream",
    isRecovered: false,
    color: "#8b5cf6",
    motionAlerts: 5,
    size: "9.3 GB",
    timeSpan: "2026-10-10 00:00 - 23:59",
    thumbnailBadge: "CRITICAL SITE",
    keyEvents: [
      { time: "22:10:04", type: "Cable Disconnect", note: "DVR power cable pulled abruptly (Dirty shutdown logged)" }
    ]
  },
  {
    id: "CH6",
    name: "Rear Loading Bay",
    resolution: "1920x1080 @ 25fps",
    codec: "H.265 (Carved)",
    status: "Recovered [Fragmented]",
    isRecovered: true,
    color: "#f43f5e",
    motionAlerts: 11,
    size: "5.7 GB (Carved)",
    timeSpan: "2026-10-10 21:00 - 23:59",
    thumbnailBadge: "RECOVERED (CARVED)",
    keyEvents: [
      { time: "22:05:40", type: "Cargo Transfer", note: "Re-sequenced 32 unindexed clusters into 4m12s MP4" }
    ]
  },
  {
    id: "CH7",
    name: "Perimeter Boundary North",
    resolution: "1920x1080 @ 20fps",
    codec: "H.264 Baseline",
    status: "Normal Stream",
    isRecovered: false,
    color: "#06b6d4",
    motionAlerts: 19,
    size: "16.1 GB",
    timeSpan: "2026-10-10 00:00 - 23:59",
    thumbnailBadge: "INDEXED",
    keyEvents: [
      { time: "22:20:11", type: "Fence Motion", note: "Subject scaled north boundary wall" }
    ]
  },
  {
    id: "CH8",
    name: "Fire Stairwell B",
    resolution: "1280x720 @ 15fps",
    codec: "H.264 Baseline",
    status: "Normal Stream",
    isRecovered: false,
    color: "#64748b",
    motionAlerts: 3,
    size: "4.9 GB",
    timeSpan: "2026-10-10 00:00 - 23:59",
    thumbnailBadge: "INDEXED",
    keyEvents: [
      { time: "22:18:50", type: "Foot Traffic", note: "Rapid footsteps detected by audio spectrogram" }
    ]
  }
];

export const COMPARISON_MATRIX = [
  {
    feature: "Works across 8+ OEM brands",
    forensiq: "Yes (Unified Native Parsers)",
    commercial: "Partial (Needs multi-vendor licenses)",
    vendorPlayers: "No (1 player per brand)"
  },
  {
    feature: "Deleted / Overwritten Frame Recovery",
    forensiq: "Yes (Frame-level NAL carving 87.2%)",
    commercial: "Partial (Only FAT/NTFS carving)",
    vendorPlayers: "No (Fails on corrupted disks)"
  },
  {
    feature: "Tamper-Evident Custody Chain",
    forensiq: "Yes (Built-in SHA-256 Hash Chain)",
    commercial: "Partial (Simple log file)",
    vendorPlayers: "No (No audit log)"
  },
  {
    feature: "§63 BSA Certificate Built-In (India)",
    forensiq: "Yes (Auto-drafts statutory certificate)",
    commercial: "No (Manual word templates)",
    vendorPlayers: "No (None)"
  },
  {
    feature: "Indigenous, No Per-Seat License",
    forensiq: "Yes (Atmanirbhar Open Stack)",
    commercial: "No (Costly imported subscriptions)",
    vendorPlayers: "Free but locked/closed"
  },
  {
    feature: "Preserves Original Timestamps & Cam IDs",
    forensiq: "Yes (Embedded PTS extraction)",
    commercial: "Partial (Often converted to file mtime)",
    vendorPlayers: "No (Export transcode loses metadata)"
  }
];

export const RESEARCH_CITATIONS = [
  {
    id: 1,
    ref: "SWGDE 17-V-002",
    title: "Best Practices for Data Acquisition from Digital Video Recorders",
    type: "Standard",
    link: "swgde.org · 17-V-002-1.4"
  },
  {
    id: 2,
    ref: "ISO/IEC 27037:2012",
    title: "Identification, collection, acquisition & preservation of digital evidence",
    type: "Standard",
    link: "iso.org/standard/44381.html"
  },
  {
    id: 3,
    ref: "Han, Jeong & Lee (2015)",
    title: "Analysis of the HIKVISION DVR File System, ICDF2C 2015, Springer LNICST 157",
    type: "Peer-Reviewed Paper",
    link: "doi.org/10.1007/978-3-319-25512-5_13"
  },
  {
    id: 4,
    ref: "Rzayeva et al. (2025)",
    title: "Automated Forensic Recovery Methodology for Video Evidence from Hikvision and Dahua DVR/NVR Systems, Information 16(11)",
    type: "Peer-Reviewed Paper",
    link: "doi.org/10.3390/info16110983"
  },
  {
    id: 5,
    ref: "Bharatiya Sakshya Adhiniyam, 2023",
    title: "Section 63 (Admissibility of electronic records, replaces Indian Evidence Act 65B)",
    type: "Indian Law",
    link: "indiacode.nic.in · BSA, Act 47 of 2023"
  },
  {
    id: 6,
    ref: "Park & Lee (2014)",
    title: "Data fragment forensics for embedded DVR systems, Digital Investigation 11(3)",
    type: "Peer-Reviewed Paper",
    link: "doi.org/10.1016/j.diin.2014.06.001"
  },
  {
    id: 7,
    ref: "DFRWS USA 2026",
    title: "Forensic analysis of video data deletion & recovery in the Honeywell NVR file system",
    type: "Conference Paper",
    link: "dfrws.org · USA 2026, Paper 16"
  },
  {
    id: 8,
    ref: "BNSS 2023 §176(3)",
    title: "Mandatory forensic evidence collection for offences punishable with 7+ years",
    type: "Indian Law",
    link: "indiacode.nic.in · BNSS, Act 46 of 2023"
  }
];
