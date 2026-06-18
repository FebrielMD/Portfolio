import {
  Code2,
  LayoutTemplate,
  Database,
  Smartphone,
  Palette,
  MonitorPlay,
  Cpu,
  MessagesSquare,
  Users,
  BrainCircuit,
  Timer,
  Workflow,
} from "lucide-react";

export const technicalSkills = [
  { name: "HTML & CSS", icon: LayoutTemplate },
  { name: "JavaScript", icon: Code2 },
  { name: "Bootstrap", icon: LayoutTemplate },
  { name: "Flutter", icon: Smartphone },
  { name: "Java", icon: Code2 },
  { name: "Python Dasar", icon: Code2 },
  { name: "MySQL", icon: Database },
  { name: "Figma", icon: Palette },
  { name: "Arduino", icon: Cpu },
];

export const softSkills = [
  { name: "Komunikasi", icon: MessagesSquare },
  { name: "Teamwork", icon: Users },
  { name: "Problem Solving", icon: BrainCircuit },
  { name: "Adaptability", icon: Workflow },
  { name: "Time Management", icon: Timer },
];

export const experiences = [
  {
    title: "Praktek Kerja Lapangan (PKL)",
    location: "Cimahi, Jawa Barat",
    date: "Okt 2025",
    description:
      "Terjun langsung ke lingkungan profesional, mengaplikasikan logika pemrograman dan pemecahan masalah dalam skenario industri nyata.",
  },
  {
    title: "Pengembangan Proyek Sekolah (PSAJ)",
    location: "SMK Rekayasa Perangkat Lunak",
    date: "2024 - Sekarang",
    description:
      "Memimpin dan berkolaborasi dalam berbagai tugas akhir, merancang database, dan membangun antarmuka aplikasi berorientasi pengguna.",
  },
  {
    title: "Eksplorasi & Belajar Mandiri",
    location: "Cimahi & Bandung",
    date: "2023 - Sekarang",
    description:
      "Eksplorasi mendalam pada ekosistem Flutter, desain antarmuka modern, dan administrasi sistem berbasis Linux.",
  },
];

export const projects = [
  {
    title: "Notes App Flutter",
    description:
      "Aplikasi pencatatan yang efisien dengan penyimpanan lokal (SQLite) dan antarmuka material design yang mulus.",
    tech: ["Flutter", "Dart", "SQLite"],
    github: "https://github.com/febriel-md",
    demo: "#",
  },
  {
    title: "Stella Journal - Study Timer",
    description:
      "Aplikasi manajemen waktu dan habit tracking dengan fitur mindfulness untuk meningkatkan produktivitas belajar.",
    tech: ["Flutter", "Figma", "Local Storage"],
    github: "https://github.com/febriel-md",
    demo: "#",
  },
  {
    title: "Website Sekolah",
    description:
      "Portal informasi sekolah interaktif dengan desain modern, menyajikan data akademik dan berita terkini secara responsif.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    github: "https://github.com/febriel-md",
    demo: "#",
  },
  {
    title: "Premium Portfolio Website",
    description:
      "Website portfolio pribadi dengan estetika dark mode, glassmorphism, dan animasi performa tinggi.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/febriel-md",
    demo: "#",
  },
  {
    title: "Friendship Level App",
    description:
      "Aplikasi sosial interaktif untuk mengukur dan melacak kedekatan hubungan antar teman melalui serangkaian kuis dan metrik.",
    tech: ["Flutter", "Figma", "Firebase"],
    github: "https://github.com/febriel-md",
    demo: "#",
  },
];
export const certificates = [
  {
    title: "Sertifikat Kompetensi Keahlian (LSP-BNSP)",
    issuer: "Badan Nasional Sertifikasi Profesi (Ujikom RPL)",
    date: "Mei 2026",
    image: "🎓",
    link: "#", // Link ke PDF atau gambar sertifikatmu nanti
  },
  {
    title: "Belajar Membuat Aplikasi Flutter untuk Pemula",
    issuer: "Dicoding Indonesia",
    date: "Maret 2026",
    image: "📱",
    link: "#",
  },
  {
    title: "Memulai Pemrograman dengan Python",
    issuer: "Dicoding Indonesia",
    date: "Jan 2025",
    image: "🐍",
    link: "#",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Agt 2024",
    image: "🌐",
    link: "#",
  },
];
