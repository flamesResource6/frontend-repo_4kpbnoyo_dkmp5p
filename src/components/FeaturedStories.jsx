import React from "react";

const stories = [
  { title: "Pinocchio", img: "https://images.unsplash.com/photo-1542557499-2f60b14533cd?q=80&w=1640&auto=format&fit=crop" },
  { title: "The Ugly Duckling", img: "https://images.unsplash.com/photo-1533903345306-15d1c30952de?q=80&w=1640&auto=format&fit=crop" },
  { title: "Winnie-the-Pooh", img: "https://images.unsplash.com/photo-1497302347632-904729bc24aa?q=80&w=1640&auto=format&fit=crop" },
  { title: "Peter Pan", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1640&auto=format&fit=crop" },
];

function CassetteCard({ title, img }) {
  return (
    <div className="bg-[#f3e4c9] rounded-2xl border border-[#cbb08b] p-4 shadow" style={{boxShadow:'inset 0 1px 0 rgba(255,255,255,.6), 0 20px 40px rgba(124,93,53,.15)'}}>
      <div className="bg-[#fff6e6] rounded-xl border border-[#d2b892] p-3 relative">
        <div className="aspect-[16/9] overflow-hidden rounded-md border border-[#b89a73]">
          <img src={img} alt={title} className="w-full h-full object-cover" style={{filter:'sepia(.2) saturate(.9)'}}/>
        </div>
        {/* cassette window */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] bg-[#d8c5a3] border border-[#b59a76] rounded-md p-2 flex items-center justify-between">
          <div className="w-6 h-6 rounded-full bg-[#cbb08b] border border-[#a78a62]"/>
          <div className="h-2 flex-1 mx-3 bg-[#3b2d26] rounded"/>
          <div className="w-6 h-6 rounded-full bg-[#cbb08b] border border-[#a78a62]"/>
        </div>
      </div>
      <div className="pt-8 text-center font-serif text-[#5c432a] text-lg">{title}</div>
    </div>
  );
}

export default function FeaturedStories() {
  return (
    <section className="py-16 md:py-20" id="stories">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif text-[#5c432a] text-center mb-10">Featured Stories</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((s) => (
            <CassetteCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
