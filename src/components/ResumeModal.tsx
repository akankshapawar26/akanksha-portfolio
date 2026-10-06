import React from 'react';
import { X, Download, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate a clean text-based summary resume download
    const resumeText = `AKANKSHA PAWAR — UX DESIGNER
Where research meets creativity, and ideas become experiences.
Email: pawarakanksha1628@gmail.com

EXPERIENCE
• Lead Product & UX Designer (2023 - Present)
  - Spearheaded user research and multi-platform design systems for enterprise and consumer suites.
  - Accelerated conversion metrics and cut onboarding drop-off across key user journeys.

• Interaction Designer & Researcher (2021 - 2023)
  - Led contextual inquiries, usability testing, and wireframe prototypes for web & mobile apps.
  - Implemented WCAG AA/AAA accessibility compliance across all digital touchpoints.

CORE COMPETENCIES
• User Research, Contextual Inquiries, Usability Benchmarking, Cognitive Walkthroughs
• Wireframing, Rapid Prototyping, Figma, Design Systems, Information Architecture
• Micro-interactions, Accessibility Standards (WCAG 2.1), Visual Typography Hierarchy

EDUCATION
• Bachelor of Design in Human-Computer Interaction & Visual Communication
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Akanksha_Pawar_UX_Designer_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FAF8ED] rounded-2xl p-6 sm:p-8 border border-[#74453F]/15 shadow-2xl overflow-y-auto max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#74453F]/10">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#74453F] font-semibold">Resume</span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#292827] mt-0.5">Akanksha Pawar</h2>
            <p className="text-xs text-[#C99694] font-medium mt-0.5">Senior UX Designer · Human-Centered Systems</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#74453F] hover:bg-[#74453F]/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-xs sm:text-sm text-[#4A4846]">
          <div>
            <h3 className="font-bold text-[#292827] uppercase tracking-wider text-xs">Core Expertise</h3>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#74453F]" /> UX & Ethnographic Research</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#74453F]" /> Design Systems Architecture</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#74453F]" /> Information Architecture</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#74453F]" /> Interactive Prototyping</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#74453F]" /> WCAG Accessibility</div>
              <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-[#74453F]" /> Usability Testing & Analytics</div>
            </div>
          </div>

          <div className="pt-2">
            <h3 className="font-bold text-[#292827] uppercase tracking-wider text-xs">Experience Highlights</h3>
            <div className="mt-2 space-y-2.5">
              <div className="p-3 bg-white/70 rounded-lg border border-[#74453F]/10">
                <div className="flex justify-between font-semibold text-[#292827]">
                  <span>Lead UX Designer</span>
                  <span className="text-xs text-[#74453F]">2023 – Present</span>
                </div>
                <p className="text-xs text-[#6B6865] mt-1">
                  Directing end-to-end UX architecture for multi-platform products, collaborating closely with product engineering and behavioral researchers.
                </p>
              </div>
              <div className="p-3 bg-white/70 rounded-lg border border-[#74453F]/10">
                <div className="flex justify-between font-semibold text-[#292827]">
                  <span>Interaction Designer & UX Researcher</span>
                  <span className="text-xs text-[#74453F]">2021 – 2023</span>
                </div>
                <p className="text-xs text-[#6B6865] mt-1">
                  Synthesized quantitative telemetry and qualitative user interviews to deliver intuitive flows and design token libraries.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#74453F]/10 flex items-center justify-between">
          <button
            onClick={onClose}
            className="text-xs text-[#74453F] hover:underline cursor-pointer"
          >
            Dismiss
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-[#3B4974] hover:bg-[#323E63] rounded-lg transition-colors cursor-pointer shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download Summary</span>
          </button>
        </div>
      </div>
    </div>
  );
};
