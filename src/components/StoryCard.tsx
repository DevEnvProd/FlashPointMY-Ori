import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, MessageCircle, Flame } from 'lucide-react';
import { Story } from '../data/mock';
import { cn } from '../lib/utils';
import { useState } from 'react';

const formatShares = (shares: number) => {
  if (shares >= 1000) return (shares / 1000).toFixed(1) + 'K';
  return shares.toString();
};

export function StoryCard({ story, isFeatured = false }: { story: Story, isFeatured?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={cn(
        "group relative flex overflow-hidden bg-white transition-all hover:-translate-y-1",
        isFeatured 
          ? "flex-col border-[3px] border-black shadow-[8px_8px_0_0_#FFDE17] md:flex-row md:col-span-2 md:h-96" 
          : "flex-col border-2 border-black hover:shadow-[4px_4px_0_0_#FFDE17]"
      )}
    >
      {story.isTrending && isFeatured && (
        <div className="absolute left-4 top-4 z-20">
          <span className="bg-brand-red px-3 py-1 font-badges text-xs font-black uppercase italic text-white shadow-sm">
            Trending Now
          </span>
        </div>
      )}

      {story.source === 'Partner' && (
        <div className="absolute left-4 top-4 z-20">
          <span className="bg-brand-yellow px-3 py-1 font-badges text-[10px] font-black uppercase tracking-widest text-brand-black">
            Sponsored Partner
          </span>
        </div>
      )}

      <div className={cn(
        "relative overflow-hidden bg-gray-200",
        isFeatured ? "md:w-1/2" : "aspect-video w-full border-b-2 border-black"
      )}>
        <img 
          src={story.imageUrl} 
          alt={story.headline}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Flash strobe overlay effect on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.div 
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-white"
            />
          )}
        </AnimatePresence>
      </div>

      <div className={cn("flex flex-1 flex-col bg-white", isFeatured ? "p-6 md:w-1/2" : "p-4")}>
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {!isFeatured && story.isTrending && <Flame className="h-4 w-4 fill-brand-red text-brand-red" />}
            <span className="font-sans text-[10px] font-black uppercase tracking-widest text-gray-500">
              {story.category}
            </span>
          </div>
          <span className="flex items-center gap-1 font-sans text-[10px] font-black uppercase text-gray-500">
             {formatShares(story.shares)} Shares • 2h ago
          </span>
        </div>

        <Link to={`/story/${story.id}`} className="block flex-1 group-hover:text-brand-red transition-colors">
          <h2 className={cn("font-display font-black uppercase leading-tight tracking-tight", isFeatured ? "text-3xl md:text-5xl lg:text-5xl" : "text-xl")}>
            {story.headline}
          </h2>
          {isFeatured && (
            <p className="mt-4 text-sm text-gray-600 line-clamp-2 md:line-clamp-3 font-sans">
              {story.excerpt}
            </p>
          )}
        </Link>
        
        <div className="mt-4 flex items-center justify-between pt-4">
          <div className="flex gap-3">
             <button className="flex items-center gap-1 text-2xl hover:scale-110 transition-transform">🔥<span className="text-xs font-bold text-brand-black">{story.reactions.fire}</span></button>
             <button className="flex items-center gap-1 text-2xl hover:scale-110 transition-transform">😂<span className="text-xs font-bold text-brand-black">{story.reactions.laugh}</span></button>
             <button className="flex items-center gap-1 text-2xl hover:scale-110 transition-transform">😮<span className="text-xs font-bold text-brand-black">{story.reactions.shock}</span></button>
          </div>
          {!isFeatured && (
             <p className="font-sans text-[10px] font-bold text-gray-400 uppercase">
               via {story.source}
             </p>
          )}
          {isFeatured && (
             <button className="bg-brand-black text-white px-6 py-2 font-bold uppercase text-xs hover:bg-brand-red transition-colors">
               Share Story
             </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
