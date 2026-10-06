import React from 'react';

export const HeroHeadline: React.FC = () => {
  return (
    <div className="text-center select-none w-full max-w-[1050px] mx-auto">
      <h3 className="font-editorial text-[#323131] text-[34px] sm:text-[44px] md:text-[50px] lg:text-[55px] font-bold leading-[1.18] tracking-[-0.02em] text-center">
        <span className="block whitespace-nowrap">Where research meets creativity,</span>
        <span className="block whitespace-nowrap">and ideas become experiences.</span>
      </h3>
    </div>
  );
};
