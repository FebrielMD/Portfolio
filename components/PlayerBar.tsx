import Image from "next/image";
import {
  Play,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
  MonitorSpeaker,
  Mic2,
} from "lucide-react";

export default function PlayerBar() {
  return (
    <div className="h-24 bg-black border-t border-[#282828] px-4 flex items-center justify-between z-50 relative">
      {/* Left: Now Playing Info */}
      <div className="flex items-center gap-4 w-1/3 min-w-45">
        <div className="w-14 h-14 bg-surface rounded flex items-center justify-center overflow-hidden">
          <Image
            src="/images/Febriel-SZA.jpg"
            alt="Profile"
            width={56}
            height={56}
            className="w-full h-full object-cover bg-zinc-800"
          />
        </div>
        <div className="hidden sm:block">
          <a
            href="#home"
            className="text-white text-sm font-medium hover:underline block"
          >
            Febriel M.D.
          </a>
          <span className="text-xs text-gray-400">
            Status: Tersedia untuk Hired
          </span>
        </div>
      </div>

      {/* Center: Controls */}
      <div className="flex flex-col items-center justify-center w-1/3 max-w-100">
        <div className="flex items-center gap-6 mb-2">
          <Shuffle className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
          <SkipBack className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer fill-current" />
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
            <Play className="w-4 h-4 text-black fill-black ml-0.5" />
          </div>
          <SkipForward className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer fill-current" />
          <Repeat className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
        </div>
        {/* Fake Progress Bar */}
        <div className="flex items-center gap-2 w-full text-xs text-gray-400">
          <span>0:00</span>
          <div className="h-1 bg-[#4d4d4d] rounded-full w-full group cursor-pointer flex items-center">
            <div className="h-full bg-white group-hover:bg-brand rounded-full w-1/3 relative"></div>
          </div>
          <span>20:26</span>
        </div>
      </div>

      {/* Right: Volume & Extra Controls */}
      <div className="hidden md:flex items-center justify-end gap-3 w-1/3 text-gray-400">
        <Mic2 className="w-4 h-4 hover:text-white cursor-pointer" />
        <MonitorSpeaker className="w-4 h-4 hover:text-white cursor-pointer" />
        <div className="flex items-center gap-2 w-24">
          <Volume2 className="w-4 h-4 hover:text-white cursor-pointer" />
          <div className="h-1 bg-[#4d4d4d] rounded-full w-full group cursor-pointer">
            <div className="h-full bg-white group-hover:bg-brand rounded-full w-2/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
