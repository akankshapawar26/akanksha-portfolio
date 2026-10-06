import React, { useState } from 'react';
import {
  DiamondBluePattern,
  FourFlowersGreenPattern,
  BlueFlowerYellowPattern,
  PinkCreamTulipsNavyPattern,
  PetalMandalaRedPattern,
} from './TilePatterns';

interface GraphicDesignPageProps {
  onBack: () => void;
}

// =========================================================================
// HIGH-FIDELITY PROJECT CARDS (Matching Reference Screenshot)
// =========================================================================

// 1. Skudo Helmet Project Card (Dark HUD, Futuristic Helmet, Telemetry UI)
const SkudoHelmetVisual: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full aspect-[4/3] bg-[#0A0D14] overflow-hidden rounded-[12px] shadow-sm select-none group">
      {!imgError && (
        <img
          src="/assets/projects/graphic-design/skudo-helmet.png"
          alt="Skudo Helmet Design"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* High-Fidelity Vector Render of Skudo Helmet UI */}
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="red-glow" cx="40%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF2A2A" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#FF1010" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#0A0D14" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="visor-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF4A4A" />
            <stop offset="50%" stopColor="#990B0B" />
            <stop offset="100%" stopColor="#1E0505" />
          </linearGradient>
          <linearGradient id="phone-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1C212D" />
            <stop offset="100%" stopColor="#0B0E14" />
          </linearGradient>
          <linearGradient id="graph-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF3333" />
            <stop offset="60%" stopColor="#FF6B6B" />
            <stop offset="100%" stopColor="#FF9999" />
          </linearGradient>
        </defs>

        {/* Background Grid & Lighting */}
        <rect width="800" height="600" fill="#0D1118" />
        <circle cx="340" cy="300" r="300" fill="url(#red-glow)" />

        {/* Ambient Riders in Background */}
        <g opacity="0.25">
          <ellipse cx="140" cy="310" rx="90" ry="110" fill="#18202C" />
          <circle cx="140" cy="220" r="50" fill="#131A24" />
          <ellipse cx="700" cy="240" rx="100" ry="130" fill="#18202C" />
        </g>

        {/* Technical Callout HUD in Top Right */}
        <g opacity="0.65" transform="translate(480, 130)">
          <text x="0" y="0" fill="#8896AB" fontSize="11" letterSpacing="3" fontFamily="monospace">
            SENSORS
          </text>
          <text x="0" y="18" fill="#8896AB" fontSize="11" letterSpacing="3" fontFamily="monospace">
            COOLING
          </text>
          <text x="0" y="36" fill="#8896AB" fontSize="11" letterSpacing="3" fontFamily="monospace">
            HAPTIC FEEDBACK
          </text>
          <text x="0" y="54" fill="#8896AB" fontSize="11" letterSpacing="3" fontFamily="monospace">
            MENTAL ANALYTICS
          </text>
        </g>

        {/* Wireframe Orbit Annotations */}
        <ellipse cx="330" cy="300" rx="200" ry="140" stroke="#FF4D4D" strokeWidth="0.75" strokeDasharray="4 4" fill="none" opacity="0.35" />
        <ellipse cx="330" cy="300" rx="170" ry="180" stroke="#587299" strokeWidth="0.5" strokeDasharray="3 3" fill="none" opacity="0.25" />

        {/* Central Smart Helmet (Matte Black Shell + Glowing Crimson Accents) */}
        <g transform="translate(190, 150)">
          {/* Outer Shell Shadow */}
          <path
            d="M50 180 C30 110, 80 20, 180 15 C270 12, 330 80, 310 170 C295 240, 240 280, 160 280 C90 280, 55 240, 50 180 Z"
            fill="#11161F"
            stroke="#263142"
            strokeWidth="3"
          />

          {/* Aerodynamic Air Inlets & Carbon Texture */}
          <path d="M120 40 C170 30, 230 35, 260 55" stroke="#FF3333" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M70 140 C100 130, 130 140, 145 160" stroke="#FF2222" strokeWidth="2.5" fill="none" />

          {/* Glowing Crimson Visor Shield */}
          <path
            d="M75 140 C110 90, 240 85, 280 135 C290 185, 250 215, 175 220 C110 220, 70 190, 75 140 Z"
            fill="url(#visor-grad)"
            stroke="#FF4A4A"
            strokeWidth="3.5"
          />
          {/* Visor Glare / Specular Highlight */}
          <path
            d="M100 130 C130 100, 210 98, 250 120"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.6"
            fill="none"
          />
          <path
            d="M110 145 C135 125, 180 122, 210 135"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.3"
            fill="none"
          />

          {/* Chin Guard & Vent Grille */}
          <path d="M115 220 L160 260 L210 220 Z" fill="#0A0D14" stroke="#333F52" strokeWidth="2" />
          <circle cx="160" cy="238" r="14" fill="#FF1E1E" opacity="0.9" />
          <circle cx="160" cy="238" r="8" fill="#FFFFFF" />
        </g>

        {/* Mobile Companion App Screen (Floating Right) */}
        <g transform="translate(470, 220)">
          {/* Phone Body */}
          <rect width="180" height="290" rx="22" fill="url(#phone-grad)" stroke="#2F3B4E" strokeWidth="3" />
          {/* Screen Header */}
          <text x="24" y="38" fill="#8E9CB2" fontSize="9" letterSpacing="1" fontFamily="sans-serif">
            RIDE SUMMARY
          </text>
          <text x="24" y="55" fill="#FF5252" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
            • STRESS SPIKE
          </text>

          {/* Stress telemetry wave graph */}
          <path
            d="M20 125 L45 118 L70 122 L90 85 L105 130 L120 70 L135 110 L160 105"
            stroke="url(#graph-line)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 125 L45 118 L70 122 L90 85 L105 130 L120 70 L135 110 L160 105 L160 150 L20 150 Z"
            fill="#FF2222"
            opacity="0.12"
          />

          {/* Stats Badges */}
          <g transform="translate(24, 180)">
            <text x="0" y="16" fill="#FFFFFF" fontSize="22" fontWeight="bold" fontFamily="sans-serif">
              72
            </text>
            <text x="0" y="28" fill="#8896AB" fontSize="8" fontFamily="sans-serif">
              Avg. Stress
            </text>

            <text x="75" y="16" fill="#FFFFFF" fontSize="20" fontWeight="bold" fontFamily="sans-serif">
              8.4
            </text>
            <text x="105" y="16" fill="#8896AB" fontSize="10" fontFamily="sans-serif">
              km
            </text>
            <text x="75" y="28" fill="#8896AB" fontSize="8" fontFamily="sans-serif">
              Distance
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
};

// 2. Skudo Branding Logo Project Card (Embossed Teal Shield Logo on Stucco Wall)
const SkudoBrandingVisual: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full aspect-[4/3] bg-[#D7D0C6] overflow-hidden rounded-[12px] shadow-sm select-none group">
      {!imgError && (
        <img
          src="/assets/projects/graphic-design/skudo-branding.png"
          alt="Skudo Logo Branding"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* High-Fidelity Vector Render of 3D Embossed Skudo Logo */}
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wall-light" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EAE5DC" />
            <stop offset="50%" stopColor="#D9D2C7" />
            <stop offset="100%" stopColor="#C4BCB0" />
          </linearGradient>

          {/* 3D Teal Shield Gradients */}
          <linearGradient id="shield-body" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#41B2BA" />
            <stop offset="45%" stopColor="#1F828F" />
            <stop offset="100%" stopColor="#0B4B54" />
          </linearGradient>

          <linearGradient id="s-curve-top" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E6FAFC" />
            <stop offset="50%" stopColor="#7DE2EB" />
            <stop offset="100%" stopColor="#1E8E9C" />
          </linearGradient>

          <linearGradient id="s-curve-bot" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7DE2EB" />
            <stop offset="50%" stopColor="#259AA8" />
            <stop offset="100%" stopColor="#0D515C" />
          </linearGradient>

          <filter id="shield-shadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="32" dy="48" stdDeviation="28" floodColor="#2F2922" floodOpacity="0.45" />
            <feDropShadow dx="12" dy="18" stdDeviation="12" floodColor="#2F2922" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Realistic Textured Wall Background */}
        <rect width="800" height="600" fill="url(#wall-light)" />

        {/* Ambient Diagonal Sunlight & Plaster Texture */}
        <path d="M0 0 L800 200 L800 600 L0 600 Z" fill="#000000" opacity="0.04" />
        <ellipse cx="650" cy="180" rx="350" ry="250" fill="#FFFFFF" opacity="0.22" />

        {/* Central 3D Embossed Shield Emblem */}
        <g transform="translate(400, 230)" filter="url(#shield-shadow)">
          {/* Shield Outer Hexagonal Curvature */}
          <path
            d="M 0 -130 L 115 -62 C 128 35, 95 115, 0 148 C -95 115, -128 35, -115 -62 Z"
            fill="url(#shield-body)"
            stroke="#5CE6F2"
            strokeWidth="1.5"
          />

          {/* Dynamic Floating 'S' Ribbon Curves */}
          {/* Top Leaf of S */}
          <path
            d="M -70 -20 C -20 -80, 60 -85, 95 -45 C 70 -5, -15 -10, -70 -20 Z"
            fill="url(#s-curve-top)"
          />
          {/* Bottom Leaf of S */}
          <path
            d="M 70 20 C 20 80, -60 85, -95 45 C -70 5, 15 10, 70 20 Z"
            fill="url(#s-curve-bot)"
          />
        </g>

        {/* Embossed Bold Typography 'Skudo' */}
        <g transform="translate(400, 480)" textAnchor="middle">
          {/* Lettering Drop Shadow */}
          <text
            x="3"
            y="7"
            fill="#4A4237"
            opacity="0.4"
            fontSize="78"
            fontWeight="900"
            fontFamily="'Satoshi', sans-serif"
            letterSpacing="-1.5"
          >
            Skudo
          </text>
          {/* Lettering Solid Form */}
          <text
            x="0"
            y="0"
            fill="#0F383E"
            fontSize="78"
            fontWeight="900"
            fontFamily="'Satoshi', sans-serif"
            letterSpacing="-1.5"
          >
            Skudo
          </text>
        </g>
      </svg>
    </div>
  );
};

// 3. Trust in E-Commerce Research Project Card (Clean Editorial Research Poster)
const TrustInEcommerceVisual: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full aspect-[4/3] bg-[#EDE8DF] overflow-hidden rounded-[12px] shadow-sm select-none group flex items-center justify-center p-3 sm:p-5">
      {!imgError && (
        <img
          src="/assets/projects/graphic-design/trust-ecommerce.png"
          alt="Trust in E-Commerce Research"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* High-Fidelity Editorial Research Poster Layout */}
      <div className="w-full h-full bg-[#FCFBF8] rounded-[6px] shadow-md border border-[#E5E0D5] p-4 sm:p-6 flex flex-col justify-between overflow-hidden">
        {/* Poster Header */}
        <div className="flex items-start justify-between border-b border-[#E8E2D6] pb-3">
          <div>
            <h4 className="font-editorial text-[22px] sm:text-[28px] md:text-[32px] font-bold text-[#1F1E1D] leading-[1.08] tracking-tight">
              Trust in <br />
              E-Commerce
            </h4>
            <p className="font-sans-ui text-[9px] sm:text-[11px] text-[#7A7670] mt-1">
              Understanding how confidence is shaped across Amazon, Flipkart, and Meesho in India.
            </p>
          </div>

          {/* Research Note Sticky */}
          <div className="hidden sm:flex flex-col bg-[#FAF6E6] border border-[#E0D8BC] rounded-[4px] p-2 max-w-[130px] text-right">
            <span className="font-editorial italic text-[11px] text-[#524B35]">
              "What makes users trust?"
            </span>
          </div>
        </div>

        {/* Middle Two-Column Grid: Methodology & Key Insights */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 my-2 text-[8px] sm:text-[10px] text-[#423F3A]">
          {/* Left Column: Framework & Method */}
          <div className="space-y-1.5">
            <span className="font-bold text-[#1C1B1A] uppercase tracking-wider text-[7px] sm:text-[9px] block">
              RESEARCH FRAMEWORK
            </span>
            <p className="leading-tight text-[#66625B]">
              Examined confidence triggers across search, pricing transparency, ratings authenticity, and return assurance.
            </p>

            <div className="pt-1">
              <span className="font-semibold text-[#2C2A26] block">Participants:</span>
              <span className="text-[#66625B]">18–55 across Tier 1 & Tier 2 Indian e-commerce users.</span>
            </div>
          </div>

          {/* Right Column: Key Bar Chart Visualizations */}
          <div className="space-y-1.5 bg-[#F6F4EE] p-2 rounded-[4px]">
            <span className="font-bold text-[#1C1B1A] text-[8px] sm:text-[10px] block">
              What builds your trust the most?
            </span>
            {/* Bar 1 */}
            <div className="space-y-0.5">
              <div className="flex justify-between text-[7px] sm:text-[8px] text-[#55514B]">
                <span>Authentic customer reviews</span>
                <span className="font-bold">37.7%</span>
              </div>
              <div className="w-full bg-[#E5E0D5] h-[5px] rounded-full overflow-hidden">
                <div className="bg-[#4D7C5D] h-full w-[78%]" />
              </div>
            </div>
            {/* Bar 2 */}
            <div className="space-y-0.5">
              <div className="flex justify-between text-[7px] sm:text-[8px] text-[#55514B]">
                <span>Easy returns & instant refund</span>
                <span className="font-bold">24.3%</span>
              </div>
              <div className="w-full bg-[#E5E0D5] h-[5px] rounded-full overflow-hidden">
                <div className="bg-[#4D7C5D] h-full w-[54%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Summary Grid */}
        <div className="border-t border-[#E8E2D6] pt-2 flex items-center justify-between text-[7px] sm:text-[9px] text-[#6E6A63]">
          <span>Platforms: Amazon • Flipkart • Meesho</span>
          <span className="font-medium text-[#2E2B27]">UX Research & Editorial Layout</span>
        </div>
      </div>
    </div>
  );
};

// 4. Yellow & Black Branding Exhibition Project Card (Character Silhouettes & Flag Mockup)
const YellowBlackBrandingVisual: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full aspect-[4/3] bg-[#24211D] overflow-hidden rounded-[12px] shadow-sm select-none group">
      {!imgError && (
        <img
          src="/assets/projects/graphic-design/yellow-black-branding.png"
          alt="Yellow and Black Brand Identity"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-300 ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {/* High-Fidelity Vector Render of Exhibition Scene */}
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="exhibit-wall" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4A433A" />
            <stop offset="50%" stopColor="#2E2822" />
            <stop offset="100%" stopColor="#1A1612" />
          </linearGradient>

          <linearGradient id="yellow-flag-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFDE2A" />
            <stop offset="100%" stopColor="#F5B800" />
          </linearGradient>

          <linearGradient id="yellow-brush" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFDE2A" />
            <stop offset="100%" stopColor="#F7A800" />
          </linearGradient>
        </defs>

        {/* Gallery Concrete Wall Background */}
        <rect width="800" height="600" fill="url(#exhibit-wall)" />

        {/* Dramatic Silhouette Dancer Shadow on Wall */}
        <g opacity="0.35" transform="translate(180, 60)">
          <path
            d="M 50 200 C 30 140, 10 90, 80 40 C 95 30, 115 50, 110 70 C 100 120, 130 180, 180 230 C 120 230, 80 220, 50 200 Z"
            fill="#050403"
          />
          <circle cx="100" cy="30" r="22" fill="#050403" />
        </g>

        {/* Vertical Yellow Hanging Flag Banner (Right Side) */}
        <g transform="translate(620, 40)">
          <rect width="130" height="360" rx="3" fill="url(#yellow-flag-grad)" />
          {/* Black Character Emblem on Banner */}
          <g transform="translate(65, 120) scale(0.65)">
            <circle cx="0" cy="-40" r="16" fill="#14120E" />
            <circle cx="-35" cy="-25" r="12" fill="#14120E" />
            <circle cx="35" cy="-25" r="12" fill="#14120E" />
            <path
              d="M 0 -15 C -25 -15, -45 15, -35 50 C -25 35, 25 35, 35 50 C 45 15, 25 -15, 0 -15 Z"
              fill="#14120E"
            />
          </g>
          {/* Repeating Bottom Motif */}
          <g transform="translate(65, 240) scale(0.65)">
            <circle cx="0" cy="-40" r="16" fill="#14120E" />
            <circle cx="-35" cy="-25" r="12" fill="#14120E" />
            <circle cx="35" cy="-25" r="12" fill="#14120E" />
            <path
              d="M 0 -15 C -25 -15, -45 15, -35 50 C -25 35, 25 35, 35 50 C 45 15, 25 -15, 0 -15 Z"
              fill="#14120E"
            />
          </g>
        </g>

        {/* Center Canvas with Dynamic Fluid Yellow Brush Stroke */}
        <g transform="translate(260, 90)">
          {/* White Exhibition Board */}
          <rect width="320" height="420" rx="4" fill="#F8F6F0" filter="drop-shadow(0 20px 30px rgba(0,0,0,0.5))" />

          {/* Golden Yellow Diagonal Expressive Brush Wave */}
          <path
            d="M 20 60 C 100 40, 220 10, 300 120 C 260 140, 160 110, 40 180 Z"
            fill="url(#yellow-brush)"
            opacity="0.88"
          />

          {/* Dancing Figures Silhouette Group Motif */}
          <g transform="translate(160, 240)">
            {/* Center Main Figure */}
            <circle cx="0" cy="-55" r="20" fill="#1A1713" />
            <path
              d="M 0 -25 C -35 -25, -55 20, -40 70 C -25 45, 25 45, 40 70 C 55 20, 35 -25, 0 -25 Z"
              fill="#1A1713"
            />
            {/* Left Dancing Figure */}
            <circle cx="-50" cy="-35" r="14" fill="#1A1713" />
            <path
              d="M -50 -15 C -75 -15, -85 20, -70 55 C -55 35, -35 35, -25 55 Z"
              fill="#1A1713"
            />
            {/* Right Dancing Figure */}
            <circle cx="50" cy="-35" r="14" fill="#1A1713" />
            <path
              d="M 50 -15 C 25 -15, 35 35, 25 55 C 35 35, 55 35, 70 55 C 85 20, 75 -15, 50 -15 Z"
              fill="#1A1713"
            />
          </g>
        </g>

        {/* Foreground Studio Table with Collateral */}
        <path d="M 0 490 L 800 470 L 800 600 L 0 600 Z" fill="#E8DFD0" />

        {/* Yellow Silicone Wristband */}
        <ellipse cx="200" cy="525" rx="55" ry="24" fill="#FFDA24" stroke="#DDA800" strokeWidth="2" />
        <ellipse cx="200" cy="525" rx="42" ry="16" fill="#181512" />

        {/* Black Stationery Cards on Table */}
        <rect x="580" y="505" width="130" height="75" rx="3" fill="#15120E" transform="rotate(-12 580 505)" />
        <rect x="290" y="500" width="48" height="48" rx="6" fill="#FFDE2A" transform="rotate(8 290 500)" />
      </svg>
    </div>
  );
};

export const GraphicDesignPage: React.FC<GraphicDesignPageProps> = ({ onBack }) => {
  return (
    <div
      className="min-h-screen w-full text-[#323131] select-none flex flex-col items-center"
      style={{ backgroundColor: '#FFFFE1' }}
    >
      {/* 1. TOP NAVIGATION / BACK BAR */}
      <header className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 pt-8 sm:pt-10 flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-[#754640] hover:text-[#323131] transition-colors font-sans-ui text-[15px] sm:text-[16px] font-medium group cursor-pointer focus:outline-hidden"
        >
          <span className="w-8 h-8 rounded-full bg-white/80 border border-[#E5DFD3] flex items-center justify-center transition-transform group-hover:-translate-x-1 shadow-2xs">
            ←
          </span>
          <span>Back to Portfolio</span>
        </button>

        <span className="font-editorial text-[18px] sm:text-[20px] font-bold text-[#323131] tracking-tight">
          Akanksha Pawar
        </span>
      </header>

      {/* 2. HERO SECTION (width: 1280px; height: 495px; background: #FFFFE1;) */}
      <section
        className="relative w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 pt-10 sm:pt-12 pb-12 sm:pb-16 flex flex-col justify-between"
        style={{
          width: '100%',
          maxWidth: '1280px',
          minHeight: '495px',
          backgroundColor: '#FFFFE1',
        }}
      >
        {/* Decorative Tiles Collage (Matching Reference Screenshot) */}
        {/* Upper-Left Cluster: 3 Tiles */}
        <div className="absolute top-4 left-6 sm:left-10 lg:left-16 grid grid-cols-2 gap-2.5 sm:gap-3 pointer-events-none z-10">
          {/* Row 0, Col 0: Diamond Blue */}
          <div className="w-[66px] h-[66px] sm:w-[82px] sm:h-[82px] md:w-[92px] md:h-[92px] rounded-[10px] sm:rounded-[12px] overflow-hidden shadow-2xs">
            <DiamondBluePattern rotationSpeed={8} className="w-full h-full" />
          </div>

          {/* Row 0, Col 1: Four Flowers Green */}
          <div className="w-[66px] h-[66px] sm:w-[82px] sm:h-[82px] md:w-[92px] md:h-[92px] rounded-[10px] sm:rounded-[12px] overflow-hidden shadow-2xs">
            <FourFlowersGreenPattern rotationSpeed={8} className="w-full h-full" />
          </div>

          {/* Row 1, Col 0: Blue Flower on Yellow */}
          <div className="w-[66px] h-[66px] sm:w-[82px] sm:h-[82px] md:w-[92px] md:h-[92px] rounded-[10px] sm:rounded-[12px] overflow-hidden shadow-2xs">
            <BlueFlowerYellowPattern rotationSpeed={8} className="w-full h-full" />
          </div>

          {/* Row 1, Col 1 is empty in reference */}
          <div className="w-[66px] h-[66px] sm:w-[82px] sm:h-[82px] md:w-[92px] md:h-[92px]" />
        </div>

        {/* Right Side Vertical Stack: 2 Tiles (Matching Reference Screenshot) */}
        <div className="absolute top-8 sm:top-10 md:top-12 right-6 sm:right-10 lg:right-16 flex flex-col gap-2.5 sm:gap-3 pointer-events-none z-10">
          {/* Top-Right: Pink Cream Tulips on Navy */}
          <div className="w-[66px] h-[66px] sm:w-[82px] sm:h-[82px] md:w-[92px] md:h-[92px] rounded-[10px] sm:rounded-[12px] overflow-hidden shadow-2xs">
            <PinkCreamTulipsNavyPattern rotationSpeed={8} className="w-full h-full" />
          </div>

          {/* Bottom-Right: Petal Mandala Red */}
          <div className="w-[66px] h-[66px] sm:w-[82px] sm:h-[82px] md:w-[92px] md:h-[92px] rounded-[10px] sm:rounded-[12px] overflow-hidden shadow-2xs">
            <PetalMandalaRedPattern rotationSpeed={8} className="w-full h-full" />
          </div>
        </div>

        {/* Hero Main Heading: Exact CSS from User Prompt */}
        <div className="mt-auto pt-36 sm:pt-40 md:pt-44 z-20">
          <h1
            className="tracking-[-0.025em]"
            style={{
              color: '#323131',
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(52px, 7.5vw, 96px)',
              fontStyle: 'normal',
              fontWeight: 700,
              lineHeight: 'normal',
            }}
          >
            Graphic Design
          </h1>
        </div>
      </section>

      {/* 3. PROJECT GALLERY (2-Column Minimal Showcase) */}
      <main className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {/* Row 1, Col 1: Skudo Helmet Project */}
          <div className="w-full transition-transform duration-300 hover:scale-[1.01]">
            <SkudoHelmetVisual />
          </div>

          {/* Row 1, Col 2: Skudo Branding Logo Project */}
          <div className="w-full transition-transform duration-300 hover:scale-[1.01]">
            <SkudoBrandingVisual />
          </div>

          {/* Row 2, Col 1: Trust in E-Commerce Research Project */}
          <div className="w-full transition-transform duration-300 hover:scale-[1.01]">
            <TrustInEcommerceVisual />
          </div>

          {/* Row 2, Col 2: Yellow & Black Branding Exhibition Project */}
          <div className="w-full transition-transform duration-300 hover:scale-[1.01]">
            <YellowBlackBrandingVisual />
          </div>
        </div>
      </main>

      {/* 4. CLEAN MINIMAL FOOTER */}
      <footer className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-10 sm:py-12 border-t border-[#EDE7D0] flex items-center justify-between text-[#8C8A87] font-sans-ui text-[13px] sm:text-[14px]">
        <span>© 2026 Akanksha Pawar</span>
        <button
          onClick={onBack}
          className="hover:text-[#323131] transition-colors cursor-pointer"
        >
          Back to Top ↑
        </button>
      </footer>
    </div>
  );
};
