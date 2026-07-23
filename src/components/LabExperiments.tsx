import React, { useState } from 'react';
import { LabExperiment } from '../types';

interface LabExperimentsProps {
  experiments: LabExperiment[];
  onSelectExperiment: (experiment: LabExperiment) => void;
}

export const LabExperiments: React.FC<LabExperimentsProps> = ({ experiments, onSelectExperiment }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedExperiments = showAll ? experiments : experiments.slice(0, 2);

  return (
    <section className="py-20 md:py-28 bg-[#100e09]/50 -mx-12 md:-mx-32 lg:-mx-44 px-12 md:px-32 lg:px-44 border-y border-[#8F8A86]/10">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-['Fraunces'] text-[26px] md:text-[38px] text-[#F3EDE4] mb-6 font-normal">
          Lab
        </h2>

        <p className="font-['Fraunces'] italic text-[#8F8A86] mb-8 text-base md:text-lg leading-[1.4] font-normal">
          "These are my experiments in code and craft. Even as a growth leader, I believe the only way to master the medium is to build. This space is dedicated to hands-on exploration, primarily using AI to translate ideas into reality."
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {displayedExperiments.map((exp) => (
            <div 
              key={exp.id}
              onClick={() => onSelectExperiment(exp)}
              className="p-6 border border-[#8F8A86]/10 hover:border-[#7A1A94]/40 transition-all bg-[#0A0908] cursor-pointer group"
            >
              <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] mb-3 font-medium flex justify-between items-center">
                <span>{exp.number}</span>
                <span className="material-symbols-outlined text-sm opacity-0 group-hover:opacity-100 transition-opacity text-[#f2afff]">
                  terminal
                </span>
              </div>
              
              <div className="font-['Fraunces'] text-xl mb-3 text-[#e7e2d9] group-hover:text-[#7A1A94] transition-colors font-normal">
                {exp.title}
              </div>

              <p className="font-['Inter'] text-[#8F8A86] text-xs md:text-sm leading-[1.6] mb-4">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.slice(0, 3).map((tag, i) => (
                  <span 
                    key={i} 
                    className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-wider text-[#8F8A86] border border-[#8F8A86]/20 px-2 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => setShowAll(!showAll)}
          className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#F3EDE4] flex items-center gap-4 group cursor-pointer"
        >
          {showAll ? 'Show top experiments' : 'View all experiments'} 
          <span className="w-12 h-[1px] bg-[#7A1A94] group-hover:w-20 transition-all"></span>
        </button>
      </div>
    </section>
  );
};
