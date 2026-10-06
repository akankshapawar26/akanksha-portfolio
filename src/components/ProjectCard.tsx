import React from 'react';
import { PatternType, PatternRenderer } from './TilePatterns';
import { ViewProjectButton } from './ViewProjectButton';

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  buttonText?: string;
  buttonHref?: string;
  borderPattern?: PatternType;
  visual: React.ReactNode;
  onViewProject?: () => void;
  cardVariant?: 'blue-floral' | 'yellow-floral' | 'red-floral' | 'standard';
  isFirstCard?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  buttonText = 'VIEW PROJECT',
  buttonHref,
  borderPattern = 'diamond-blue',
  visual,
  onViewProject,
  cardVariant = 'standard',
  isFirstCard = false,
}) => {
  const effectiveVariant = isFirstCard ? 'blue-floral' : cardVariant;

  // 1. Featured Cards with Master Tile Patterns (Card 1: Blue Floral, Card 2: Yellow Floral, Card 3: Red Floral)
  if (
    effectiveVariant === 'blue-floral' ||
    effectiveVariant === 'yellow-floral' ||
    effectiveVariant === 'red-floral'
  ) {
    const patternClass =
      effectiveVariant === 'blue-floral'
        ? 'card-floral-pattern'
        : effectiveVariant === 'yellow-floral'
        ? 'card-yellow-pattern'
        : 'card-red-pattern';

    return (
      <div
        className={`${patternClass} p-3 sm:p-4 mx-auto relative overflow-hidden transition-all duration-300`}
        style={{
          width: 'min(998px, calc(100vw - 32px))',
          minHeight: '408px',
          borderRadius: '15px',
          boxShadow: '-4px 4px 4px 0 rgba(0, 0, 0, 0.25)',
        }}
      >
        {/* White Interior Content Container */}
        <div className="relative z-10 bg-white rounded-[11px] p-6 sm:p-8 md:px-10 md:py-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 h-full md:min-h-[376px]">
          {/* Left Text Block */}
          <div className="w-full md:w-[48%] flex flex-col justify-between h-full text-left">
            <div>
              <h3 className="font-sans-ui text-[28px] sm:text-[34px] font-bold text-[#1C1B1A] tracking-tight leading-tight mb-2.5">
                {title}
              </h3>

              <p className="font-sans-ui text-[15px] sm:text-[16px] text-[#71717A] font-normal leading-[1.6] max-w-[430px] mb-6">
                {description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                {tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="font-sans-ui text-[12px] sm:text-[13px] text-[#71717A] font-medium px-4 py-1.5 rounded-full border border-[#D4D4D8] bg-white select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* View Project Button with Figma interaction */}
            <div className="mt-2 pt-2">
              <ViewProjectButton onClick={onViewProject} href={buttonHref} text={buttonText} />
            </div>
          </div>

          {/* Right Visual Area */}
          <div className="w-full md:w-[52%] flex items-center justify-center relative min-h-[240px] md:min-h-[310px]">
            {visual}
          </div>
        </div>
      </div>
    );
  }

  // 2. Standard Project Card (Card 3: Samsung Iris) with Ribbon Pattern
  return (
    <div className="w-full max-w-[940px] mx-auto project-card-transition">
      <div className="relative rounded-[22px] overflow-hidden p-[8px] sm:p-[10px] shadow-sm">
        {/* Repeating Pattern Background Ribbon */}
        <div className="absolute inset-0 z-0 overflow-hidden flex flex-wrap opacity-95">
          <div className="w-full h-full grid grid-cols-12 sm:grid-cols-20 gap-0">
            {Array.from({ length: 40 }).map((_, i) => (
              <div key={i} className="w-full aspect-square">
                <PatternRenderer type={borderPattern} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* White Interior Content Container */}
        <div className="relative z-10 bg-white rounded-[16px] p-6 sm:p-9 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          {/* Left Text Block */}
          <div className="w-full md:w-[48%] flex flex-col items-start text-left">
            <h3 className="font-sans-ui text-[26px] sm:text-[30px] font-black text-[#1C1B1A] tracking-tight">
              {title}
            </h3>

            <p className="font-sans-ui text-[13.5px] sm:text-[14.5px] text-[#666666] font-normal leading-[1.55] mt-2.5">
              {description}
            </p>

            {/* Tags (pill capsules with thin grey outline) */}
            <div className="flex flex-wrap items-center gap-2 mt-4">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-sans-ui text-[11px] text-[#555555] font-medium px-3 py-1 rounded-full border border-slate-200/90 bg-transparent select-none"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* View Project Button */}
            <div className="mt-6">
              <ViewProjectButton onClick={onViewProject} href={buttonHref} text={buttonText} />
            </div>
          </div>

          {/* Right Visual Area */}
          <div className="w-full md:w-[50%] flex items-center justify-center">
            {visual}
          </div>
        </div>
      </div>
    </div>
  );
};
