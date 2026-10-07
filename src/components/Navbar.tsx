import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onNavClick?: (item: string) => void;
  activeItem?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Always visible at the very top
          if (currentScrollY < 30) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY - lastScrollY > 4) {
            // Scrolling DOWN -> smoothly hide
            setIsVisible(false);
          } else if (lastScrollY - currentScrollY > 3) {
            // Scrolling UP even slightly -> immediately pop into view
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { label: 'Work', id: 'work', href: '#work' },
    { label: 'About', id: 'about', href: '#about' },
    { label: 'Resume', id: 'resume', href: '#resume' },
  ];

  return (
    <>
      {/* 1. DESKTOP / TABLET NAVIGATION: Smart Pop-Up Glassmorphic Pill */}
      <header
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 w-full justify-center pt-3 sm:pt-4 pb-2 pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <nav
          role="navigation"
          aria-label="Main Navigation"
          className="pointer-events-auto flex items-center justify-between px-6 sm:px-9 transition-all duration-300"
          style={{
            width: 'min(666.236px, calc(100vw - 32px))',
            height: '54.302px',
            borderRadius: '15px',
            border: '1px solid rgba(255, 255, 255, 0.43)',
            backgroundColor: 'rgba(23, 38, 90, 0.6)',
            background: 'rgba(23, 38, 90, 0.6)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            boxShadow:
              '0 8px 32px 0 rgba(0, 0, 0, 0.25), 0 4px 12px 0 rgba(10, 18, 48, 0.18), inset 0 1px 1px 0 rgba(255, 255, 255, 0.35)',
          }}
        >
          {/* Brand Monogram in Pixelify Bold with glow on hover */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (onNavClick) {
                onNavClick('home');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            onMouseEnter={() => setHovered('logo')}
            onMouseLeave={() => setHovered(null)}
            className="flex items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded transition-transform duration-200 hover:scale-105 active:scale-95"
            aria-label="Akanksha Pawar Home"
          >
            <span
              className={`font-pixelify font-bold text-[24px] sm:text-[25px] text-white tracking-widest select-none leading-none transition-all duration-200 ${
                hovered === 'logo' ? 'nav-logo-glow' : ''
              }`}
            >
              AP
            </span>
          </a>

          {/* Navigation Links with glowing hover effect */}
          <div className="flex items-center space-x-7 sm:space-x-10 text-white">
            {navLinks.map((link) => {
              const isHovered = hovered === link.id;

              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    if (link.id === 'resume') {
                      e.preventDefault();
                      onNavClick?.('resume');
                    } else if (link.id === 'work') {
                      e.preventDefault();
                      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                      onNavClick?.('work');
                    } else if (link.id === 'about') {
                      e.preventDefault();
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                      onNavClick?.('about');
                    }
                  }}
                  onMouseEnter={() => setHovered(link.id)}
                  onMouseLeave={() => setHovered(null)}
                  className={`relative text-[15px] sm:text-[16px] font-sans-ui font-medium tracking-normal cursor-pointer select-none transition-all duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-white/50 rounded ${
                    isHovered
                      ? 'text-white opacity-100 nav-text-glow'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </nav>
      </header>

      {/* 2. MOBILE NAVIGATION: Smart Pop-Up Header Bar */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-50 w-full pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible || mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <header className="w-full flex items-center justify-between px-5 pt-3 pb-2.5 bg-[#FCFAEF]/90 backdrop-blur-md border-b border-[#EBE4D5]/60 pointer-events-auto shadow-xs">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (onNavClick) {
                onNavClick('home');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center cursor-pointer"
            aria-label="Akanksha Pawar Home"
          >
            <span className="font-pixelify font-bold text-[24px] text-[#17265A] tracking-widest select-none">
              AP
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Navigation Menu"
            className="w-[42px] h-[42px] bg-[#3E4B79] rounded-[10px] shadow-md flex flex-col items-center justify-center gap-[4.5px] active:scale-95 transition-transform duration-150 focus:outline-none cursor-pointer"
          >
            <span className="w-5 h-[2px] bg-white rounded-full transition-all duration-200" />
            <span className="w-5 h-[2px] bg-white rounded-full transition-all duration-200" />
            <span className="w-5 h-[2px] bg-white rounded-full transition-all duration-200" />
          </button>
        </header>

        {/* Mobile Slide-down / Popup Menu */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex flex-col items-end pt-20 pr-5 pointer-events-auto"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="bg-[#202E5C]/95 border border-white/20 rounded-2xl p-6 shadow-2xl flex flex-col space-y-5 w-[200px] text-right"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (link.id === 'resume') {
                      e.preventDefault();
                      onNavClick?.('resume');
                    } else if (link.id === 'work') {
                      e.preventDefault();
                      document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
                      onNavClick?.('work');
                    } else if (link.id === 'about') {
                      e.preventDefault();
                      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                      onNavClick?.('about');
                    }
                  }}
                  className="font-sans-ui text-lg font-medium text-white/90 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
