import React from 'react';
import { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onSeeMoreProjects: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onSelectProject, onSeeMoreProjects }) => {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="flex flex-col mb-12">
        <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] mb-3 font-medium">
          Featured Selection
        </div>
        <h2 className="font-['Fraunces'] text-[26px] md:text-[38px] text-[#F3EDE4] font-medium leading-[1.2]">
          Select work
        </h2>
      </div>

      <div className="flex flex-col gap-20">
        {projects.map((project, index) => {
          const isStaggeredDesktop = index === 1; // Project 2 has md:ml-12
          return (
            <div 
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group cursor-pointer ${isStaggeredDesktop ? 'md:ml-12' : ''}`}
            >
              <div className="relative aspect-[16/9] overflow-hidden mb-6 border border-[#8F8A86]/10">
                <div className="absolute inset-0 bg-[#7A1A94]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                <img 
                  src={project.image}
                  alt={project.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#7A1A94]"></span>
                <span className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#8F8A86]">
                  {project.tag}
                </span>
              </div>

              <h3 className="font-['Fraunces'] text-xl md:text-3xl text-[#F3EDE4] group-hover:text-[#7A1A94] transition-colors leading-tight font-normal">
                {project.title}
              </h3>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-16">
        <button 
          onClick={onSeeMoreProjects}
          className="bg-[#F3EDE4] text-[#0A0908] px-8 py-3.5 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] font-medium smooth-transition hover:bg-[#7A1A94] hover:text-[#F3EDE4] active:scale-95 cursor-pointer"
        >
          See More Projects
        </button>
      </div>
    </section>
  );
};
