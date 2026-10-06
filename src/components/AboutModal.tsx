import React from 'react';
import { X, Heart, Sparkles, BookOpen } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
            <span className="text-xs uppercase tracking-widest text-[#74453F] font-semibold">About Akanksha</span>
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#292827] mt-0.5">Philosophy & Craft</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#74453F] hover:bg-[#74453F]/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-4 text-[#4A4846] text-sm leading-relaxed font-sans-ui">
          <p>
            I am a UX Designer driven by the conviction that digital experiences should feel as intentional and culturally rooted as handcrafted heirlooms, yet function with rigorous cognitive ergonomics.
          </p>
          <p>
            My work lives at the intersection of deep ethnographic user research and disciplined design engineering. Whether crafting complex multi-tier enterprise systems or zero-to-one consumer apps, I champion clarity, respectful interaction models, and emotive micro-delights.
          </p>
          <div className="p-4 rounded-xl bg-white/70 border border-[#74453F]/10 mt-4">
            <h3 className="font-bold text-[#292827] text-sm">Design Principles</h3>
            <ul className="mt-2 space-y-1.5 text-xs text-[#4A4846]">
              <li><strong className="text-[#74453F]">1. Research as Foundation:</strong> Every pixel traces back to verified user mental models.</li>
              <li><strong className="text-[#74453F]">2. Cultural Resonance:</strong> Global usability infused with thoughtful regional nuance and visual warmth.</li>
              <li><strong className="text-[#74453F]">3. Systemic Resilience:</strong> Scalable design tokens, accessible color math, and frictionless typography.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#74453F]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-medium text-white bg-[#3B4974] hover:bg-[#323E63] rounded-lg transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
