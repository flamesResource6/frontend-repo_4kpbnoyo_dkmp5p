import React from "react";

// Stylized retro cassette USB drive illustration
export default function RetroCassetteUSB({ className = "w-full h-auto" }) {
  return (
    <svg
      viewBox="0 0 560 320"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Retro cassette style USB drive"
    >
      <defs>
        <linearGradient id="beige" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f6e7cc" />
          <stop offset="100%" stopColor="#ead9bc" />
        </linearGradient>
        <linearGradient id="tape" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#43322d" />
          <stop offset="100%" stopColor="#2e221e" />
        </linearGradient>
        <filter id="paperNoise">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="1" stitchTiles="stitch"/>
          <feColorMatrix type="saturate" values="0.1"/>
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.05" />
          </feComponentTransfer>
          <feBlend mode="multiply" />
        </filter>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#7b6146" floodOpacity="0.25"/>
        </filter>
      </defs>

      {/* Cassette body */}
      <g filter="url(#softShadow)">
        <rect x="20" y="20" rx="18" ry="18" width="430" height="280" fill="url(#beige)" stroke="#8b6f55" strokeWidth="3"/>
        {/* Label strip */}
        <rect x="50" y="46" width="370" height="56" rx="8" fill="#fff6e6" stroke="#c9b08f" />
        <rect x="50" y="112" width="370" height="120" rx="10" fill="#f1e3c9" stroke="#c9b08f" />
        {/* Tape window */}
        <rect x="120" y="132" width="230" height="80" rx="8" fill="#d2c2a6" stroke="#b59b79" />
        <rect x="130" y="142" width="210" height="60" rx="6" fill="url(#tape)" />
        {/* Reels */}
        <g fill="#d9c7a7" stroke="#9a8368">
          <circle cx="175" cy="172" r="20" />
          <circle cx="295" cy="172" r="20" />
          <circle cx="175" cy="172" r="8" fill="#bda98a" />
          <circle cx="295" cy="172" r="8" fill="#bda98a" />
        </g>
        {/* Screws */}
        {[
          [45, 40], [425, 40], [45, 270], [425, 270]
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill="#b99f7d" stroke="#8f765b" />
            <rect x={cx - 5} y={cy - 1} width="10" height="2" fill="#7a664f" />
          </g>
        ))}
      </g>

      {/* USB plug attached on right */}
      <g transform="translate(430, 96)">
        <rect x="0" y="0" width="110" height="128" rx="10" fill="#d7e6eb" stroke="#7f9aa6" strokeWidth="3" />
        <rect x="10" y="12" width="90" height="34" rx="4" fill="#a9bfc8" />
        <rect x="14" y="16" width="18" height="26" rx="2" fill="#e6f0f4" />
        <rect x="38" y="16" width="18" height="26" rx="2" fill="#e6f0f4" />
        <rect x="10" y="54" width="90" height="60" rx="6" fill="#c7d6dd" />
        <path d="M25 68h60" stroke="#6e8792" strokeWidth="2" />
        <path d="M25 82h60" stroke="#6e8792" strokeWidth="2" />
        <path d="M25 96h60" stroke="#6e8792" strokeWidth="2" />
      </g>

      {/* Subtle texture overlay */}
      <rect x="20" y="20" width="520" height="280" rx="20" fill="#000" opacity="0.05" filter="url(#paperNoise)" />

      {/* Label text placeholder */}
      <text x="70" y="80" fontFamily="Georgia, 'Times New Roman', serif" fontSize="20" fill="#7a5c3a">
        Read-Along USB
      </text>
    </svg>
  );
}
