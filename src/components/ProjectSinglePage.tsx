import React from 'react';
import { Project } from '../types';

interface ProjectSinglePageProps {
  project: Project;
  allProjects: Project[];
  onSelectProject: (project: Project) => void;
  onBackToPortfolio: () => void;
  onOpenProjectModal: () => void;
}

export const ProjectSinglePage: React.FC<ProjectSinglePageProps> = ({
  project,
  allProjects,
  onSelectProject,
  onBackToPortfolio,
  onOpenProjectModal
}) => {
  // Find index for next/previous navigation
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : allProjects[allProjects.length - 1];
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : allProjects[0];

  return (
    <article className="min-h-screen bg-[#0A0908] text-[#F3EDE4] pt-28 pb-32">
      {/* Top Header & Breadcrumb */}
      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto pt-6 pb-8">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <button
            onClick={onBackToPortfolio}
            className="inline-flex items-center gap-2 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#8F8A86] hover:text-[#f2afff] transition-colors cursor-pointer group"
          >
            <span className="material-symbols-outlined text-sm transform group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            Back to Portfolio Archive
          </button>

          <div className="flex items-center gap-2 font-['IBM_Plex_Mono'] text-xs text-[#7A1A94]">
            <span className="w-2 h-2 rounded-full bg-[#7A1A94] animate-ping" />
            <span className="uppercase tracking-widest text-[11px] font-semibold">WP_POST_TYPE :: project</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl space-y-6">
          <div className="inline-block px-3 py-1 border border-[#7A1A94] bg-[#55066B]/20 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#f2afff]">
            {project.category}
          </div>

          <h1 className="font-['Fraunces'] text-3xl sm:text-5xl md:text-6xl text-[#F3EDE4] font-normal leading-[1.15]">
            {project.title}
          </h1>

          <p className="font-['Inter'] text-lg md:text-xl text-[#8F8A86] leading-relaxed font-light">
            {project.subtitle}
          </p>
        </div>
      </div>

      {/* Featured Banner Image */}
      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mb-16">
        <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden border border-[#8F8A86]/20 bg-[#15130e]">
          <img
            src={project.image}
            alt={project.alt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent opacity-60" />
        </div>
      </div>

      <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT SIDEBAR: WORDPRESS CUSTOM FIELDS (ACF) PANEL */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="p-6 md:p-8 bg-[#100e09] border border-[#8F8A86]/20 relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#8F8A86]/20 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] font-semibold">
                <span>WordPress Custom Fields</span>
                <span className="text-[10px] text-[#8F8A86]">ACF PRO</span>
              </div>

              <div className="space-y-6 font-['IBM_Plex_Mono'] text-xs">
                {/* 1. Client Name */}
                <div>
                  <span className="text-[#8F8A86] uppercase tracking-wider text-[10px] block mb-1">
                    client_name
                  </span>
                  <div className="font-['Inter'] text-base text-[#F3EDE4] font-medium">
                    {project.client_name}
                  </div>
                </div>

                {/* 2. Business Industry */}
                <div>
                  <span className="text-[#8F8A86] uppercase tracking-wider text-[10px] block mb-1">
                    business_industry
                  </span>
                  <div className="font-['Inter'] text-sm text-[#F3EDE4]">
                    {project.business_industry}
                  </div>
                </div>

                {/* 3. Project Date */}
                <div>
                  <span className="text-[#8F8A86] uppercase tracking-wider text-[10px] block mb-1">
                    project_date
                  </span>
                  <div className="text-sm text-[#f2afff]">
                    {project.project_date}
                  </div>
                </div>

                {/* 4. Role */}
                <div>
                  <span className="text-[#8F8A86] uppercase tracking-wider text-[10px] block mb-1">
                    role
                  </span>
                  <div className="font-['Inter'] text-sm text-[#F3EDE4]">
                    {project.role}
                  </div>
                </div>

                {/* 5. Project URL */}
                <div>
                  <span className="text-[#8F8A86] uppercase tracking-wider text-[10px] block mb-1">
                    project_url
                  </span>
                  {project.project_url ? (
                    <a
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[#f2afff] hover:text-[#F3EDE4] transition-colors underline underline-offset-4 decoration-[#7A1A94]"
                    >
                      <span>{project.project_url.replace(/^https?:\/\//, '')}</span>
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </a>
                  ) : (
                    <span className="text-[#8F8A86]">Internal Platform</span>
                  )}
                </div>
              </div>

              {/* Tech Stack Chips */}
              {project.techStack && (
                <div className="mt-8 pt-6 border-t border-[#8F8A86]/20">
                  <span className="text-[#8F8A86] uppercase tracking-wider text-[10px] block mb-3 font-['IBM_Plex_Mono']">
                    Tech Stack & Integrations
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[#15130e] border border-[#8F8A86]/20 text-[11px] font-['IBM_Plex_Mono'] text-[#8F8A86]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Action Button */}
            <button
              onClick={onOpenProjectModal}
              className="w-full py-4 bg-[#7A1A94] text-[#F3EDE4] font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#55066B] transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Initiate Growth Engagement</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </aside>

          {/* RIGHT MAIN CONTENT AREA */}
          <main className="lg:col-span-8 space-y-16">
            
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-[#100e09] border border-[#7A1A94]/40">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1 text-center sm:text-left">
                  <span className="font-['IBM_Plex_Mono'] text-[10px] uppercase text-[#8F8A86] tracking-wider block">
                    {metric.label}
                  </span>
                  <span className="font-['Fraunces'] text-3xl md:text-4xl text-[#f2afff] font-normal block">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Section 1: Overview */}
            <section className="space-y-4">
              <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] font-semibold">
                01. Executive Overview
              </div>
              <h2 className="font-['Fraunces'] text-2xl md:text-3xl text-[#F3EDE4]">
                Project Scope & Background
              </h2>
              <p className="font-['Inter'] text-base md:text-lg text-[#cdc5bd] leading-relaxed font-light">
                {project.overview}
              </p>
            </section>

            {/* Section 2: Challenge vs Solution */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-[#100e09] border border-[#8F8A86]/20 space-y-3">
                <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#ffb4ab]">
                  The Challenge
                </div>
                <p className="font-['Inter'] text-sm text-[#cdc5bd] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-6 bg-[#100e09] border border-[#7A1A94]/40 space-y-3">
                <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#f2afff]">
                  The Strategic Solution
                </div>
                <p className="font-['Inter'] text-sm text-[#cdc5bd] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </section>

            {/* Section 3: Deliverables List */}
            {project.deliverables && (
              <section className="space-y-6">
                <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] font-semibold">
                  02. System Architecture & Deliverables
                </div>
                <ul className="space-y-4 font-['Inter'] text-base text-[#cdc5bd]">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 p-4 bg-[#100e09] border border-[#8F8A86]/10">
                      <span className="font-['IBM_Plex_Mono'] text-xs text-[#7A1A94] mt-0.5">
                        0{idx + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Section 4: Results & Impact */}
            <section className="space-y-6">
              <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] font-semibold">
                03. Quantified Impact
              </div>
              <div className="p-8 bg-[#100e09] border border-[#7A1A94] space-y-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#7A1A94]/20 rounded-full blur-2xl pointer-events-none" />
                <h3 className="font-['Fraunces'] text-xl text-[#F3EDE4]">Key Business Outcomes</h3>
                <ul className="space-y-3 font-['Inter'] text-base text-[#F3EDE4]">
                  {project.results.map((res, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#f2afff] text-sm">check_circle</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

          </main>
        </div>

        {/* Project Switcher Navigation */}
        <div className="mt-28 pt-12 border-t border-[#8F8A86]/20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <button
            onClick={() => onSelectProject(prevProject)}
            className="p-6 bg-[#100e09] border border-[#8F8A86]/20 hover:border-[#7A1A94] text-left transition-colors group cursor-pointer"
          >
            <span className="font-['IBM_Plex_Mono'] text-[10px] uppercase text-[#8F8A86] tracking-wider block mb-1">
              ← Previous Case Study
            </span>
            <span className="font-['Fraunces'] text-lg text-[#F3EDE4] group-hover:text-[#f2afff] transition-colors font-medium">
              {prevProject.title}
            </span>
          </button>

          <button
            onClick={() => onSelectProject(nextProject)}
            className="p-6 bg-[#100e09] border border-[#8F8A86]/20 hover:border-[#7A1A94] text-right transition-colors group cursor-pointer"
          >
            <span className="font-['IBM_Plex_Mono'] text-[10px] uppercase text-[#8F8A86] tracking-wider block mb-1">
              Next Case Study →
            </span>
            <span className="font-['Fraunces'] text-lg text-[#F3EDE4] group-hover:text-[#f2afff] transition-colors font-medium">
              {nextProject.title}
            </span>
          </button>
        </div>
      </div>
    </article>
  );
};
