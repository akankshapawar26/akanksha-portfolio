import React, { useState } from 'react';
import { motion } from 'motion/react';

export interface ViewProjectButtonProps {
  href?: string;
  onClick?: () => void;
  text?: string;
  className?: string;
}

export const ViewProjectButton: React.FC<ViewProjectButtonProps> = ({
  href,
  onClick,
  text = 'VIEW PROJECT',
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerClasses = `group inline-flex items-center select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3377F8] focus-visible:ring-offset-2 rounded-full active:scale-[0.98] transition-transform duration-150 ${className}`;

  const content = (
    <>
      {/* 1. Main Pill Button: Filled with #3377F8 */}
      <span
        style={{
          display: 'flex',
          width: '227px',
          height: '41px',
          paddingLeft: '28px',
          paddingRight: '28px',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '9999px',
          borderWidth: '1.5px',
          borderStyle: 'solid',
          borderColor: isHovered ? '#2566E8' : '#3377F8',
          backgroundColor: isHovered ? '#2566E8' : '#3377F8',
          color: '#FFFFFF',
          boxShadow: isHovered
            ? '0 4px 14px rgba(51, 119, 248, 0.38)'
            : '0 2px 8px rgba(51, 119, 248, 0.22)',
          transition:
            'background-color 240ms cubic-bezier(0.16, 1, 0.3, 1), color 240ms cubic-bezier(0.16, 1, 0.3, 1), border-color 240ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 240ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="font-sans-ui text-[13px] font-bold tracking-[0.04em] uppercase whitespace-nowrap"
      >
        {text}
      </span>

      {/* 2. Dynamic Circular Badge with 45° Arrow */}
      <motion.span
        initial={false}
        animate={isHovered ? 'hover' : 'resting'}
        variants={{
          resting: {
            width: 0,
            height: 41,
            scale: 0,
            opacity: 0,
            marginLeft: 0,
            transition: {
              duration: 0.24,
              ease: [0.16, 1, 0.3, 1],
            },
          },
          hover: {
            width: 41,
            height: 41,
            scale: 1,
            opacity: 1,
            marginLeft: 10,
            transition: {
              duration: 0.3,
              ease: [0.16, 1, 0.3, 1],
            },
          },
        }}
        style={{
          borderRadius: '9999px',
          flexShrink: 0,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#3377F8',
          border: '1.5px solid #2566E8',
          color: '#FFFFFF',
          transformOrigin: 'center center',
          overflow: 'hidden',
          pointerEvents: isHovered ? 'auto' : 'none',
          boxShadow: '0 4px 14px rgba(51, 119, 248, 0.35)',
        }}
        aria-hidden="true"
      >
        <motion.svg
          width="17"
          height="17"
          viewBox="0 0 16 16"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="2.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={isHovered ? 'hover' : 'resting'}
          variants={{
            resting: {
              opacity: 0,
              rotate: 0,
              scale: 0.5,
              transition: {
                duration: 0.16,
                ease: [0.16, 1, 0.3, 1],
              },
            },
            hover: {
              opacity: [0, 0, 1, 1],
              scale: [0.5, 0.7, 1, 1],
              rotate: [0, 0, 0, -45],
              transition: {
                duration: 0.45,
                times: [0, 0.35, 0.58, 1],
                ease: [0.16, 1, 0.3, 1],
              },
            },
          }}
          style={{
            transformOrigin: 'center center',
            flexShrink: 0,
          }}
        >
          <path d="M2.5 8H13.5M9.5 4L13.5 8L9.5 12" />
        </motion.svg>
      </motion.span>
    </>
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  if (href) {
    const isExternal = href.startsWith('http://') || href.startsWith('https://');
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={containerClasses}
        aria-label={text}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={containerClasses}
      aria-label={text}
    >
      {content}
    </button>
  );
};
