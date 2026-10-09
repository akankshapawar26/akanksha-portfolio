import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Mail, Phone, MapPin, Briefcase, GraduationCap, FolderGit2, Sparkles, Users } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [isOpenSpread, setIsOpenSpread] = useState(false);
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsOpenSpread(false);

      // Shows front closed file initially, then smoothly opens
      const timer = setTimeout(() => {
        setIsOpenSpread(true);
      }, 350);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') handleClose();
      };
      window.addEventListener('keydown', handleKeyDown);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
      setIsOpenSpread(false);
    }
  }, [isOpen, handleClose]);

  const handleDownloadPDF = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = '/assets/Akanksha_Pawar_Resume.pdf';
    link.download = 'Akanksha_Pawar_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-x-hidden overflow-y-auto bg-black/80 backdrop-blur-md select-none"
          onClick={handleClose}
          style={{ perspective: '1400px' }}
        >
          {/* Top Floating Controls */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            className="fixed top-3 right-3 sm:top-5 sm:right-6 z-60 flex items-center gap-2.5 sm:gap-3 pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Download Button */}
            <button
              type="button"
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#3377F8] hover:bg-[#2566E8] active:scale-95 text-white font-sans text-xs sm:text-sm font-semibold shadow-xl hover:shadow-2xl transition-all cursor-pointer border border-white/20"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Download Resume</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 hover:bg-white text-[#292827] flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-xl border border-black/10"
              aria-label="Close modal"
              title="Close (Esc)"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </motion.div>

          {/* ========================================================= */}
          {/* SCENE CONTAINER                                           */}
          {/* ========================================================= */}
          <div
            className="relative flex items-center justify-center pointer-events-auto my-auto py-4"
            style={{
              perspective: '1400px',
              transformStyle: 'preserve-3d',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              {/* 1. STARTING STATE: FRONT SIDE OF THE FILE (Strict Image Match) */}
              {!isOpenSpread && (
                <motion.div
                  key="front-closed-start"
                  initial={{
                    scale: 0.88,
                    opacity: 0,
                    y: -20,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    scale: 0.95,
                    opacity: 0,
                    transition: { duration: 0.22 },
                  }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-center justify-center cursor-pointer"
                  style={{
                    width: 'min(424px, 86vw)',
                    height: 'min(540px, 80vh)',
                  }}
                  onClick={() => setIsOpenSpread(true)}
                >
                  <img
                    src="/assets/folder-front-closed.svg"
                    alt="Resume Folder Front"
                    className="w-full h-full object-contain pointer-events-none block drop-shadow-2xl"
                  />
                </motion.div>
              )}

              {/* 2. OPEN STATE: SEAMLESSLY JOINED CONTINUOUS FOLDER SPREAD */}
              {isOpenSpread && (
                <motion.div
                  key="open-file-spread"
                  initial={{
                    scale: 0.92,
                    opacity: 0,
                    rotateY: 6,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    rotateY: 0,
                  }}
                  exit={{
                    scale: 0.92,
                    opacity: 0,
                    transition: { duration: 0.22 },
                  }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-center justify-center select-text"
                  style={{
                    width: 'min(860px, 96vw)',
                    height: 'min(546px, 82vh)',
                  }}
                >
                  {/* CONTINUOUS UNIFIED OPEN FOLDER SVG (Completely joined with zero gaps!) */}
                  <img
                    src="/assets/folder-open-unified.svg"
                    alt="Open Resume Folder"
                    className="absolute inset-0 w-full h-full object-fill pointer-events-none drop-shadow-2xl"
                  />

                  {/* TWO INSET DOCUMENT SPREADS (Left and Right halves) */}
                  <div className="relative z-10 w-full h-full flex items-center justify-between p-2 sm:p-3 md:p-3.5">
                    {/* ----------------- LEFT SPREAD DOCUMENT ----------------- */}
                    <div className="w-[48%] h-[92%] flex items-center justify-center pl-1 sm:pl-2">
                      <div
                        className="w-full h-full bg-[#FFFFFF] rounded-[13px] sm:rounded-[15px] p-3 sm:p-4 overflow-hidden flex flex-col justify-between text-[#292827]"
                        style={{
                          boxShadow: '2px -3px 4px 0 rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        <div className="flex flex-col justify-between h-full gap-2 sm:gap-2.5">
                          {/* Header: Photo Card on Left + Name & Details on Right */}
                          <div className="flex items-start gap-2.5 sm:gap-3 border-b border-[#292827]/15 pb-2 sm:pb-2.5">
                            {/* Attached Physical Photo Card */}
                            <div
                              className="relative flex-shrink-0"
                              style={{
                                transform: 'rotate(-2deg)',
                              }}
                            >
                              {/* Tape Accent */}
                              <div
                                className="absolute -top-1.5 left-2 w-3.5 h-2.5 bg-[#DEBD81]/80 rounded-xs z-20 shadow-xs rotate-6 pointer-events-none"
                                aria-hidden="true"
                              />
                              {/* Photo Frame */}
                              <div className="w-[54px] h-[66px] sm:w-[68px] sm:h-[80px] p-1 bg-white rounded-[5px] sm:rounded-[6px] shadow-md border border-[#292827]/15 overflow-hidden flex flex-col justify-between">
                                <img
                                  src="/assets/resume-photo.jpg"
                                  onError={(e) => {
                                    const target = e.currentTarget;
                                    if (!target.src.includes('resume%20photo.JPG')) {
                                      target.src = '/assets/resume photo.JPG';
                                    } else {
                                      target.src = '/assets/about-image.png';
                                    }
                                  }}
                                  alt="Akanksha Pawar"
                                  className="w-full h-[48px] sm:h-[60px] object-cover object-top rounded-[2px] sm:rounded-[3px]"
                                />
                                <span className="text-[6.5px] sm:text-[7.5px] font-bold text-center text-[#754640] uppercase tracking-wider block leading-none">
                                  AKANKSHA
                                </span>
                              </div>
                            </div>

                            {/* Name & Contact Info */}
                            <div className="flex-1 min-w-0">
                              <h1 className="text-base sm:text-xl font-bold font-editorial text-[#1F1E1D] leading-tight truncate">
                                AKANKSHA PAWAR
                              </h1>
                              <p className="text-[9px] sm:text-[10px] font-semibold text-[#754640] uppercase tracking-wider mt-0.5">
                                UI/UX DESIGNER • INTERACTION DESIGN
                              </p>

                              {/* Contact Details */}
                              <div className="flex flex-col gap-0.5 text-[8.5px] sm:text-[9.5px] text-[#52504C] mt-1 sm:mt-1.5 font-sans">
                                <span className="inline-flex items-center gap-1 truncate">
                                  <MapPin className="w-2.5 h-2.5 text-[#754640] flex-shrink-0" />
                                  <span>Mumbai / Pune, India</span>
                                </span>
                                <a
                                  href="mailto:akankshapuiux01@gmail.com"
                                  className="inline-flex items-center gap-1 hover:text-[#3377F8] hover:underline truncate"
                                >
                                  <Mail className="w-2.5 h-2.5 text-[#754640] flex-shrink-0" />
                                  <span className="truncate">akankshapuiux01@gmail.com</span>
                                </a>
                                <span className="inline-flex items-center gap-1 truncate">
                                  <Phone className="w-2.5 h-2.5 text-[#754640] flex-shrink-0" />
                                  <span>+91 93244 02564</span>
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Profile Statement */}
                          <div>
                            <h2 className="text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-widest text-[#754640] mb-0.5 font-sans flex items-center gap-1">
                              PROFILE
                            </h2>
                            <p className="text-[9px] sm:text-[10.5px] text-[#3D3A36] leading-relaxed font-sans">
                              UI/UX designer in 4th year at MIT Institute of Design with internship experience at Reliance Jio. Focused on solving user friction through contextual research, iterative wireframes, and production-ready design systems.
                            </p>
                          </div>

                          {/* Core Skills & Tools */}
                          <div>
                            <h2 className="text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-widest text-[#754640] mb-0.5 sm:mb-1 font-sans flex items-center gap-1">
                              <Sparkles className="w-2.5 h-2.5" />
                              CORE SKILLS & TOOLS
                            </h2>
                            <div className="flex flex-wrap gap-1">
                              {[
                                'User Interviews',
                                'Usability Testing',
                                'IA & Wireframing',
                                'Interactive Prototyping',
                                'Figma & FigJam',
                                'Design Systems',
                                'Mobile App Design',
                                'HTML & CSS',
                              ].map((skill, index) => (
                                <span
                                  key={index}
                                  className="px-1.5 py-0.5 bg-[#F5F2E6] text-[#3D3A36] text-[8px] sm:text-[9px] font-semibold rounded border border-[#E0D9C2]"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Education */}
                          <div className="border-t border-dashed border-[#292827]/15 pt-1.5 sm:pt-2">
                            <h2 className="text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-widest text-[#754640] mb-0.5 font-sans flex items-center gap-1">
                              <GraduationCap className="w-2.5 h-2.5" />
                              EDUCATION
                            </h2>
                            <div className="flex justify-between items-baseline">
                              <span className="text-[10px] sm:text-[11px] font-bold text-[#1F1E1D]">
                                Bachelor of Design (B.Des) in UI/UX
                              </span>
                              <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-[#754640]">2023 — 2027</span>
                            </div>
                            <p className="text-[8.5px] sm:text-[9.5px] text-[#71717A]">MIT ADT University • Pune (Currently in 4th Year)</p>
                          </div>

                          {/* Leadership Highlight */}
                          <div className="border-t border-dashed border-[#292827]/15 pt-1 sm:pt-1.5">
                            <div className="flex justify-between items-center text-[8.5px] sm:text-[9.5px]">
                              <span className="font-bold text-[#1F1E1D] flex items-center gap-1">
                                <Users className="w-2.5 h-2.5 text-[#754640]" />
                                Graphic Design Lead Member
                              </span>
                              <span className="text-[#71717A]">Natak Bitak Club</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ----------------- RIGHT SPREAD DOCUMENT ----------------- */}
                    <div className="w-[48%] h-[92%] flex items-center justify-center pr-1 sm:pr-2">
                      <div
                        className="w-full h-full bg-[#FFFFFF] rounded-[13px] sm:rounded-[15px] p-3 sm:p-4 overflow-hidden flex flex-col text-[#292827]"
                        style={{
                          boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.2)',
                        }}
                      >
                        <div className="flex flex-col gap-1.5 sm:gap-2">
                          {/* Work Experience Section */}
                          <div>
                            <h2 className="text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-widest text-[#754640] border-b border-[#292827]/15 pb-0.5 mb-1 sm:mb-1.5 font-sans flex items-center gap-1.5">
                              <Briefcase className="w-2.5 h-2.5" />
                              WORK EXPERIENCE
                            </h2>

                            <div className="space-y-1 sm:space-y-1.5">
                              {/* Role 1 */}
                              <div>
                                <div className="flex justify-between items-baseline">
                                  <span className="font-bold text-[10.5px] sm:text-[11.5px] text-[#1F1E1D]">
                                    UI/UX Design Intern
                                  </span>
                                  <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-[#754640]">May — Jul 2026</span>
                                </div>
                                <span className="text-[9px] sm:text-[10px] font-medium text-[#71717A] block">
                                  Jio Assurance, Reliance Jio Platforms Ltd. (Mumbai)
                                </span>
                                <span className="text-[8px] sm:text-[9px] italic text-[#3377F8] block">Live: JioSphere Browser</span>
                                <p className="text-[8.5px] sm:text-[9.5px] text-[#4A4744] leading-snug mt-0.5">
                                  Conducted heuristic evaluations & usability testing across 4 platforms; restructured IA and crafted interactive prototypes.
                                </p>
                              </div>

                              {/* Role 2 */}
                              <div>
                                <div className="flex justify-between items-baseline">
                                  <span className="font-bold text-[10.5px] sm:text-[11.5px] text-[#1F1E1D]">
                                    Freelance UI/UX Designer
                                  </span>
                                  <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-[#754640]">2025</span>
                                </div>
                                <span className="text-[9px] sm:text-[10px] font-medium text-[#71717A] block">
                                  Lookout (Driver Safety IoT App • Pune)
                                </span>
                                <p className="text-[8.5px] sm:text-[9.5px] text-[#4A4744] leading-snug mt-0.5">
                                  Sole designer for end-to-end UX: real-time dashcam telemetry dashboard, alert overlays & 15+ production screens.
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Selected Academic Projects */}
                          <div className="border-t border-dashed border-[#292827]/15 pt-1.5 sm:pt-2">
                            <h2 className="text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-widest text-[#754640] border-b border-[#292827]/15 pb-0.5 mb-1 sm:mb-1.5 font-sans flex items-center gap-1.5">
                              <FolderGit2 className="w-2.5 h-2.5" />
                              ACADEMIC PROJECTS
                            </h2>

                            <div className="space-y-1 sm:space-y-1.5">
                              <div>
                                <span className="font-bold text-[9.5px] sm:text-[10.5px] text-[#1F1E1D] block">
                                  Ishaara — Design for Special Needs
                                </span>
                                <p className="text-[8.5px] sm:text-[9.5px] text-[#4A4744] leading-snug">
                                  Assistive learning AR app designed for autistic children with contextual icon interactions.
                                </p>
                              </div>

                              <div>
                                <span className="font-bold text-[9.5px] sm:text-[10.5px] text-[#1F1E1D] block">
                                  Astra — Ethical AI Interaction System
                                </span>
                                <p className="text-[8.5px] sm:text-[9.5px] text-[#4A4744] leading-snug">
                                  Framework to establish healthy human-AI boundaries through reflexive prompting loops.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
