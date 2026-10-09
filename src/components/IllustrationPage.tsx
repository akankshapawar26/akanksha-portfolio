import React, { useState, useEffect, useRef } from 'react';
import { PatternRenderer } from './TilePatterns';
import { ClosingSection } from './ClosingSection';

interface IllustrationPageProps {
  onBack: () => void;
}

interface Artwork {
  id: string;
  title: string;
  medium: string;
  year: string;
  notes: string;
  imageSrc: string;
}

export const IllustrationPage: React.FC<IllustrationPageProps> = ({ onBack }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const carouselContainerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number>(0);
  const mouseStartXRef = useRef<number | null>(null);

  // 6 Authentic Illustrations uploaded by Akanksha in assets/illustration
  const artworks: Artwork[] = [
    {
      id: 'illustration-1',
      title: 'The Feline & The Bloom',
      medium: 'Vector Silhouette & Flora',
      year: '2025',
      imageSrc: '/assets/illustration/illustrate%201.png',
      notes:
        'Signature piece featuring high-contrast geometric curves, a velvet silhouette feline, and an organic blooming petal stem.',
    },
    {
      id: 'illustration-2',
      title: 'Silent Horizons & Architectural Form',
      medium: 'Digital Painting & Atmosphere',
      year: '2025',
      imageSrc: '/assets/illustration/illustrate%202.jpg',
      notes:
        'A contemplative exploration of space, textured gradients, minimalist architectural poise, and serene atmospheric solitude.',
    },
    {
      id: 'illustration-3',
      title: 'Botanical Solitude & Foliage',
      medium: 'Procreate Gouache Wash',
      year: '2025',
      imageSrc: '/assets/illustration/illustrate%203.jpg',
      notes:
        'Lush verdant layers exploring organic foliage rhythm, light filtering through canopy, and quiet botanical forms.',
    },
    {
      id: 'illustration-4',
      title: 'Terracotta & Twilight Harmony',
      medium: 'Warm Digital Acrylic',
      year: '2024',
      imageSrc: '/assets/illustration/illustrate%204.jpg',
      notes:
        'Earthy warmth, geometric curves, and rich contrasting tones celebrating tactile materials and natural hues.',
    },
    {
      id: 'illustration-5',
      title: 'Serene Haven & Morning Solace',
      medium: 'Character & Color Vignette',
      year: '2025',
      imageSrc: '/assets/illustration/illustrate%205.jpg',
      notes:
        'Expressive color palette and warm gouache-inspired textures depicting intimate everyday comfort and peaceful morning reflections.',
    },
    {
      id: 'illustration-6',
      title: 'Nocturne Reverie & Embers',
      medium: 'Digital Gouache & Paper Texture',
      year: '2024',
      imageSrc: '/assets/illustration/illustrate%206.jpg',
      notes:
        'Striking tonal balance between dramatic dusk shadows, luminous sunset embers, and bold expressive silhouette composition.',
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBack();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : artworks.length - 1));
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        setActiveIndex((prev) => (prev < artworks.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack, artworks.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartXRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left -> Next slide
        setActiveIndex((prev) => (prev < artworks.length - 1 ? prev + 1 : 0));
      } else {
        // Swiped right -> Previous slide
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : artworks.length - 1));
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStartXRef.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (mouseStartXRef.current === null) return;
    const diff = mouseStartXRef.current - e.clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Dragged left -> Next slide
        setActiveIndex((prev) => (prev < artworks.length - 1 ? prev + 1 : 0));
      } else {
        // Dragged right -> Previous slide
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : artworks.length - 1));
      }
    }
    mouseStartXRef.current = null;
  };

  return (
    <div className="min-h-screen w-full bg-white text-[#292827] select-none flex flex-col items-center">
      {/* Fixed Back to Portfolio Floating Button */}
      <button
        type="button"
        onClick={onBack}
        title="Back to Portfolio"
        className="fixed top-5 left-5 sm:top-7 sm:left-7 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#754640] hover:text-[#323131] border border-[#E5DFD3] shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
      >
        <span className="text-lg font-bold">←</span>
      </button>

      {/* ========================================================= */}
      {/* 1. HEADER BANNER                                          */}
      {/* Soft Mint #D5FFEF with Akanksha's Decorative Tiles         */}
      {/* ========================================================= */}
      <header className="relative w-full bg-[#D5FFEF] overflow-hidden border-b border-[#BFF3DF]">
        {/* UPPER-LEFT CLUSTER (3 TILES: Exact Home Page / Graphic Design Sizing) */}
        <div
          className="absolute top-16 sm:top-20 md:top-22 left-6 sm:left-10 lg:left-16 grid grid-cols-2 gap-2 pointer-events-none z-10"
          aria-hidden="true"
        >
          {/* Row 0, Col 0: Diamond Blue */}
          <div className="w-[42px] h-[42px] sm:w-[62px] sm:h-[62px] lg:w-[80px] lg:h-[80px] rounded-[8px] sm:rounded-[10px] lg:rounded-[14px] overflow-hidden shadow-xs">
            <PatternRenderer type="diamond-blue" className="w-full h-full" />
          </div>

          {/* Row 0, Col 1: Four Flowers Green */}
          <div className="w-[42px] h-[42px] sm:w-[62px] sm:h-[62px] lg:w-[80px] lg:h-[80px] rounded-[8px] sm:rounded-[10px] lg:rounded-[14px] overflow-hidden shadow-xs">
            <PatternRenderer type="four-flowers-green" className="w-full h-full" />
          </div>

          {/* Row 1, Col 0: Blue Flower on Yellow */}
          <div className="w-[42px] h-[42px] sm:w-[62px] sm:h-[62px] lg:w-[80px] lg:h-[80px] rounded-[8px] sm:rounded-[10px] lg:rounded-[14px] overflow-hidden shadow-xs">
            <PatternRenderer type="blue-flower-yellow" className="w-full h-full" />
          </div>

          {/* Row 1, Col 1 is empty in reference */}
          <div className="w-[42px] h-[42px] sm:w-[62px] sm:h-[62px] lg:w-[80px] lg:h-[80px]" />
        </div>

        {/* RIGHT-SIDE VERTICAL STACK (2 TILES: Exact Home Page / Graphic Design Sizing) */}
        <div
          className="absolute top-16 sm:top-20 md:top-22 right-6 sm:right-10 lg:right-16 flex flex-col gap-2 pointer-events-none z-10"
          aria-hidden="true"
        >
          {/* Top-Right: Pink Cream Tulips on Navy */}
          <div className="w-[42px] h-[42px] sm:w-[62px] sm:h-[62px] lg:w-[80px] lg:h-[80px] rounded-[8px] sm:rounded-[10px] lg:rounded-[14px] overflow-hidden shadow-xs">
            <PatternRenderer type="pink-cream-tulips-navy" className="w-full h-full" />
          </div>

          {/* Bottom-Right: Petal Mandala Red */}
          <div className="w-[42px] h-[42px] sm:w-[62px] sm:h-[62px] lg:w-[80px] lg:h-[80px] rounded-[8px] sm:rounded-[10px] lg:rounded-[14px] overflow-hidden shadow-xs">
            <PatternRenderer type="petal-mandala-red" className="w-full h-full" />
          </div>
        </div>

        {/* Editorial Headline */}
        <div className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 pt-[180px] sm:pt-[240px] md:pt-[270px] lg:pt-[295px] pb-10 sm:pb-12 md:pb-14 relative z-20">
          <h1 className="font-editorial text-[36px] sm:text-[44px] md:text-[50px] lg:text-[55px] font-bold text-[#323131] tracking-tight leading-tight select-text">
            Illustration
          </h1>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. ARTIST DIGITAL WORKSPACE (Hero iPad Air 11-inch)        */}
      {/* White background section with centerpiece iPad Air        */}
      {/* ========================================================= */}
      <main className="w-full bg-white py-10 sm:py-14 md:py-16 px-3 sm:px-6 md:px-10 flex-1 relative overflow-hidden flex flex-col items-center">
        {/* ========================================================= */}
        {/* ONE BIG HERO IPAD AIR (11-INCH: 247.6 × 178.5 × 6.1 mm)   */}
        {/* Balanced, realistic physical aspect ratio                  */}
        {/* ========================================================= */}
        <div className="w-full max-w-[1020px] relative z-20 flex flex-col items-center justify-center pt-5 sm:pt-6">
          {/* 11-inch iPad Air Device Enclosure */}
          <div className="relative w-full max-w-[760px] sm:max-w-[860px] md:max-w-[940px] lg:max-w-[980px]">
            {/* Magnetically Attached Apple Pencil 2 (Real-scale: 166 mm length / 247.6 mm iPad = 67% length, 8.9 mm diameter) */}
            <div
              className="absolute -top-[16px] sm:-top-[18px] md:-top-[20px] left-1/2 -translate-x-1/2 w-[67%] max-w-[540px] h-[19px] sm:h-[22px] md:h-[24px] z-30 group cursor-default transition-all duration-200"
              title="Apple Pencil (2nd Generation) · Magnetically docked"
            >
              {/* Magnetic Snap Contact Shadow onto iPad edge */}
              <div className="absolute inset-x-4 -bottom-1 h-2 bg-black/45 blur-[3px] rounded-full pointer-events-none" />

              {/* Floating Apple Pencil Battery HUD on Hover */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-40 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md text-white shadow-lg whitespace-nowrap">
                <span className="text-[10px] font-sans font-medium"> Pencil</span>
                <div className="w-4 h-2 border border-white/60 rounded-[2px] p-[1px] flex items-center">
                  <div className="h-full w-full bg-[#34C759] rounded-[1px]" />
                </div>
                <span className="text-[9.5px] font-mono text-[#34C759] font-bold">100%</span>
              </div>

              {/* Apple Pencil Assembly */}
              <div
                className="relative w-full h-full flex flex-row items-center rounded-sm transition-transform duration-200 group-hover:-translate-y-0.5"
                style={{
                  filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.25)) drop-shadow(0 1px 2px rgba(0,0,0,0.18))',
                }}
              >
                {/* Precision Conical Nib (Tip) */}
                <div className="relative h-full flex items-center flex-shrink-0 -mr-[1px] z-20">
                  <svg
                    className="h-full w-6 sm:w-7 md:w-8 overflow-visible"
                    viewBox="0 0 32 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Conical Tip Body */}
                    <path
                      d="M32 0 L6 9.5 C3 10.5 3 11.5 6 12.5 L32 22 Z"
                      fill="url(#pencilTipGradLand)"
                    />
                    {/* Fine Graphite / Silicone Sensor Point */}
                    <path
                      d="M6 9.5 C3.5 10.5 3.5 11.5 6 12.5 L1 11.5 C0 11 0 11 1 10.5 Z"
                      fill="#2E3033"
                    />
                    {/* Tip Seam Ring */}
                    <line x1="31.5" y1="0" x2="31.5" y2="22" stroke="#D1D1D6" strokeWidth="0.8" />
                    <defs>
                      <linearGradient id="pencilTipGradLand" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="40%" stopColor="#F5F5F7" />
                        <stop offset="80%" stopColor="#E5E5EA" />
                        <stop offset="100%" stopColor="#D8D8DC" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Main Seamless Cylindrical Barrel */}
                <div
                  className="h-full flex-1 relative flex items-center justify-between px-3 sm:px-4 z-10"
                  style={{
                    background:
                      'linear-gradient(180deg, #FFFFFF 0%, #FBFBFC 22%, #F2F2F5 60%, #FFFFFF 72%, #E5E5E9 100%)',
                    borderTop: '0.5px solid rgba(255,255,255,0.8)',
                    borderBottom: '0.5px solid rgba(0,0,0,0.12)',
                  }}
                >
                  {/* Double-Tap Tool Switch Zone */}
                  <div
                    className="w-7 sm:w-9 h-[55%] rounded-full border border-black/[0.07] bg-black/[0.02] flex items-center justify-center"
                    title="Double-tap zone for Procreate brush switch"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                  </div>

                  {/* Laser-etched  Pencil Logo */}
                  <div className="flex items-center gap-1 select-none opacity-75">
                    <span className="text-[8px] sm:text-[9.5px] text-[#86868B] font-sans font-medium tracking-tight">
                      Pencil
                    </span>
                  </div>

                  {/* Magnetic Flat Facet Highlight Strip */}
                  <div className="w-10 sm:w-14 h-[40%] rounded-full bg-white/40" />
                </div>

                {/* Rear Flat Precision End Cap */}
                <div
                  className="h-full w-2 sm:w-2.5 rounded-r-[3px] flex-shrink-0 z-10"
                  style={{
                    background: 'linear-gradient(180deg, #F0F0F2 0%, #FFFFFF 45%, #E2E2E6 100%)',
                    borderLeft: '1px solid #D4D4D9',
                    borderTop: '0.5px solid rgba(255,255,255,0.8)',
                    borderBottom: '0.5px solid rgba(0,0,0,0.15)',
                  }}
                />
              </div>
            </div>

            {/* iPad Air Hardware Chassis: 11-inch physical aspect ratio (247.6 : 178.5) */}
            {/* Precision 6.1mm flat-edge Space Gray aluminum enclosure */}
            <div
              className="relative w-full rounded-[26px] sm:rounded-[32px] p-2 sm:p-2.5 md:p-3 border border-[#3E424B]/80 flex flex-col shadow-2xl"
              style={{
                aspectRatio: '247.6 / 178.5',
                background: 'linear-gradient(155deg, #2E3137 0%, #1A1C1F 65%, #151618 100%)',
                boxShadow:
                  '0 28px 60px -10px rgba(20, 16, 12, 0.55), 0 10px 22px rgba(0, 0, 0, 0.3), inset 0 1px 1px rgba(255,255,255,0.35), inset 0 -2px 3px rgba(0,0,0,0.9), 0 0 0 1.5px #4B4F58',
              }}
            >
              {/* Precision 6.1mm Chamfer Highlight Border */}
              <div
                className="absolute inset-[1.5px] rounded-[24px] sm:rounded-[30px] pointer-events-none border border-white/[0.08]"
                aria-hidden="true"
              />

              {/* Hardware buttons */}
              {/* Power Button / Touch ID on top right */}
              <div
                className="absolute -top-[3px] right-12 sm:right-16 w-10 sm:w-12 h-[3px] rounded-t-xs bg-[#3E4249] shadow-xs"
                title="Top Button / Touch ID sensor"
                aria-hidden="true"
              />
              {/* Volume Buttons on Left Edge */}
              <div
                className="absolute top-10 -left-[3px] w-[3px] h-6 sm:h-7 rounded-l-xs bg-[#3E4249] shadow-xs"
                title="Volume Up"
                aria-hidden="true"
              />
              <div
                className="absolute top-19 -left-[3px] w-[3px] h-6 sm:h-7 rounded-l-xs bg-[#3E4249] shadow-xs"
                title="Volume Down"
                aria-hidden="true"
              />

              {/* Front FaceTime HD Camera Sensor on top bezel */}
              <div
                className="absolute top-1 sm:top-1.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 pointer-events-none"
                aria-hidden="true"
              />

              {/* 11-inch Liquid Retina Display Screen */}
              <div
                className="w-full h-full bg-white rounded-[18px] sm:rounded-[22px] overflow-hidden relative shadow-inner flex flex-col min-h-0"
                style={{
                  boxShadow: 'inset 0 0 14px rgba(0,0,0,0.18)',
                }}
              >
                {/* Procreate / iPadOS Minimal Top Status Bar */}
                <div className="px-3 sm:px-4 py-1 sm:py-1.5 bg-[#FAF9F6] border-b border-black/[0.06] flex items-center justify-between text-[10px] sm:text-[11px] font-sans-ui text-[#6C665C] select-none z-20 flex-shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#1C1B1A]">9:41</span>
                    <span className="px-1.5 py-0.5 rounded bg-black/[0.06] text-[9.5px] font-semibold text-[#4A453E]">
                      Procreate
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-[#7A7468]">
                    <span className="font-mono text-[9px] bg-white px-1.5 py-0.5 rounded border border-black/5 text-[#1C1B1A]">
                      {artworks[activeIndex].year}
                    </span>
                    <span className="hidden sm:inline font-mono text-[9px]">100%</span>
                    <span className="w-4 h-2 rounded-xs border border-[#7A7468] relative flex items-center p-0.5">
                      <span className="w-full h-full bg-[#34C759] rounded-2xs" />
                    </span>
                  </div>
                </div>

                {/* Horizontal Carousel Viewport inside the iPad Screen */}
                {/* Changes slide ONLY on swipe left/right, clicking chevrons, or page indicators */}
                <div
                  ref={carouselContainerRef}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  className="w-full flex-1 relative overflow-hidden bg-white cursor-grab active:cursor-grabbing select-none flex flex-row min-h-0"
                >
                  {/* Sliding Artworks Container (Horizontal Carousel Transition) */}
                  <div
                    className="w-full h-full transition-transform duration-500 ease-out flex flex-row"
                    style={{
                      transform: `translateX(-${activeIndex * 100}%)`,
                    }}
                  >
                    {artworks.map((artwork, idx) => (
                      <div
                        key={artwork.id}
                        className="w-full h-full flex-shrink-0 flex items-center justify-center p-2 sm:p-3 md:p-4 relative min-h-0"
                      >
                        {/* Artwork Drawing Canvas - Maximized display size */}
                        <div className="w-full h-full relative rounded-xl overflow-hidden flex items-center justify-center bg-white">
                          <img
                            src={artwork.imageSrc}
                            alt={artwork.title}
                            className="w-full h-full max-h-full max-w-full object-contain block select-none pointer-events-none p-1 sm:p-2"
                            loading={idx === 0 ? 'eager' : 'lazy'}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Back Chevron (Shifted comfortably inside from the left edge) */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex((prev) => (prev > 0 ? prev - 1 : artworks.length - 1));
                    }}
                    className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md border border-white/20 shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
                    title="Previous slide"
                    aria-label="Previous slide"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 -ml-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  {/* Next Chevron (Shifted comfortably inside from the right edge) */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex((prev) => (prev < artworks.length - 1 ? prev + 1 : 0));
                    }}
                    className="absolute right-4 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md border border-white/20 shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
                    title="Next slide"
                    aria-label="Next slide"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 -mr-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Page Indicator for 6 Slides (Clean iPadOS floating pill at bottom center) */}
                  <div className="absolute bottom-2.5 sm:bottom-3.5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 shadow-xl transition-all">
                    {artworks.map((art, idx) => (
                      <button
                        key={art.id}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveIndex(idx);
                        }}
                        title={`Slide ${idx + 1}: ${art.title}`}
                        aria-label={`Go to slide ${idx + 1}`}
                        className={`transition-all duration-300 cursor-pointer rounded-full ${
                          activeIndex === idx
                            ? 'w-6 h-2 bg-white shadow-xs'
                            : 'w-2 h-2 bg-white/40 hover:bg-white/80 hover:scale-125'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. HOME PAGE SIGNATURE FOOTER */}
      <ClosingSection />
    </div>
  );
};
