import React, { useEffect, useState } from 'react';
import { DecorativeTile } from './DecorativeTile';

interface SplashScreenProps {
  onComplete?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<'entering' | 'settled' | 'exiting' | 'done'>('entering');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 1. Initial tile assemble phase
    const settleTimer = setTimeout(() => {
      setPhase('settled');
    }, 400);

    // 2. Smooth progress bar animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    // 3. Initiate silky exit transition at 1.8s
    const exitTimer = setTimeout(() => {
      setPhase('exiting');
    }, 1800);

    // 4. Fully unmount after transition completes
    const doneTimer = setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, 2450);

    return () => {
      clearTimeout(settleTimer);
      clearInterval(interval);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (phase === 'done') {
    return null;
  }

  const handleSkip = () => {
    setPhase('exiting');
    setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, 400);
  };

  return (
    <aside
      aria-label="Welcome Splash Screen"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        phase === 'exiting'
          ? 'opacity-0 scale-[1.04] pointer-events-none'
          : 'opacity-100 scale-100'
      }`}
      style={{
        backgroundColor: '#FCFAEF',
      }}
      onClick={handleSkip}
    >
      {/* Ambient Watercolor Aura */}
      <div
        className="absolute w-[450px] sm:w-[550px] h-[450px] sm:h-[550px] rounded-full blur-[100px] pointer-events-none opacity-40 transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(circle, #D4E2FD 0%, #F5B4C2 50%, transparent 75%)',
        }}
        aria-hidden="true"
      />

      {/* Centerpiece: Symmetrical Indian Decorative Tile Medallion */}
      <div className="relative z-10 flex flex-col items-center">
        {/* 2x2 Blooming Floral Tile Cluster */}
        <div
          className={`grid grid-cols-2 gap-3 p-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-[0_16px_38px_-8px_rgba(35,25,20,0.14)] border border-white/80 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            phase === 'entering'
              ? 'scale-90 opacity-0 rotate-[-6deg]'
              : 'scale-100 opacity-100 rotate-0'
          }`}
        >
          {/* Tile 1: Top-Left Indigo Clover */}
          <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-[10px] overflow-hidden shadow-xs transition-transform duration-500 hover:rotate-3">
            <DecorativeTile
              tile={{
                id: 'splash-1',
                type: 'pink-cream-tulips-navy',
                name: 'Royal Blue Clover',
              }}
              size={60}
            />
          </div>

          {/* Tile 2: Top-Right Golden Rosette */}
          <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-[10px] overflow-hidden shadow-xs transition-transform duration-500 hover:-rotate-3">
            <DecorativeTile
              tile={{
                id: 'splash-2',
                type: 'rosette-mandala-yellow',
                name: 'Golden Rosette',
              }}
              size={60}
            />
          </div>

          {/* Tile 3: Bottom-Left Emerald Diamond */}
          <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-[10px] overflow-hidden shadow-xs transition-transform duration-500 hover:-rotate-3">
            <DecorativeTile
              tile={{
                id: 'splash-3',
                type: 'diamond-emerald',
                name: 'Emerald Diamond',
              }}
              size={60}
            />
          </div>

          {/* Tile 4: Bottom-Right Crimson Petal Mandala */}
          <div className="w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-[10px] overflow-hidden shadow-xs transition-transform duration-500 hover:rotate-3">
            <DecorativeTile
              tile={{
                id: 'splash-4',
                type: 'petal-mandala-red',
                name: 'Crimson Mandala',
              }}
              size={60}
            />
          </div>

          {/* Center Floating Monogram Emblem with Pixel Spark */}
          <div className="absolute inset-0 m-auto w-12 h-12 sm:w-14 sm:h-14 bg-[#1C2C5E] rounded-xl border border-white/50 shadow-[0_8px_20px_rgba(10,18,48,0.35)] flex items-center justify-center pointer-events-none">
            <span className="font-pixelify font-bold text-white text-[20px] sm:text-[22px] tracking-wider leading-none nav-logo-glow">
              AP
            </span>
          </div>
        </div>

        {/* Branding & Subtitle */}
        <div className="mt-8 text-center flex flex-col items-center">
          <div className="flex items-center justify-center gap-3">
            {/* Left Tiny Diamond Sparkle */}
            <svg width="10" height="10" viewBox="0 0 17 17" fill="none" className="opacity-70 animate-spin-slow">
              <path d="M0.24385 8.48456C-0.0784474 8.28275 -0.0803963 7.80375 0.240439 7.59963C1.25293 6.95547 3.10509 5.71857 4.24553 4.60458C5.50871 3.37068 6.90002 1.30948 7.58823 0.238511C7.79051 -0.076272 8.25929 -0.0792065 8.46405 0.233969C9.12937 1.25155 10.4363 3.16199 11.5987 4.33474C12.8062 5.55299 14.7923 6.91825 15.8351 7.60292C16.1478 7.80826 16.145 8.27682 15.8299 8.47852C14.7843 9.14781 12.7993 10.4816 11.5987 11.6879C10.4289 12.8632 9.13412 14.7911 8.47016 15.8293C8.26532 16.1496 7.78657 16.1466 7.58549 15.8239C6.93695 14.7832 5.67292 12.8569 4.51537 11.6879C3.31296 10.4736 1.31049 9.15243 0.24385 8.48456Z" fill="#222121" />
            </svg>

            <h1 className="font-['Montserrat',sans-serif] text-[18px] sm:text-[21px] font-bold tracking-[0.22em] text-[#292827] uppercase">
              Akanksha Pawar
            </h1>

            {/* Right Tiny Diamond Sparkle */}
            <svg width="10" height="10" viewBox="0 0 17 17" fill="none" className="opacity-70 animate-spin-slow">
              <path d="M0.24385 8.48456C-0.0784474 8.28275 -0.0803963 7.80375 0.240439 7.59963C1.25293 6.95547 3.10509 5.71857 4.24553 4.60458C5.50871 3.37068 6.90002 1.30948 7.58823 0.238511C7.79051 -0.076272 8.25929 -0.0792065 8.46405 0.233969C9.12937 1.25155 10.4363 3.16199 11.5987 4.33474C12.8062 5.55299 14.7923 6.91825 15.8351 7.60292C16.1478 7.80826 16.145 8.27682 15.8299 8.47852C14.7843 9.14781 12.7993 10.4816 11.5987 11.6879C10.4289 12.8632 9.13412 14.7911 8.47016 15.8293C8.26532 16.1496 7.78657 16.1466 7.58549 15.8239C6.93695 14.7832 5.67292 12.8569 4.51537 11.6879C3.31296 10.4736 1.31049 9.15243 0.24385 8.48456Z" fill="#222121" />
            </svg>
          </div>

          <p className="font-sans-ui text-[12px] sm:text-[13px] font-semibold text-[#C99492] tracking-[0.28em] uppercase mt-2">
            UX Designer • Portfolio
          </p>

          {/* Minimalist Progress Meter */}
          <div className="w-36 h-[2px] bg-black/10 rounded-full mt-6 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#202E5C] via-[#C99492] to-[#E5A93D] rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Subtle Skip Hint at bottom */}
      <span className="absolute bottom-6 font-sans-ui text-[11px] text-[#292827]/40 tracking-wider transition-opacity hover:opacity-100 cursor-pointer">
        Tap anywhere to enter
      </span>
    </aside>
  );
};
