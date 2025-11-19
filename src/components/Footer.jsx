import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#f2e3c6] border-t border-[#d1bfa2] mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex gap-4 text-[#7b5b3a]">
            {/* Social icons */}
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-[#e8d7b7] flex items-center justify-center hover:brightness-105 transition">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.05 4.28 4.28 0 0 0-7.29 3.9 12.14 12.14 0 0 1-8.82-4.47 4.28 4.28 0 0 0 1.32 5.72 4.25 4.25 0 0 1-1.94-.54v.06a4.28 4.28 0 0 0 3.43 4.19 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.14 12.14 0 0 0 6.57 1.92c7.88 0 12.2-6.53 12.2-12.2l-.01-.56A8.67 8.67 0 0 0 24 5.3a8.5 8.5 0 0 1-2.54.7z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-[#e8d7b7] flex items-center justify-center hover:brightness-105 transition">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.6.6.3 1 .7 1.3 1.3.3.5.5 1.2.6 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.6 2.4-.3.6-.7 1-1.3 1.3-.5.3-1.2.5-2.4.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.6-.6-.3-1-.7-1.3-1.3-.3-.5-.5-1.2-.6-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.9.6-2.4.3-.6.7-1 1.3-1.3.5-.3 1.2-.5 2.4-.6C8.4 2.2 8.8 2.2 12 2.2m0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-1.9.4-.5.2-.8.4-1.1.8-.3.3-.5.6-.7 1.1-.2.3-.3.9-.4 1.9-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.4 1.9.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.2.9.3 1.9.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 1.9-.4.5-.2.8-.4 1.1-.7.3-.3.6-.5.7-1.1.2-.3.3-.9.4-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.4-1.9-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.3-.2-.9-.3-1.9-.4-1.2-.1-1.6-.1-4.7-.1M12 5.8a6.2 6.2 0 1 1 0 12.4 6.2 6.2 0 0 1 0-12.4m7.9-2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-[#e8d7b7] flex items-center justify-center hover:brightness-105 transition">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M23.5 7.1s-.2-1.6-.8-2.3c-.7-.8-1.5-.8-1.9-.9C17.8 3.5 12 3.5 12 3.5h0s-5.8 0-8.8.4c-.4 0-1.2.1-1.9.9-.6.7-.8 2.3-.8 2.3S0 9.2 0 11.3v1.4c0 2.1.2 4.2.2 4.2s.2 1.6.8 2.3c.7.8 1.6.8 2 .9 1.5.1 6.7.4 9 .4 0 0 5.8 0 8.8-.4.4-.1 1.2-.1 1.9-.9.6-.7.8-2.3.8-2.3s.2-2.1.2-4.2v-1.4c0-2.1-.2-4.2-.2-4.2zM9.6 14.7V8.9l6 2.9-6 2.9z"/></svg>
            </a>
          </div>
        </div>
        <div className="md:justify-self-end w-full max-w-md">
          <form className="flex gap-3">
            <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-xl border border-[#cdb794] bg-[#fff8ec] placeholder-[#a78a62] text-[#5c432a] shadow-inner"/>
            <button className="px-5 py-3 rounded-xl bg-[#e88b38] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_20px_rgba(232,139,56,0.25)]">Sign up</button>
          </form>
        </div>
      </div>

      <div className="py-10 flex items-center justify-center">
        <div className="px-6 py-4 rounded-2xl bg-[#f6e7cc] border border-[#d4bea0] text-[#7a5c3a] font-serif">Read-Along USB</div>
      </div>
    </footer>
  );
}
