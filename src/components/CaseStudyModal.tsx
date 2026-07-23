import React from 'react';
import { Project } from '../types';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenProjectModal: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, onOpenProjectModal }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0908]/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#100e09] border border-[#8F8A86]/20 p-8 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-[#8F8A86] hover:text-[#F3EDE4] transition-colors p-2 z-10"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        {/* Banner Image */}
        <div className="relative aspect-[21/9] overflow-hidden mb-8 border border-[#8F8A86]/20">
          <img 
            src={project.image} 
            alt={project.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100e09] via-transparent to-transparent opacity-80" />
        </div>

        {/* Tag & Category */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94]">
            {project.category}
          </span>
          <span className="text-[#8F8A86]">•</span>
          <span className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#8F8A86]">
            {project.tag}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-['Fraunces'] text-3xl md:text-5xl text-[#F3EDE4] mb-6 leading-tight font-normal">
          {project.title}
        </h2>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-4 p-6 bg-[#0A0908] border border-[#8F8A86]/10 mb-8">
          {project.metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="font-['Fraunces'] text-2xl md:text-4xl text-[#7A1A94] font-normal">
                {m.value}
              </div>
              <div className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-wider text-[#8F8A86] mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Body Content */}
        <div className="space-y-8 font-['Inter'] text-[#8F8A86] leading-relaxed">
          <div>
            <h3 className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#F3EDE4] mb-2 font-medium">
              Overview
            </h3>
            <p className="text-base">{project.overview}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-[#8F8A86]/10 bg-[#0A0908]">
              <h4 className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] mb-3">
                The Friction Point
              </h4>
              <p className="text-sm">{project.challenge}</p>
            </div>

            <div className="p-6 border border-[#8F8A86]/10 bg-[#0A0908]">
              <h4 className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] mb-3">
                The Growth Architecture
              </h4>
              <p className="text-sm">{project.solution}</p>
            </div>
          </div>

          <div>
            <h3 className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#F3EDE4] mb-3 font-medium">
              Key Measured Impact
            </h3>
            <ul className="space-y-2">
              {project.results.map((res, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#e7e2d9]">
                  <span className="material-symbols-outlined text-[#7A1A94] text-base mt-0.5">
                    check
                  </span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Action */}
        <div className="mt-10 pt-6 border-t border-[#8F8A86]/20 flex flex-wrap justify-between items-center gap-4">
          <button 
            onClick={onClose}
            className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider text-[#8F8A86] hover:text-[#F3EDE4]"
          >
            ← Return to Selection
          </button>

          <button 
            onClick={() => { onClose(); onOpenProjectModal(); }}
            className="bg-[#F3EDE4] text-[#0A0908] px-8 py-3.5 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#7A1A94] hover:text-[#F3EDE4] transition-all cursor-pointer"
          >
            Deploy Similar System
          </button>
        </div>
      </div>
    </div>
  );
};
