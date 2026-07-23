import React, { useState } from 'react';
import { Project } from '../types';

interface PortfolioArchivePageProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  onNavigateHome: () => void;
  onOpenProjectModal: () => void;
}

export const PortfolioArchivePage: React.FC<PortfolioArchivePageProps> = ({
  projects,
  onSelectProject,
  onNavigateHome,
  onOpenProjectModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Paid Advertising',
    'SEO',
    'Copywriting',
    'Email Marketing',
    'Strategy',
    'B2B SaaS',
    'E-commerce'
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || 
      project.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
      project.tag.toLowerCase().includes(activeCategory.toLowerCase());
    
    const matchesSearch = searchQuery === '' ||
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.business_industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.overview.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0A0908] text-[#F3EDE4] pt-28 pb-32">
      {/* Background Faded Title Watermark */}
      <div className="relative pt-12 pb-16 px-6 md:px-16 lg:px-24 overflow-hidden border-b border-[#8F8A86]/10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
          <h1 className="font-['Fraunces'] text-[100px] sm:text-[160px] md:text-[220px] text-[#8F8A86]/5 tracking-tighter whitespace-nowrap uppercase font-black">
            ARCHIVES
          </h1>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="flex items-center gap-3 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#7A1A94] mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#7A1A94] animate-pulse"></span>
            <span>WordPress Portfolio Repository</span>
          </div>

          <h1 className="font-['Fraunces'] text-3xl sm:text-4xl md:text-6xl text-[#F3EDE4] mb-6 leading-tight font-normal">
            Selected Works & <span className="italic text-[#8F8A86]">Architectural Case Studies</span>.
          </h1>

          <p className="font-['Inter'] text-[#8F8A86] text-base md:text-lg max-w-2xl leading-relaxed">
            A comprehensive index of growth systems, search engines, and multi-channel acquisition funnels engineered for enterprise brands.
          </p>
        </div>
      </div>

      {/* Filters & Search Controls */}
      <div className="px-6 md:px-16 lg:px-24 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center mb-12 pb-8 border-b border-[#8F8A86]/10">
          {/* Category Chips */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] transition-all duration-300 border ${
                    isActive
                      ? 'border-[#7A1A94] text-[#F3EDE4] bg-[#55066B]/30 shadow-[0_0_20px_rgba(122,26,148,0.25)]'
                      : 'border-[#8F8A86]/20 text-[#8F8A86] hover:border-[#F3EDE4]/40 hover:text-[#F3EDE4] bg-transparent'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8F8A86] text-sm">
              search
            </span>
            <input
              type="text"
              placeholder="Search client, industry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#15130e] border border-[#8F8A86]/20 pl-9 pr-4 py-2 font-['Inter'] text-xs text-[#F3EDE4] placeholder-[#8F8A86] focus:outline-none focus:border-[#7A1A94] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8F8A86] hover:text-[#F3EDE4]"
              >
                <span className="material-symbols-outlined text-xs">close</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-10 font-['IBM_Plex_Mono'] text-xs text-[#8F8A86] uppercase tracking-[0.15em]">
          <span>Showing {filteredProjects.length} of {projects.length} Projects</span>
          <span className="text-[#7A1A94]">WordPress Custom Field Schema Active</span>
        </div>

        {/* 2-Column Staggered Grid */}
        {filteredProjects.length === 0 ? (
          <div className="py-24 text-center border border-dashed border-[#8F8A86]/20 p-12">
            <span className="material-symbols-outlined text-4xl text-[#8F8A86] mb-3">folder_off</span>
            <h3 className="font-['Fraunces'] text-xl text-[#F3EDE4] mb-2">No projects matched your criteria</h3>
            <p className="font-['Inter'] text-xs text-[#8F8A86] mb-6">Try clearing filters or search query.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="px-6 py-2.5 border border-[#7A1A94] text-[#f2afff] font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {filteredProjects.map((project, idx) => {
              const isStaggered = idx % 2 === 1;
              return (
                <article
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`group cursor-pointer relative bg-[#100e09] border border-[#8F8A86]/10 hover:border-[#7A1A94]/50 transition-all duration-500 ${
                    isStaggered ? 'md:mt-12' : ''
                  }`}
                >
                  {/* Thumbnail Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#15130e]">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent z-10 opacity-70" />
                    <img
                      src={project.image}
                      alt={project.alt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 bg-[#0A0908]/90 border border-[#8F8A86]/20 font-['IBM_Plex_Mono'] text-[10px] uppercase text-[#F3EDE4] tracking-widest backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Key Metric Badge */}
                    {project.metrics && project.metrics[0] && (
                      <div className="absolute bottom-4 right-4 z-20 bg-[#55066B]/90 border border-[#7A1A94] px-3 py-1.5 backdrop-blur-sm shadow-lg">
                        <span className="font-['IBM_Plex_Mono'] text-xs font-bold text-[#F3EDE4]">
                          {project.metrics[0].label}: {project.metrics[0].value}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-8 space-y-4">
                    {/* WordPress ACF Meta Bar */}
                    <div className="grid grid-cols-2 gap-2 py-2 px-3 bg-[#15130e] border border-[#8F8A86]/10 font-['IBM_Plex_Mono'] text-[11px] text-[#8F8A86]">
                      <div>
                        <span className="text-[#8F8A86]/60 block text-[9px] uppercase tracking-wider">Client</span>
                        <span className="text-[#F3EDE4] truncate font-medium block">{project.client_name}</span>
                      </div>
                      <div>
                        <span className="text-[#8F8A86]/60 block text-[9px] uppercase tracking-wider">Role</span>
                        <span className="text-[#f2afff] truncate block">{project.role}</span>
                      </div>
                    </div>

                    <h2 className="font-['Fraunces'] text-xl md:text-2xl text-[#F3EDE4] group-hover:text-[#f2afff] transition-colors leading-tight font-medium">
                      {project.title}
                    </h2>

                    <p className="font-['Inter'] text-sm text-[#8F8A86] line-clamp-2 leading-relaxed">
                      {project.subtitle}
                    </p>

                    <div className="pt-2 flex justify-between items-center font-['IBM_Plex_Mono'] text-xs text-[#7A1A94] uppercase tracking-[0.15em] font-medium group-hover:text-[#f2afff]">
                      <span>View Case Study & ACF Specs</span>
                      <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-24 p-12 border border-[#7A1A94]/30 bg-[#100e09] text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#7A1A94]/10 rounded-full blur-3xl pointer-events-none" />
          <p className="font-['IBM_Plex_Mono'] text-xs text-[#7A1A94] uppercase tracking-[0.2em] mb-3">Custom Architecture</p>
          <h3 className="font-['Fraunces'] text-2xl md:text-4xl text-[#F3EDE4] mb-4">Have a high-growth project in mind?</h3>
          <p className="font-['Inter'] text-[#8F8A86] text-sm max-w-xl mx-auto mb-8">
            We architect end-to-end performance systems, server-side tracking, and multi-region search engines for enterprise clients.
          </p>
          <button
            onClick={onOpenProjectModal}
            className="px-8 py-3.5 bg-[#F3EDE4] text-[#0A0908] font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#7A1A94] hover:text-[#F3EDE4] transition-all duration-300"
          >
            Start a Project
          </button>
        </div>
      </div>
    </div>
  );
};
