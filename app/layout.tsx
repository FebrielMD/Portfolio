import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import PlayerBar from "@/components/PlayerBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Febriel Mezia Dinaldi | Portfolio",
  description: "Portfolio Profesional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${inter.className} bg-black text-gray-200 antialiased h-screen flex flex-col overflow-hidden selection:bg-brand selection:text-black`}
      >
        {/* Main Application Container */}
        <div className="flex flex-1 overflow-hidden h-[calc(100vh-96px)]">
          {/* Sidebar Kiri */}
          <Sidebar />

          {/* Konten Utama (Scrollable) */}
          <main className="flex-1 overflow-y-auto bg-[#121212] md:rounded-lg md:m-2 md:ml-0 relative">
            {/* Header transparan yang statis di atas konten */}
            <header className="sticky top-0 h-16 w-full z-40 bg-transparent flex items-center px-6">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center cursor-not-allowed text-white/50">
                  &lt;
                </div>
                <div className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center cursor-not-allowed text-white/50">
                  &gt;
                </div>
              </div>
            </header>

            {/* Konten Halaman (dari page.tsx) */}
            <div className="-mt-16">{children}</div>
          </main>
        </div>

        {/* Player Bar Bawah */}
        <PlayerBar />
      </body>
    </html>
  );
}
