import React from 'react';

export const Metrics: React.FC = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Metric Card 1 */}
        <div className="border border-[#8F8A86]/10 p-6 md:p-8 group hover:border-[#7A1A94]/40 transition-all duration-500 bg-[#0A0908]">
          <div className="font-['Fraunces'] text-4xl md:text-5xl text-[#F3EDE4] mb-3 group-hover:text-[#7A1A94] smooth-transition font-normal">
            12+
          </div>
          <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#8F8A86] mb-2 font-medium">
            Years of Mastery
          </div>
          <p className="font-['Inter'] text-[#8F8A86]/80 text-xs md:text-sm leading-[1.6]">
            A decade plus of navigating 14+ different industries and diverse market conditions with consistent performance.
          </p>
        </div>

        {/* Metric Card 2 (Staggered desktop column) */}
        <div className="border border-[#8F8A86]/10 p-6 md:p-8 group hover:border-[#7A1A94]/40 transition-all duration-500 md:translate-y-8 bg-[#0A0908]">
          <div className="font-['Fraunces'] text-4xl md:text-5xl text-[#F3EDE4] mb-3 group-hover:text-[#7A1A94] smooth-transition font-normal">
            24+
          </div>
          <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#8F8A86] mb-2 font-medium">
            Countries Reached
          </div>
          <p className="font-['Inter'] text-[#8F8A86]/80 text-xs md:text-sm leading-[1.6]">
            International scaling expert. Successfully launched and optimized campaigns across 5 continents with localized precision.
          </p>
        </div>

        {/* Metric Card 3 */}
        <div className="border border-[#8F8A86]/10 p-6 md:p-8 group hover:border-[#7A1A94]/40 transition-all duration-500 bg-[#0A0908]">
          <div className="font-['Fraunces'] text-4xl md:text-5xl text-[#F3EDE4] mb-3 group-hover:text-[#7A1A94] smooth-transition font-normal">
            200+
          </div>
          <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#8F8A86] mb-2 font-medium">
            Campaigns Executed
          </div>
          <p className="font-['Inter'] text-[#8F8A86]/80 text-xs md:text-sm leading-[1.6]">
            From initial seed to global dominance, delivering over $50M in attributed revenue across performance marketing channels.
          </p>
        </div>
      </div>
    </section>
  );
};
