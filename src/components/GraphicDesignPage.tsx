import React, { useState, useEffect } from 'react';
import {
  DiamondBluePattern,
  FourFlowersGreenPattern,
  BlueFlowerYellowPattern,
  PinkCreamTulipsNavyPattern,
  PetalMandalaRedPattern,
} from './TilePatterns';
import { ClosingSection } from './ClosingSection';

interface GraphicDesignPageProps {
  onBack: () => void;
}

// =========================================================================
// MINI BRAND ICONS FOR CARD FOOTERS
// =========================================================================

const ChoreographyMiniIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 40 40" fill="none" className="flex-shrink-0">
    <circle cx="20" cy="10" r="4.5" fill="#1A1713" />
    <path
      d="M20 16 C14 16, 9 24, 11 34 C14 30, 26 30, 29 34 C31 24, 26 16, 20 16 Z"
      fill="#1A1713"
    />
    <circle cx="9" cy="14" r="3.5" fill="#1A1713" />
    <path d="M9 19 C4 19, 2 26, 5 32 C8 28, 12 28, 14 32 Z" fill="#1A1713" />
    <circle cx="31" cy="14" r="3.5" fill="#1A1713" />
    <path d="M31 19 C26 19, 28 28, 26 32 C28 28, 32 28, 35 32 C38 26, 36 19, 31 19 Z" fill="#1A1713" />
  </svg>
);

const SkudoMiniIcon: React.FC = () => (
  <svg width="20" height="22" viewBox="0 0 60 70" fill="none" className="flex-shrink-0">
    <defs>
      <linearGradient id="mini-skudo-grad" x1="0" y1="0" x2="60" y2="70" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00A8C6" />
        <stop offset="50%" stopColor="#3DBED6" />
        <stop offset="100%" stopColor="#EAB839" />
      </linearGradient>
    </defs>
    <path
      d="M30 2 C44 2, 58 10, 58 24 C58 48, 44 62, 30 68 C16 62, 2 48, 2 24 C2 10, 16 2, 30 2 Z"
      fill="url(#mini-skudo-grad)"
    />
    <path
      d="M12 28 C20 18, 40 18, 48 26 C44 34, 24 34, 16 42 C14 46, 26 52, 42 48"
      stroke="#FFFFFF"
      strokeWidth="4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

// =========================================================================
// 1. CARD 1: CHOREOGRAPHY FOR STAGE (Clean Logo on White)
// =========================================================================
const ChoreographyLogoVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#FFFFFF] flex items-center justify-center overflow-hidden p-6 sm:p-8 select-none">
      {/* Soft Ambient Vector Curves in Background (Bottom-Left and Top-Right) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 375" fill="none">
        <ellipse cx="60" cy="320" rx="140" ry="120" fill="#F4F3EF" opacity="0.8" />
        <ellipse cx="560" cy="60" rx="120" ry="100" fill="#F4F3EF" opacity="0.8" />
      </svg>

      {/* Main Logo Composition */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:gap-6">
        {/* 3 Dancing Figures Silhouette Motif */}
        <svg viewBox="0 0 320 220" className="w-[180px] sm:w-[230px] md:w-[260px] h-auto block" fill="none">
          {/* Left Dancer */}
          <g>
            <circle cx="70" cy="55" r="22" fill="#141210" />
            <path
              d="M70 85 C35 85, 20 135, 45 185 C65 155, 95 155, 110 185 C125 135, 105 85, 70 85 Z"
              fill="#141210"
            />
            {/* Extended dynamic left limb */}
            <path
              d="M45 105 C20 90, 8 70, 15 50 C22 35, 40 45, 55 70 Z"
              fill="#141210"
            />
          </g>

          {/* Center Main Figure (With Horns/Crown Ears Motif) */}
          <g transform="translate(160, 0)">
            {/* Horns/Head details */}
            <circle cx="0" cy="58" r="26" fill="#141210" />
            <circle cx="-16" cy="38" r="8" fill="#141210" />
            <circle cx="16" cy="38" r="8" fill="#141210" />
            {/* Torso & Inner Negative Space Cutout */}
            <path
              d="M0 92 C-45 92, -65 145, -45 205 C-25 175, 25 175, 45 205 C65 145, 45 92, 0 92 Z"
              fill="#141210"
            />
            {/* Center circular cutout / negative space */}
            <circle cx="0" cy="138" r="14" fill="#FFFFFF" />
          </g>

          {/* Right Dancer */}
          <g transform="translate(245, 0)">
            <circle cx="15" cy="85" r="20" fill="#141210" />
            <path
              d="M15 112 C-15 112, -25 155, -8 195 C8 170, 32 170, 48 195 C62 155, 45 112, 15 112 Z"
              fill="#141210"
            />
            {/* Dynamic trailing limb */}
            <path
              d="M32 130 C58 120, 72 110, 78 125 C84 140, 68 155, 42 155 Z"
              fill="#141210"
            />
          </g>
        </svg>

        {/* Wordmark below emblem */}
        <h3 className="font-sans-ui text-[18px] sm:text-[22px] md:text-[24px] font-extrabold text-[#141210] tracking-tight text-center leading-none">
          Choreagraphy for Stage
        </h3>
      </div>
    </div>
  );
};

// =========================================================================
// 2. CARD 2: CHOREOGRAPHY FOR STAGE (Merch Mockup Showcase)
// =========================================================================
const ChoreographyMerchVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#EAE8E3] grid grid-cols-12 overflow-hidden select-none">
      {/* Left 60%: Full Model in Oversized White T-Shirt */}
      <div className="col-span-7 relative bg-[#D8D5CD] overflow-hidden border-r border-[#D2CEC5]">
        {/* Soft studio lighting gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#C9C5BC] via-[#EAE7E0] to-[#FAF8F5]" />

        {/* Stylized Vector Render of Model wearing white t-shirt */}
        <svg viewBox="0 0 350 380" className="absolute inset-0 w-full h-full object-cover" fill="none">
          {/* Background Shadow */}
          <ellipse cx="180" cy="200" rx="140" ry="160" fill="#BEB9AD" opacity="0.3" />

          {/* Model's Hair & Neck */}
          <path d="M120 70 C100 40, 140 10, 180 15 C210 20, 230 45, 220 80 C200 65, 180 65, 160 85 Z" fill="#241E1A" />
          {/* Hair Bun */}
          <ellipse cx="190" cy="30" rx="22" ry="20" fill="#241E1A" />
          <path d="M210 25 C225 20, 235 35, 225 45 Z" fill="#241E1A" />

          {/* Neck & Jawline */}
          <path d="M150 75 C165 95, 185 95, 195 75 L200 120 L145 120 Z" fill="#C99B82" />

          {/* White Oversized T-Shirt (Fabric Folds & Realistic Shading) */}
          <path
            d="M90 130 C130 115, 220 115, 260 130 L320 220 L270 240 L260 380 L80 380 L75 235 L25 215 Z"
            fill="#FFFFFF"
          />
          {/* T-Shirt Creases and Shadows */}
          <path d="M130 122 C160 135, 210 135, 225 122 C215 130, 150 130, 130 122 Z" fill="#E2DFD8" />
          <path d="M110 150 C140 200, 150 280, 130 380" stroke="#E5E2DC" strokeWidth="6" strokeLinecap="round" />
          <path d="M230 160 C210 220, 215 300, 235 380" stroke="#E5E2DC" strokeWidth="8" strokeLinecap="round" />
          <path d="M170 190 C180 240, 175 320, 185 380" stroke="#ECE9E2" strokeWidth="6" strokeLinecap="round" />

          {/* Printed Logo on Chest */}
          <g transform="translate(195, 170) scale(0.24)">
            <circle cx="20" cy="10" r="7" fill="#141210" />
            <path d="M20 20 C10 20, 0 35, 5 50 C10 45, 30 45, 35 50 C40 35, 30 20, 20 20 Z" fill="#141210" />
            <circle cx="2" cy="18" r="5" fill="#141210" />
            <path d="M2 26 C-4 26, -6 38, -2 46 C2 40, 8 40, 10 46 Z" fill="#141210" />
            <circle cx="38" cy="18" r="5" fill="#141210" />
            <path d="M38 26 C32 26, 34 38, 32 46 C36 40, 42 40, 44 46 Z" fill="#141210" />
          </g>

          {/* Black Pants */}
          <path d="M70 340 L280 340 L290 380 L60 380 Z" fill="#1A1816" />
        </svg>
      </div>

      {/* Right 40%: 2 Stacked Detail Panels */}
      <div className="col-span-5 flex flex-col h-full bg-[#FAF9F5]">
        {/* Top Right Panel: Close-up of T-shirt Print & Collar */}
        <div className="h-1/2 relative bg-[#F7F5F0] border-b border-[#DCD8CF] overflow-hidden flex items-center justify-center p-3">
          <div className="flex flex-col items-center justify-center gap-1.5 transform scale-90 sm:scale-100">
            {/* Small crisp logo */}
            <svg width="46" height="34" viewBox="0 0 60 45" fill="none">
              <circle cx="30" cy="10" r="5" fill="#141210" />
              <path d="M30 18 C20 18, 14 30, 18 42 C22 38, 38 38, 42 42 C46 30, 40 18, 30 18 Z" fill="#141210" />
              <circle cx="12" cy="15" r="4" fill="#141210" />
              <circle cx="48" cy="15" r="4" fill="#141210" />
            </svg>
            <span className="text-[9px] font-bold text-[#141210] tracking-tight">Choreagraphy for Stage</span>
          </div>
        </div>

        {/* Bottom Right Panel: Woven Brand Patch on Sleeve */}
        <div className="h-1/2 relative bg-[#E2DFD7] overflow-hidden flex items-center justify-center p-3">
          <div className="w-[46px] h-[36px] bg-[#141210] rounded-[3px] shadow-sm flex items-center justify-center transform rotate-6 border border-black/20">
            <svg width="22" height="18" viewBox="0 0 40 32" fill="none">
              <circle cx="20" cy="8" r="4" fill="#FFFFFF" />
              <circle cx="8" cy="12" r="3" fill="#FFFFFF" />
              <circle cx="32" cy="12" r="3" fill="#FFFFFF" />
              <path d="M20 14 C12 14, 8 22, 12 30 C15 27, 25 27, 28 30 C32 22, 28 14, 20 14 Z" fill="#FFFFFF" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 3. CARD 3: SKUDO (3D Metallic Logo on Textured Wall)
// =========================================================================
const Skudo3DLogoVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#E5E0D8] flex items-center justify-center overflow-hidden p-6 sm:p-8 select-none">
      {/* Realistic Natural Sunlight and Branch Shadows */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 600 375" preserveAspectRatio="none">
        <defs>
          <radialGradient id="sun-glow" cx="30%" cy="20%" r="70%">
            <stop offset="0%" stopColor="#FFFDF7" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#E8E2DA" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#D4CDC2" stopOpacity="0.9" />
          </radialGradient>
          <filter id="wall-shadow-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>
        <rect width="600" height="375" fill="url(#sun-glow)" />

        {/* Tree branch shadow projections */}
        <g filter="url(#wall-shadow-blur)" fill="#5A5245" opacity="0.22">
          <path d="M-50 40 C60 80, 180 60, 290 140 C220 180, 140 190, 80 280 Z" />
          <path d="M380 -20 C440 60, 520 120, 620 160 C580 220, 480 260, 420 340 Z" />
        </g>
      </svg>

      {/* Centered 3D Metallic Emblem & Wordmark */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-3 sm:gap-4">
        {/* 3D Embossed Shield with Multi-layer Shading */}
        <div
          className="relative w-[110px] sm:w-[135px] md:w-[150px] aspect-[1/1.1] filter drop-shadow-2xl"
          style={{
            filter: 'drop-shadow(0 18px 24px rgba(18, 38, 48, 0.35)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))',
          }}
        >
          <svg viewBox="0 0 160 180" className="w-full h-full block" fill="none">
            <defs>
              <linearGradient id="shield-base-grad" x1="0" y1="0" x2="160" y2="180" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00A8C6" />
                <stop offset="45%" stopColor="#1E8CA8" />
                <stop offset="85%" stopColor="#D99E2E" />
                <stop offset="100%" stopColor="#F5C444" />
              </linearGradient>
              <linearGradient id="shield-inner-s" x1="20" y1="30" x2="140" y2="150" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#72D7E8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#E8AA25" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Shield Outer 3D Bevel Base */}
            <path
              d="M80 6 C120 6, 154 26, 154 65 C154 125, 116 162, 80 176 C44 162, 6 125, 6 65 C6 26, 40 6, 80 6 Z"
              fill="url(#shield-base-grad)"
              stroke="#0D4B5C"
              strokeWidth="2.5"
            />

            {/* Top Gloss Highlight Edge */}
            <path
              d="M80 10 C114 10, 146 28, 146 65"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.6"
            />

            {/* Inner Fluid Wave/S-Curve */}
            <path
              d="M32 68 C50 42, 110 42, 128 65 C115 88, 65 88, 42 112 C36 124, 70 138, 114 126"
              stroke="url(#shield-inner-s)"
              strokeWidth="15"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>

        {/* 3D Extruded "Skudo" Wordmark */}
        <h2
          className="font-sans-ui text-[34px] sm:text-[42px] md:text-[48px] font-black text-[#142A35] tracking-tight leading-none text-center"
          style={{
            textShadow: '0 6px 12px rgba(10, 24, 32, 0.35), 0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
        >
          Skudo
        </h2>
      </div>
    </div>
  );
};

// =========================================================================
// 4. CARD 4: SKUDO (Packaging & Merch Collateral on Stone Blocks)
// =========================================================================
const SkudoPackagingVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#DCD8CF] overflow-hidden select-none">
      {/* Realistic Background with Plants & Sunlight */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#C8C3B6] via-[#E4E0D6] to-[#EDE9DF]" />

      <svg viewBox="0 0 600 375" className="absolute inset-0 w-full h-full object-cover" fill="none">
        <defs>
          <linearGradient id="box-grad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#ECEAE4" />
          </linearGradient>
          <linearGradient id="tote-grad" x1="0" y1="0" x2="160" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F8F6F0" />
            <stop offset="100%" stopColor="#DDD8CD" />
          </linearGradient>
        </defs>

        {/* Background Foliage (Greenery on Left and Top) */}
        <g opacity="0.6">
          <ellipse cx="40" cy="60" rx="35" ry="50" fill="#758B6D" transform="rotate(-20 40 60)" />
          <ellipse cx="70" cy="100" rx="25" ry="40" fill="#5F7658" transform="rotate(15 70 100)" />
          <ellipse cx="20" cy="140" rx="30" ry="45" fill="#4B6045" transform="rotate(-10 20 140)" />
        </g>

        {/* Base Stone Plinth Platform */}
        <path d="M0 260 L600 240 L600 375 L0 375 Z" fill="#C2BDAF" />
        <path d="M0 260 L600 240 L600 250 L0 270 Z" fill="#B0AA9B" />

        {/* 1. Main Helmet Box on Left */}
        <g transform="translate(60, 90)">
          {/* Box Shadow */}
          <rect x="5" y="10" width="180" height="175" rx="6" fill="#6A6559" opacity="0.35" transform="rotate(2 5 10)" />
          {/* Main Front Face */}
          <rect width="170" height="165" rx="6" fill="url(#box-grad)" stroke="#D4D0C5" strokeWidth="2" />
          {/* Yellow Top Accent Strip */}
          <path d="M0 0 H170 V38 H0 Z" fill="#F4C742" />
          {/* Top Carry Handle */}
          <path d="M55 0 C55 -25, 115 -25, 115 0" stroke="#1C2128" strokeWidth="8" strokeLinecap="round" fill="none" />

          {/* Box Branding & Specs */}
          <text x="14" y="22" fill="#1C2128" fontSize="10" fontWeight="bold" fontFamily="sans-serif">Skudo</text>
          <text x="14" y="32" fill="#1C2128" fontSize="6" fontFamily="sans-serif">SMART RESPONSIVE HELMET</text>
          {/* Helmet Outline vector on Box */}
          <circle cx="118" cy="95" r="32" stroke="#4AA3B8" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
          <path d="M96 95 C96 78, 138 78, 138 95 C138 112, 110 115, 96 95 Z" stroke="#162D38" strokeWidth="2" fill="none" />
          {/* Large Skudo Logo on Lower Box */}
          <text x="38" y="145" fill="#122B36" fontSize="18" fontWeight="bold" fontFamily="sans-serif">Skudo</text>
          <circle cx="22" cy="140" r="9" fill="#00A3C4" />
        </g>

        {/* 2. Canvas Tote Bag (Center Right) */}
        <g transform="translate(260, 65)">
          {/* Green Handles */}
          <path d="M35 50 C35 -15, 65 -15, 65 50" stroke="#486858" strokeWidth="6" fill="none" />
          <path d="M105 50 C105 -15, 135 -15, 135 50" stroke="#486858" strokeWidth="6" fill="none" />
          {/* Bag Body */}
          <rect y="45" width="165" height="175" rx="6" fill="url(#tote-grad)" stroke="#CCC7BA" strokeWidth="1.5" />
          {/* Skudo Print on Tote */}
          <circle cx="48" cy="125" r="12" fill="#00A3C4" />
          <text x="68" y="132" fill="#122B36" fontSize="22" fontWeight="bold" fontFamily="sans-serif">Skudo</text>
        </g>

        {/* 3. Drawstring Pouch on Far Right */}
        <g transform="translate(440, 120)">
          <path d="M20 25 C5 50, 5 120, 25 140 C45 155, 95 155, 115 140 C135 120, 135 50, 120 25 Z" fill="#FFFFFF" stroke="#D2CDC0" strokeWidth="1.5" />
          {/* Yellow Top Rim */}
          <ellipse cx="70" cy="25" rx="50" ry="12" fill="#F4C742" />
          <circle cx="70" cy="78" r="10" fill="#00A3C4" />
          <text x="50" y="105" fill="#122B36" fontSize="11" fontWeight="bold" fontFamily="sans-serif">Skudo</text>
        </g>

        {/* 4. Business Cards in Foreground */}
        <g transform="translate(370, 220)">
          {/* Teal Card */}
          <rect width="110" height="65" rx="3" fill="#00A3C4" transform="rotate(-6 0 0)" />
          <text x="25" y="42" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif" transform="rotate(-6 0 0)">Skudo</text>
          {/* Yellow Card */}
          <rect x="35" y="15" width="105" height="62" rx="3" fill="#F4C742" transform="rotate(4 35 15)" />
          <text x="55" y="52" fill="#122B36" fontSize="12" fontWeight="bold" fontFamily="sans-serif" transform="rotate(4 35 15)">Skudo</text>
        </g>
      </svg>
    </div>
  );
};

// =========================================================================
// 5. CARD 5: SKUDO (Construction & Spacing Grid Layout)
// =========================================================================
const SkudoSpacingVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#FFFFFF] flex items-center justify-center overflow-hidden p-6 select-none">
      <svg viewBox="0 0 600 375" className="w-full h-full block" fill="none">
        <defs>
          <linearGradient id="grid-shield-grad" x1="0" y1="0" x2="100" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00A8C6" />
            <stop offset="60%" stopColor="#2E9DB8" />
            <stop offset="100%" stopColor="#F5C444" />
          </linearGradient>
        </defs>

        {/* Blue Technical Grid Boundary Box */}
        <rect
          x="65"
          y="70"
          width="470"
          height="235"
          stroke="#5EA5E8"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="rgba(235, 245, 255, 0.4)"
        />

        {/* Inner Content Bounding Box */}
        <rect
          x="110"
          y="110"
          width="380"
          height="155"
          stroke="#5EA5E8"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Vertical Separator Guides */}
        <line x1="110" y1="70" x2="110" y2="305" stroke="#5EA5E8" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="490" y1="70" x2="490" y2="305" stroke="#5EA5E8" strokeWidth="1" strokeDasharray="3 3" />

        {/* Dimension Lines with Arrows and 1X / 0.5X Labels */}
        {/* Left 1X */}
        <g stroke="#0077CC" strokeWidth="1.5">
          <line x1="65" y1="187" x2="110" y2="187" />
          <path d="M68 184 L65 187 L68 190" fill="none" />
          <path d="M107 184 L110 187 L107 190" fill="none" />
        </g>
        <text x="80" y="191" fill="#0077CC" fontSize="12" fontWeight="bold" fontFamily="monospace">1X</text>

        {/* Right 1X */}
        <g stroke="#0077CC" strokeWidth="1.5">
          <line x1="490" y1="187" x2="535" y2="187" />
          <path d="M493 184 L490 187 L493 190" fill="none" />
          <path d="M532 184 L535 187 L532 190" fill="none" />
        </g>
        <text x="505" y="191" fill="#0077CC" fontSize="12" fontWeight="bold" fontFamily="monospace">1X</text>

        {/* Top 1X */}
        <g stroke="#0077CC" strokeWidth="1.5">
          <line x1="300" y1="70" x2="300" y2="110" />
          <path d="M297 73 L300 70 L303 73" fill="none" />
          <path d="M297 107 L300 110 L303 107" fill="none" />
        </g>
        <text x="308" y="94" fill="#0077CC" fontSize="12" fontWeight="bold" fontFamily="monospace">1X</text>

        {/* Bottom 1X */}
        <g stroke="#0077CC" strokeWidth="1.5">
          <line x1="300" y1="265" x2="300" y2="305" />
          <path d="M297 268 L300 265 L303 268" fill="none" />
          <path d="M297 302 L300 305 L303 302" fill="none" />
        </g>
        <text x="308" y="289" fill="#0077CC" fontSize="12" fontWeight="bold" fontFamily="monospace">1X</text>

        {/* Center Skudo Shield & Wordmark */}
        <g transform="translate(130, 130)">
          {/* Shield */}
          <path
            d="M45 5 C68 5, 88 18, 88 45 C88 85, 65 105, 45 115 C25 105, 2 85, 2 45 C2 18, 22 5, 45 5 Z"
            fill="url(#grid-shield-grad)"
          />
          <path
            d="M18 45 C28 30, 62 30, 72 45 C65 60, 36 60, 24 75 C20 82, 40 92, 65 85"
            stroke="#FFFFFF"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Center 0.5X Spacing Arrow */}
          <g stroke="#0077CC" strokeWidth="1.2">
            <line x1="92" y1="60" x2="112" y2="60" />
            <path d="M94 58 L92 60 L94 62" fill="none" />
            <path d="M110 58 L112 60 L110 62" fill="none" />
          </g>
          <text x="93" y="55" fill="#0077CC" fontSize="9" fontWeight="bold" fontFamily="monospace">0.5X</text>

          {/* Wordmark */}
          <text x="118" y="78" fill="#0E232E" fontSize="56" fontWeight="bold" fontFamily="sans-serif">
            Skudo
          </text>
        </g>
      </svg>
    </div>
  );
};

// =========================================================================
// 6. CARD 6: SKUDO (Colour Palette System)
// =========================================================================
const SkudoColourPaletteVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-[#FFFFFF] flex flex-col justify-between overflow-hidden p-6 sm:p-8 select-none">
      {/* Title Header: S K U D O + COLOUR PALETTE */}
      <div className="flex flex-col gap-1">
        <span className="text-[11px] sm:text-[12px] font-bold text-[#142A35] tracking-[0.35em] uppercase font-mono">
          S K U D O
        </span>
        <h3 className="text-[24px] sm:text-[28px] md:text-[32px] font-black text-[#142A35] tracking-tight leading-none uppercase font-sans-ui">
          COLOUR PALETTE
        </h3>
      </div>

      {/* 4 Angled 3D Color Swatch Bars */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3.5 my-auto pt-4 pb-2">
        {/* Swatch 1: Soft Sky Blue (#C3E7F1) */}
        <div
          className="relative flex flex-col justify-between p-3 sm:p-4 rounded-[6px] h-[160px] sm:h-[185px] transition-transform duration-300 hover:-translate-y-1"
          style={{
            backgroundColor: '#C3E7F1',
            transform: 'skewX(-4deg)',
            boxShadow: '0 12px 18px -4px rgba(0, 45, 65, 0.18)',
          }}
        >
          <div className="flex flex-col">
            <span className="font-mono text-[10px] sm:text-[11.5px] font-bold text-[#142A35]">#C3E7F1</span>
            <div className="w-4 h-[1.5px] bg-[#142A35]/40 my-1" />
            <span className="text-[8px] sm:text-[9.5px] font-bold text-[#142A35] leading-tight">SOFT SKY BLUE</span>
          </div>
          <span className="text-[7.5px] sm:text-[8.5px] text-[#142A35]/80 font-medium">Light / Background</span>
        </div>

        {/* Swatch 2: Teal Blue (#519CAB) */}
        <div
          className="relative flex flex-col justify-between p-3 sm:p-4 rounded-[6px] h-[160px] sm:h-[185px] transition-transform duration-300 hover:-translate-y-1"
          style={{
            backgroundColor: '#519CAB',
            transform: 'skewX(-4deg)',
            boxShadow: '0 12px 18px -4px rgba(0, 45, 65, 0.22)',
          }}
        >
          <div className="flex flex-col">
            <span className="font-mono text-[10px] sm:text-[11.5px] font-bold text-white">#519CAB</span>
            <div className="w-4 h-[1.5px] bg-white/40 my-1" />
            <span className="text-[8px] sm:text-[9.5px] font-bold text-white leading-tight">TEAL BLUE</span>
          </div>
          <span className="text-[7.5px] sm:text-[8.5px] text-white/85 font-medium">Secondary</span>
        </div>

        {/* Swatch 3: Warm Yellow (#FFC64F) */}
        <div
          className="relative flex flex-col justify-between p-3 sm:p-4 rounded-[6px] h-[160px] sm:h-[185px] transition-transform duration-300 hover:-translate-y-1"
          style={{
            backgroundColor: '#FFC64F',
            transform: 'skewX(-4deg)',
            boxShadow: '0 12px 18px -4px rgba(75, 45, 0, 0.18)',
          }}
        >
          <div className="flex flex-col">
            <span className="font-mono text-[10px] sm:text-[11.5px] font-bold text-[#2A1800]">#FFC64F</span>
            <div className="w-4 h-[1.5px] bg-[#2A1800]/40 my-1" />
            <span className="text-[8px] sm:text-[9.5px] font-bold text-[#2A1800] leading-tight">WARM YELLOW</span>
          </div>
          <span className="text-[7.5px] sm:text-[8.5px] text-[#2A1800]/80 font-medium">Accent</span>
        </div>

        {/* Swatch 4: Midnight Teal (#20373B) */}
        <div
          className="relative flex flex-col justify-between p-3 sm:p-4 rounded-[6px] h-[160px] sm:h-[185px] transition-transform duration-300 hover:-translate-y-1"
          style={{
            backgroundColor: '#20373B',
            transform: 'skewX(-4deg)',
            boxShadow: '0 12px 18px -4px rgba(0, 0, 0, 0.35)',
          }}
        >
          <div className="flex flex-col">
            <span className="font-mono text-[10px] sm:text-[11.5px] font-bold text-white">#20373B</span>
            <div className="w-4 h-[1.5px] bg-white/40 my-1" />
            <span className="text-[8px] sm:text-[9.5px] font-bold text-white leading-tight">MIDNIGHT TEAL</span>
          </div>
          <span className="text-[7.5px] sm:text-[8.5px] text-white/85 font-medium">Primary / Text</span>
        </div>
      </div>
    </div>
  );
};

interface GraphicCardImageProps {
  primarySrc: string;
  fallbackSrc?: string;
  alt: string;
  fallback: React.ReactNode;
}

const GraphicCardImage: React.FC<GraphicCardImageProps> = ({ primarySrc, fallbackSrc, alt, fallback }) => {
  const [imgSrc, setImgSrc] = useState(primarySrc);
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <>{fallback}</>;
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => {
        if (fallbackSrc && imgSrc !== fallbackSrc) {
          setImgSrc(fallbackSrc);
        } else {
          setHasError(true);
        }
      }}
      className="w-full h-full object-cover block select-none"
    />
  );
};

// =========================================================================
// MAIN GRAPHIC DESIGN PAGE COMPONENT
// =========================================================================

export const GraphicDesignPage: React.FC<GraphicDesignPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack]);

  return (
    <div
      className="min-h-screen w-full text-[#323131] select-none flex flex-col items-center"
      style={{ backgroundColor: '#FFFFE1' }}
    >
      {/* Floating Minimalist Back Button (Non-intrusive) */}
      <button
        onClick={onBack}
        aria-label="Back to Portfolio"
        title="Back to Portfolio"
        className="fixed top-5 left-5 sm:top-7 sm:left-7 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#754640] hover:text-[#323131] border border-[#E5DFD3] shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer backdrop-blur-xs"
      >
        <span className="text-lg font-bold">←</span>
      </button>

      {/* ========================================================================= */}
      {/* 1. HERO POSTER SECTION                                                   */}
      {/* ========================================================================= */}
      <section
        className="relative w-full max-w-[1280px] mx-auto min-h-[330px] sm:min-h-[370px] md:min-h-[400px] flex flex-col justify-end overflow-hidden pt-16 sm:pt-20"
        style={{
          backgroundColor: '#FFFFE1',
        }}
      >
        {/* UPPER-LEFT CLUSTER (3 TILES: Exact Home Page Sizing) */}
        <div className="absolute top-16 sm:top-20 md:top-22 left-6 sm:left-10 lg:left-16 grid grid-cols-2 gap-2 pointer-events-none z-10">
          {/* Row 0, Col 0: Diamond Blue */}
          <div className="w-[42px] h-[42px] sm:w-[62px] sm:h-[62px] lg:w-[80px] lg:h-[80px] rounded-[8px] sm:rounded-[10px] lg:rounded-[14px] overflow-hidden shadow-xs">
            <DiamondBluePattern rotationSpeed={8} className="w-full h-full" />
          </div>

          {/* Row 0, Col 1: Four Flowers Green */}
          <div className="w-[42px] h-[42px] sm:w-[62px] sm:h-[62px] lg:w-[80px] lg:h-[80px] rounded-[8px] sm:rounded-[10px] lg:rounded-[14px] overflow-hidden shadow-xs">
            <FourFlowersGreenPattern rotationSpeed={8} className="w-full h-full" />
          </div>

          {/* Row 1, Col 0: Blue Flower on Yellow */}
          <div className="w-[42px] h-[42px] sm:w-[62px] sm:h-[62px] lg:w-[80px] lg:h-[80px] rounded-[8px] sm:rounded-[10px] lg:rounded-[14px] overflow-hidden shadow-xs">
            <BlueFlowerYellowPattern rotationSpeed={8} className="w-full h-full" />
          </div>

          {/* Row 1, Col 1 is empty in reference */}
          <div className="w-[42px] h-[42px] sm:w-[62px] sm:h-[62px] lg:w-[80px] lg:h-[80px]" />
        </div>

        {/* RIGHT-SIDE VERTICAL STACK (2 TILES: Exact Home Page Sizing) */}
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 right-6 sm:right-10 lg:right-16 flex flex-col gap-2 pointer-events-none z-10">
          {/* Top-Right: Pink Cream Tulips on Navy */}
          <div className="w-[42px] h-[42px] sm:w-[62px] sm:h-[62px] lg:w-[80px] lg:h-[80px] rounded-[8px] sm:rounded-[10px] lg:rounded-[14px] overflow-hidden shadow-xs">
            <PinkCreamTulipsNavyPattern rotationSpeed={8} className="w-full h-full" />
          </div>

          {/* Bottom-Right: Petal Mandala Red */}
          <div className="w-[42px] h-[42px] sm:w-[62px] sm:h-[62px] lg:w-[80px] lg:h-[80px] rounded-[8px] sm:rounded-[10px] lg:rounded-[14px] overflow-hidden shadow-xs">
            <PetalMandalaRedPattern rotationSpeed={8} className="w-full h-full" />
          </div>
        </div>

        {/* HERO MAIN HEADING (Tightly positioned under the upper-left tiles) */}
        <div className="px-6 sm:px-10 lg:px-16 pb-6 sm:pb-8 md:pb-10 z-20">
          <h1 className="font-editorial text-[36px] sm:text-[44px] md:text-[50px] lg:text-[55px] font-bold text-[#323131] tracking-tight leading-tight select-text">
            Graphic Design
          </h1>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PROJECT GALLERY (6 High-Fidelity Cards in 2-Column Grid)               */}
      {/* ========================================================================= */}
      <section className="w-full bg-white flex-1 flex flex-col items-center">
        <main className="w-full max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16 pb-24 sm:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* ROW 1, CARD 1: Choreagraphy for Stage (Logo) */}
            <div className="flex flex-col gap-3 group cursor-pointer">
              <div className="relative w-full aspect-[16/10] bg-white rounded-[14px] overflow-hidden border border-[#E5DFD3]/80 shadow-2xs transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.008]">
                <GraphicCardImage
                  primarySrc="/assets/graphic/gaphic card 1.png"
                  fallbackSrc="/assets/graphic/card-1.png"
                  alt="Choreagraphy for stage Logo"
                  fallback={<ChoreographyLogoVisual />}
                />
              </div>
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <ChoreographyMiniIcon />
                  <span className="font-sans-ui text-[14px] font-bold text-[#1A1713]">
                    Choreagraphy for stage
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E5DFD3] text-[11px] font-medium text-[#4A4744]">
                    Logo
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E5DFD3] text-[11px] font-medium text-[#4A4744]">
                    Identity
                  </span>
                </div>
              </div>
            </div>

            {/* ROW 1, CARD 2: Choreagraphy for Stage (Merch) */}
            <div className="flex flex-col gap-3 group cursor-pointer">
              <div className="relative w-full aspect-[16/10] bg-white rounded-[14px] overflow-hidden border border-[#E5DFD3]/80 shadow-2xs transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.008]">
                <GraphicCardImage
                  primarySrc="/assets/graphic/gaphic card 2.png"
                  fallbackSrc="/assets/graphic/card-2.png"
                  alt="Choreagraphy for stage Merch"
                  fallback={<ChoreographyMerchVisual />}
                />
              </div>
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <ChoreographyMiniIcon />
                  <span className="font-sans-ui text-[14px] font-bold text-[#1A1713]">
                    Choreagraphy for stage
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E5DFD3] text-[11px] font-medium text-[#4A4744]">
                    Merch
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E5DFD3] text-[11px] font-medium text-[#4A4744]">
                    Branding
                  </span>
                </div>
              </div>
            </div>

            {/* ROW 2, CARD 3: Skudo (3D Logo) */}
            <div className="flex flex-col gap-3 group cursor-pointer">
              <div className="relative w-full aspect-[16/10] bg-white rounded-[14px] overflow-hidden border border-[#E5DFD3]/80 shadow-2xs transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.008]">
                <GraphicCardImage
                  primarySrc="/assets/graphic/gaphic card 3.png"
                  fallbackSrc="/assets/graphic/card-3.png"
                  alt="Skudo 3D Logo"
                  fallback={<Skudo3DLogoVisual />}
                />
              </div>
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <SkudoMiniIcon />
                  <span className="font-sans-ui text-[14px] font-bold text-[#1A1713]">
                    Skudo
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E5DFD3] text-[11px] font-medium text-[#4A4744]">
                    Logo
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E5DFD3] text-[11px] font-medium text-[#4A4744]">
                    Identity
                  </span>
                </div>
              </div>
            </div>

            {/* ROW 2, CARD 4: Skudo (Packaging & Collateral) */}
            <div className="flex flex-col gap-3 group cursor-pointer">
              <div className="relative w-full aspect-[16/10] bg-white rounded-[14px] overflow-hidden border border-[#E5DFD3]/80 shadow-2xs transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.008]">
                <GraphicCardImage
                  primarySrc="/assets/graphic/gaphic card 4.png"
                  fallbackSrc="/assets/graphic/card-4.png"
                  alt="Skudo Packaging"
                  fallback={<SkudoPackagingVisual />}
                />
              </div>
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <SkudoMiniIcon />
                  <span className="font-sans-ui text-[14px] font-bold text-[#1A1713]">
                    Skudo
                  </span>
                </div>
              </div>
            </div>

            {/* ROW 3, CARD 5: Skudo (Logo Spacing Grid) */}
            <div className="flex flex-col gap-3 group cursor-pointer">
              <div className="relative w-full aspect-[16/10] bg-white rounded-[14px] overflow-hidden border border-[#E5DFD3]/80 shadow-2xs transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.008]">
                <GraphicCardImage
                  primarySrc="/assets/graphic/gaphic card 5.png"
                  fallbackSrc="/assets/graphic/card-5.png"
                  alt="Skudo Logo Spacing"
                  fallback={<SkudoSpacingVisual />}
                />
              </div>
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <SkudoMiniIcon />
                  <span className="font-sans-ui text-[14px] font-bold text-[#1A1713]">
                    Skudo
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E5DFD3] text-[11px] font-medium text-[#4A4744]">
                    Logo
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E5DFD3] text-[11px] font-medium text-[#4A4744]">
                    Spacing
                  </span>
                </div>
              </div>
            </div>

            {/* ROW 3, CARD 6: Skudo (Colour Palette) */}
            <div className="flex flex-col gap-3 group cursor-pointer">
              <div className="relative w-full aspect-[16/10] bg-white rounded-[14px] overflow-hidden border border-[#E5DFD3]/80 shadow-2xs transition-all duration-300 group-hover:shadow-md group-hover:scale-[1.008]">
                <GraphicCardImage
                  primarySrc="/assets/graphic/gaphic card 6.png"
                  fallbackSrc="/assets/graphic/card-6.png"
                  alt="Skudo Colour Palette"
                  fallback={<SkudoColourPaletteVisual />}
                />
              </div>
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <SkudoMiniIcon />
                  <span className="font-sans-ui text-[14px] font-bold text-[#1A1713]">
                    Skudo
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E5DFD3] text-[11px] font-medium text-[#4A4744]">
                    Logo
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white border border-[#E5DFD3] text-[11px] font-medium text-[#4A4744]">
                    Identity
                  </span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* 3. HOME PAGE SIGNATURE FOOTER */}
      <ClosingSection />
    </div>
  );
};
