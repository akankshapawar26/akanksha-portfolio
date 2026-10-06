import React, { useState } from 'react';
import { PatternRenderer, PatternType } from './TilePatterns';

export interface TileData {
  id: string;
  type: PatternType;
  name: string;
  origin?: string;
  x?: number; // relative/px position in desktop canvas
  y?: number;
  size?: number; // default 42px
  delay?: number;
}

interface DecorativeTileProps {
  tile: TileData;
  size?: number;
  borderRadius?: number;
  className?: string;
}

export const DecorativeTile: React.FC<DecorativeTileProps> = ({
  tile,
  size = 42,
  borderRadius,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const actualSize = tile.size ?? size;
  const radius = borderRadius ?? Math.round(actualSize * 0.1);

  return (
    <div
      role="img"
      aria-label={tile.name}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={
        actualSize > 0
          ? {
              width: `${actualSize}px`,
              height: `${actualSize}px`,
              borderRadius: `${radius}px`,
            }
          : undefined
      }
      className={`relative overflow-hidden cursor-default select-none transition-all duration-200 ease-out will-change-transform ${
        isHovered
          ? 'scale-[1.03] -translate-y-0.5 tile-hover-shadow z-20 brightness-[1.02]'
          : 'scale-100 tile-shadow z-10'
      } ${className}`}
    >
      <PatternRenderer type={tile.type} className="w-full h-full object-cover" />
      <div
        className="absolute inset-0 pointer-events-none rounded-[inherit] border border-black/[0.06] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]"
      />
    </div>
  );
};
