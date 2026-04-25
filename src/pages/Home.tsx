import { motion } from 'motion/react';
import { StoryCard } from '../components/StoryCard';
import { MOCK_STORIES, TOP_TRENDING } from '../data/mock';
import { Flame, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      {/* Stories-style top bar for Trending */}
      <div className="mb-8 flex gap-6 items-center overflow-x-auto bg-[#F5F5F5] py-4 px-6 border-b border-gray-200 no-scrollbar">
        <div className="flex flex-col items-center gap-1 min-w-[70px] shrink-0">
          <div className="w-14 h-14 rounded-full border-2 border-brand-pink p-0.5">
            <div className="w-full h-full rounded-full bg-brand-black flex items-center justify-center text-white text-xl">🔥</div>
          </div>
          <span className="font-sans text-[10px] font-bold uppercase">Live Now</span>
        </div>
        {TOP_TRENDING.map((story) => (
          <Link 
            key={`trending-${story.id}`} 
            to={`/story/${story.id}`}
            className="group flex flex-col items-center gap-1 min-w-[70px] shrink-0"
          >
            <div className="w-14 h-14 rounded-full border-2 border-brand-yellow p-0.5 overflow-hidden transition-transform group-hover:scale-105">
              <img src={story.imageUrl} alt="" className="w-full h-full rounded-full object-cover" />
            </div>
            <span className="font-sans text-[10px] font-bold uppercase truncate w-16 text-center">
              {story.category}
            </span>
          </Link>
        ))}
        <div className="ml-auto bg-black text-white px-4 py-2 rounded-full text-xs font-black flex items-center gap-2 shrink-0 hover:bg-brand-red transition-colors cursor-pointer whitespace-nowrap">
          <span className="text-brand-pink">●</span> VIRAL LEADERBOARD
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Main Feed */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="mb-6 flex items-center justify-between">
            <h1 className="font-display text-4xl uppercase tracking-tiight">The Feed</h1>
            <div className="flex gap-2">
              <span className="rounded-full border-2 border-brand-black bg-brand-black px-3 py-1 font-sans text-xs font-bold text-white">Latest</span>
              <span className="rounded-full border-2 border-brand-black bg-white px-3 py-1 font-sans text-xs font-bold text-brand-black">Viral</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {MOCK_STORIES.map((story, index) => (
              <StoryCard key={story.id} story={story} isFeatured={index === 0} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex w-full flex-col gap-6 md:w-[320px] shrink-0">
          {/* Platinum Casino Integration */}
          <div className="bg-brand-black text-brand-yellow p-5 border-t-4 border-brand-pink flex flex-col gap-3">
            <span className="font-sans text-[10px] font-bold text-white tracking-[0.2em] uppercase opacity-60">Sponsored Partner</span>
            <h2 className="font-display text-2xl font-black italic uppercase leading-none">PLATINUM CASINO: RM1M GIVEAWAY GOES VIRAL</h2>
            <img 
              src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=600&h=400&fit=crop"
              alt="Platinum Casino"
              className="my-1 aspect-video w-full border-[1px] border-white/20 object-cover"
            />
            <p className="font-sans text-xs text-white/80 leading-relaxed">
              Malaysia's hottest entertainment spot is giving back. Exclusive event highlights inside.
            </p>
            <a href="#" className="bg-brand-pink text-white text-center py-2 text-xs font-black uppercase tracking-wider mt-2 hover:bg-white hover:text-brand-pink transition-colors">
              Claim Bonus
            </a>
          </div>

          {/* Top 5 Leaderboard */}
          <div className="flex-1 border-2 border-black p-4 bg-white">
            <h2 className="font-display font-black uppercase italic text-xl mb-4 flex items-center gap-2">
               <span className="text-brand-red">⚡</span> HOTTEST TOP 5
            </h2>
            <div className="space-y-4">
              {TOP_TRENDING.map((story, idx) => (
                <Link key={story.id} to={`/story/${story.id}`} className="group flex gap-4 border-b border-black/10 pb-2 last:border-0 hover:bg-gray-50/50">
                  <span className="font-display text-3xl font-black text-brand-yellow opacity-50 group-hover:opacity-100 transition-opacity">
                    0{idx + 1}
                  </span>
                  <p className="font-sans text-xs font-bold uppercase leading-tight group-hover:text-brand-red transition-colors">
                    {story.headline}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* City Pick */}
          <div className="bg-brand-yellow p-3 text-black font-sans font-black uppercase text-center text-xs tracking-tighter">
             <MapPin className="inline h-3 w-3 mr-1" />
             SETTING CITY TO: KUALA LUMPUR (Change)
          </div>
        </div>
      </div>
    </div>
  );
}
