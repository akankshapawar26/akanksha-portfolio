import React, { useState, useEffect } from 'react';
import { PatternRenderer } from './TilePatterns';

interface IllustrationPageProps {
  onBack: () => void;
}

interface Artwork {
  id: string;
  title: string;
  medium: string;
  year: string;
  notes: string;
  tapeColor?: string;
  tapeAngle?: string;
  renderIllustration: () => React.ReactNode;
}

export const IllustrationPage: React.FC<IllustrationPageProps> = ({ onBack }) => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [viewMode, setViewMode] = useState<'desk' | 'grid'>('desk');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedArtwork) {
          setSelectedArtwork(null);
        } else {
          onBack();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedArtwork, onBack]);

  // Exact coordinates for user's signature cat illustration
  const catX = 18;
  const catY = 120;
  const stemX = catX + 175.227;
  const stemY = catY + 20.991;
  const flowerX = stemX - 47.576;
  const flowerY = stemY - 110.834;
  const centerX = flowerX + (114.597 - 38.753) / 2;
  const centerY = flowerY + (111.102 - 32.768) / 2;

  const artworks: Artwork[] = [
    {
      id: 'cat-flower',
      title: 'The Feline & The Bloom',
      medium: 'Vector Silhouette & Flora',
      year: '2025',
      notes:
        'Signature piece featuring high-contrast geometric curves, a velvet silhouette feline, and an organic blooming petal stem.',
      tapeColor: '#F8BCCB',
      tapeAngle: '-2deg',
      renderIllustration: () => (
        <svg viewBox="0 0 350 320" className="w-full h-full block" fill="none">
          <rect width="350" height="320" fill="#FCFAF2" />
          {/* Subtle grid lines for sketchbook aesthetic */}
          <defs>
            <pattern id="sketch-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="350" height="320" fill="url(#sketch-grid)" />

          {/* Stem & Leaf */}
          <g transform={`translate(${stemX * 0.9}, ${stemY * 0.9}) scale(0.9)`}>
            <path
              d="M1.54277 0C5.59852 0.18325 7.22701 0.64025 11.3558 0.0830002C11.7738 3.34075 11.4853 6.60825 11.487 9.854C11.4908 16.4488 10.858 24.3832 11.345 30.8797C15.9663 18.0355 27.8453 4.381 42.008 0.942749C43.5503 0.568249 48.51 -0.259504 48.8653 1.85825C52.461 23.2957 32.4153 50.2525 10.9718 51.906C11.0198 53.5473 11.1293 55.4987 11.035 57.114C10.936 58.9235 10.8748 60.4258 10.8988 62.2413L0.331009 62.2352C0.325009 61.618 0.353521 59.4895 0.197021 59.037C-0.306479 51.0693 0.308262 39.0478 0.356262 30.8038C0.406262 22.235 0.26777 7.98 1.54277 0Z"
              fill="#4D6846"
            />
          </g>

          {/* Flower Petals */}
          <g transform={`translate(${flowerX * 0.9}, ${flowerY * 0.9}) scale(0.9)`}>
            <path
              d="M42.8755 32.8644C40.7488 25.1524 40.4016 13.4887 44.4561 6.85535C51.6126 -4.85253 68.5375 -0.64968 70.9948 12.5479C72.3813 19.9949 72.4185 27.0769 70.3418 33.9679C78.1305 24.7154 96.095 12.1814 107.772 22.1882C110.401 24.4517 112.008 27.6787 112.23 31.1407C113.28 45.6207 95.6308 49.8444 85.724 54.3269C92.5055 54.4972 106.131 59.3897 110.54 64.2487C120.264 74.9659 111.174 89.3604 97.3493 88.0432C86.9018 87.0479 77.8993 82.1802 70.6826 75.3307C73.0906 83.3122 73.8465 95.8244 69.8215 103.497C67.749 107.447 64.7733 109.27 60.6293 110.481C60.3078 110.575 59.9808 110.648 59.6503 110.702L58.9318 110.834C54.803 111.392 53.1746 110.935 49.1188 110.751L48.961 110.512C44.201 107.794 41.3838 105.55 39.8235 99.8209C37.9948 93.1057 39.9878 81.5572 42.1333 75.0742C33.0663 81.3847 22.5523 88.2044 10.9143 86.1584C7.38954 85.5387 4.36105 83.8699 2.3018 80.8822C0.347054 78.0884 -0.406206 74.6279 0.209794 71.2744C2.35104 60.0149 18.9418 54.4804 28.9703 54.3682C19.766 50.0559 6.8358 48.4579 2.6823 37.2024C0.257297 30.6317 4.81579 22.4652 11.4025 20.4344C23.4368 16.8559 34.744 25.1344 42.8755 32.8644Z"
              fill="#EFA9A5"
            />
          </g>

          {/* Center Core */}
          <g transform={`translate(${centerX * 0.9}, ${centerY * 0.9}) scale(0.9)`}>
            <path
              d="M17.0849 0.116362C25.1604 -0.765638 34.8189 3.40211 37.8234 11.4041C40.2719 17.9251 37.7309 25.2869 31.9934 29.1489C28.6604 31.3924 25.5629 32.0636 21.6669 32.7186C12.9539 33.3059 1.38513 28.6909 0.176626 19.1734C-1.32537 7.34361 6.96113 1.78736 17.0849 0.116362Z"
              fill="#C65227"
            />
          </g>

          {/* White Backing behind Eyes & Nose */}
          <ellipse cx={(catX + 110) * 0.9} cy={(catY + 148) * 0.9} rx="14" ry="16" fill="#FFFFFF" />
          <ellipse cx={(catX + 245) * 0.9} cy={(catY + 148) * 0.9} rx="14" ry="16" fill="#FFFFFF" />
          <circle cx={(catX + 180) * 0.9} cy={(catY + 174) * 0.9} r="5.5" fill="#FFFFFF" />

          {/* Cat Silhouette */}
          <g transform={`translate(${catX * 0.9}, ${catY * 0.9}) scale(0.9)`}>
            <path
              d="M45.8676 156.966C45.6213 152.483 45.9638 147.328 46.1673 142.849C46.3351 138.389 46.4793 133.928 46.5996 129.467C46.7881 123.494 46.5851 116.73 46.8686 111.008C47.9658 91.3863 50.2431 71.8483 53.6878 52.5001C55.6116 41.6011 57.4931 31.0851 60.6943 20.3643C62.3741 14.7386 65.3441 4.12457 70.7438 0.816069C72.3781 -0.185431 76.7476 -0.146429 78.4748 0.530821C83.5906 2.53657 89.0708 7.97232 92.6851 11.8523C103.831 23.8171 113.561 37.2973 122.488 50.9558C129.534 61.7368 136.911 73.6156 142.801 85.0731C145.412 84.8983 147.975 84.5251 150.577 84.3236C158.851 83.6783 167.145 83.3143 175.444 83.2321C175.394 82.2503 175.425 81.0253 175.424 80.0223C175.58 80.4748 175.552 82.6033 175.558 83.2206L186.125 83.2266C186.101 81.4111 186.163 79.9088 186.262 78.0993L186.32 83.2911C194.73 83.1613 206.638 84.1458 214.96 85.2946C216.064 81.7823 218.709 78.1141 220.539 74.8761C230.114 57.9321 261.065 10.1813 277.402 1.48857C279.885 0.168319 282.917 -0.46543 285.662 0.39057C288.465 1.26507 290.307 3.93832 291.572 6.43407C296.897 16.9391 299.682 34.5456 301.5 46.3486C304.79 67.5868 306.885 88.9928 307.78 110.466C308.252 125.38 307.722 141.721 307.857 156.826C310.345 156.321 317.02 154.841 319.322 154.676V157.671C316.447 158.308 310.56 159.708 307.835 159.903C307.835 163.591 307.877 167.366 307.822 171.048C311.757 171.286 315.42 172.088 319.322 172.608V175.243C318.265 175.173 308.652 173.943 307.807 173.736C307.842 180.398 307.837 187.063 307.795 193.726H46.2023C45.7351 188.126 45.8396 181.903 45.8336 176.228C42.7251 176.468 38.8503 176.241 35.6903 176.218C24.6438 176.131 13.8421 175.931 2.84563 177.193C1.85515 177.306 0.722128 177.028 0.000553301 176.306C0.0071033 175.466 -0.0678718 175.801 0.438478 174.998C5.21675 171.893 38.2208 172.021 45.8426 172.351C45.7741 168.406 45.8013 164.371 45.7853 160.418C37.9408 159.318 29.9451 157.268 21.7615 156.311C19.0245 155.991 6.76155 154.713 5.02763 154.238C4.35505 153.566 4.56815 153.886 4.30103 152.848C4.4759 152.196 4.55405 152.016 5.1998 151.686C8.29765 150.106 40.6698 155.588 45.8676 156.966ZM92.0486 161.673C95.7321 164.913 99.2051 167.163 104.02 168.338C98.6258 158.608 97.3296 147.131 100.417 136.443C100.969 134.437 101.696 132.483 102.59 130.604C102.971 129.809 104.034 128.085 103.824 127.382L103.763 127.324C95.8536 129.24 91.0901 131.342 84.7881 136.806C83.4196 137.993 81.2673 140.139 80.3228 141.64C81.9633 150.563 85.3376 155.508 92.0486 161.673ZM180.091 179.013C181.914 178.391 184.686 176.561 185.147 174.688C186.65 168.588 180.452 168.411 176.848 168.598C168.725 169.058 170.88 179.353 180.091 179.013ZM130.754 131.005C130.58 131.86 132.423 136.08 132.642 137.463C134.366 148.336 133.936 160.241 127.252 169.433C131.915 168.091 135.49 167.163 139.72 164.608C141.312 163.656 149.333 158.263 149.251 157.091C148.597 147.741 138.807 134.344 130.754 131.005ZM253.302 168.193C258.535 166.703 261.11 164.941 265.257 161.501C270.447 157.018 275.357 150.323 276.627 143.204C276.89 141.725 275.992 140.305 274.997 139.217C269.892 133.633 260.857 128.362 253.3 127.447C253.312 127.499 253.325 127.55 253.337 127.602C259.802 140.861 260.347 154.388 253.302 168.193ZM226.474 131.218C217.104 136.464 210.946 145.014 207.919 155.233C207.702 155.966 207.669 156.986 208.131 157.571C210.124 160.093 215.297 163.456 217.989 164.961C222.844 167.716 224.657 168.071 230.044 169.551C224.153 159.608 222.206 149.973 224.785 138.375C225.047 137.2 226.844 132.007 226.718 131.368L226.474 131.218Z"
              fill="#1C1B1A"
            />
          </g>
        </svg>
      ),
    },
    {
      id: 'botanical-studies',
      title: 'Botanical Field Notes',
      medium: 'Gouache & Fine-liner',
      year: '2025',
      notes:
        'Studies of native tropical leaves, monstera fissures, and delicate bell blossoms collected during morning garden walks.',
      tapeColor: '#A7C6B8',
      tapeAngle: '3deg',
      renderIllustration: () => (
        <svg viewBox="0 0 350 320" className="w-full h-full block" fill="none">
          <rect width="350" height="320" fill="#FAF6EE" />
          <defs>
            <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4A7C59" />
              <stop offset="100%" stopColor="#2E523A" />
            </linearGradient>
            <linearGradient id="flowerGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F9C6C9" />
              <stop offset="100%" stopColor="#E28488" />
            </linearGradient>
          </defs>

          {/* Plant Stem */}
          <path
            d="M175 280 C 170 200, 185 140, 170 40"
            stroke="#5B4530"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Leaves with organic veins */}
          <g transform="translate(170, 210) rotate(-35)">
            <path
              d="M0 0 C 40 -30, 80 -10, 100 20 C 70 30, 30 20, 0 0 Z"
              fill="url(#leafGrad)"
            />
            <path d="M0 0 L 85 15" stroke="#7BAE87" strokeWidth="1.2" />
          </g>
          <g transform="translate(173, 150) rotate(35)">
            <path
              d="M0 0 C -40 -30, -80 -10, -100 20 C -70 30, -30 20, 0 0 Z"
              fill="url(#leafGrad)"
            />
            <path d="M0 0 L -85 15" stroke="#7BAE87" strokeWidth="1.2" />
          </g>

          {/* Top Blossom */}
          <g transform="translate(170, 50)">
            <circle cx="-15" cy="-15" r="22" fill="url(#flowerGrad)" />
            <circle cx="15" cy="-15" r="22" fill="url(#flowerGrad)" />
            <circle cx="0" cy="12" r="22" fill="url(#flowerGrad)" />
            <circle cx="0" cy="-6" r="14" fill="#F4D06F" />
          </g>

          {/* Color palette test swatches at bottom */}
          <g transform="translate(30, 275)">
            <circle cx="0" cy="0" r="8" fill="#4A7C59" />
            <circle cx="22" cy="0" r="8" fill="#7BAE87" />
            <circle cx="44" cy="0" r="8" fill="#E28488" />
            <circle cx="66" cy="0" r="8" fill="#F4D06F" />
            <text x="86" y="4" fill="#8C8275" fontSize="10" fontFamily="sans-serif">
              Pal. No. 04
            </text>
          </g>
        </svg>
      ),
    },
    {
      id: 'tea-routine',
      title: 'Warm Brew & Morning Light',
      medium: 'Digital Ink & Paper Texture',
      year: '2024',
      notes:
        'A cozy study of a steaming ceramic mug, scattered citrus peels, and slow weekend morning reflections.',
      tapeColor: '#F8D082',
      tapeAngle: '-3deg',
      renderIllustration: () => (
        <svg viewBox="0 0 350 320" className="w-full h-full block" fill="none">
          <rect width="350" height="320" fill="#FCF8F2" />

          {/* Sunbeams in background */}
          <circle cx="280" cy="70" r="50" fill="#FBEFC9" opacity="0.6" />

          {/* Ceramic Cup Base */}
          <ellipse cx="175" cy="230" rx="65" ry="12" fill="#D3C9BD" opacity="0.5" />
          <path
            d="M125 150 C125 210, 140 230, 175 230 C210 230, 225 210, 225 150 Z"
            fill="#E07A5F"
          />
          {/* Ceramic Handle */}
          <path
            d="M222 165 C248 165, 248 205, 220 205"
            stroke="#E07A5F"
            strokeWidth="10"
            strokeLinecap="round"
            fill="none"
          />

          {/* Cup Rim */}
          <ellipse cx="175" cy="150" rx="50" ry="16" fill="#F4F1DE" />
          <ellipse cx="175" cy="150" rx="42" ry="12" fill="#58311C" />

          {/* Steaming Curves */}
          <path
            d="M165 130 C155 105, 175 85, 160 60"
            stroke="#C9B8A7"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M185 130 C195 110, 175 90, 190 65"
            stroke="#C9B8A7"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Small Star / Sparkle */}
          <path
            d="M80 90 L83 98 L91 101 L83 104 L80 112 L77 104 L69 101 L77 98 Z"
            fill="#F4A261"
          />
          <path
            d="M260 180 L262 186 L268 188 L262 190 L260 196 L258 190 L252 188 L258 186 Z"
            fill="#F4A261"
          />
        </svg>
      ),
    },
    {
      id: 'midnight-reverie',
      title: 'Moonlit Whispers',
      medium: 'Nocturne Acrylic on Board',
      year: '2024',
      notes:
        'A nightscape exploring deep indigo ink washes, golden crescent glow, and solitary silhouettes.',
      tapeColor: '#5CB4F8',
      tapeAngle: '2deg',
      renderIllustration: () => (
        <svg viewBox="0 0 350 320" className="w-full h-full block" fill="none">
          <rect width="350" height="320" fill="#141E30" />

          {/* Big Golden Moon */}
          <circle cx="175" cy="130" r="60" fill="#F9D423" />
          <circle cx="195" cy="120" r="54" fill="#141E30" />

          {/* Constellation stars */}
          {[
            [50, 60],
            [110, 40],
            [280, 80],
            [310, 140],
            [80, 180],
            [290, 220],
            [60, 250],
          ].map(([x, y], idx) => (
            <circle key={idx} cx={x} cy={y} r={idx % 2 === 0 ? 2 : 1.5} fill="#FFF9D2" />
          ))}

          {/* Horizon & Mountains */}
          <path
            d="M0 240 Q90 200, 180 230 T350 210 L350 320 L0 320 Z"
            fill="#243B55"
          />
          <path
            d="M0 270 Q140 250, 260 280 T350 260 L350 320 L0 320 Z"
            fill="#0F172A"
          />

          {/* Flying Bird Silhouettes */}
          <path
            d="M130 90 Q138 85, 145 92 Q152 85, 160 90"
            stroke="#F9D423"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      id: 'whimsical-characters',
      title: 'Character Gestures & Postures',
      medium: 'Rough Graphite & Digital Wash',
      year: '2025',
      notes:
        'Character studies focusing on expressive posture, spontaneous line economy, and emotional body language.',
      tapeColor: '#F8BCCB',
      tapeAngle: '-1deg',
      renderIllustration: () => (
        <svg viewBox="0 0 350 320" className="w-full h-full block" fill="none">
          <rect width="350" height="320" fill="#FFFDF8" />

          {/* Character 1: Girl with Oversized Sweater */}
          <g transform="translate(70, 80)">
            {/* Head & Bun */}
            <circle cx="45" cy="30" r="16" fill="#F4A261" />
            <circle cx="45" cy="14" r="9" fill="#264653" />
            <path
              d="M32 28 C32 14, 58 14, 58 28 Z"
              fill="#264653"
            />
            {/* Chunky Sweater */}
            <path
              d="M20 46 C20 40, 70 40, 70 46 L82 105 C75 110, 15 110, 8 105 Z"
              fill="#2A9D8F"
            />
            {/* Legs */}
            <line x1="32" y1="108" x2="32" y2="150" stroke="#264653" strokeWidth="4" strokeLinecap="round" />
            <line x1="58" y1="108" x2="58" y2="150" stroke="#264653" strokeWidth="4" strokeLinecap="round" />
            {/* Shoes */}
            <ellipse cx="30" cy="152" rx="7" ry="3" fill="#E76F51" />
            <ellipse cx="60" cy="152" rx="7" ry="3" fill="#E76F51" />
          </g>

          {/* Character 2: Playful Puppy */}
          <g transform="translate(200, 140)">
            <ellipse cx="40" cy="50" rx="22" ry="16" fill="#E76F51" />
            <circle cx="20" cy="36" r="14" fill="#E76F51" />
            {/* Floppy Ear */}
            <path d="M12 30 C5 35, 10 50, 18 45 Z" fill="#9A381E" />
            {/* Legs */}
            <line x1="28" y1="62" x2="28" y2="85" stroke="#E76F51" strokeWidth="4" strokeLinecap="round" />
            <line x1="52" y1="62" x2="52" y2="85" stroke="#E76F51" strokeWidth="4" strokeLinecap="round" />
            {/* Wagging Tail */}
            <path d="M60 46 Q75 35, 70 20" stroke="#E76F51" strokeWidth="4" strokeLinecap="round" fill="none" />
          </g>

          <text x="35" y="290" fill="#A8A29E" fontSize="11" fontFamily="sans-serif">
            Gesture Sheet #12 · Ink & Gouache
          </text>
        </svg>
      ),
    },
    {
      id: 'potted-botanicals',
      title: 'Terracotta & Greenery',
      medium: 'Warm Gouache & Chalk',
      year: '2024',
      notes:
        'A collection of earthenware pots, trailing string-of-pearls, and textured snake plant leaves.',
      tapeColor: '#A7C6B8',
      tapeAngle: '2.5deg',
      renderIllustration: () => (
        <svg viewBox="0 0 350 320" className="w-full h-full block" fill="none">
          <rect width="350" height="320" fill="#FAF7F0" />

          {/* Wooden Shelf */}
          <rect x="30" y="240" width="290" height="12" rx="3" fill="#C49A6C" />
          <rect x="40" y="252" width="270" height="4" fill="#A77F52" opacity="0.6" />

          {/* Pot 1: Terracotta with Snake Plant */}
          <g transform="translate(60, 140)">
            {/* Tall green spear leaves */}
            <path d="M25 50 Q10 0, 20 -40 Q35 0, 25 50 Z" fill="#2D5A27" />
            <path d="M22 45 Q15 -5, 20 -35" stroke="#7BAE87" strokeWidth="1.5" fill="none" />
            <path d="M40 50 Q55 10, 45 -30 Q30 10, 40 50 Z" fill="#3E7C35" />
            <path d="M12 50 Q-5 20, 5 -15 Q20 20, 12 50 Z" fill="#254B20" />
            {/* Pot */}
            <path d="M0 50 L10 100 L45 100 L55 50 Z" fill="#D96B43" />
            <rect x="-4" y="44" width="63" height="8" rx="2" fill="#BA552F" />
          </g>

          {/* Pot 2: Round Ceramic with Trailing Vine */}
          <g transform="translate(200, 160)">
            {/* Trailing vines hanging below shelf */}
            <path d="M35 60 Q20 90, 30 120" stroke="#4A7C59" strokeWidth="2.5" fill="none" />
            <circle cx="24" cy="85" r="5" fill="#7BAE87" />
            <circle cx="32" cy="105" r="5" fill="#7BAE87" />
            <path d="M45 60 Q60 85, 50 110" stroke="#4A7C59" strokeWidth="2.5" fill="none" />
            <circle cx="56" cy="80" r="5" fill="#7BAE87" />
            {/* Round Pot */}
            <ellipse cx="40" cy="50" rx="30" ry="24" fill="#E8D5B5" />
            <ellipse cx="40" cy="35" rx="26" ry="8" fill="#58311C" />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#EAE2D2] text-[#292827] select-none flex flex-col items-center">
      {/* ========================================================= */}
      {/* 1. HEADER BANNER (Consistent with Graphic Design Header)  */}
      {/* Warm Butter-Cream Yellow with Akanksha's Decorative Tiles */}
      {/* ========================================================= */}
      <header className="relative w-full bg-[#FCF9E8] pt-10 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-8 md:px-12 overflow-hidden border-b border-[#E8DFC2]">
        {/* Navigation bar row */}
        <div className="w-full max-w-[1240px] mx-auto mb-6 sm:mb-8 flex items-center justify-between relative z-30">
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 hover:bg-white text-[#292827] border border-[#E5DFBE] shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer font-sans-ui text-[13px] sm:text-[14px] font-medium"
          >
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Portfolio</span>
          </button>

          {/* View Mode Toggle: Desk vs Grid */}
          <div className="flex items-center gap-1.5 p-1 bg-white/80 backdrop-blur-xs rounded-full border border-[#E5DFBE] shadow-xs">
            <button
              onClick={() => setViewMode('desk')}
              className={`px-3 py-1 text-[12px] font-semibold rounded-full transition-all cursor-pointer ${
                viewMode === 'desk'
                  ? 'bg-[#292827] text-white shadow-xs'
                  : 'text-[#6B6654] hover:text-[#292827]'
              }`}
            >
              Desk Clipboard
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 text-[12px] font-semibold rounded-full transition-all cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#292827] text-white shadow-xs'
                  : 'text-[#6B6654] hover:text-[#292827]'
              }`}
            >
              Gallery Grid
            </button>
          </div>
        </div>

        {/* Top-Left Corner Tile Motifs (diamond-blue, four-flowers-green, blue-flower-yellow) */}
        <div
          className="absolute top-4 sm:top-6 left-4 sm:left-8 md:left-12 flex flex-col gap-2 pointer-events-none z-10"
          aria-hidden="true"
        >
          <div className="flex items-center gap-2">
            <div className="w-[50px] h-[50px] sm:w-[68px] sm:h-[68px] md:w-[76px] md:h-[76px] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-xs">
              <PatternRenderer type="diamond-blue" className="w-full h-full" />
            </div>
            <div className="w-[50px] h-[50px] sm:w-[68px] sm:h-[68px] md:w-[76px] md:h-[76px] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-xs">
              <PatternRenderer type="four-flowers-green" className="w-full h-full" />
            </div>
          </div>
          <div className="w-[50px] h-[50px] sm:w-[68px] sm:h-[68px] md:w-[76px] md:h-[76px] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-xs">
            <PatternRenderer type="blue-flower-yellow" className="w-full h-full" />
          </div>
        </div>

        {/* Top-Right Corner Tile Motifs (pink-cream-tulips-navy, petal-mandala-red) */}
        <div
          className="absolute top-14 sm:top-20 right-4 sm:right-8 md:right-12 flex flex-col gap-2 pointer-events-none z-10"
          aria-hidden="true"
        >
          <div className="w-[50px] h-[50px] sm:w-[68px] sm:h-[68px] md:w-[76px] md:h-[76px] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-xs">
            <PatternRenderer type="pink-cream-tulips-navy" className="w-full h-full" />
          </div>
          <div className="w-[50px] h-[50px] sm:w-[68px] sm:h-[68px] md:w-[76px] md:h-[76px] rounded-[14px] sm:rounded-[18px] overflow-hidden shadow-xs">
            <PatternRenderer type="petal-mandala-red" className="w-full h-full" />
          </div>
        </div>

        {/* Editorial Headline */}
        <div className="w-full max-w-[1240px] mx-auto pt-10 sm:pt-14 relative z-20">
          <h1 className="font-editorial text-[48px] sm:text-[68px] md:text-[88px] lg:text-[104px] font-bold text-[#1C1B1A] tracking-[-0.025em] leading-[0.95]">
            Illustration
          </h1>
          <p className="font-sans-ui text-[15px] sm:text-[17px] text-[#716E5F] max-w-[640px] mt-4 sm:mt-5 font-normal leading-relaxed">
            A creative workspace desk filled with hand-rendered drawings, botanical ink studies, and
            whimsical character sketches clipped to wooden artist boards.
          </p>
        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. ARTIST DESK / CLIPBOARD WORKSPACE                      */}
      {/* Realistic wooden desk surface with tactile clipboards      */}
      {/* ========================================================= */}
      <main className="w-full bg-[#E5DCC9] py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 flex-1 relative overflow-hidden">
        {/* Subtle Desk Wood Grain Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 50% 20%, rgba(255,255,255,0.4) 0%, rgba(0,0,0,0.12) 100%)',
          }}
        />

        {/* Floating Desk Stationery Items (Decorative Pencils, Eraser, Ruler) */}
        <div
          className="hidden xl:block absolute left-8 top-32 w-12 h-64 pointer-events-none z-10 rotate-12"
          aria-hidden="true"
        >
          {/* Wooden Drafting Ruler */}
          <div className="w-8 h-72 bg-[#D1A766] rounded-sm shadow-md border-r border-[#B38747] flex flex-col justify-between py-4 px-1">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-[1px] bg-[#614522]"
                style={{ width: i % 3 === 0 ? '70%' : '40%' }}
              />
            ))}
          </div>
        </div>

        <div
          className="hidden xl:block absolute right-12 top-48 w-16 h-48 pointer-events-none z-10 -rotate-12"
          aria-hidden="true"
        >
          {/* Classic Yellow Pencil */}
          <div className="w-3.5 h-64 bg-[#F4B41A] rounded-full shadow-md relative mx-auto">
            {/* Eraser */}
            <div className="w-full h-6 bg-[#E07A5F] rounded-t-sm" />
            <div className="w-full h-3 bg-[#AEABAB]" />
            {/* Sharpened tip */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[7px] border-x-transparent border-t-[16px] border-t-[#EAD2AC]">
              <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 w-1.5 h-2 bg-[#292827]" />
            </div>
          </div>
        </div>

        {/* Main Content Workspace */}
        <div className="w-full max-w-[1240px] mx-auto relative z-20">
          <div
            className={
              viewMode === 'desk'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12'
                : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'
            }
          >
            {artworks.map((artwork, idx) => (
              <div
                key={artwork.id}
                onClick={() => setSelectedArtwork(artwork)}
                className={`group relative flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  viewMode === 'desk'
                    ? idx % 2 === 0
                      ? 'hover:-translate-y-2 hover:rotate-1'
                      : 'hover:-translate-y-2 hover:-rotate-1'
                    : 'hover:-translate-y-1'
                }`}
                style={
                  viewMode === 'desk'
                    ? {
                        transform:
                          idx === 0
                            ? 'rotate(-1deg)'
                            : idx === 1
                            ? 'rotate(1.5deg)'
                            : idx === 2
                            ? 'rotate(-1.5deg)'
                            : idx === 3
                            ? 'rotate(1deg)'
                            : idx === 4
                            ? 'rotate(-0.8deg)'
                            : 'rotate(1.2deg)',
                      }
                    : undefined
                }
              >
                {/* --------------------------------------------------- */}
                {/* CLIPBOARD FRAME (Realistic Masonite / Wood Texture) */}
                {/* --------------------------------------------------- */}
                <div
                  className="relative w-full rounded-[16px] p-4 sm:p-5 pt-10 sm:pt-12 transition-all duration-300"
                  style={{
                    backgroundColor: '#C5A069',
                    backgroundImage:
                      'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%)',
                    boxShadow:
                      '0 18px 36px -8px rgba(50, 35, 20, 0.35), 0 6px 14px rgba(0, 0, 0, 0.14), inset 0 1px 2px rgba(255,255,255,0.4)',
                  }}
                >
                  {/* Metallic Chrome Clip at top of clipboard */}
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none drop-shadow-md"
                    aria-hidden="true"
                  >
                    {/* Metal Hanging Hole Loop */}
                    <div className="w-8 h-4 border-2 border-[#8E99A8] rounded-t-full bg-transparent mb-0.5" />
                    {/* Main Metal Clip Clamp */}
                    <div
                      className="w-28 sm:w-32 h-9 rounded-sm flex items-center justify-between px-3 relative"
                      style={{
                        background:
                          'linear-gradient(180deg, #DCE1E7 0%, #A4AFBE 45%, #7C8898 50%, #BDC6D3 100%)',
                        boxShadow:
                          '0 3px 6px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.8)',
                      }}
                    >
                      {/* Left Rivet */}
                      <div className="w-2.5 h-2.5 rounded-full bg-[#525C6B] shadow-inner" />
                      {/* Spring Wire Bridge */}
                      <div className="w-14 h-3.5 border-t-2 border-b-2 border-[#677485] rounded-xs opacity-75" />
                      {/* Right Rivet */}
                      <div className="w-2.5 h-2.5 rounded-full bg-[#525C6B] shadow-inner" />
                    </div>
                  </div>

                  {/* Playful Washi Tape on One Corner */}
                  {artwork.tapeColor && (
                    <div
                      className="absolute -top-1 right-6 z-20 w-16 h-5 opacity-90 shadow-xs pointer-events-none"
                      style={{
                        backgroundColor: artwork.tapeColor,
                        transform: `rotate(${artwork.tapeAngle || '2deg'})`,
                      }}
                    />
                  )}

                  {/* Archival White Sketch Paper Mounted on Board */}
                  <div
                    className="w-full bg-[#FCFAF5] rounded-[6px] overflow-hidden shadow-xs relative"
                    style={{
                      boxShadow:
                        'inset 0 0 12px rgba(0,0,0,0.04), 0 2px 5px rgba(0,0,0,0.12)',
                    }}
                  >
                    {/* Illustration Render Container */}
                    <div className="w-full aspect-[1/0.95] sm:aspect-[1/0.92] relative overflow-hidden">
                      {artwork.renderIllustration()}
                    </div>

                    {/* Paper Bottom Caption Strip */}
                    <div className="p-3.5 sm:p-4 bg-white/95 border-t border-black/[0.04] flex items-center justify-between">
                      <div>
                        <h3 className="font-editorial text-[18px] sm:text-[20px] font-bold text-[#1C1B1A] leading-tight">
                          {artwork.title}
                        </h3>
                        <p className="font-sans-ui text-[12px] text-[#78716C] mt-0.5">
                          {artwork.medium}
                        </p>
                      </div>

                      {/* Small Quick View Eye Icon */}
                      <span className="w-8 h-8 rounded-full bg-[#F5F2EB] text-[#44403C] flex items-center justify-center text-xs group-hover:bg-[#1C1B1A] group-hover:text-white transition-colors duration-200 shadow-xs flex-shrink-0 ml-2">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ========================================================= */}
      {/* 3. LIGHTBOX MODAL FOR ARTWORK DETAIL                      */}
      {/* ========================================================= */}
      {selectedArtwork && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/65 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="relative w-full max-w-[760px] bg-[#FCFAF5] rounded-[24px] overflow-hidden shadow-2xl border border-black/10 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar with Close */}
            <div className="p-4 sm:p-6 pb-0 flex items-center justify-between border-b border-black/[0.06]">
              <div>
                <span className="font-sans-ui text-[12px] font-bold uppercase tracking-wider text-[#A8A29E]">
                  {selectedArtwork.medium} · {selectedArtwork.year}
                </span>
                <h2 className="font-editorial text-[24px] sm:text-[32px] font-bold text-[#1C1B1A] leading-tight">
                  {selectedArtwork.title}
                </h2>
              </div>

              <button
                onClick={() => setSelectedArtwork(null)}
                className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-slate-700 flex items-center justify-center shadow-xs border border-black/10 transition-transform hover:scale-105 cursor-pointer ml-4 flex-shrink-0"
                aria-label="Close artwork view"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Illustration Display in High Definition */}
            <div className="w-full max-h-[500px] overflow-hidden flex items-center justify-center bg-white p-4 sm:p-6 border-b border-black/[0.06]">
              <div className="w-full max-w-[420px] aspect-[1/0.92] shadow-sm rounded-lg overflow-hidden border border-black/[0.06]">
                {selectedArtwork.renderIllustration()}
              </div>
            </div>

            {/* Bottom Details */}
            <div className="p-5 sm:p-7 space-y-4">
              <div>
                <h4 className="font-sans-ui text-[12px] uppercase tracking-wider text-[#78716C] font-bold mb-1.5">
                  Artist's Sketchbook Notes
                </h4>
                <p className="font-sans-ui text-[14px] sm:text-[15px] text-[#44403C] leading-relaxed">
                  {selectedArtwork.notes}
                </p>
              </div>

              <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between">
                <span className="font-sans-ui text-[12px] text-[#A8A29E]">
                  From Akanksha's studio drawing collection
                </span>
                <button
                  onClick={() => setSelectedArtwork(null)}
                  className="px-5 py-2 rounded-full bg-[#1C1B1A] hover:bg-black text-white font-sans-ui text-[13px] font-medium transition-colors cursor-pointer"
                >
                  Return to Desk
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
