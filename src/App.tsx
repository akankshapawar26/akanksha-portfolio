import React, { useState, useEffect } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryTicker } from './components/CategoryTicker';
import { FeaturedWork } from './components/FeaturedWork';
import { BeyondTheScreens } from './components/BeyondTheScreens';
import { AboutMe } from './components/AboutMe';
import { PhotoMarquee } from './components/PhotoMarquee';
import { ClosingSection } from './components/ClosingSection';
import { WorkModal } from './components/WorkModal';
import { ResumeModal } from './components/ResumeModal';
import { GraphicDesignPage } from './components/GraphicDesignPage';
import { IllustrationPage } from './components/IllustrationPage';

export default function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'graphic-design' | 'illustration'>('home');

  useEffect(() => {
    const syncFromHash = () => {
      if (window.location.hash === '#graphic-design') {
        setCurrentView('graphic-design');
      } else if (window.location.hash === '#illustration') {
        setCurrentView('illustration');
      } else {
        setCurrentView('home');
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);
    return () => window.removeEventListener('hashchange', syncFromHash);
  }, []);

  const handleNavClick = (id: string) => {
    if (id === 'resume') {
      setIsResumeOpen(true);
    }
  };

  const handleOpenGraphicDesign = () => {
    setCurrentView('graphic-design');
    window.location.hash = 'graphic-design';
  };

  const handleOpenIllustration = () => {
    setCurrentView('illustration');
    window.location.hash = 'illustration';
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    if (window.location.hash === '#graphic-design' || window.location.hash === '#illustration') {
      window.history.pushState(null, '', window.location.pathname);
    }
  };

  // If user navigated directly or clicked Graphic Design
  if (currentView === 'graphic-design') {
    return (
      <div className="relative min-h-screen w-full bg-[#FFFFE1] text-[#323131] overflow-x-hidden">
        <GraphicDesignPage onBack={handleBackToHome} />
      </div>
    );
  }

  // If user navigated directly or clicked Illustration
  if (currentView === 'illustration') {
    return (
      <div className="relative min-h-screen w-full bg-[#EAE2D2] text-[#292827] overflow-x-hidden">
        <IllustrationPage onBack={handleBackToHome} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-[#FCFAEF] text-[#292827] overflow-x-hidden selection:bg-[#C99492]/25 selection:text-[#754640] flex flex-col items-center">
      {/* 0. Introductory 4-Tile Loading Screen (runs once only on initial load) */}
      {showLoading && (
        <LoadingScreen duration={2600} onComplete={() => setShowLoading(false)} />
      )}

      {/* 1. Centered Floating Navigation Bar */}
      <Navbar onNavClick={handleNavClick} />

      {/* 2. Hero / Introduction */}
      <Hero />

      {/* 3. Category Ticker */}
      <CategoryTicker />

      {/* 4. Featured Work (3 Projects: Ishaara, ASTRA, Samsung Iris) */}
      <FeaturedWork onSelectProject={(project) => setSelectedProject(project)} />

      {/* 5. Beyond the Screens (Sky Blue Section with Graphic Design & Illustration) */}
      <BeyondTheScreens
        onOpenGraphicDesign={handleOpenGraphicDesign}
        onOpenIllustration={handleOpenIllustration}
      />

      {/* 6. About Me (Scrapbook Collage & Philosophy Body Copy) */}
      <AboutMe />

      {/* Photo Marquee Section */}
      <PhotoMarquee />

      {/* 7. Closing Section & Footer Copyright */}
      <ClosingSection />

      {/* Interactive Modals */}
      <WorkModal
        projectName={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
