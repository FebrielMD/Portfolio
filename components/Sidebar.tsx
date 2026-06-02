import { Home, Search, Library, Plus, ArrowRight } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-black h-full hidden md:flex flex-col gap-2 p-2 shrink-0">
      {/* Top Menu */}
      <div className="bg-[#121212] rounded-lg p-4 flex flex-col gap-4">
        <a
          href="#home"
          className="flex items-center gap-4 text-white font-bold hover:text-white transition-colors cursor-pointer"
        >
          <Home className="w-6 h-6" />
          <span>Home</span>
        </a>
        <div className="flex items-center gap-4 text-gray-400 font-bold hover:text-white transition-colors cursor-not-allowed">
          <Search className="w-6 h-6" />
          <span>Search</span>
        </div>
      </div>

      {/* Library Section */}
      <div className="bg-[#121212] rounded-lg p-2 flex-1 flex flex-col">
        <div className="flex items-center justify-between p-2 text-gray-400 font-bold">
          <a
            href="#projects"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Library className="w-6 h-6" />
            <span>Your Library</span>
          </a>
          <div className="flex gap-2">
            <Plus className="w-5 h-5 hover:text-white hover:bg-white/10 rounded-full cursor-pointer p-0.5 transition-all" />
            <ArrowRight className="w-5 h-5 hover:text-white hover:bg-white/10 rounded-full cursor-pointer p-0.5 transition-all" />
          </div>
        </div>

        {/* Playlist/Projects List */}
        <div className="mt-4 px-2 space-y-3 overflow-y-auto">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-12 h-12 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-bold">FE</span>
            </div>
            <div>
              <p className="text-white font-medium group-hover:text-brand transition-colors">
                Frontend Vibes
              </p>
              <p className="text-gray-400 text-sm">Next.js & React</p>
            </div>
          </div>
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-12 h-12 rounded bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
              <span className="text-white text-xs font-bold">FL</span>
            </div>
            <div>
              <p className="text-white font-medium group-hover:text-brand transition-colors">
                Mobile Dev
              </p>
              <p className="text-gray-400 text-sm">Flutter & Dart</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
