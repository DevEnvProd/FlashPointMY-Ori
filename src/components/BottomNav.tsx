import { Link, useLocation } from 'react-router-dom';
import { Home, Flame, MapPin, Search } from 'lucide-react';
import { cn } from '../lib/utils';

export function BottomNav() {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: 'Feed', path: '/' },
    { icon: Flame, label: 'Trending', path: '/trending' },
    { icon: MapPin, label: 'Local', path: '/city/kl' },
    { icon: Search, label: 'Search', path: '/search' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t-[3px] border-brand-black bg-white sm:hidden">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
              isActive ? "text-brand-red" : "text-brand-black hover:text-brand-red"
            )}
          >
            <item.icon className={cn("h-6 w-6", isActive && "fill-current")} strokeWidth={isActive ? 2.5 : 2} />
            <span className="font-sans text-[10px] font-bold uppercase">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
