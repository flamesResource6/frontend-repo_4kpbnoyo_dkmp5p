import React from "react";
import RetroCassetteUSB from "./RetroCassetteUSB";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Watercolor storybook background */}
      <div
        className="absolute inset-0 -z-10 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(1200px 600px at 20% 20%, rgba(255, 238, 200, 0.5), transparent 60%), url('https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: "cover, cover",
          backgroundPosition: "center, center",
          filter: "sepia(0.3) saturate(0.8) hue-rotate(-10deg) brightness(0.98) blur(1px)",
        }}
      />

      {/* Soft vignette and texture */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.45),rgba(234,218,193,0.7)_40%,rgba(110,81,44,0.15)_80%)]" />
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="w-full h-full opacity-[0.08]" style={{backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')"}}/>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 font-[\"Playfair Display\",serif] text-[#5c432a] drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
            <span className="font-extralight italic block text-[color:var(--sepia-ink,#5c432a)]">Relive the Magic of</span>
            <span className="block font-extrabold not-italic">Classic Read-Along Stories</span>
          </h1>
          <p className="text-lg md:text-xl text-[#6b4f31]/90 leading-relaxed font-serif max-w-prose">
            Mixing old nostalgia and new technology to bring the best audio-visual experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#telegram"
              className="px-5 py-3 rounded-full bg-[#4da3ff] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_20px_rgba(77,163,255,0.25)] hover:brightness-105 transition"
            >
              Join Telegram Channel
            </a>
            <a
              href="#shop"
              className="px-5 py-3 rounded-full bg-[#e88b38] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_20px_rgba(232,139,56,0.25)] hover:brightness-105 transition"
            >
              Shop Flash USB Cassettes
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-[#f8e9cf] to-[#ead7b4] opacity-70 blur-xl" />
          <RetroCassetteUSB className="relative z-10 w-full max-w-xl mx-auto" />
        </div>
      </div>
    </section>
  );
}
