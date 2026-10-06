import React, { useState, useEffect } from 'react';
import { DecorativeTile } from './DecorativeTile';
import { PatternType } from './TilePatterns';

interface PositionedTile {
  id: string;
  type: PatternType;
  name: string;
  x: number;
  y: number;
}

// =========================================================================
// PROPORTIONALLY SCALED DECORATIVE TILES (Step: 80px tile + 8px gap = 88px)
// - Exact positions and arrangement strictly preserved.
// - Canvas bounds: width 1048px, height 256px.
// =========================================================================
const TILE_SIZE = 80;
const TILE_GAP = 8;
const STEP = TILE_SIZE + TILE_GAP; // 88px

const FOOTER_TILES: PositionedTile[] = [
  // --- LEFT CLUSTER ---
  // Row 0
  { id: 'f-tile-01', type: 'floral-cross-navy', name: 'Floral Cross Navy (Row 0, Col 0)', x: 0 * STEP, y: 0 * STEP },
  { id: 'f-tile-02', type: 'solid-yellow', name: 'Solid Yellow (Row 0, Col 1)', x: 1 * STEP, y: 0 * STEP },
  { id: 'f-tile-03', type: 'floral-red-tile', name: 'Floral Red Master (Row 0, Col 3)', x: 3 * STEP, y: 0 * STEP },

  // Row 1
  { id: 'f-tile-04', type: 'rosette-mandala-yellow', name: 'Rosette Mandala Yellow (Row 1, Col 1)', x: 1 * STEP, y: 1 * STEP },
  { id: 'f-tile-05', type: 'solid-sage', name: 'Solid Sage (Row 1, Col 2)', x: 2 * STEP, y: 1 * STEP },
  { id: 'f-tile-06', type: 'pink-cream-tulips-navy', name: 'Pink Cream Tulips Navy (Row 1, Col 3)', x: 3 * STEP, y: 1 * STEP },
  { id: 'f-tile-07', type: 'blue-flower-yellow', name: 'Blue Flower Yellow (Row 1, Col 4)', x: 4 * STEP, y: 1 * STEP },

  // Row 2
  { id: 'f-tile-08', type: 'solid-pink', name: 'Solid Pink Accent (Row 2, Col 0)', x: 0 * STEP, y: 2 * STEP },

  // --- RIGHT CLUSTER ---
  // Diamond emerald at Col 6
  { id: 'f-tile-09', type: 'diamond-emerald', name: 'Diamond Emerald (Row 0, Col 6)', x: 6 * STEP, y: 0 * STEP },

  // Solid pink in row 1 at Col 7
  { id: 'f-tile-10', type: 'solid-pink', name: 'Solid Pink (Row 1, Col 7)', x: 7 * STEP, y: 1 * STEP },

  // Petal mandala red & diamond blue stack at Col 8
  { id: 'f-tile-11', type: 'petal-mandala-red', name: 'Petal Mandala Red (Row 0, Col 8)', x: 8 * STEP, y: 0 * STEP },
  { id: 'f-tile-12', type: 'diamond-blue', name: 'Diamond Blue (Row 1, Col 8)', x: 8 * STEP, y: 1 * STEP },

  // Four flowers green at Col 9
  { id: 'f-tile-13', type: 'four-flowers-green', name: 'Four Flowers Green (Row 0, Col 9)', x: 9 * STEP, y: 0 * STEP },

  // Coral, navy cross, and yellow vertical stack at Col 10
  { id: 'f-tile-14', type: 'solid-coral', name: 'Solid Coral (Row 0, Col 10)', x: 10 * STEP, y: 0 * STEP },
  { id: 'f-tile-15', type: 'floral-cross-navy', name: 'Floral Cross Navy (Row 1, Col 10)', x: 10 * STEP, y: 1 * STEP },
  { id: 'f-tile-16', type: 'solid-yellow', name: 'Solid Yellow (Row 2, Col 10)', x: 10 * STEP, y: 2 * STEP },

  // Far right stack at Col 11
  { id: 'f-tile-17', type: 'rosette-mandala-yellow', name: 'Rosette Mandala Yellow (Row 0, Col 11)', x: 11 * STEP, y: 0 * STEP },
  { id: 'f-tile-18', type: 'solid-sage', name: 'Solid Sage (Row 1, Col 11)', x: 11 * STEP, y: 1 * STEP },
];

export const ClosingSection: React.FC = () => {
  const [viewportWidth, setViewportWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  );

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const CANVAS_WIDTH = 11 * STEP + TILE_SIZE; // 1048px
  const CANVAS_HEIGHT = 2 * STEP + TILE_SIZE; // 256px

  // Strict 20px minimum side padding
  const MIN_SIDE_PADDING = 20;
  const availableWidth = Math.max(280, viewportWidth - MIN_SIDE_PADDING * 2);

  const scale = Math.min(1, availableWidth / CANVAS_WIDTH);
  const scaledWidth = Math.round(CANVAS_WIDTH * scale);
  const scaledHeight = Math.round(CANVAS_HEIGHT * scale);

  return (
    <footer className="relative w-full bg-[#FCFAEF] text-[#292827] select-none pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 px-[20px] flex flex-col justify-between items-center overflow-x-hidden">
      {/* 1. UPPER DECORATIVE TILE ARRANGEMENT: PROPORTIONALLY SCALED & CENTRED */}
      <div className="w-full flex justify-center items-center overflow-visible mb-12 sm:mb-16 lg:mb-20 px-[20px]">
        <div
          style={{
            width: `${scaledWidth}px`,
            height: `${scaledHeight}px`,
            position: 'relative',
          }}
          className="flex-shrink-0"
        >
          <div
            style={{
              width: `${CANVAS_WIDTH}px`,
              height: `${CANVAS_HEIGHT}px`,
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
            className="select-none"
          >
            {FOOTER_TILES.map((tile) => (
              <div
                key={tile.id}
                className="absolute"
                style={{
                  left: `${tile.x}px`,
                  top: `${tile.y}px`,
                  width: `${TILE_SIZE}px`,
                  height: `${TILE_SIZE}px`,
                }}
              >
                <DecorativeTile
                  tile={{
                    id: tile.id,
                    type: tile.type,
                    name: tile.name,
                    size: TILE_SIZE,
                  }}
                  size={TILE_SIZE}
                  borderRadius={7}
                  className="w-[80px] h-[80px] rounded-[7px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADING: VISUALLY CENTRED ON THE PAGE */}
      <div className="w-full text-center px-4 mb-8 sm:mb-10 flex flex-col items-center justify-center">
        <h2 className="font-editorial text-[42px] sm:text-[56px] md:text-[66px] lg:text-[72px] font-bold text-[#292827] leading-[1.08] tracking-tight text-center max-w-[960px] mx-auto">
          <span className="block">Let’s make something</span>
          <span className="block">thoughtful</span>
        </h2>
      </div>

      {/* 3. SOCIAL LINKS: 3 Pill-Shaped Buttons */}
      <div className="flex items-center justify-center gap-3.5 sm:gap-5 flex-wrap px-4 mb-20 sm:mb-28 lg:mb-32">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 h-[46px] px-6 sm:px-7 rounded-full bg-white border border-[#D1D5DB] text-[#292827] hover:border-[#999999] hover:shadow-xs transition-all font-sans-ui text-[15px] sm:text-[16px] font-medium"
        >
          <span className="w-[18px] h-[18px] rounded-[3px] bg-[#333333] text-white flex items-center justify-center text-[10px] font-bold leading-none">
            in
          </span>
          <span>Linkedin</span>
        </a>

        {/* Behance */}
        <a
          href="https://behance.net"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 h-[46px] px-6 sm:px-7 rounded-full bg-white border border-[#D1D5DB] text-[#292827] hover:border-[#999999] hover:shadow-xs transition-all font-sans-ui text-[15px] sm:text-[16px] font-medium"
        >
          <span className="w-[18px] h-[18px] rounded-[3px] bg-[#333333] text-white flex items-center justify-center text-[9px] font-bold leading-none tracking-tight">
            Bē
          </span>
          <span>Behance</span>
        </a>

        {/* Email */}
        <a
          href="mailto:pawarakanksha1628@gmail.com"
          className="inline-flex items-center gap-2.5 h-[46px] px-6 sm:px-7 rounded-full bg-white border border-[#D1D5DB] text-[#292827] hover:border-[#999999] hover:shadow-xs transition-all font-sans-ui text-[15px] sm:text-[16px] font-medium"
        >
          <span className="w-[18px] h-[18px] flex items-center justify-center text-[18px] font-medium text-[#333333] leading-none">
            @
          </span>
          <span>Email</span>
        </a>
      </div>

      {/* 4. COPYRIGHT: Anchored Bottom-Left */}
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-start">
        <span className="font-sans-ui text-[13px] sm:text-[14px] text-[#8C8A87] font-normal tracking-wide">
          © 2026 Akanksha Pawar
        </span>
      </div>
    </footer>
  );
};
