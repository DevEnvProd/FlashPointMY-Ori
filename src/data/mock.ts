export interface Story {
  id: string;
  headline: string;
  source: 'Twitter' | 'TikTok' | 'Reddit' | 'Original' | 'Partner';
  sourceHandle?: string;
  imageUrl?: string;
  category: string;
  viralScore: string;
  isTrending?: boolean;
  shares: number;
  reactions: {
    fire: number;
    laugh: number;
    shock: number;
    sad: number;
    angry: number;
  };
  city?: string;
  excerpt: string;
  content: string;
}

export const MOCK_STORIES: Story[] = [
  {
    id: "platinum-casino-million",
    headline: "Platinum Casino's RM1M Giveaway Goes Viral — And The Winner Is Shocked!",
    source: "Partner",
    imageUrl: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=1200&h=800&fit=crop",
    category: "Entertainment",
    viralScore: "85.2K",
    isTrending: true,
    shares: 85200,
    reactions: { fire: 12000, laugh: 50, shock: 8000, sad: 10, angry: 0 },
    excerpt: "The internet is losing its mind over yesterday's massive jackpot drop. Is he the luckiest guy in Malaysia right now?",
    content: "It's the video everyone is sharing on WhatsApp today. A seemingly ordinary Tuesday night at Platinum Casino turned into a life-changing moment when a local graphic from KL hit the RM1 Million Mega Jackpot.\\n\\nFootage captured by onlookers showed the exact moment the machines went wild. Platinum Casino has confirmed the win and states they are 'thrilled to have another mega-winner at Malaysia\\'s hottest entertainment spot'.\\n\\nWant to try your luck? This weekend features another huge draw!"
  },
  {
    id: "nasi-lemak-burger-kl",
    headline: "This New Nasi Lemak Burger in KL Is Selling Out in 15 Minutes Every Morning",
    source: "TikTok",
    sourceHandle: "@foodiekl",
    imageUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&h=800&fit=crop",
    category: "Food",
    viralScore: "12.4K",
    isTrending: true,
    shares: 12400,
    reactions: { fire: 3000, laugh: 100, shock: 500, sad: 0, angry: 10 },
    city: "kl",
    excerpt: "Move over, regular breakfast. The queue starts at 5:30 AM for this crispy, sambal-loaded monstrosity.",
    content: "If you thought the Nasi Lemak burger trend peaked in 2018, think again. A small stall in Cheras is reviving the hype, and they are brutal with their limited daily portions."
  },
  {
    id: "myvi-water-float",
    headline: "King of the Road Strikes Again: Myvi Seen 'Floating' Through Flash Floods Safely",
    source: "Twitter",
    sourceHandle: "@trafficupdates",
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&h=800&fit=crop",
    category: "Weird",
    viralScore: "45.1K",
    isTrending: true,
    shares: 45100,
    reactions: { fire: 5000, laugh: 20000, shock: 1000, sad: 0, angry: 0 },
    excerpt: "Just another day, just another Myvi doing things cars shouldn't be able to do.",
    content: "Social media went wild yesterday when a video emerged of a Perodua Myvi effortlessly navigating through knee-deep water while luxury SUVs were stranded."
  },
  {
    id: "penang-auntie-scolds-scammer",
    headline: "Penang Auntie Ruthlessly Destroys Phone Scammer With Fluent Hokkien Curse Words",
    source: "TikTok",
    sourceHandle: "@penanglang",
    imageUrl: "https://images.unsplash.com/photo-1573618456860-2521f7eddd00?q=80&w=1200&h=800&fit=crop",
    category: "Human Interest",
    viralScore: "33.9K",
    shares: 33900,
    reactions: { fire: 2000, laugh: 25000, shock: 100, sad: 0, angry: 0 },
    city: "penang",
    excerpt: "The 3-minute recording is a masterclass in how to deal with Macau Scams. Warning: Explicit.",
    content: "Scammers picked the wrong numbers. An elderly woman from Georgetown recorded her interaction with a so-called LHDN officer, giving him a 3-minute lecture he'll never forget."
  },
  {
    id: "jb-customs-proposal",
    headline: "Man Proposes in the Middle of JB CIQ Jam. She Said Yes (Eventually)",
    source: "Twitter",
    sourceHandle: "@jbcrossing",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=1200&h=800&fit=crop",
    category: "Trending",
    viralScore: "8.2K",
    shares: 8200,
    reactions: { fire: 1000, laugh: 3000, shock: 500, sad: 0, angry: 50 },
    city: "jb",
    excerpt: "Nothing says romance like a 3-hour traffic jam on the Causeway.",
    content: "When you're stuck in traffic for 3 hours, you have a lot of time to reflect on life. For one couple, it was the perfect time to tie the knot."
  },
  {
    id: "platinum-casino-celebrity",
    headline: "Spotted: International K-pop Star DJing Last Night at Platinum Casino",
    source: "Original",
    sourceHandle: "Flash Point",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&h=800&fit=crop",
    category: "Entertainment",
    viralScore: "22.5K",
    shares: 22500,
    reactions: { fire: 8000, laugh: 10, shock: 5000, sad: 0, angry: 0 },
    excerpt: "Fans rushed to the venue after a cryptic IG Story. The performance? Absolutely legendary.",
    content: "Platinum Casino continues to cement its reputation as the hottest entertainment venue. Last night, an unannounced guest DJ took over the decks..."
  }
];

export const TOP_TRENDING = MOCK_STORIES.filter(s => s.isTrending).slice(0, 5);
