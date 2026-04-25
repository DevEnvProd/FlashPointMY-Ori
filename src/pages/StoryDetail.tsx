import { useParams, Link } from 'react-router-dom';
import { MOCK_STORIES } from '../data/mock';
import { Share2, ArrowLeft, Flame, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect } from 'react';

export function StoryDetail() {
  const { id } = useParams();
  const story = MOCK_STORIES.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!story) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <h1 className="font-display text-4xl">Story not found.</h1>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mx-auto max-w-4xl px-4 py-8"
    >
      <Link to="/" className="mb-6 inline-flex items-center gap-2 font-sans text-sm font-bold text-gray-500 hover:text-brand-red">
        <ArrowLeft className="h-4 w-4" /> Back to Feed
      </Link>

      <div className="mb-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="rounded-full border-2 border-brand-black bg-brand-yellow px-3 py-1 font-badges text-xs font-black uppercase text-brand-black">
            {story.category}
          </span>
          {story.isTrending && (
            <span className="flex items-center gap-1 font-badges text-xs font-bold uppercase text-brand-pink">
              <Flame className="h-4 w-4 fill-brand-pink" /> Trending Now
            </span>
          )}
        </div>
        
        <h1 className="mb-6 font-display text-4xl leading-tight uppercase md:text-6xl lg:text-7xl">
          {story.headline}
        </h1>

        <div className="flex items-center justify-between border-y-2 border-brand-black py-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 font-sans font-bold">
              <div className="h-10 w-10 overflow-hidden rounded-full border-2 border-brand-black bg-gray-200">
                 <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${story.source}`} alt="avatar" />
              </div>
              <div>
                <div className="text-brand-black">{story.source}</div>
                {story.sourceHandle && <div className="text-xs text-gray-500">{story.sourceHandle}</div>}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 font-sans font-bold">
            <button className="flex items-center gap-2 rounded-full border-2 border-brand-black bg-white px-4 py-2 shadow-[2px_2px_0_0_#0A0A0A] hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#0A0A0A] transition-all">
              <Share2 className="h-4 w-4" />
              <span className="hidden sm:inline">Share</span>
              <span className="text-brand-red">{story.viralScore}</span>
            </button>
          </div>
        </div>
      </div>

      <img 
        src={story.imageUrl} 
        alt={story.headline}
        className="mb-8 aspect-video w-full rounded-xl border-[3px] border-brand-black object-cover shadow-[6px_6px_0_0_#0A0A0A]"
      />

      <div className="mx-auto max-w-2xl">
        <p className="mb-8 font-quotes text-xl font-medium leading-relaxed text-gray-800 border-l-4 border-brand-red pl-4">
          {story.excerpt}
        </p>

        <div className="whitespace-pre-wrap font-sans text-lg leading-relaxed text-brand-charcoal">
          {story.content}
        </div>

        {/* Reaction Bar */}
        <div className="mt-12 rounded-xl border-[3px] border-brand-black bg-brand-yellow p-6 shadow-[4px_4px_0_0_#0A0A0A]">
          <h3 className="mb-4 text-center font-badges text-lg font-black uppercase">How does this make you feel?</h3>
          <div className="flex justify-center gap-4 sm:gap-8">
            <button className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-2">
              <span className="text-4xl sm:text-5xl drop-shadow-md">🔥</span>
              <span className="font-badges text-xs font-bold">{story.reactions.fire}</span>
            </button>
            <button className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-2">
              <span className="text-4xl sm:text-5xl drop-shadow-md">😂</span>
              <span className="font-badges text-xs font-bold">{story.reactions.laugh}</span>
            </button>
            <button className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-2">
              <span className="text-4xl sm:text-5xl drop-shadow-md">😮</span>
              <span className="font-badges text-xs font-bold">{story.reactions.shock}</span>
            </button>
            <button className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-2">
              <span className="text-4xl sm:text-5xl drop-shadow-md">😢</span>
              <span className="font-badges text-xs font-bold">{story.reactions.sad}</span>
            </button>
            <button className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-2">
              <span className="text-4xl sm:text-5xl drop-shadow-md">😡</span>
              <span className="font-badges text-xs font-bold">{story.reactions.angry}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
