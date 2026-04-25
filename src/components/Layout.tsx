import { Outlet, Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import { BottomNav } from './BottomNav';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col pb-24 sm:pb-10 relative">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="mt-16 border-t-4 border-brand-black bg-[#1A1A1A] py-8 text-center sm:mb-0 mb-16">
        <div className="mx-auto max-w-7xl px-4 flex flex-col items-center gap-4">
          <Link to="/" className="font-display text-3xl font-black italic uppercase tracking-tighter text-brand-yellow hover:text-white transition-colors">
            FLASH POINT MY
          </Link>
          <div className="flex gap-4 font-sans text-xs font-bold uppercase tracking-widest text-[#F5F5F5] hover:[&>a]:text-brand-yellow [&>a]:transition-colors">
            <Link to="/about">About Us</Link>
            <Link to="/submit">Submit Tip</Link>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
          <p className="font-sans text-[10px] text-white/50">
            &copy; {new Date().getFullYear()} Flash Point Malaysia. All hype reserved.
          </p>
        </div>
      </footer>
      <BottomNav />
      {/* Bottom Sticky Banner */}
      <div className="fixed bottom-16 sm:bottom-0 left-0 right-0 z-40 flex items-center justify-between bg-brand-red px-6 py-2 text-white">
        <div className="flex items-center gap-2 font-sans text-[10px] font-bold uppercase tracking-widest sm:text-xs">
          <span className="text-sm">🔥</span> FLASH ALERT: Platinum Casino Event Highlights Trending Now!
        </div>
        <Link to="/story/platinum-casino-celebrity" className="font-sans text-[10px] font-black underline sm:text-xs whitespace-nowrap ml-4">
          READ MORE
        </Link>
      </div>
    </div>
  );
}
