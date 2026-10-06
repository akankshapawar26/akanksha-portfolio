import React, { useState } from 'react';
import {
  PinkCreamTulipsNavyPattern,
  PetalMandalaRedPattern,
  RosetteMandalaYellowPattern,
} from './TilePatterns';

interface CDJewelCaseProps {
  title: string;
  renderArtwork: () => React.ReactNode;
  onClick?: () => void;
}

const CDJewelCase: React.FC<CDJewelCaseProps> = ({ title, renderArtwork, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
      className="flex flex-col items-center select-none cursor-pointer group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white/80 rounded-xl p-2 transition-transform duration-200"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Perspective Scene Container for Jewel Case */}
      <div
        className="relative"
        style={{
          width: 'min(386.106px, calc(100vw - 36px))',
          height: 'min(334.528px, calc((100vw - 36px) * 0.8664))',
          perspective: '1200px',
        }}
      >
        {/* Realistic Case Shadow onto Sky-Blue Surface */}
        <div
          className="absolute inset-0 rounded-[4px] pointer-events-none transition-all duration-500"
          style={{
            boxShadow: isHovered
              ? '0 24px 48px -6px rgba(0, 35, 75, 0.38), 0 8px 18px rgba(0, 0, 0, 0.2)'
              : '0 16px 36px -6px rgba(0, 35, 75, 0.26), 0 6px 14px rgba(0, 0, 0, 0.12)',
            transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          }}
        />

        {/* ========================================================= */}
        {/* BASE LAYER: Tray, CD Disc, Left Spine & Bevels            */}
        {/* ========================================================= */}
        <div className="absolute inset-0 w-full h-full rounded-[4px] overflow-hidden">
          <svg
            viewBox="0 0 386.106 334.528"
            className="w-full h-full block"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 1. Interior Blush Pink Tray Background */}
            <rect x="36.842" y="0" width="349.264" height="334.528" fill="#FBD6D6" />

            {/* 2. Realistic CD Disc Inside Tray */}
            <g id="cd-disc">
              {/* Tray circular indentation shadow */}
              <circle cx="260" cy="167.264" r="128" fill="rgba(0,0,0,0.06)" />

              {/* Dark Vinyl Disc Body */}
              <circle cx="260" cy="167.264" r="124" fill="#242D3A" />

              {/* Concentric Vinyl Grooves / Texture */}
              <circle cx="260" cy="167.264" r="115" stroke="rgba(255,255,255,0.07)" strokeWidth="1" fill="none" />
              <circle cx="260" cy="167.264" r="102" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
              <circle cx="260" cy="167.264" r="88" stroke="rgba(255,255,255,0.08)" strokeWidth="1.2" fill="none" />
              <circle cx="260" cy="167.264" r="74" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />

              {/* Authentic White Curved Light-Groove Reflections */}
              <path
                d="M 342 110 A 90 90 0 0 0 276 80"
                stroke="#FFFFFF"
                strokeWidth="3.2"
                strokeLinecap="round"
                opacity="0.8"
                fill="none"
              />
              <path
                d="M 326 122 A 72 72 0 0 0 282 96"
                stroke="#FFFFFF"
                strokeWidth="2.4"
                strokeLinecap="round"
                opacity="0.6"
                fill="none"
              />

              {/* Center Hub Metal / Matte Ring */}
              <circle cx="260" cy="167.264" r="35" fill="#8E99A8" />

              {/* Transparent Polycarbonate Inner Clamp Ring */}
              <circle cx="260" cy="167.264" r="23" fill="#A8B2C0" />
              <circle cx="260" cy="167.264" r="23" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" />

              {/* Center Spindle Hole */}
              <circle cx="260" cy="167.264" r="12" fill="#181F28" />
            </g>

            {/* 3. Shadow cast by the swinging door onto the interior tray */}
            <rect
              x="36.842"
              y="0"
              width="60"
              height="334.528"
              fill="url(#inner-shadow-gradient)"
              opacity={isHovered ? 0.85 : 0}
              style={{ transition: 'opacity 450ms cubic-bezier(0.16, 1, 0.3, 1)' }}
            />

            {/* Gradient definition for interior hinge shadow */}
            <defs>
              <linearGradient id="inner-shadow-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#000000" stopOpacity="0.45" />
                <stop offset="40%" stopColor="#000000" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* 4. Stationary Clear/White Left Spine Assembly */}
            <rect x="0" y="0" width="3.684" height="334.526" fill="#AEABAB" />
            <rect x="3.684" y="0" width="33.158" height="334.526" fill="#FFFFFF" />
            {/* Top Spine Bevel Cap */}
            <g transform="translate(3.684, 0)">
              <path d="M0 3.68359H33.1579L36.8421 -0.000617504H3.31579L0 3.68359Z" fill="#A0A0A0" />
            </g>
            {/* Bottom Spine Bevel Cap */}
            <g transform="translate(3.684, 330.842) scale(1, -1) translate(0, -3.684)">
              <path d="M0 3.68359H33.1579L36.8421 -0.000617504H3.31579L0 3.68359Z" fill="#A0A0A0" />
            </g>
            {/* Spine Inner Hinge Groove Line */}
            <rect x="36.842" y="0" width="3.684" height="334.526" fill="#D9D9D9" />
          </svg>
        </div>

        {/* ========================================================= */}
        {/* HINGED FRONT COVER: Swings Open 48° on Hover               */}
        {/* ========================================================= */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            transformOrigin: '9.54% center',
            transform: isHovered
              ? 'rotateY(-48deg) translateZ(4px)'
              : 'rotateY(0deg) translateZ(0px)',
            transition: 'transform 480ms cubic-bezier(0.16, 1, 0.3, 1), filter 480ms cubic-bezier(0.16, 1, 0.3, 1)',
            transformStyle: 'preserve-3d',
            filter: isHovered
              ? 'drop-shadow(-8px 14px 18px rgba(0, 0, 0, 0.28))'
              : 'drop-shadow(0 0 0 rgba(0, 0, 0, 0))',
          }}
        >
          <svg
            viewBox="0 0 386.106 334.528"
            className="w-full h-full block"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Front Cover Artwork Area */}
            <g id="front-door-artwork">
              {/* Pink Cover Base */}
              <rect x="36.842" y="0" width="349.264" height="334.528" fill="#FBD6D6" />

              {/* Injected Unique Artwork */}
              {renderArtwork()}

              {/* Realistic Glossy Plastic Sheen Overlay */}
              <rect
                x="36.842"
                y="0"
                width="349.264"
                height="334.528"
                fill="url(#cover-specular-gloss)"
                opacity="0.32"
              />

              {/* Jewel-Case Top Bevel Reflection Line (#FFF5F5) */}
              <g transform="translate(36.842, 0)">
                <path
                  d="M350.002 2.94675L352.949 -0.000617504H0.0017395L3.68597 3.68359L350.002 2.94675Z"
                  fill="#FFF5F5"
                />
              </g>

              {/* Jewel-Case Bottom Bevel Line (#C49090) */}
              <g transform="translate(36.842, 330.842)">
                <path
                  d="M350.002 0.736842L352.949 3.68421H0.0017395L3.68594 0L350.002 0.736842Z"
                  fill="#C49090"
                />
              </g>

              {/* Jewel-Case Right Edge Reflection Line (#FFA4A4) */}
              <g transform="translate(382.422, 0)">
                <path
                  d="M0.736842 331.734L3.68421 334.527V0.000915527L0 3.49286L0.736842 331.734Z"
                  fill="#FFA4A4"
                />
              </g>

              {/* Left Hinge Clear Seam */}
              <rect x="36.842" y="0" width="2" height="334.528" fill="rgba(255,255,255,0.6)" />
            </g>

            {/* Specular gloss gradient definition */}
            <defs>
              <linearGradient id="cover-specular-gloss" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
                <stop offset="28%" stopColor="#FFFFFF" stopOpacity="0.25" />
                <stop offset="55%" stopColor="#FFFFFF" stopOpacity="0" />
                <stop offset="78%" stopColor="#FFFFFF" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Label under case: Consistently aligned with clear vertical breathing room */}
      <span className="font-sans-ui text-[19px] sm:text-[21px] md:text-[22px] font-bold text-black mt-3 sm:mt-3.5 tracking-tight text-center transition-colors duration-200 group-hover:text-blue-900 select-none">
        {title}
      </span>
    </div>
  );
};

interface BeyondTheScreensProps {
  onOpenGraphicDesign?: () => void;
  onOpenIllustration?: () => void;
}

export const BeyondTheScreens: React.FC<BeyondTheScreensProps> = ({
  onOpenGraphicDesign,
  onOpenIllustration,
}) => {
  // Positioning offsets computed for the Cat Illustration
  const catX = 33.3;
  const catY = 140.8;

  const stemX = catX + 175.227;
  const stemY = catY + 20.991;

  const flowerX = stemX - 47.576;
  const flowerY = stemY - 110.834;

  const centerX = flowerX + (114.597 - 38.753) / 2;
  const centerY = flowerY + (111.102 - 32.768) / 2;

  return (
    <section className="relative w-full bg-[#5CB4F8] flex flex-col justify-center items-center py-12 sm:py-16 pb-28 sm:pb-32 md:pb-36 px-4 sm:px-8 lg:px-12 overflow-hidden select-none">
      {/* 1. Top-Left 2x2 Decorative Corner Tiles */}
      <div
        className="absolute top-6 left-6 sm:top-8 sm:left-10 grid grid-cols-2 gap-2.5 sm:gap-3 pointer-events-none z-10"
        aria-hidden="true"
      >
        {/* Row 1, Col 1: Solid Soft Pink Tile */}
        <div className="w-[58px] h-[58px] sm:w-[76px] sm:h-[76px] bg-[#F8BCCB] rounded-[14px] sm:rounded-[16px] shadow-sm" />

        {/* Row 1, Col 2: Navy Floral Tile (PinkCreamTulipsNavyPattern) */}
        <div className="w-[58px] h-[58px] sm:w-[76px] sm:h-[76px] rounded-[14px] sm:rounded-[16px] overflow-hidden shadow-sm">
          <PinkCreamTulipsNavyPattern rotationSpeed={8} className="w-full h-full" />
        </div>

        {/* Row 2, Col 1: Red Mandala Tile (PetalMandalaRedPattern) */}
        <div className="w-[58px] h-[58px] sm:w-[76px] sm:h-[76px] rounded-[14px] sm:rounded-[16px] overflow-hidden shadow-sm">
          <PetalMandalaRedPattern rotationSpeed={8} className="w-full h-full" />
        </div>

        {/* Row 2, Col 2: Solid Soft Yellow Tile */}
        <div className="w-[58px] h-[58px] sm:w-[76px] sm:h-[76px] bg-[#F8D082] rounded-[14px] sm:rounded-[16px] shadow-sm" />
      </div>

      {/* 2. Bottom-Right Horizontal Decorative Tiles (Positioned safely below the cards with equal spacing) */}
      <div
        className="absolute bottom-5 sm:bottom-6 md:bottom-8 right-6 sm:right-10 md:right-12 lg:right-16 flex flex-row gap-2.5 sm:gap-3 pointer-events-none z-10"
        aria-hidden="true"
      >
        {/* Solid Soft Pink Tile */}
        <div className="w-[54px] h-[54px] sm:w-[68px] sm:h-[68px] md:w-[76px] md:h-[76px] bg-[#F8BCCB] rounded-[14px] sm:rounded-[16px] shadow-sm" />

        {/* Yellow Rosette Tile */}
        <div className="w-[54px] h-[54px] sm:w-[68px] sm:h-[68px] md:w-[76px] md:h-[76px] rounded-[14px] sm:rounded-[16px] overflow-hidden shadow-sm">
          <RosetteMandalaYellowPattern rotationDuration={8} className="w-full h-full" />
        </div>
      </div>

      {/* 3. Main Section Container: Balanced vertical rhythm */}
      <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center justify-center relative z-20">
        {/* Section Heading: "Beyond the Screens" */}
        <div className="w-full pt-32 sm:pt-4 lg:pt-0 sm:pl-[200px] md:pl-[220px] lg:pl-0 mb-8 sm:mb-10 lg:mb-12 flex justify-center sm:justify-end lg:justify-center">
          <h2 className="font-editorial text-[38px] sm:text-[44px] md:text-[50px] lg:text-[56px] font-bold text-white tracking-[-0.015em] drop-shadow-sm text-center sm:text-right lg:text-center">
            Beyond the Screens
          </h2>
        </div>

        {/* 4. Two Interactive CD Jewel Cases */}
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-14 md:gap-16 lg:gap-20">
          {/* ========================================================= */}
          {/* CASE 1: Graphic Design                                    */}
          {/* ========================================================= */}
          <CDJewelCase
            title="Graphic Design"
            onClick={onOpenGraphicDesign}
            renderArtwork={() => (
              <>
                {/* Warm Amber-Yellow Block */}
                <rect x="76" y="16" width="138" height="268" fill="#F1AF34" />

                {/* Authentic Orange 8-Petal Flower */}
                <g transform="translate(178.106, 70.528)">
                  <path
                    d="M143.556 0C162.112 5.41646e-05 177.155 23.2484 177.155 51.9268C177.155 58.2624 176.419 64.3328 175.075 69.9463C177.609 66.7654 180.482 63.6826 183.677 60.7705C191.316 53.808 199.751 48.7654 208 45.8047V248.937C198.892 245.396 189.604 239.044 181.598 230.26C179.706 228.184 177.957 226.048 176.352 223.874C176.876 227.519 177.155 231.308 177.155 235.197C177.155 245.853 175.078 255.758 171.516 264H115.596C112.034 255.758 109.956 245.853 109.956 235.197C109.956 230.39 110.381 225.735 111.172 221.316C108.494 224.77 105.419 228.116 101.967 231.262C80.7707 250.58 53.4548 255.121 40.9551 241.406C28.4555 227.691 35.5052 200.912 56.7012 181.595C58.7629 179.716 60.8837 177.978 63.042 176.382C59.4609 176.887 55.7421 177.156 51.9268 177.156C23.2484 177.156 5.41688e-05 162.113 0 143.557C0 125 23.2483 109.957 51.9268 109.957C53.9229 109.957 55.8926 110.032 57.8301 110.174C57.1642 109.493 56.5052 108.797 55.8555 108.084C36.5377 86.8879 31.9958 59.572 45.7109 47.0723C59.4261 34.5729 86.2038 41.6227 105.521 62.8184C108.095 65.6421 110.405 68.576 112.445 71.5674C110.842 65.5084 109.956 58.8773 109.956 51.9268C109.956 23.2484 124.999 0 143.556 0ZM121.894 91.6182C125.394 104.598 123.54 116.655 115.667 123.83C111.343 127.771 105.72 129.766 99.4424 129.99C102.276 134.14 103.854 138.728 103.854 143.557C103.853 151.132 99.9782 158.12 93.4424 163.739C103.283 162.754 112.03 165.214 117.713 171.45C122.821 177.055 124.662 184.841 123.609 193.408C129.188 187.038 136.087 183.271 143.556 183.271C151.141 183.271 158.139 187.157 163.763 193.71C162.726 183.791 165.177 174.968 171.453 169.248C177.014 164.18 184.722 162.326 193.209 163.325C186.96 157.778 183.271 150.947 183.271 143.557C183.271 138.141 185.252 133.026 188.77 128.495C180.34 128.643 172.944 126.083 167.931 120.582C162.025 114.103 160.485 104.708 162.736 94.5615C157.297 100.418 150.687 103.853 143.556 103.854C135.301 103.854 127.743 99.2512 121.894 91.6182Z"
                    fill="#ED732A"
                  />
                </g>
              </>
            )}
          />

          {/* ========================================================= */}
          {/* CASE 2: Illustration                                      */}
          {/* ========================================================= */}
          <CDJewelCase
            title="Illustration"
            onClick={onOpenIllustration}
            renderArtwork={() => (
              <g id="user-cat-artwork">
                {/* 1. Green Stem & Leaf */}
                <g transform={`translate(${stemX}, ${stemY})`}>
                  <path
                    d="M1.54277 0C5.59852 0.18325 7.22701 0.64025 11.3558 0.0830002C11.7738 3.34075 11.4853 6.60825 11.487 9.854C11.4908 16.4488 10.858 24.3832 11.345 30.8797C15.9663 18.0355 27.8453 4.381 42.008 0.942749C43.5503 0.568249 48.51 -0.259504 48.8653 1.85825C52.461 23.2957 32.4153 50.2525 10.9718 51.906C11.0198 53.5473 11.1293 55.4987 11.035 57.114C10.936 58.9235 10.8748 60.4258 10.8988 62.2413L0.331009 62.2352C0.325009 61.618 0.353521 59.4895 0.197021 59.037C-0.306479 51.0693 0.308262 39.0478 0.356262 30.8038C0.406262 22.235 0.26777 7.98 1.54277 0Z"
                    fill="#4D6846"
                  />
                </g>

                {/* 2. Dusty Pink Flower Petals */}
                <g transform={`translate(${flowerX}, ${flowerY})`}>
                  <path
                    d="M42.8755 32.8644C40.7488 25.1524 40.4016 13.4887 44.4561 6.85535C51.6126 -4.85253 68.5375 -0.64968 70.9948 12.5479C72.3813 19.9949 72.4185 27.0769 70.3418 33.9679C78.1305 24.7154 96.095 12.1814 107.772 22.1882C110.401 24.4517 112.008 27.6787 112.23 31.1407C113.28 45.6207 95.6308 49.8444 85.724 54.3269C92.5055 54.4972 106.131 59.3897 110.54 64.2487C120.264 74.9659 111.174 89.3604 97.3493 88.0432C86.9018 87.0479 77.8993 82.1802 70.6826 75.3307C73.0906 83.3122 73.8465 95.8244 69.8215 103.497C67.749 107.447 64.7733 109.27 60.6293 110.481C60.3078 110.575 59.9808 110.648 59.6503 110.702L58.9318 110.834C54.803 111.392 53.1746 110.935 49.1188 110.751L48.961 110.512C44.201 107.794 41.3838 105.55 39.8235 99.8209C37.9948 93.1057 39.9878 81.5572 42.1333 75.0742C33.0663 81.3847 22.5523 88.2044 10.9143 86.1584C7.38954 85.5387 4.36105 83.8699 2.3018 80.8822C0.347054 78.0884 -0.406206 74.6279 0.209794 71.2744C2.35104 60.0149 18.9418 54.4804 28.9703 54.3682C19.766 50.0559 6.8358 48.4579 2.6823 37.2024C0.257297 30.6317 4.81579 22.4652 11.4025 20.4344C23.4368 16.8559 34.744 25.1344 42.8755 32.8644Z"
                    fill="#EFA9A5"
                  />
                </g>

                {/* 3. Orange-Brown Flower Center */}
                <g transform={`translate(${centerX}, ${centerY})`}>
                  <path
                    d="M17.0849 0.116362C25.1604 -0.765638 34.8189 3.40211 37.8234 11.4041C40.2719 17.9251 37.7309 25.2869 31.9934 29.1489C28.6604 31.3924 25.5629 32.0636 21.6669 32.7186C12.9539 33.3059 1.38513 28.6909 0.176626 19.1734C-1.32537 7.34361 6.96113 1.78736 17.0849 0.116362Z"
                    fill="#C65227"
                  />
                </g>

                {/* White Backing behind Eyes & Nose cutouts */}
                <ellipse cx={catX + 110} cy={catY + 148} rx="16" ry="18" fill="#FFFFFF" />
                <ellipse cx={catX + 245} cy={catY + 148} rx="16" ry="18" fill="#FFFFFF" />
                <circle cx={catX + 180} cy={catY + 174} r="6.5" fill="#FFFFFF" />

                {/* 4. Black Cat Silhouette */}
                <g transform={`translate(${catX}, ${catY})`}>
                  <path
                    d="M45.8676 156.966C45.6213 152.483 45.9638 147.328 46.1673 142.849C46.3351 138.389 46.4793 133.928 46.5996 129.467C46.7881 123.494 46.5851 116.73 46.8686 111.008C47.9658 91.3863 50.2431 71.8483 53.6878 52.5001C55.6116 41.6011 57.4931 31.0851 60.6943 20.3643C62.3741 14.7386 65.3441 4.12457 70.7438 0.816069C72.3781 -0.185431 76.7476 -0.146429 78.4748 0.530821C83.5906 2.53657 89.0708 7.97232 92.6851 11.8523C103.831 23.8171 113.561 37.2973 122.488 50.9558C129.534 61.7368 136.911 73.6156 142.801 85.0731C145.412 84.8983 147.975 84.5251 150.577 84.3236C158.851 83.6783 167.145 83.3143 175.444 83.2321C175.394 82.2503 175.425 81.0253 175.424 80.0223C175.58 80.4748 175.552 82.6033 175.558 83.2206L186.125 83.2266C186.101 81.4111 186.163 79.9088 186.262 78.0993L186.32 83.2911C194.73 83.1613 206.638 84.1458 214.96 85.2946C216.064 81.7823 218.709 78.1141 220.539 74.8761C230.114 57.9321 261.065 10.1813 277.402 1.48857C279.885 0.168319 282.917 -0.46543 285.662 0.39057C288.465 1.26507 290.307 3.93832 291.572 6.43407C296.897 16.9391 299.682 34.5456 301.5 46.3486C304.79 67.5868 306.885 88.9928 307.78 110.466C308.252 125.38 307.722 141.721 307.857 156.826C310.345 156.321 317.02 154.841 319.322 154.676V157.671C316.447 158.308 310.56 159.708 307.835 159.903C307.835 163.591 307.877 167.366 307.822 171.048C311.757 171.286 315.42 172.088 319.322 172.608V175.243C318.265 175.173 308.652 173.943 307.807 173.736C307.842 180.398 307.837 187.063 307.795 193.726H46.2023C45.7351 188.126 45.8396 181.903 45.8336 176.228C42.7251 176.468 38.8503 176.241 35.6903 176.218C24.6438 176.131 13.8421 175.931 2.84563 177.193C1.85515 177.306 0.722128 177.028 0.000553301 176.306C0.0071033 175.466 -0.0678718 175.801 0.438478 174.998C5.21675 171.893 38.2208 172.021 45.8426 172.351C45.7741 168.406 45.8013 164.371 45.7853 160.418C37.9408 159.318 29.9451 157.268 21.7615 156.311C19.0245 155.991 6.76155 154.713 5.02763 154.238C4.35505 153.566 4.56815 153.886 4.30103 152.848C4.4759 152.196 4.55405 152.016 5.1998 151.686C8.29765 150.106 40.6698 155.588 45.8676 156.966ZM92.0486 161.673C95.7321 164.913 99.2051 167.163 104.02 168.338C98.6258 158.608 97.3296 147.131 100.417 136.443C100.969 134.437 101.696 132.483 102.59 130.604C102.971 129.809 104.034 128.085 103.824 127.382L103.763 127.324C95.8536 129.24 91.0901 131.342 84.7881 136.806C83.4196 137.993 81.2673 140.139 80.3228 141.64C81.9633 150.563 85.3376 155.508 92.0486 161.673ZM180.091 179.013C181.914 178.391 184.686 176.561 185.147 174.688C186.65 168.588 180.452 168.411 176.848 168.598C168.725 169.058 170.88 179.353 180.091 179.013ZM130.754 131.005C130.58 131.86 132.423 136.08 132.642 137.463C134.366 148.336 133.936 160.241 127.252 169.433C131.915 168.091 135.49 167.163 139.72 164.608C141.312 163.656 149.333 158.263 149.251 157.091C148.597 147.741 138.807 134.344 130.754 131.005ZM253.302 168.193C258.535 166.703 261.11 164.941 265.257 161.501C270.447 157.018 275.357 150.323 276.627 143.204C276.89 141.725 275.992 140.305 274.997 139.217C269.892 133.633 260.857 128.362 253.3 127.447C253.312 127.499 253.325 127.55 253.337 127.602C259.802 140.861 260.347 154.388 253.302 168.193ZM226.474 131.218C217.104 136.464 210.946 145.014 207.919 155.233C207.702 155.966 207.669 156.986 208.131 157.571C210.124 160.093 215.297 163.456 217.989 164.961C222.844 167.716 224.657 168.071 230.044 169.551C224.153 159.608 222.206 149.973 224.785 138.375C225.047 137.2 226.844 132.007 226.718 131.368L226.474 131.218Z"
                    fill="#000000"
                  />
                </g>
              </g>
            )}
          />
        </div>
      </div>
    </section>
  );
};
