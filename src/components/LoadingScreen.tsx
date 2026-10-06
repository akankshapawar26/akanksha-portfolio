import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  DiamondEmeraldPattern,
  RosetteMandalaYellowPattern,
  PetalMandalaRedPattern,
  PinkCreamTulipsNavyPattern,
} from './TilePatterns';

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number; // duration in ms, default 2600ms (2.6s)
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onComplete,
  duration = 2600,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          key="portfolio-loading-screen"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FCFAEF] select-none cursor-default overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.04,
            filter: 'blur(8px)',
            transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
          }}
        >
          {/* Main 4-Tile Cluster Container */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Playful Rotating & Breathing 2x2 Tile Grid */}
            <motion.div
              className="grid grid-cols-2 gap-3 sm:gap-4 p-2"
              initial={{ rotate: 0 }}
              animate={{
                rotate: [0, 0, 90, 180, 180],
                scale: [1, 1, 1.06, 1, 0.96],
              }}
              transition={{
                duration: 1.9,
                delay: 0.7,
                times: [0, 0.2, 0.5, 0.85, 1],
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              {/* Tile 1: Emerald Diamond Rangoli — Flies in from Top-Left */}
              <motion.div
                className="w-[74px] h-[74px] sm:w-[88px] sm:h-[88px] rounded-[11px] overflow-hidden shadow-sm"
                initial={{
                  x: '-80vw',
                  y: '-80vh',
                  rotate: -40,
                  opacity: 0,
                  scale: 0.6,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  rotate: 0,
                  opacity: 1,
                  scale: [0.6, 1.12, 0.96, 1],
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.04,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.08 }}
              >
                <DiamondEmeraldPattern rotationSpeed={6} className="w-full h-full" />
              </motion.div>

              {/* Tile 2: Yellow Rosette Medallion — Flies in from Top-Right */}
              <motion.div
                className="w-[74px] h-[74px] sm:w-[88px] sm:h-[88px] rounded-[11px] overflow-hidden shadow-sm"
                initial={{
                  x: '80vw',
                  y: '-80vh',
                  rotate: 40,
                  opacity: 0,
                  scale: 0.6,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  rotate: 0,
                  opacity: 1,
                  scale: [0.6, 1.12, 0.96, 1],
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.08 }}
              >
                <RosetteMandalaYellowPattern rotationDuration={6} className="w-full h-full" />
              </motion.div>

              {/* Tile 3: Red Petal Mandala — Flies in from Bottom-Left */}
              <motion.div
                className="w-[74px] h-[74px] sm:w-[88px] sm:h-[88px] rounded-[11px] overflow-hidden shadow-sm"
                initial={{
                  x: '-80vw',
                  y: '80vh',
                  rotate: 40,
                  opacity: 0,
                  scale: 0.6,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  rotate: 0,
                  opacity: 1,
                  scale: [0.6, 1.12, 0.96, 1],
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.08 }}
              >
                <PetalMandalaRedPattern rotationSpeed={6} className="w-full h-full" />
              </motion.div>

              {/* Tile 4: Royal Blue Tulips Navy Pattern — Flies in from Bottom-Right */}
              <motion.div
                className="w-[74px] h-[74px] sm:w-[88px] sm:h-[88px] rounded-[11px] overflow-hidden shadow-sm"
                initial={{
                  x: '80vw',
                  y: '80vh',
                  rotate: -40,
                  opacity: 0,
                  scale: 0.6,
                }}
                animate={{
                  x: 0,
                  y: 0,
                  rotate: 0,
                  opacity: 1,
                  scale: [0.6, 1.12, 0.96, 1],
                }}
                transition={{
                  duration: 0.65,
                  delay: 0.16,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ scale: 1.08 }}
              >
                <PinkCreamTulipsNavyPattern rotationSpeed={6} className="w-full h-full" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
