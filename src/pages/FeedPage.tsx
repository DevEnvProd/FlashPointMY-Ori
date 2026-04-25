import { useParams } from 'react-router-dom';
import { MOCK_STORIES } from '../data/mock';
import { StoryCard } from '../components/StoryCard';
import { Flame, MapPin } from 'lucide-react';

export function FeedPage({ type }: { type: 'trending' | 'city' }) {
  const { id } = useParams();
  
  const stories = type === 'trending' 
    ? MOCK_STORIES.filter(s => s.isTrending).sort((a, b) => b.shares - a.shares)
    : MOCK_STORIES.filter(s => s.city === id);

  const title = type === 'trending' ? '🔥 Trending Right Now' : `📍 ${id?.toUpperCase().replace('-', ' ')} Watch`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-8 border-b-4 border-brand-black pb-4">
        <h1 className="font-display text-4xl uppercase md:text-6xl">{title}</h1>
      </div>
      
      {stories.length === 0 ? (
         <div className="py-20 text-center font-sans text-xl text-gray-500">
           No stories found here yet. Check back soon!
         </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map(story => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      )}
    </div>
  );
}
