export function SubmitTip() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <div className="rounded-xl border-[4px] border-brand-black bg-brand-yellow p-8 shadow-[8px_8px_0_0_#0A0A0A]">
        <h1 className="mb-2 font-display text-5xl uppercase tracking-tiight">Drop A Tip</h1>
        <p className="mb-8 font-sans font-medium text-gray-800">
          Got something viral? A crazy video? A neighborhood secret? Send it to us. If it blows up, you get the credit.
        </p>
        
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="mb-2 block font-badges font-bold uppercase text-brand-black">Your Name / Handle</label>
            <input type="text" className="w-full rounded border-2 border-brand-black p-3 font-sans" placeholder="Optional" />
          </div>
          <div>
            <label className="mb-2 block font-badges font-bold uppercase text-brand-black">Link</label>
            <input type="url" className="w-full rounded border-2 border-brand-black p-3 font-sans" placeholder="TikTok, Twitter, or Insta link" required />
          </div>
          <div>
            <label className="mb-2 block font-badges font-bold uppercase text-brand-black">Why is this breaking?</label>
            <textarea className="w-full rounded border-2 border-brand-black p-3 font-sans" rows={4} placeholder="Give us the tea..." required></textarea>
          </div>
          <button type="submit" className="w-full rounded border-2 border-brand-black bg-brand-red py-4 font-badges text-xl font-black uppercase text-white transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#0A0A0A]">
            Submit to Action Desk
          </button>
        </form>
      </div>
    </div>
  );
}
