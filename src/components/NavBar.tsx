import { Link } from 'react-router-dom';
import { Flame, Menu, Search } from 'lucide-react';

export function NavBar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-brand-yellow bg-brand-black px-6 py-3 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="text-white hover:opacity-75 sm:hidden">
            <Menu strokeWidth={3} className="h-6 w-6" />
          </button>
          
          <Link to="/" className="flex items-center gap-4 group">
            <div className="bg-brand-yellow px-3 py-1 font-display text-2xl font-black italic tracking-tighter text-brand-black transition-colors group-hover:bg-brand-red group-hover:text-white">
              FLASH POINT MY
            </div>
            <span className="hidden items-center border-l border-white/20 pl-4 text-[11px] font-bold uppercase tracking-widest opacity-80 md:flex h-5">
              What Malaysia is talking about.
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden gap-6 text-xs font-bold uppercase tracking-tight sm:flex">
            <Link to="/trending" className="text-brand-yellow hover:text-white transition-colors flex items-center gap-1">
              Trending
            </Link>
            <Link to="/city/kl" className="hover:text-brand-yellow transition-colors">Kuala Lumpur</Link>
            <Link to="/city/penang" className="hover:text-brand-yellow transition-colors">Penang</Link>
            <Link to="/city/johor-bahru" className="hover:text-brand-yellow transition-colors">Johor Bahru</Link>
            <Link to="/submit" className="hover:text-brand-yellow transition-colors">Submit Tips</Link>
          </nav>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
            <Search strokeWidth={3} className="h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}
