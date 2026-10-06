import React from 'react';

export const HeroIntro: React.FC = () => {
  return (
    <div className="flex flex-col text-left select-none">
      {/* Salutation */}
      <span className="font-sans-ui text-[#323131] text-[20px] sm:text-[22px] font-normal leading-snug tracking-[-0.01em]">
        Hello, I'm
      </span>

      {/* Name */}
      <h1 className="font-sans-ui text-[#323131] text-[36px] sm:text-[42px] font-bold tracking-[-0.025em] leading-[1.08] mt-1">
        Akanksha Pawar
      </h1>

      {/* Role */}
      <h2 className="font-sans-ui text-[#C99492] text-[28px] sm:text-[34px] font-bold tracking-[-0.02em] leading-[1.08] mt-1">
        UX Designer
      </h2>
    </div>
  );
};
