import React, { useState } from 'react';
import { InsightArticle } from '../types';

interface BlogArchivePageProps {
  articles: InsightArticle[];
  onSelectArticle: (article: InsightArticle) => void;
  onNavigateHome: () => void;
  onOpenProjectModal: () => void;
}

export const BlogArchivePage: React.FC<BlogArchivePageProps> = ({
  articles,
  onSelectArticle,
  onNavigateHome,
  onOpenProjectModal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Growth Strategy',
    'Analytics & Data',
    'Data Science & LTV',
    'Performance Marketing'
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' ||
      article.category?.toLowerCase().includes(activeCategory.toLowerCase()) ||
      article.tags?.some(tag => tag.toLowerCase().includes(activeCategory.toLowerCase()));

    const matchesSearch = searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.snippet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0A0908] text-[#F3EDE4] pt-28 pb-32 relative overflow-x-hidden">
      
      {/* Background Watermark INSIGHTS Text */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h1 className="font-['Fraunces'] text-[120px] sm:text-[200px] md:text-[280px] text-[#F3EDE4] opacity-[0.025] whitespace-nowrap transform -rotate-6 select-none font-black">
          INSIGHTS INSIGHTS INSIGHTS
        </h1>
      </div>

      <main className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Header Section */}
        <header className="pt-8 pb-16 border-b border-[#8F8A86]/10">
          <div className="flex items-center gap-3 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] text-[#7A1A94] mb-4 font-semibold">
            <span className="w-2 h-2 rounded-full bg-[#7A1A94] animate-pulse" />
            <span>WordPress Insights & Blog Archive</span>
          </div>

          <h1 className="font-['Fraunces'] text-3xl sm:text-5xl md:text-6xl text-[#F3EDE4] mb-6 font-normal leading-tight">
            Strategic Essays & <span className="italic text-[#8F8A86]">System Architecture</span>.
          </h1>

          <p className="font-['Fraunces'] italic text-lg md:text-2xl text-[#8F8A86] max-w-2xl leading-relaxed">
            Strategic thinking on growth, marketing, and the systems behind them. Focused on measurable outcomes over vanity metrics.
          </p>
        </header>

        {/* Filter Bar & Search */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-[#8F8A86]/10 mb-16">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] transition-all duration-300 border ${
                    isActive
                      ? 'border-[#7A1A94] text-[#F3EDE4] bg-[#55066B]/30'
                      : 'border-[#8F8A86]/20 text-[#8F8A86] hover:text-[#F3EDE4] hover:border-[#F3EDE4]/40'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-64">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8F8A86] text-sm">
              search
            </span>
            <input
              type="text"
              placeholder="Search essays..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#100e09] border border-[#8F8A86]/20 pl-9 pr-4 py-2 font-['Inter'] text-xs text-[#F3EDE4] placeholder-[#8F8A86] focus:outline-none focus:border-[#7A1A94] transition-colors"
            />
          </div>
        </div>

        {/* Articles List */}
        <div className="flex flex-col gap-12">
          {filteredArticles.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-[#8F8A86]/20 p-8">
              <p className="font-['Fraunces'] text-lg text-[#F3EDE4] mb-2">No articles found</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                className="text-[#f2afff] font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest underline"
              >
                Clear search & filters
              </button>
            </div>
          ) : (
            filteredArticles.map((article, idx) => {
              const isStaggered = idx % 2 === 1;
              return (
                <article
                  key={article.id}
                  onClick={() => onSelectArticle(article)}
                  className={`group border-b border-[#8F8A86]/20 pb-10 transition-all duration-500 hover:border-[#7A1A94] grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline relative cursor-pointer ${
                    isStaggered ? 'md:ml-12' : ''
                  }`}
                >
                  {/* Subtle hover background glow */}
                  <div className="absolute inset-0 bg-[#55066B]/0 group-hover:bg-[#55066B]/5 transition-colors duration-500 blur-2xl -z-10 rounded-full" />

                  {/* Date & Index */}
                  <div className="md:col-span-3 flex flex-col justify-start">
                    <span className="font-['IBM_Plex_Mono'] text-xs text-[#8F8A86] group-hover:text-[#f2afff] transition-colors duration-300">
                      {article.date}
                    </span>
                    <span className="font-['IBM_Plex_Mono'] text-xs text-[#8F8A86]/50 mt-1">
                      0{idx + 1}
                    </span>
                    <span className="mt-3 font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-[#7A1A94]">
                      {article.readTime}
                    </span>
                  </div>

                  {/* Main Article Content */}
                  <div className="md:col-span-8 flex flex-col">
                    <div className="block group-hover:pl-2 transition-all duration-300 ease-out">
                      {article.category && (
                        <span className="inline-block font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-[0.2em] text-[#8F8A86] mb-2">
                          {article.category}
                        </span>
                      )}

                      <h2 className="font-['Fraunces'] text-2xl md:text-3xl text-[#F3EDE4] group-hover:text-[#f2afff] transition-colors mb-3 leading-snug font-normal">
                        {article.title}
                      </h2>

                      <p className="font-['Inter'] text-sm md:text-base text-[#cdc5bd] leading-relaxed max-w-2xl">
                        {article.snippet}
                      </p>

                      {/* Dynamic Author snippet */}
                      {article.author && (
                        <div className="flex items-center gap-2 mt-4 font-['IBM_Plex_Mono'] text-xs text-[#8F8A86]">
                          <img
                            src={article.author.avatar}
                            alt={article.author.name}
                            className="w-5 h-5 rounded-full object-cover grayscale"
                          />
                          <span>By {article.author.name}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="md:col-span-1 hidden md:flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#f2afff]">
                    <span className="material-symbols-outlined">arrow_outward</span>
                  </div>
                </article>
              );
            })
          )}
        </div>

        {/* Footer CTA */}
        <div className="mt-24 text-center pt-16 border-t border-[#8F8A86]/10">
          <h3 className="font-['Fraunces'] text-2xl text-[#F3EDE4] mb-4">Want new essays delivered directly?</h3>
          <p className="font-['Inter'] text-sm text-[#8F8A86] mb-8">Quarterly strategic dispatches on performance marketing, attribution math, and LLM search engines.</p>
          <button
            onClick={onOpenProjectModal}
            className="px-8 py-3.5 bg-[#F3EDE4] text-[#0A0908] font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#7A1A94] hover:text-[#F3EDE4] transition-all duration-300"
          >
            Initiate Contact
          </button>
        </div>
      </main>
    </div>
  );
};
