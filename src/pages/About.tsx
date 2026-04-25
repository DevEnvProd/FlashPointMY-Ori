export function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <div className="mb-12">
        <h1 className="mb-4 font-display text-6xl uppercase leading-none md:text-8xl">
          What is <br className="hidden md:block"/> FLASH<span className="text-white" style={{ textShadow: '2px 2px 0 #0A0A0A, -2px -2px 0 #0A0A0A, 2px -2px 0 #0A0A0A, -2px 2px 0 #0A0A0A' }}>POINT</span> MY?
        </h1>
        <div className="h-2 w-32 bg-brand-red"></div>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="mb-6 font-sans text-xl leading-relaxed text-gray-800">
            We are the speed of the internet. When Malaysia is talking about it, reacting to it, or meme-ing it, it lands on Flash Point MY first.
          </p>
          <p className="font-sans text-lg leading-relaxed text-gray-600">
            Forget slow news cycles. We aggregate the weird, the wonderful, the outrage, and the unmissable moments that define our daily digital lives. From a Myvi performing miracles to the latest local kopitiam getting hyped on TikTok, we bring the timeline to you.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="rounded-xl border-[3px] border-brand-black bg-brand-pink p-6 pb-8 shadow-[4px_4px_0_0_#0A0A0A]">
            <h3 className="mb-2 font-display text-2xl uppercase">Partner With Us</h3>
            <p className="font-sans font-medium text-brand-black">
              Want your brand to go genuinely viral? We integrate partner content directly into the feed, like our ongoing campaign highlighting the amazing entertainment options at Platinum Casino.
            </p>
            <button className="mt-4 rounded bg-brand-black px-4 py-2 font-badges text-xs font-bold uppercase text-white hover:bg-white hover:text-brand-black transition-colors">
              Get Media Kit
            </button>
          </div>
          
          <div className="rounded-xl border-[3px] border-brand-black bg-white p-6 shadow-[4px_4px_0_0_#0A0A0A]">
             <h3 className="mb-2 font-badges font-black uppercase text-brand-black">Contact Editorial</h3>
             <a href="mailto:tips@flashpoint.my" className="font-sans text-brand-red hover:underline block">tips@flashpoint.my</a>
             <a href="mailto:business@flashpoint.my" className="font-sans text-brand-red hover:underline block mt-2">business@flashpoint.my</a>
          </div>
        </div>
      </div>
    </div>
  );
}
