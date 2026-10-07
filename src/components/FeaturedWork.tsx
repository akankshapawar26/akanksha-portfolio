import React from 'react';
import { ProjectCard } from './ProjectCard';
import { IshaaraVisual, AstraVisual, SamsungIrisVisual } from './ProjectCardVisuals';

interface FeaturedWorkProps {
  onSelectProject?: (projectName: string) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = () => {
  return (
    <section id="work" className="w-full bg-white select-none scroll-mt-16 sm:scroll-mt-24">
      <div
        className="w-full max-w-[1100px] mx-auto px-4 sm:px-6 pb-24 sm:pb-32"
        style={{ paddingTop: '145px' }}
      >
        {/* Section Heading: Exactly 145px gap below marquee */}
        <div className="text-center mb-14 sm:mb-16">
          <h2 className="font-editorial text-[36px] sm:text-[44px] md:text-[50px] font-bold text-[#292827] tracking-tight">
            Featured Work
          </h2>
        </div>

        {/* 3 Vertically Stacked Project Cards */}
        <div className="flex flex-col space-y-12 sm:space-y-16">
          {/* Project 1: Ishaara */}
          <ProjectCard
            title="Ishaara"
            description="An AR supported app that helps parents and teachers create better learning environments for autistic children."
            tags={['Inclusive Design', 'User Research']}
            visual={<IshaaraVisual />}
            cardVariant="blue-floral"
            buttonHref="https://www.behance.net/gallery/246628243/Design-for-Special-Needs-Autism-Centered-UX-Solution"
          />

          {/* Project 2: ASTRA */}
          <ProjectCard
            title="ASTRA"
            description="An interaction design project examining artificial emotional connection, attachment, and boundary setting in AI."
            tags={['Interaction Design', 'Ethical Design']}
            cardVariant="yellow-floral"
            visual={<AstraVisual />}
            buttonHref="https://www.behance.net/gallery/244870875/Designing-Ethical-AI-Interactions"
          />

          {/* Project 3: Samsung Iris */}
          <ProjectCard
            title="Samsung Iris"
            description="A design-a-thon project focused on building a connected assistant experience across daily digital touchpoints."
            tags={['Interaction Design', 'Agentic UX']}
            cardVariant="red-floral"
            visual={<SamsungIrisVisual />}
            buttonHref="https://www.behance.net/gallery/246632871/Samsung-Iris-Intelligent-AI-Agent-for-Smart-Living"
          />
        </div>
      </div>
    </section>
  );
};
