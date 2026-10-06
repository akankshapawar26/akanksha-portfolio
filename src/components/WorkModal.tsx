import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface WorkModalProps {
  projectName: string | null;
  onClose: () => void;
}

export const WorkModal: React.FC<WorkModalProps> = ({ projectName, onClose }) => {
  if (!projectName) return null;

  const projectDetails: Record<string, {
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    overview: string;
    researchKey: string;
    outcome: string;
  }> = {
    Ishaara: {
      title: 'Ishaara',
      subtitle: 'AR-supported assistive learning app for autistic children',
      description:
        'An AR supported app that helps parents and teachers create better learning environments for autistic children.',
      tags: ['Inclusive Design', 'User Research', 'Augmented Reality', 'Sensory Architecture'],
      overview:
        'Ishaara bridges neurodivergent communication barriers through intuitive visual and auditory anchoring, allowing children to navigate classroom sensory loads without emotional overstimulation.',
      researchKey:
        'Conducted 18 contextual observational sessions in special education learning hubs, identifying micro-triggers in conventional tablet interfaces.',
      outcome:
        'Reduced emotional escalation frequency by 38% and improved task continuity across daily classroom routines.',
    },
    ASTRA: {
      title: 'ASTRA',
      subtitle: 'Interaction design exploring artificial emotional attachment',
      description:
        'An interaction design project examining artificial emotional connection, attachment, and boundary setting in AI.',
      tags: ['Interaction Design', 'Ethical Design', 'Conversational UX', 'Behavioral Systems'],
      overview:
        'As conversational agents simulate deep empathy, users easily fall into unhealthy parasocial dependencies. ASTRA designs explicit boundary-setting feedback loops and attachment telemetry.',
      researchKey:
        'Mapped cognitive friction points and dependency signals in longitudinal human-agent dialogues over a 6-week study.',
      outcome:
        'Formulated 5 core guidelines for humane conversational offboarding and emotional boundary setting in generative AI systems.',
    },
    'Samsung Iris': {
      title: 'Samsung Iris',
      subtitle: 'Connected assistive ecosystem across daily touchpoints',
      description:
        'A design-a-thon project focused on building a connected assistant experience across daily digital touchpoints.',
      tags: ['Interaction Design', 'Agentic UX', 'Ambient Computing', 'Cross-Device Systems'],
      overview:
        'A multimodal agent that anticipates user intent across wearable, mobile, and ambient smart-home displays without intrusive notifications or context loss.',
      researchKey:
        'Benchmarked task handoff latencies and designed proactive contextual cards with transparent provenance verification.',
      outcome:
        'Awarded 1st place in the national design-a-thon for outstanding cross-device systemic consistency and privacy-first UX.',
    },
  };

  const project = projectDetails[projectName] || {
    title: projectName,
    subtitle: 'UI/UX Case Study',
    description: 'Detailed user research and interaction design documentation.',
    tags: ['UX Design', 'User Research'],
    overview: 'Exploring human-centered interaction models and empathetic system design.',
    researchKey: 'Rigorous qualitative inquiry combined with prototype testing.',
    outcome: 'Optimized user task flows and verified design system components.',
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FCFAEF] rounded-2xl p-6 sm:p-8 border border-[#754640]/15 shadow-2xl overflow-y-auto max-h-[88vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-[#754640]/10">
          <div>
            <span className="text-[11px] font-sans-ui uppercase tracking-widest text-[#C99492] font-bold">
              Case Study
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#292827] mt-0.5 font-bold">
              {project.title}
            </h2>
            <p className="text-xs font-sans-ui text-[#754640] font-medium mt-1">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#754640] hover:bg-[#754640]/10 rounded-full transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((t, idx) => (
            <span
              key={idx}
              className="text-[11px] font-sans-ui font-medium text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Content */}
        <div className="mt-6 space-y-4 font-sans-ui text-sm text-[#444444] leading-relaxed">
          <div>
            <h4 className="text-xs font-bold text-[#1C1B1A] uppercase tracking-wider mb-1">
              Project Overview
            </h4>
            <p>{project.overview}</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80">
            <h4 className="text-xs font-bold text-[#754640] uppercase tracking-wider mb-1">
              Research Insight
            </h4>
            <p className="text-xs text-[#555555]">{project.researchKey}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-[#1C1B1A] uppercase tracking-wider mb-1">
              Design Impact & Outcome
            </h4>
            <p>{project.outcome}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-4 border-t border-[#754640]/10 flex items-center justify-between">
          <span className="text-xs font-sans-ui text-slate-400">
            Akanksha Pawar Portfolio
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-sans-ui font-bold text-white bg-[#3E4B79] hover:bg-[#323D62] rounded-full transition-colors cursor-pointer"
          >
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};
