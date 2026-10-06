import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { DecorativeTile } from './DecorativeTile';
import { PatternType } from './TilePatterns';

const fairyEase = [0.16, 1, 0.3, 1] as const;

// =========================================================================
// 1. MOBILE TILE ARRANGEMENT (Frame 406.png Replica)
// Standard Mobile Tile Size: 42px
// =========================================================================
interface MobileTileSpec {
  id: string;
  type: PatternType;
  col: number; // 0 to 5
  row: number; // 0 to 2 for top, 0 to 3 for lower
}

const MOBILE_TOP_TILES: MobileTileSpec[] = [
  // Row 0: Left green, upper-middle red, pink floral, coral solid, yellow rosette
  { id: 'm-top-1', type: 'diamond-emerald', col: 0, row: 0 },
  { id: 'm-top-2', type: 'petal-mandala-red', col: 2, row: 0 },
  { id: 'm-top-3', type: 'four-flowers-green', col: 3, row: 0 },
  { id: 'm-top-4', type: 'solid-coral', col: 4, row: 0 },
  { id: 'm-top-5', type: 'rosette-mandala-yellow', col: 5, row: 0 },

  // Row 1: Pink solid, blue diamond, floral cross navy, sage green solid
  { id: 'm-top-6', type: 'solid-pink', col: 1, row: 1 },
  { id: 'm-top-7', type: 'diamond-blue', col: 2, row: 1 },
  { id: 'm-top-8', type: 'floral-cross-navy', col: 4, row: 1 },
  { id: 'm-top-9', type: 'solid-sage', col: 5, row: 1 },

  // Row 2: Warm yellow solid directly beneath solid-sage on the right
  { id: 'm-top-10', type: 'solid-yellow', col: 5, row: 2 },
];

const MOBILE_LOWER_TILES: MobileTileSpec[] = [
  // Row 0: Upper-left yellow rosette
  { id: 'm-bot-1', type: 'rosette-mandala-yellow', col: 0, row: 0 },

  // Row 1: Beneath it, a solid pink tile
  { id: 'm-bot-2', type: 'solid-pink', col: 0, row: 1 },

  // Row 2: (Gap at col 0), red rosette, sage solid, blue/pink tulips, blue flower on yellow
  { id: 'm-bot-4', type: 'petal-mandala-red', col: 1, row: 2 },
  { id: 'm-bot-5', type: 'solid-sage', col: 2, row: 2 },
  { id: 'm-bot-6', type: 'pink-cream-tulips-navy', col: 3, row: 2 },
  { id: 'm-bot-7', type: 'blue-flower-yellow', col: 4, row: 2 },

  // Row 3: Floral cross navy, warm yellow solid, (gap at col 2), red floral tile
  { id: 'm-bot-8', type: 'floral-cross-navy', col: 0, row: 3 },
  { id: 'm-bot-9', type: 'solid-yellow', col: 1, row: 3 },
  { id: 'm-bot-10', type: 'floral-red-tile', col: 3, row: 3 },
];

// =========================================================================
// 2. TABLET TILE ARRANGEMENT (Scale: 62px tile + 8px gap = 70px step)
// =========================================================================
interface TabletTileSpec {
  id: string;
  type: PatternType;
  top: number;
  left?: number;
  right?: number;
}

const TABLET_TILES: TabletTileSpec[] = [
  // 1. Top-Left Corner
  { id: 'tab-tl-1', type: 'diamond-blue', top: 8, left: 16 },

  // 2. Upper-Right Cluster: Row 0 (top: 8px)
  { id: 'tab-ur-0-1', type: 'rosette-mandala-yellow', top: 8, right: 16 },
  { id: 'tab-ur-0-2', type: 'solid-coral', top: 8, right: 86 },
  { id: 'tab-ur-0-3', type: 'four-flowers-green', top: 8, right: 156 },
  { id: 'tab-ur-0-4', type: 'petal-mandala-red', top: 8, right: 226 },
  // Col 4 (right: 296px) is EMPTY
  { id: 'tab-ur-0-5', type: 'diamond-emerald', top: 8, right: 366 },

  // Upper-Right Cluster: Row 1 (top: 78px)
  { id: 'tab-ur-1-1', type: 'solid-sage', top: 78, right: 16 },
  { id: 'tab-ur-1-2', type: 'floral-cross-navy', top: 78, right: 86 },
  // Col 2 is EMPTY
  { id: 'tab-ur-1-3', type: 'diamond-blue', top: 78, right: 226 },
  { id: 'tab-ur-1-4', type: 'solid-pink', top: 78, right: 296 },

  // Upper-Right Cluster: Row 2 (top: 148px)
  { id: 'tab-ur-2-1', type: 'solid-yellow', top: 148, right: 16 },

  // 3. Mid-Left Tiles
  { id: 'tab-ml-1', type: 'rosette-mandala-yellow', top: 240, left: 16 },
  { id: 'tab-ml-2', type: 'solid-pink', top: 310, left: 16 },

  // 4. Bottom-Left Cluster: Row 0 (top: 540px)
  { id: 'tab-bl-0-1', type: 'petal-mandala-red', top: 540, left: 86 },
  { id: 'tab-bl-0-2', type: 'solid-sage', top: 540, left: 156 },
  { id: 'tab-bl-0-3', type: 'pink-cream-tulips-navy', top: 540, left: 226 },
  { id: 'tab-bl-0-4', type: 'blue-flower-yellow', top: 540, left: 296 },

  // Bottom-Left Cluster: Row 1 (top: 610px)
  { id: 'tab-bl-1-1', type: 'floral-cross-navy', top: 610, left: 16 },
  { id: 'tab-bl-1-2', type: 'solid-yellow', top: 610, left: 86 },
  // Col 2 is EMPTY
  { id: 'tab-bl-1-3', type: 'floral-red-tile', top: 610, left: 226 },

  // 5. Bottom-Right Cluster
  { id: 'tab-br-0-1', type: 'diamond-emerald', top: 540, right: 16 },
  { id: 'tab-br-1-1', type: 'pink-cream-tulips-navy', top: 610, right: 16 },
  { id: 'tab-br-1-2', type: 'solid-pink', top: 610, right: 86 },
];

// =========================================================================
// 3. DESKTOP TILE ARRANGEMENT (Scale: 80px tile + 8px gap = 88px step)
// =========================================================================
interface DesktopTileSpec {
  id: string;
  type: PatternType;
  top: number;
  left?: number;
  right?: number;
  hideOnNarrowDesktop?: boolean;
}

const DESK_STEP = 88; // 80px size + 8px gap

const DESKTOP_TILES: DesktopTileSpec[] = [
  // 1. Top-Left Tile
  { id: 'd-tl-1', type: 'diamond-blue', top: 12, left: 16 },

  // 2. Upper Cluster: Row 0 (top: 12px)
  { id: 'd-ur-0-5', type: 'diamond-emerald', top: 12, right: 16 + 5 * DESK_STEP, hideOnNarrowDesktop: true },
  // Col 4 is EMPTY gap
  { id: 'd-ur-0-3', type: 'petal-mandala-red', top: 12, right: 16 + 3 * DESK_STEP },
  { id: 'd-ur-0-2', type: 'four-flowers-green', top: 12, right: 16 + 2 * DESK_STEP },
  { id: 'd-ur-0-1', type: 'solid-coral', top: 12, right: 16 + 1 * DESK_STEP },
  { id: 'd-ur-0-0', type: 'rosette-mandala-yellow', top: 12, right: 16 + 0 * DESK_STEP },

  // Upper Cluster: Row 1 (top: 100px)
  { id: 'd-ur-1-4', type: 'solid-pink', top: 12 + 1 * DESK_STEP, right: 16 + 4 * DESK_STEP, hideOnNarrowDesktop: true },
  { id: 'd-ur-1-3', type: 'diamond-blue', top: 12 + 1 * DESK_STEP, right: 16 + 3 * DESK_STEP },
  // Col 2 is EMPTY gap
  { id: 'd-ur-1-1', type: 'floral-cross-navy', top: 12 + 1 * DESK_STEP, right: 16 + 1 * DESK_STEP },
  { id: 'd-ur-1-0', type: 'solid-sage', top: 12 + 1 * DESK_STEP, right: 16 + 0 * DESK_STEP },

  // Upper Cluster: Row 2 (top: 188px)
  { id: 'd-ur-2-0', type: 'solid-yellow', top: 12 + 2 * DESK_STEP, right: 16 + 0 * DESK_STEP },

  // 3. Mid-Left Edge (Col 0: left: 16px)
  { id: 'd-ml-1', type: 'rosette-mandala-yellow', top: 310, left: 16 },
  { id: 'd-ml-2', type: 'solid-pink', top: 310 + DESK_STEP, left: 16 },

  // 4. Bottom-Left Cluster: Row 0 (top: 560px)
  // Col 0 is EMPTY
  { id: 'd-bl-0-1', type: 'petal-mandala-red', top: 560, left: 16 + 1 * DESK_STEP },
  { id: 'd-bl-0-2', type: 'solid-sage', top: 560, left: 16 + 2 * DESK_STEP },
  { id: 'd-bl-0-3', type: 'pink-cream-tulips-navy', top: 560, left: 16 + 3 * DESK_STEP },
  { id: 'd-bl-0-4', type: 'blue-flower-yellow', top: 560, left: 16 + 4 * DESK_STEP },

  // Bottom-Left Cluster: Row 1 (top: 648px)
  { id: 'd-bl-1-0', type: 'floral-cross-navy', top: 560 + DESK_STEP, left: 16 + 0 * DESK_STEP },
  { id: 'd-bl-1-1', type: 'solid-yellow', top: 560 + DESK_STEP, left: 16 + 1 * DESK_STEP },
  // Col 2 is EMPTY
  { id: 'd-bl-1-3', type: 'floral-red-tile', top: 560 + DESK_STEP, left: 16 + 3 * DESK_STEP },

  // 5. Bottom-Right Cluster: Row 0 (top: 560px)
  { id: 'd-br-0-0', type: 'diamond-emerald', top: 560, right: 16 },

  // Bottom-Right Cluster: Row 1 (top: 648px)
  { id: 'd-br-1-1', type: 'solid-pink', top: 560 + DESK_STEP, right: 16 + 1 * DESK_STEP },
  { id: 'd-br-1-0', type: 'pink-cream-tulips-navy', top: 560 + DESK_STEP, right: 16 + 0 * DESK_STEP },
];

export const Hero: React.FC = () => {
  const [viewportWidth, setViewportWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1440
  );

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = viewportWidth < 768;
  const isTablet = viewportWidth >= 768 && viewportWidth < 1024;
  const isDesktop = viewportWidth >= 1024;

  const DESKTOP_TILE_SIZE = 80;
  const TABLET_TILE_SIZE = 62;
  const MOBILE_TILE_SIZE = 42;
  const MOBILE_GAP = 7;
  const MOBILE_COL_STEP = MOBILE_TILE_SIZE + MOBILE_GAP; // 49px

  // Center mobile arrangement horizontally within the mobile viewport
  const mobileStartX = Math.max(12, Math.round((viewportWidth - (5 * MOBILE_COL_STEP + MOBILE_TILE_SIZE)) / 2));

  return (
    <section className="relative w-full bg-[#FCFAEF] overflow-hidden flex justify-center items-center select-none pt-0 pb-[30px]">
      {/* ======================================================== */}
      {/* 1. MOBILE RESPONSIVE HERO (< 768px)                       */}
      {/* ======================================================== */}
      {isMobile && (
        <div
          className="relative overflow-hidden w-full mx-auto select-none"
          style={{ height: '740px' }}
        >
          {/* Top Decorative Tile Cluster */}
          {MOBILE_TOP_TILES.map((t) => {
            const posX = mobileStartX + t.col * MOBILE_COL_STEP;
            const posY = 6 + t.row * MOBILE_COL_STEP;

            return (
              <div
                key={t.id}
                className="absolute transition-transform duration-200 hover:scale-105 active:scale-95"
                style={{
                  left: `${posX}px`,
                  top: `${posY}px`,
                }}
              >
                <DecorativeTile
                  tile={{
                    id: t.id,
                    type: t.type,
                    name: 'Mobile Decorative Tile',
                    size: MOBILE_TILE_SIZE,
                  }}
                  size={MOBILE_TILE_SIZE}
                  borderRadius={5}
                />
              </div>
            );
          })}

          {/* Centered Mobile Content Block */}
          <div
            className="absolute flex flex-col text-left z-10 w-full max-w-[340px] px-4"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              top: '175px',
            }}
          >
            {/* Intro Greeting */}
            <div className="flex flex-col text-left">
              <motion.span
                className="font-sans-ui text-[#555555] font-normal text-[17px] leading-snug tracking-[-0.01em]"
                initial={{ opacity: 0, x: -14, filter: 'blur(5px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, delay: 0, ease: fairyEase }}
              >
                Hello, I'm
              </motion.span>
              <motion.h1
                className="font-sans-ui text-[#754640] font-black text-[28px] tracking-[-0.03em] leading-[1.08] mt-0.5"
                initial={{ opacity: 0, x: -18, filter: 'blur(6px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.0, delay: 0.15, ease: fairyEase }}
              >
                Akanksha Pawar
              </motion.h1>
              <motion.h2
                className="font-sans-ui text-[#C99492] font-bold text-[22px] tracking-[-0.02em] leading-[1.08] mt-0.5"
                initial={{ opacity: 0, x: -18, filter: 'blur(6px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.0, delay: 0.28, ease: fairyEase }}
              >
                UX Designer
              </motion.h2>
            </div>

            {/* Mobile Quote */}
            <div className="text-left mt-4">
              <h3 className="font-editorial text-[#292827] text-[33px] font-bold tracking-[-0.02em] leading-[1.18] text-left">
                <motion.span
                  className="block whitespace-nowrap"
                  initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.1, delay: 0.4, ease: fairyEase }}
                >
                  Where research
                </motion.span>
                <motion.span
                  className="block whitespace-nowrap"
                  initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.1, delay: 0.6, ease: fairyEase }}
                >
                  meets creativity,
                </motion.span>
                <motion.span
                  className="block whitespace-nowrap"
                  initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.1, delay: 0.8, ease: fairyEase }}
                >
                  and ideas become
                </motion.span>
                <motion.span
                  className="block whitespace-nowrap"
                  initial={{ opacity: 0, x: -30, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.1, delay: 1.0, ease: fairyEase }}
                >
                  experiences.
                </motion.span>
              </h3>
            </div>
          </div>

          {/* Mobile Lower Decorative Tile Cluster */}
          {MOBILE_LOWER_TILES.map((t) => {
            const posX = mobileStartX + t.col * MOBILE_COL_STEP;
            const posY = 500 + t.row * MOBILE_COL_STEP;

            return (
              <div
                key={t.id}
                className="absolute transition-transform duration-200 hover:scale-105 active:scale-95"
                style={{
                  left: `${posX}px`,
                  top: `${posY}px`,
                }}
              >
                <DecorativeTile
                  tile={{
                    id: t.id,
                    type: t.type,
                    name: 'Mobile Decorative Tile',
                    size: MOBILE_TILE_SIZE,
                  }}
                  size={MOBILE_TILE_SIZE}
                  borderRadius={5}
                />
              </div>
            );
          })}
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. TABLET RESPONSIVE HERO (768px – 1023px)                */}
      {/* ======================================================== */}
      {isTablet && (
        <div
          className="relative overflow-hidden w-full max-w-[1020px] mx-auto select-none"
          style={{ height: '720px' }}
        >
          {/* Tablet Perimeter Framing Tiles */}
          {TABLET_TILES.map((tile) => {
            const style: React.CSSProperties = {
              top: `${tile.top}px`,
            };
            if (tile.left !== undefined) style.left = `${tile.left}px`;
            if (tile.right !== undefined) style.right = `${tile.right}px`;

            return (
              <div key={tile.id} className="absolute" style={style}>
                <DecorativeTile
                  tile={{
                    id: tile.id,
                    type: tile.type,
                    name: 'Tablet Decorative Tile',
                    size: TABLET_TILE_SIZE,
                  }}
                  size={TABLET_TILE_SIZE}
                  borderRadius={6}
                />
              </div>
            );
          })}

          {/* Centered Tablet Content Block */}
          <div
            className="absolute flex flex-col text-left z-10 w-full max-w-[640px] px-6"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              top: '190px',
            }}
          >
            {/* Intro Greeting */}
            <div className="flex flex-col text-left">
              <motion.span
                className="font-sans-ui text-[#555555] font-normal text-[19px] leading-snug tracking-[-0.01em]"
                initial={{ opacity: 0, x: -14, filter: 'blur(5px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, delay: 0, ease: fairyEase }}
              >
                Hello, I'm
              </motion.span>
              <motion.h1
                className="font-sans-ui text-[#754640] font-black text-[34px] tracking-[-0.025em] leading-[1.08] mt-1"
                initial={{ opacity: 0, x: -18, filter: 'blur(6px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.0, delay: 0.15, ease: fairyEase }}
              >
                Akanksha Pawar
              </motion.h1>
              <motion.h2
                className="font-sans-ui text-[#C99492] font-bold text-[26px] tracking-[-0.02em] leading-[1.08] mt-1"
                initial={{ opacity: 0, x: -18, filter: 'blur(6px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.0, delay: 0.28, ease: fairyEase }}
              >
                UX Designer
              </motion.h2>
            </div>

            {/* Tablet Quote */}
            <div className="text-left mt-5">
              <h3 className="font-editorial text-[#292827] text-[40px] font-bold leading-[1.16] tracking-[-0.02em] text-left">
                <motion.span
                  className="block whitespace-nowrap"
                  initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.3, delay: 0.4, ease: fairyEase }}
                >
                  Where research meets creativity,
                </motion.span>
                <motion.span
                  className="block whitespace-nowrap"
                  initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.3, delay: 0.75, ease: fairyEase }}
                >
                  and ideas become experiences.
                </motion.span>
              </h3>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. DESKTOP CANONICAL HERO (1024px+)                       */}
      {/* Centered Content Block with Balanced Perimeter Tiles      */}
      {/* ======================================================== */}
      {isDesktop && (
        <div
          className="relative overflow-hidden w-full max-w-[1440px] mx-auto select-none"
          style={{ height: '780px' }}
        >
          {/* Desktop Perimeter Tiles */}
          {DESKTOP_TILES.map((tile) => {
            if (tile.hideOnNarrowDesktop && viewportWidth < 1260) {
              return null;
            }

            const style: React.CSSProperties = {
              top: `${tile.top}px`,
            };

            if (tile.left !== undefined) {
              style.left = `${tile.left}px`;
            } else if (tile.right !== undefined) {
              style.right = `${tile.right}px`;
            }

            return (
              <div key={tile.id} className="absolute" style={style}>
                <DecorativeTile
                  tile={{
                    id: tile.id,
                    type: tile.type,
                    name: 'Desktop Decorative Tile',
                    size: DESKTOP_TILE_SIZE,
                  }}
                  size={DESKTOP_TILE_SIZE}
                  borderRadius={7}
                />
              </div>
            );
          })}

          {/* Centered Hero Content Block */}
          <div
            className="absolute z-10 flex flex-col text-left w-full max-w-[860px] px-6"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              top: '205px',
            }}
          >
            {/* Intro Greeting */}
            <div className="flex flex-col text-left">
              <motion.span
                className="font-sans-ui text-[#555555] text-[20px] font-normal leading-snug tracking-[-0.01em]"
                initial={{ opacity: 0, x: -14, filter: 'blur(5px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, delay: 0, ease: fairyEase }}
              >
                Hello, I'm
              </motion.span>
              <motion.h1
                className="font-sans-ui text-[#754640] text-[38px] font-black tracking-[-0.025em] leading-[1.08] mt-1"
                initial={{ opacity: 0, x: -18, filter: 'blur(6px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.0, delay: 0.15, ease: fairyEase }}
              >
                Akanksha Pawar
              </motion.h1>
              <motion.h2
                className="font-sans-ui text-[#C99492] text-[30px] font-bold tracking-[-0.02em] leading-[1.08] mt-1"
                initial={{ opacity: 0, x: -18, filter: 'blur(6px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.0, delay: 0.28, ease: fairyEase }}
              >
                UX Designer
              </motion.h2>
            </div>

            {/* Main Editorial Quote */}
            <div className="text-left mt-6">
              <h3 className="font-editorial text-[#292827] text-[46px] lg:text-[50px] font-bold leading-[1.14] tracking-[-0.02em] text-left">
                <motion.span
                  className="block whitespace-nowrap"
                  initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.3, delay: 0.4, ease: fairyEase }}
                >
                  Where research meets creativity,
                </motion.span>
                <motion.span
                  className="block whitespace-nowrap"
                  initial={{ opacity: 0, x: -40, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  transition={{ duration: 1.3, delay: 0.75, ease: fairyEase }}
                >
                  and ideas become experiences.
                </motion.span>
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
