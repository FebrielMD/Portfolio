"use client";

import Image from "next/image";
import { Play, CheckCircle2, Clock, MoreHorizontal, Mail } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects, experiences, technicalSkills, softSkills } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-24 font-sans">
      {/* 1. HERO SECTION (ARTIST PROFILE STYLE) */}
      <section className="relative pt-32 pb-8 px-6 md:px-10 bg-linear-to-b from-[#4a5568] to-background">
        <div className="flex flex-col md:flex-row items-end gap-6 relative z-10">
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-full shadow-2xl overflow-hidden shrink-0">
            <Image
              src="/images/Febriel-Mezia-Dinaldi.jpg"
              alt="Febriel"
              width={240}
              height={240}
              className="w-full h-full object-cover bg-surface"
            />
          </div>

          <div className="flex flex-col gap-2 pb-2">
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <CheckCircle2 className="w-5 h-5 text-[#3D91F4] fill-white" />
              <span>Verified Developer</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-4">
              Febriel M.D.
            </h1>
            <p className="text-white text-sm md:text-base font-medium opacity-80">
              1,042,394 baris kode ditulis &bull; Software Engineer &bull;
              Cimahi
            </p>
          </div>
        </div>
      </section>

      {/* ACTION BAR (PLAY BUTTON & FOLLOW) */}
      <section className="px-6 md:px-10 py-6 flex items-center gap-6">
        <a
          href="#projects"
          className="w-14 h-14 bg-brand rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-xl"
        >
          <Play className="w-7 h-7 text-black fill-black ml-1" />
        </a>
        <button className="px-6 py-1.5 border border-white/30 rounded-full text-white text-sm font-bold tracking-widest hover:border-white transition-colors">
          FOLLOW
        </button>
        <MoreHorizontal className="w-8 h-8 text-gray-400 hover:text-white transition-colors cursor-pointer" />
      </section>

      {/* 2. POPULAR RELEASES (PROJECTS SECTION) */}
      <section id="projects" className="px-6 md:px-10 mt-8">
        <h2 className="text-2xl font-bold text-white mb-6">Popular Releases</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-surface hover:bg-surfaceHover p-4 rounded-lg transition-all duration-300 group cursor-pointer relative"
            >
              <div className="relative aspect-square w-full rounded-md bg-zinc-800 mb-4 overflow-hidden shadow-lg">
                {/* Placeholder Cover Album - Jika ada gambar asli proyek (misal Stella Journal), ganti src ini */}
                <div className="w-full h-full bg-linear-to-br from-zinc-700 to-zinc-900 flex items-center justify-center">
                  <span className="text-4xl opacity-50">📱</span>
                </div>

                {/* Spotify Iconic Play Button on Hover */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-2 right-2 w-12 h-12 bg-brand rounded-full flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:scale-105"
                >
                  <FaGithub className="w-6 h-6 text-black fill-black" />
                </a>
              </div>
              <h3 className="text-white font-bold truncate">{project.title}</h3>
              <p className="text-sm text-gray-400 line-clamp-2 mt-1">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TRACKLIST (EXPERIENCE SECTION) */}
      <section id="experience" className="px-6 md:px-10 mt-16 max-w-5xl">
        <h2 className="text-2xl font-bold text-white mb-6">
          Experience Tracklist
        </h2>
        <div className="w-full">
          {/* Table Header */}
          <div className="grid grid-cols-[40px_1fr_100px] md:grid-cols-[40px_2fr_1fr_100px] text-gray-400 text-sm border-b border-white/10 pb-2 mb-4 px-4">
            <div>#</div>
            <div>Title</div>
            <div className="hidden md:block">Location</div>
            <div className="flex justify-end">
              <Clock className="w-4 h-4" />
            </div>
          </div>

          {/* Table Body */}
          <div className="space-y-1">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="grid grid-cols-[40px_1fr_100px] md:grid-cols-[40px_2fr_1fr_100px] items-center px-4 py-3 hover:bg-white/10 rounded-md transition-colors group cursor-pointer text-sm md:text-base"
              >
                <div className="text-gray-400 group-hover:hidden">{i + 1}</div>
                <div className="hidden group-hover:block text-white">
                  <Play className="w-4 h-4 fill-white" />
                </div>

                <div className="pr-4">
                  <div className="text-white font-medium truncate">
                    {exp.title}
                  </div>
                  <div className="text-gray-400 text-sm truncate">
                    {exp.description}
                  </div>
                </div>

                <div className="hidden md:block text-gray-400">
                  {exp.location}
                </div>
                <div className="text-right text-gray-400 font-variant-numeric">
                  {exp.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / SKILLS SECTION (Spotify "About" Card) */}
      <section id="about" className="px-6 md:px-10 mt-16 max-w-3xl">
        <h2 className="text-2xl font-bold text-white mb-6">About</h2>
        <div className="bg-surface hover:bg-surfaceHover transition-colors rounded-xl p-8 cursor-pointer group">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-1/3">
              <h3 className="text-white font-bold text-lg mb-4">
                Tech Stack & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {/* Ini memanggil dari file lib/data.ts */}
                {technicalSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-2/3 space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                Saya adalah seorang pengembang yang berfokus pada pembuatan
                antarmuka modern dan arsitektur aplikasi lintas platform.
              </p>
              <p>
                Dengan latar belakang dari SMK Rekayasa Perangkat Lunak, saya
                terbiasa memecahkan masalah logika menggunakan Python dan Java,
                mendesain UI/UX dengan Figma, dan membangun fungsionalitas nyata
                melalui Flutter dan React.
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-white font-bold mb-2">Soft Skills</p>
                <p>{softSkills.map((s) => s.name).join(" • ")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER (CONTACT) */}
      <footer id="contact" className="px-6 md:px-10 mt-32 mb-10">
        <hr className="border-white/10 mb-8" />
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h3 className="text-white font-bold mb-2">
              Tertarik berkolaborasi?
            </h3>
            <p className="text-sm text-gray-400">
              Hubungi saya untuk diskusi peluang pengembangan.
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="mailto:emailmu@gmail.com"
              className="w-10 h-10 rounded-full bg-surface hover:bg-surfaceHover flex items-center justify-center transition-colors"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
            <a
              href="https://github.com/febriel-md"
              className="w-10 h-10 rounded-full bg-surface hover:bg-surfaceHover flex items-center justify-center transition-colors"
            >
              <FaGithub className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
