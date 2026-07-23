import React from 'react';
import { InsightArticle } from '../types';

interface InsightsSectionProps {
  articles: InsightArticle[];
  onSelectArticle?: (article: InsightArticle) => void;
  onViewAllArticles?: () => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ 
  articles,
  onSelectArticle,
  onViewAllArticles
}) => {
  return (
    <section id="insights" className="py-20 md:py-28 border-t border-[#8F8A86]/10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
        <div>
          <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] mb-3 font-medium">
            Strategic Thought
          </div>
          <h2 className="font-['Fraunces'] text-[26px] md:text-[38px] text-[#F3EDE4] font-normal">
            Insights & Essays
          </h2>
        </div>

        {onViewAllArticles && (
          <button
            onClick={onViewAllArticles}
            className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#f2afff] hover:text-[#F3EDE4] transition-colors inline-flex items-center gap-2 cursor-pointer pb-1 border-b border-[#7A1A94]"
          >
            <span>View Full Essay Archive</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        )}
      </div>

      <div className="space-y-8 max-w-4xl">
        {articles.map((article) => (
          <div 
            key={article.id}
            onClick={() => onSelectArticle && onSelectArticle(article)}
            className="p-6 md:p-8 border border-[#8F8A86]/10 hover:border-[#7A1A94] transition-all bg-[#0A0908] cursor-pointer group relative"
          >
            <div className="flex flex-wrap justify-between items-center text-xs font-['IBM_Plex_Mono'] text-[#8F8A86] mb-3 gap-2">
              <span className="text-[#7A1A94] tracking-[0.15em] font-semibold">{article.date}</span>
              <span className="bg-[#15130e] px-2 py-0.5 border border-[#8F8A86]/20">{article.readTime}</span>
            </div>

            <h3 className="font-['Fraunces'] text-xl md:text-2xl text-[#F3EDE4] group-hover:text-[#f2afff] transition-colors mb-3 font-normal">
              {article.title}
            </h3>

            <p className="font-['Inter'] text-[#8F8A86] text-sm leading-relaxed mb-4">
              {article.snippet}
            </p>

            <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#f2afff] flex items-center gap-2">
              <span>Read Full Article</span>
              <span className="material-symbols-outlined text-[14px] transform group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

