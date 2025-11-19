import React from "react";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M8 10v4l3.5 2.1c.7.4 1.5-.1 1.5-.9V8.8c0-.8-.8-1.3-1.5-.9L8 10z" fill="currentColor"/>
        <rect x="3" y="3" width="18" height="18" rx="9" />
      </svg>
    ),
    title: "Join our Telegram channel",
    color: "bg-[#b8e0ff] text-[#315a7a]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75">
        <polygon points="5,3 19,12 5,21" fill="currentColor" />
        <rect x="2" y="2" width="20" height="20" rx="10" />
      </svg>
    ),
    title: "Watch nostalgic stories come life",
    color: "bg-[#ffd6b5] text-[#7a4b2d]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.75">
        <rect x="3" y="6" width="18" height="12" rx="2" fill="currentColor"/>
        <rect x="9" y="2" width="6" height="4" rx="1" />
        <circle cx="8" cy="12" r="1.2" fill="#fff"/>
        <circle cx="16" cy="12" r="1.2" fill="#fff"/>
      </svg>
    ),
    title: "Order your collectible USB flash drives",
    color: "bg-[#cfe7e2] text-[#2f6157]",
  },
];

export default function Features() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <div key={i} className="rounded-full px-5 py-4 flex items-center gap-3 shadow-sm border border-black/5" style={{boxShadow:'inset 0 1px 0 rgba(255,255,255,.5), 0 8px 16px rgba(129,85,47,.08)'}}>
            <div className={`w-11 h-11 rounded-full flex items-center justify-center ${f.color}`}>{f.icon}</div>
            <div className="text-[#5b4633] font-medium">{f.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
