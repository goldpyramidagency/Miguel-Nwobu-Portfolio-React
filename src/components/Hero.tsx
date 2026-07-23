import React from 'react';

interface HeroProps {
  onOpenContact: () => void;
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenCV }) => {
  return (
    <section id="about" className="py-12 md:py-20 flex flex-col justify-center">
      <h1 className="font-['Fraunces'] text-[26px] md:text-[54px] leading-[1.15] tracking-[-0.02em] font-normal max-w-4xl mb-6">
        Miguel Nwobu is a <span className="text-[#f2afff] italic font-['Fraunces']">full stack growth marketer</span> building measurable growth systems.
      </h1>

      <p className="font-['Inter'] text-[#8F8A86] max-w-xl mb-8 text-base leading-[1.6]">
        Performance Marketer and Digital Strategist with 12+ years of experience turning complex datasets into high-performing ecosystems. Currently architecting the future of ROI-focused scale.
      </p>

      <div className="flex flex-wrap gap-4 items-center">
        <button 
          onClick={onOpenContact}
          className="bg-[#F3EDE4] text-[#0A0908] px-6 py-3 font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.15em] font-medium flex items-center gap-2 hover:bg-[#7A1A94] hover:text-[#F3EDE4] transition-all cursor-pointer group"
        >
          Contact me 
          <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
            mail
          </span>
        </button>

        <button 
          onClick={onOpenCV}
          className="border border-[#8F8A86]/30 text-[#F3EDE4] px-6 py-3 font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.15em] font-medium flex items-center gap-2 hover:border-[#7A1A94] hover:text-[#f2afff] transition-all cursor-pointer group"
        >
          Download CV 
          <span className="material-symbols-outlined text-[16px] group-hover:translate-y-0.5 transition-transform">
            download
          </span>
        </button>
      </div>
    </section>
  );
};
