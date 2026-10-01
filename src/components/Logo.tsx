import React from 'react';

interface LogoProps {
  size?: number | string;
  className?: string;
  showText?: boolean;
  textSize?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 40, 
  className = '', 
  showText = false,
  textSize = 'text-xl'
}) => {
  const numericSize = typeof size === 'number' ? size : parseInt(size, 10) || 40;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official GEVEN Coffee Logo with Yellow-Lime-Emerald-Cyan Gradient Ring */}
      <div 
        className="relative flex items-center justify-center shrink-0 rounded-full transition-transform duration-300 group-hover:scale-105"
        style={{ width: numericSize, height: numericSize }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Exact Gradient Ring matching the official favicon icon */}
            <linearGradient id="gevenRingGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#FACC15" />   {/* Yellow */}
              <stop offset="30%" stopColor="#A3E635" />  {/* Lime */}
              <stop offset="65%" stopColor="#34D399" />  {/* Mint / Emerald */}
              <stop offset="100%" stopColor="#06B6D4" /> {/* Cyan / Teal */}
            </linearGradient>

            {/* Subtle Inner Glow */}
            <radialGradient id="gevenInnerBg" cx="50%" cy="50%" r="50%">
              <stop offset="70%" stopColor="rgba(255, 255, 255, 0.05)" />
              <stop offset="100%" stopColor="rgba(20, 184, 166, 0.12)" />
            </radialGradient>
          </defs>

          {/* Background Inner Disc */}
          <circle cx="100" cy="100" r="92" fill="url(#gevenInnerBg)" />

          {/* Outer Gradient Ring with precise thickness */}
          <circle
            cx="100"
            cy="100"
            r="88"
            stroke="url(#gevenRingGrad)"
            strokeWidth="11"
            strokeLinecap="round"
          />

          {/* Coffee Cup Group */}
          <g stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900 dark:text-white">
            
            {/* Saucer / Plate */}
            <path d="M 52 142 C 52 154, 148 154, 148 142 C 148 132, 52 132, 52 142 Z" />

            {/* Cup Body */}
            <path d="M 60 88 C 60 134, 140 134, 140 88 Z" fill="none" />

            {/* Cup Handle */}
            <path d="M 139 94 C 158 94, 158 122, 133 122" fill="none" />

            {/* Steam Line 1 (Left) */}
            <path d="M 90 78 C 86 68, 96 58, 92 48" strokeWidth="8" />

            {/* Steam Line 2 (Right) */}
            <path d="M 108 72 C 104 60, 114 50, 110 38" strokeWidth="8" />
          </g>
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className={`font-extrabold tracking-tight text-slate-900 dark:text-white font-['Outfit'] ${textSize}`}>
              GEVEN
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              PRO
            </span>
          </div>
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 -mt-1 tracking-wide">
            Gestión de Ventas
          </span>
        </div>
      )}
    </div>
  );
};
