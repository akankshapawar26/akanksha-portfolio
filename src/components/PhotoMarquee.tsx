import React, { useState } from 'react';

// Exact 17 photo definitions for the marquee in /assets/marquee/
const MARQUEE_SLOTS = [
  { id: 1, fallbackSrcs: ['/assets/marquee/marquee.1.jpg', '/assets/marquee/1.jpg', '/assets/marquee/photo-1.jpg'] },
  { id: 2, fallbackSrcs: ['/assets/marquee/marquee.2.jpg', '/assets/marquee/2.jpg', '/assets/marquee/photo-2.jpg'] },
  { id: 3, fallbackSrcs: ['/assets/marquee/marquee.3.jpeg', '/assets/marquee/3.jpeg', '/assets/marquee/marquee.3.jpg', '/assets/marquee/3.jpg'] },
  { id: 4, fallbackSrcs: ['/assets/marquee/marquee.4.jpeg', '/assets/marquee/4.jpeg', '/assets/marquee/marquee.4.jpg', '/assets/marquee/4.jpg'] },
  { id: 5, fallbackSrcs: ['/assets/marquee/marquee.5.jpeg', '/assets/marquee/5.jpeg', '/assets/marquee/marquee.5.jpg', '/assets/marquee/5.jpg'] },
  { id: 6, fallbackSrcs: ['/assets/marquee/marquee.6.jpeg', '/assets/marquee/6.jpeg', '/assets/marquee/marquee.6.jpg', '/assets/marquee/6.jpg'] },
  { id: 7, fallbackSrcs: ['/assets/marquee/marquee.7.jpeg', '/assets/marquee/7.jpeg', '/assets/marquee/marquee.7.jpg', '/assets/marquee/7.jpg'] },
  { id: 8, fallbackSrcs: ['/assets/marquee/marquee.8.jpeg', '/assets/marquee/8.jpeg', '/assets/marquee/marquee.8.jpg', '/assets/marquee/8.jpg'] },
  { id: 9, fallbackSrcs: ['/assets/marquee/marquee.9.jpeg', '/assets/marquee/9.jpeg', '/assets/marquee/marquee.9.jpg', '/assets/marquee/9.jpg'] },
  { id: 10, fallbackSrcs: ['/assets/marquee/marquee.10.jpeg', '/assets/marquee/10.jpeg', '/assets/marquee/marquee.10.jpg', '/assets/marquee/10.jpg'] },
  { id: 11, fallbackSrcs: ['/assets/marquee/marquee.11.jpeg', '/assets/marquee/11.jpeg', '/assets/marquee/marquee.11.jpg', '/assets/marquee/11.jpg'] },
  { id: 12, fallbackSrcs: ['/assets/marquee/marquee.12.jpeg', '/assets/marquee/12.jpeg', '/assets/marquee/marquee.12.jpg', '/assets/marquee/12.jpg'] },
  { id: 14, fallbackSrcs: ['/assets/marquee/marquee.14.jpeg', '/assets/marquee/14.jpeg', '/assets/marquee/marquee.14.jpg', '/assets/marquee/14.jpg'] },
  { id: 15, fallbackSrcs: ['/assets/marquee/marquee.15.jpeg', '/assets/marquee/15.jpeg', '/assets/marquee/marquee.15.jpg', '/assets/marquee/15.jpg'] },
  { id: 16, fallbackSrcs: ['/assets/marquee/marquee.16.jpg', '/assets/marquee/16.jpg', '/assets/marquee/marquee.16.jpeg', '/assets/marquee/16.jpeg'] },
  { id: 17, fallbackSrcs: ['/assets/marquee/marquee.17.jpeg', '/assets/marquee/17.jpeg', '/assets/marquee/marquee.17.jpg', '/assets/marquee/17.jpg'] },
  { id: 18, fallbackSrcs: ['/assets/marquee/marquee.18.jpeg', '/assets/marquee/18.jpeg', '/assets/marquee/marquee.18.jpg', '/assets/marquee/18.jpg'] },
];

const PhotoSlot: React.FC<{
  slot: typeof MARQUEE_SLOTS[0];
}> = ({ slot }) => {
  const [srcIndex, setSrcIndex] = useState(0);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [isExhausted, setIsExhausted] = useState(false);

  const handleError = () => {
    if (srcIndex + 1 < slot.fallbackSrcs.length) {
      setSrcIndex(srcIndex + 1);
    } else {
      setIsExhausted(true);
    }
  };

  return (
    <div
      className="shrink-0 overflow-hidden bg-transparent"
      style={{
        width: '194px',
        height: '241px',
        aspectRatio: '194 / 241',
        borderRadius: '10px',
        flexShrink: 0,
      }}
    >
      {!isExhausted && (
        <img
          src={slot.fallbackSrcs[srcIndex]}
          alt=""
          onLoad={() => setHasLoaded(true)}
          onError={handleError}
          className={`w-full h-full object-cover block rounded-[10px] pointer-events-none select-none ${
            hasLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="eager"
          draggable={false}
        />
      )}
    </div>
  );
};

export const PhotoMarquee: React.FC = () => {
  return (
    <section
      aria-label="Photo Marquee"
      className="w-full bg-white select-none overflow-hidden pb-16 sm:pb-24 pt-4"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      {/* Marquee viewport container */}
      <div className="w-full overflow-hidden flex items-center">
        <div className="photo-marquee-continuous-track flex items-center">
          {/* Set 1: Exactly 17 photo slots */}
          <div className="flex items-center gap-[16px] shrink-0 pr-[16px]">
            {MARQUEE_SLOTS.map((slot, index) => (
              <PhotoSlot
                key={`photo-set1-${slot.id}-${index}`}
                slot={slot}
              />
            ))}
          </div>

          {/* Set 2: Duplicate 17-photo sequence in DOM only for seamless infinite loop */}
          <div className="flex items-center gap-[16px] shrink-0 pr-[16px]" aria-hidden="true">
            {MARQUEE_SLOTS.map((slot, index) => (
              <PhotoSlot
                key={`photo-set2-${slot.id}-${index}`}
                slot={slot}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
