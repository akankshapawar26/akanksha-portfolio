import React from 'react';

// 1. Ishaara AR Mobile & Educational Mockup matching Figma c1.png and exact uploaded images
export const IshaaraVisual: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center overflow-visible select-none py-2">
      {/* Exact Figma Frame: display: flex; width: 364.31px; height: 285.64px; justify-content: center; align-items: center; */}
      <div
        className="relative flex items-center justify-center flex-shrink-0 scale-[0.82] xs:scale-[0.92] sm:scale-100 origin-center"
        style={{
          width: '364.31px',
          height: '285.64px',
        }}
      >
        {/* 1. Top-Left Card: Sketches (Project image 1.2.png) */}
        <div
          className="absolute z-10"
          style={{
            left: '0px',
            top: '18px',
            width: '190px',
            height: '150px',
            filter: 'drop-shadow(-4px 4px 6.6px rgba(0, 0, 0, 0.22))',
          }}
        >
          <img
            src="/assets/projects/ishaara/project-1-2.png"
            alt="Ishaara Research and Sketches"
            className="w-full h-full object-contain pointer-events-none rounded-[16px]"
            loading="eager"
          />
        </div>

        {/* 2. Top-Right Card: Dual Tilted Phones AR App (Project image 1.3.png) */}
        <div
          className="absolute z-10"
          style={{
            right: '0px',
            top: '32px',
            width: '202px',
            height: '179px',
            filter: 'drop-shadow(-4px 4px 6.6px rgba(0, 0, 0, 0.22))',
          }}
        >
          <img
            src="/assets/projects/ishaara/project-1-3.png"
            alt="Ishaara AR Room Scanning"
            className="w-full h-full object-contain pointer-events-none rounded-[16px]"
            loading="eager"
          />
        </div>

        {/* 3. Front Center Card: Blue concentric ripples with hands (Project image 1.1.png) */}
        <div
          className="absolute z-20"
          style={{
            left: '68px',
            bottom: '0px',
            width: '190px',
            height: '150px',
            filter: 'drop-shadow(-4px 4px 6.6px rgba(0, 0, 0, 0.22))',
          }}
        >
          <img
            src="/assets/projects/ishaara/project-1-1.png"
            alt="Ishaara Sensory Anchor & Interface"
            className="w-full h-full object-contain pointer-events-none rounded-[16px]"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

// 2. ASTRA AI Emotion & Relationship Mockup matching Figma c2.png and exact uploaded images
export const AstraVisual: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center overflow-visible select-none py-2">
      {/* Exact Figma Frame: display: flex; width: 364.31px; height: 285.64px; justify-content: center; align-items: center; */}
      <div
        className="relative flex items-center justify-center flex-shrink-0 scale-[0.82] xs:scale-[0.92] sm:scale-100 origin-center"
        style={{
          width: '364.31px',
          height: '285.64px',
        }}
      >
        {/* 1. Top-Left Card: Chat Dialogue Screens (Project image 2.3.png) */}
        <div
          className="absolute z-10"
          style={{
            left: '0px',
            top: '16px',
            width: '202px',
            height: '173px',
            filter: 'drop-shadow(-4px 4px 6.6px rgba(0, 0, 0, 0.22))',
          }}
        >
          <img
            src="/assets/projects/astra/project-2-3.png"
            alt="ASTRA Dialogue and Emotional Boundaries"
            className="w-full h-full object-contain pointer-events-none rounded-[16px]"
            loading="eager"
          />
        </div>

        {/* 2. Right Card: Moody Portrait of Man (Project image 2.1.png) */}
        <div
          className="absolute z-10"
          style={{
            right: '0px',
            top: '60px',
            width: '190px',
            height: '150px',
            filter: 'drop-shadow(-4px 4px 6.6px rgba(0, 0, 0, 0.22))',
          }}
        >
          <img
            src="/assets/projects/astra/project-2-1.png"
            alt="ASTRA Contemplative User Experience"
            className="w-full h-full object-contain pointer-events-none rounded-[16px]"
            loading="eager"
          />
        </div>

        {/* 3. Front Center Card: Dual Phone Mockups (Project image 2.2.png) */}
        <div
          className="absolute z-20"
          style={{
            left: '68px',
            bottom: '0px',
            width: '200px',
            height: '170px',
            filter: 'drop-shadow(-4px 4px 6.6px rgba(0, 0, 0, 0.22))',
          }}
        >
          <img
            src="/assets/projects/astra/project-2-2.png"
            alt="ASTRA Interaction Design Interface"
            className="w-full h-full object-contain pointer-events-none rounded-[16px]"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

// 3. Samsung Iris Assistive UI Mockup matching Figma c4.png and exact uploaded images
export const SamsungIrisVisual: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center overflow-visible select-none py-2">
      {/* Exact Figma Frame: display: flex; width: 364.31px; height: 285.64px; justify-content: center; align-items: center; */}
      <div
        className="relative flex items-center justify-center flex-shrink-0 scale-[0.82] xs:scale-[0.92] sm:scale-100 origin-center"
        style={{
          width: '364.31px',
          height: '285.64px',
        }}
      >
        {/* 1. Top-Left Card: 3 Phone Screens & Context Bubble (Project image 3.1.png) */}
        <div
          className="absolute z-10"
          style={{
            left: '0px',
            top: '16px',
            width: '197px',
            height: '157px',
            filter: 'drop-shadow(-4px 4px 6.6px rgba(0, 0, 0, 0.22))',
          }}
        >
          <img
            src="/assets/projects/samsung-iris/project-3-1.png"
            alt="Samsung Iris Multi-Touchpoint Phone Screens"
            className="w-full h-full object-contain pointer-events-none rounded-[16px]"
            loading="eager"
          />
        </div>

        {/* 2. Top-Right Card: Meet Iris Assistant Card (Project image 3.2.png) */}
        <div
          className="absolute z-10"
          style={{
            right: '0px',
            top: '32px',
            width: '197px',
            height: '157px',
            filter: 'drop-shadow(-4px 4px 6.6px rgba(0, 0, 0, 0.22))',
          }}
        >
          <img
            src="/assets/projects/samsung-iris/project-3-2.png"
            alt="Meet Iris Assistant Card"
            className="w-full h-full object-contain pointer-events-none rounded-[16px]"
            loading="eager"
          />
        </div>

        {/* 3. Front Center Card: Floating 3D Prisms & Spatial Mesh (Project image 3.3.png) */}
        <div
          className="absolute z-20"
          style={{
            left: '64px',
            bottom: '0px',
            width: '197px',
            height: '157px',
            filter: 'drop-shadow(-4px 4px 6.6px rgba(0, 0, 0, 0.22))',
          }}
        >
          <img
            src="/assets/projects/samsung-iris/project-3-3.png"
            alt="Samsung Iris 3D Spatial Assistant Graph"
            className="w-full h-full object-contain pointer-events-none rounded-[16px]"
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};
