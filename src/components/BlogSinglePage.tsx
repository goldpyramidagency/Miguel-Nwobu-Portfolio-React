import React from 'react';
import { InsightArticle } from '../types';

interface BlogSinglePageProps {
  article: InsightArticle;
  allArticles: InsightArticle[];
  onSelectArticle: (article: InsightArticle) => void;
  onBackToArchive: () => void;
  onOpenProjectModal: () => void;
}

export const BlogSinglePage: React.FC<BlogSinglePageProps> = ({
  article,
  allArticles,
  onSelectArticle,
  onBackToArchive,
  onOpenProjectModal
}) => {
  // Find related articles (excluding current)
  const relatedArticles = allArticles.filter(a => a.id !== article.id).slice(0, 2);

  return (
    <article className="min-h-screen bg-[#0A0908] text-[#F3EDE4] pt-28 pb-32">
      {/* Background Watermark Text */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <h1 className="font-['Fraunces'] text-[150px] md:text-[250px] text-[#8F8A86]/5 whitespace-nowrap uppercase tracking-widest font-black select-none">
          RELEVANCE
        </h1>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12">
        {/* Navigation Breadcrumb */}
        <div className="flex justify-between items-center mb-12 pb-6 border-b border-[#8F8A86]/10">
          <button
            onClick={onBackToArchive}
            className="inline-flex items-center gap-2 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#8F8A86] hover:text-[#f2afff] transition-colors cursor-pointer group"
          >
            <span className="material-symbols-outlined text-sm transform group-hover:-translate-x-1 transition-transform">
              arrow_back
            </span>
            Back to Insights Archive
          </button>

          <div className="font-['IBM_Plex_Mono'] text-xs text-[#7A1A94] uppercase tracking-widest">
            WP_POST :: {article.id}
          </div>
        </div>

        {/* Post Metadata Header */}
        <header className="mb-12 space-y-6">
          {/* Dynamic WordPress Post Fields Row 1: Category & Read Time */}
          <div className="flex flex-wrap items-center gap-4 font-['IBM_Plex_Mono'] text-xs text-[#8F8A86] uppercase tracking-widest">
            {article.category && (
              <span className="px-3 py-1 border border-[#7A1A94] bg-[#55066B]/20 text-[#f2afff] font-medium">
                {article.category}
              </span>
            )}
            <span>•</span>
            <span className="text-[#8F8A86]">{article.readTime}</span>
            <span>•</span>
            <span className="text-[#8F8A86]">{article.date}</span>
          </div>

          {/* Title */}
          <h1 className="font-['Fraunces'] text-3xl sm:text-5xl md:text-6xl text-[#F3EDE4] leading-[1.15] font-normal">
            {article.title}
          </h1>

          {/* Subtitle / Snippet */}
          <p className="font-['Fraunces'] italic text-xl md:text-2xl text-[#8F8A86] border-l-2 border-[#7A1A94] pl-6 leading-relaxed">
            {article.snippet}
          </p>

          {/* Dynamic WordPress Author Box */}
          {article.author && (
            <div className="flex items-center gap-4 pt-4 border-t border-[#8F8A86]/10">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-12 h-12 rounded-full object-cover border border-[#7A1A94]"
              />
              <div>
                <span className="font-['Inter'] font-medium text-sm text-[#F3EDE4] block">
                  {article.author.name}
                </span>
                <span className="font-['IBM_Plex_Mono'] text-xs text-[#8F8A86] block">
                  {article.author.role}
                </span>
              </div>
            </div>
          )}
        </header>

        {/* Featured Image */}
        {article.featuredImage && (
          <div className="mb-16">
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#8F8A86]/20 bg-[#15130e]">
              <img
                src={article.featuredImage}
                alt={article.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent opacity-60" />
            </div>
            <p className="font-['IBM_Plex_Mono'] text-[11px] text-[#8F8A86] mt-2 text-right">
              Figure 1.1 — Signal over noise visualization.
            </p>
          </div>
        )}

        {/* Key Takeaway Callout Box */}
        {article.keyTakeaway && (
          <div className="my-10 p-6 md:p-8 border border-[#7A1A94]/60 bg-[#100e09] relative overflow-hidden shadow-[0_0_25px_rgba(122,26,148,0.15)]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#7A1A94]/20 rounded-full blur-2xl pointer-events-none" />
            <span className="font-['IBM_Plex_Mono'] text-[10px] uppercase text-[#f2afff] tracking-widest block mb-2 font-bold">
              Core Thesis & Key Takeaway
            </span>
            <p className="font-['Fraunces'] text-lg md:text-xl text-[#F3EDE4] leading-relaxed">
              "{article.keyTakeaway}"
            </p>
          </div>
        )}

        {/* Main Post Body */}
        <div className="font-['Inter'] text-base md:text-lg text-[#cdc5bd] leading-relaxed space-y-8">
          <p className="text-xl md:text-2xl text-[#F3EDE4] font-light leading-relaxed">
            {article.content}
          </p>

          <div className="h-px w-24 bg-[#8F8A86]/30 my-12" />

          {/* Structured Sections (Gutenberg Blocks) */}
          {article.sections ? (
            article.sections.map((sec, idx) => (
              <section key={idx} className="space-y-6 pt-4">
                <h2 className="font-['Fraunces'] text-2xl md:text-3xl text-[#F3EDE4] font-medium leading-snug">
                  {sec.heading}
                </h2>

                <p className="leading-relaxed">
                  {sec.body}
                </p>

                {/* Pull Quote Block */}
                {sec.quote && (
                  <div className="my-8 p-8 border-l-4 border-[#7A1A94] bg-[#100e09] relative">
                    <p className="font-['Fraunces'] text-xl md:text-2xl text-[#F3EDE4] italic leading-relaxed m-0">
                      "{sec.quote}"
                    </p>
                  </div>
                )}

                {/* List Items */}
                {sec.listItems && (
                  <ul className="space-y-4 my-6 pl-4 border-l border-[#8F8A86]/20">
                    {sec.listItems.map((item, itemIdx) => (
                      <li key={itemIdx} className="relative pl-6">
                        <span className="absolute left-0 top-1 font-['IBM_Plex_Mono'] text-xs text-[#f2afff] font-bold">
                          0{itemIdx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))
          ) : (
            <div className="space-y-6">
              <p>
                In an era where every brand has a megaphone, volume is no longer a competitive advantage. The digital landscape is saturated with noise—endless notifications, ubiquitous retargeting, and a relentless barrage of content designed to capture attention at any cost. But attention is fleeting; relevance is enduring.
              </p>
              <p>
                The prevailing wisdom often equates reach with resonance. It assumes that if you shout loud enough, eventually, the right people will hear you. This is the brute-force approach to performance marketing. It is inefficient, expensive, and ultimately, alienating to the very audience you seek to engage.
              </p>
            </div>
          )}
        </div>

        {/* Article Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-16 pt-8 border-t border-[#8F8A86]/20 flex flex-wrap items-center gap-3">
            <span className="font-['IBM_Plex_Mono'] text-xs text-[#8F8A86] uppercase tracking-wider">Tags:</span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#100e09] border border-[#8F8A86]/20 font-['IBM_Plex_Mono'] text-xs text-[#8F8A86]"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Dynamic Author Bio Footer Box */}
        {article.author && (
          <div className="mt-12 p-8 bg-[#100e09] border border-[#8F8A86]/20 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-16 h-16 rounded-full object-cover border border-[#7A1A94] shrink-0"
            />
            <div className="space-y-2 text-center sm:text-left">
              <span className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest text-[#7A1A94] block">
                Written By
              </span>
              <h3 className="font-['Fraunces'] text-xl text-[#F3EDE4]">{article.author.name}</h3>
              <p className="font-['Inter'] text-sm text-[#8F8A86] leading-relaxed">
                {article.author.bio || `${article.author.name} is a full-stack growth director and systems architect.`}
              </p>
            </div>
          </div>
        )}

        {/* Related Articles Section */}
        {relatedArticles.length > 0 && (
          <section className="mt-24 pt-12 border-t border-[#8F8A86]/20">
            <h3 className="font-['Fraunces'] text-2xl text-[#F3EDE4] mb-8">Related Essays</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectArticle(rel)}
                  className="p-6 bg-[#100e09] border border-[#8F8A86]/20 hover:border-[#7A1A94] transition-colors cursor-pointer group"
                >
                  <span className="font-['IBM_Plex_Mono'] text-xs text-[#7A1A94] uppercase tracking-widest block mb-2">
                    {rel.date}
                  </span>
                  <h4 className="font-['Fraunces'] text-lg text-[#F3EDE4] group-hover:text-[#f2afff] transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="font-['Inter'] text-xs text-[#8F8A86] line-clamp-2">
                    {rel.snippet}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Navigation CTA */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenProjectModal}
            className="px-8 py-3.5 bg-[#F3EDE4] text-[#0A0908] font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#7A1A94] hover:text-[#F3EDE4] transition-all duration-300"
          >
            Start a Growth Project
          </button>
        </div>
      </div>
    </article>
  );
};
