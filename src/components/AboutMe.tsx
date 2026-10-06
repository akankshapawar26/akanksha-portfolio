import React from 'react';

export const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full bg-white select-none py-20 sm:py-28 lg:py-36 overflow-hidden"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-[1240px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        {/* ========================================================= */}
        {/* LEFT SIDE: Personal Scrapbook Collage (Exact Figma CSS)   */}
        {/* ========================================================= */}
        <div className="w-full lg:w-[50%] flex items-center justify-center">
          {/* Responsive Scaling Wrapper for flawless display on all screens */}
          <div className="flex items-center justify-center scale-[0.72] sm:scale-[0.85] md:scale-[0.92] lg:scale-100 origin-center py-6">
            {/* Collage Coordinate Container (Centered on the 362x523 photo) */}
            <div
              className="relative"
              style={{
                width: '362px',
                height: '523px',
                flexShrink: 0,
              }}
            >
              {/* 1. Pink Gradient Glow in the background (Exact Figma Specs) */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: '-38px',
                  left: '-76.5px',
                  width: '515px',
                  height: '599px',
                  background: 'rgba(254, 113, 190, 0.68)',
                  filter: 'blur(84.90036010742188px)',
                  borderRadius: '9999px',
                  zIndex: 0,
                }}
                aria-hidden="true"
              />

              {/* 2. Central Photograph of Akanksha (No border or shadow outline) */}
              <div
                className="relative z-10 overflow-hidden"
                style={{
                  width: '362px',
                  height: '523px',
                  flexShrink: 0,
                  backgroundColor: 'transparent',
                  boxShadow: 'none',
                  border: 'none',
                  outline: 'none',
                }}
              >
                <img
                  src="/assets/about-image.png"
                  alt="Akanksha Pawar"
                  className="w-full h-full object-cover block"
                  loading="eager"
                />
              </div>

              {/* ========================================================= */}
              {/* 3. SURROUNDING STICKERS FROM FIGMA (Exact Dimensions)     */}
              {/* Crisp, native clarity (original shadows baked in PNG)     */}
              {/* ========================================================= */}

              {/* 1. Dog Sticker: width: 135px, height: 180.879px */}
              <div
                className="absolute z-30 pointer-events-none select-none"
                style={{
                  top: '-112.8px',
                  left: '24px',
                  width: '135px',
                  height: '180.879px',
                }}
              >
                <img
                  src="/assets/stickers/dog.png"
                  alt="Dog"
                  className="w-full h-full object-contain block"
                />
              </div>

              {/* 2. Skate Sticker: width: 100px, height: 99px */}
              <div
                className="absolute z-20 pointer-events-none select-none"
                style={{
                  top: '-20px',
                  right: '-24px',
                  width: '100px',
                  height: '99px',
                }}
              >
                <img
                  src="/assets/stickers/skatings.png"
                  alt="Roller Skates"
                  className="w-full h-full object-contain block"
                />
              </div>

              {/* 3. Violin Sticker: width: 132px, height: 195px, rotate(-5.886deg) */}
              <div
                className="absolute z-20 pointer-events-none select-none"
                style={{
                  top: '60px',
                  left: '-52px',
                  width: '132px',
                  height: '195px',
                  transform: 'rotate(-5.886deg)',
                }}
              >
                <img
                  src="/assets/stickers/violin.png"
                  alt="Violin"
                  className="w-full h-full object-contain block"
                />
              </div>

              {/* 4. Travelling Bag Sticker: width: 85.582px, height: 119.346px, rotate(15.689deg) */}
              <div
                className="absolute z-20 pointer-events-none select-none"
                style={{
                  top: '235px',
                  left: '-44px',
                  width: '85.582px',
                  height: '119.346px',
                  transform: 'rotate(15.689deg)',
                }}
              >
                <img
                  src="/assets/stickers/travelling-bag.png"
                  alt="Suitcase"
                  className="w-full h-full object-contain block"
                />
              </div>

              {/* 5. Chisel Sticker: width: 196.531px, height: 195.523px, rotate(-6.449deg) */}
              <div
                className="absolute z-20 pointer-events-none select-none"
                style={{
                  top: '140px',
                  right: '-84px',
                  width: '196.531px',
                  height: '195.523px',
                  transform: 'rotate(-6.449deg)',
                }}
              >
                <img
                  src="/assets/stickers/chisel.png"
                  alt="Easel"
                  className="w-full h-full object-contain block"
                />
              </div>

              {/* 6. Palette Sticker: width: 76.405px, height: 77.768px, rotate(12.612deg) */}
              <div
                className="absolute z-20 pointer-events-none select-none"
                style={{
                  bottom: '120px',
                  left: '-36px',
                  width: '76.405px',
                  height: '77.768px',
                  transform: 'rotate(12.612deg)',
                }}
              >
                <img
                  src="/assets/stickers/palatte.png"
                  alt="Palette"
                  className="w-full h-full object-contain block"
                />
              </div>

              {/* 7. Speaker Sticker: width: 101.875px, height: 143.66px, rotate(17.696deg) */}
              <div
                className="absolute z-20 pointer-events-none select-none"
                style={{
                  bottom: '105px',
                  right: '-28px',
                  width: '101.875px',
                  height: '143.66px',
                  transform: 'rotate(17.696deg)',
                }}
              >
                <img
                  src="/assets/stickers/speaker.png"
                  alt="Speaker"
                  className="w-full h-full object-contain block"
                />
              </div>

              {/* 8. Car Sticker: width: 169px, height: 166px */}
              <div
                className="absolute z-20 pointer-events-none select-none"
                style={{
                  bottom: '-46px',
                  left: '-40px',
                  width: '169px',
                  height: '166px',
                }}
              >
                <img
                  src="/assets/stickers/car.png"
                  alt="Mercedes G-Class"
                  className="w-full h-full object-contain block"
                />
              </div>

              {/* 9. Camera Sticker: width: 144.964px, height: 144.242px, rotate(-22.858deg) */}
              <div
                className="absolute z-20 pointer-events-none select-none"
                style={{
                  bottom: '-48px',
                  right: '-32px',
                  width: '144.964px',
                  height: '144.242px',
                  transform: 'rotate(-22.858deg)',
                }}
              >
                <img
                  src="/assets/stickers/camera.png"
                  alt="Camera"
                  className="w-full h-full object-contain block"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT SIDE: Heading "About Me" & Text (Playfair + Satoshi)*/}
        {/* ========================================================= */}
        <div className="w-full lg:w-[50%] flex flex-col items-center text-center lg:items-start lg:text-left lg:pl-6">
          {/* Section Heading: Playfair Display Bold 700 */}
          <h2 className="font-editorial text-[44px] sm:text-[52px] md:text-[60px] font-bold text-[#1C1B1A] tracking-[-0.02em] leading-[1.08] text-center lg:text-left">
            About Me
          </h2>

          {/* Body Text: Satoshi Regular 400 */}
          <p className="font-sans-ui text-[15.5px] sm:text-[16.5px] md:text-[17px] text-[#1C1B1A] font-normal leading-[1.72] mt-6 sm:mt-8 max-w-[520px] lg:max-w-[490px] text-center lg:text-left mx-auto lg:mx-0">
            I'm Akanksha, a final-year UI/UX design student at MIT Institute of Design. I enjoy noticing everyday friction, understanding people's experiences, and turning those insights into better solutions. My work moves between research, problem-solving, and visual exploration, with interests in UX, digital experiences, branding, graphic design, and illustration. For me, good design is about making ideas work, feel right, and have a reason to exist.
          </p>
        </div>
      </div>
    </section>
  );
};
