import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturedStories from "./components/FeaturedStories";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#f7efdf] text-[#5c432a] relative">
      {/* Subtle vintage paper texture and vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')"}} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_60%,rgba(92,67,42,0.15)_100%)] mix-blend-multiply" />
      </div>

      {/* Content */}
      <Hero />
      <Features />
      <FeaturedStories />
      <Footer />
    </div>
  );
}

export default App;
