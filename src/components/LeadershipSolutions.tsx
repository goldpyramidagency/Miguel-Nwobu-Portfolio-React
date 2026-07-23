import React, { useState } from 'react';

export const LeadershipSolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'leadership' | 'solutions' | null>(null);

  return (
    <section className="py-20 md:py-28 border-t border-[#8F8A86]/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* Leadership Column */}
        <div className="bg-[#0A0908] p-2 rounded-sm">
          <h2 className="font-['Fraunces'] text-2xl md:text-3xl text-[#F3EDE4] mb-6 font-normal">
            How I lead
          </h2>
          <p className="font-['Inter'] text-[#8F8A86] mb-8 leading-[1.6] text-sm md:text-base">
            I believe growth is not an accident; it is the result of a culture built on radical transparency and measurable accountability. My leadership style focuses on empowering teams with the data clarity needed to take calculated risks and swing for the fences.
          </p>
          <button 
            onClick={() => setActiveTab(activeTab === 'leadership' ? null : 'leadership')}
            className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#F3EDE4] border-b border-[#7A1A94] pb-1 hover:text-[#7A1A94] transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            {activeTab === 'leadership' ? 'Show less' : 'Read more'} 
            <span className="material-symbols-outlined text-[14px]">
              {activeTab === 'leadership' ? 'expand_less' : 'arrow_forward'}
            </span>
          </button>

          {activeTab === 'leadership' && (
            <div className="mt-6 p-5 border-l-2 border-[#7A1A94] bg-[#100e09] text-xs md:text-sm text-[#8F8A86] space-y-3 animate-fadeIn">
              <p>
                <strong className="text-[#F3EDE4]">Data-First Autonomy:</strong> Every team member has real-time access to BigQuery dashboards and conversion telemetry, removing bureaucratic approval bottlenecks.
              </p>
              <p>
                <strong className="text-[#F3EDE4]">Radical Post-Mortems:</strong> Unsuccessful experiments are evaluated as data points, fostering a high-velocity testing culture without fear of failure.
              </p>
            </div>
          )}
        </div>

        {/* Problems I Solve Column */}
        <div className="bg-[#0A0908] p-2 rounded-sm">
          <h2 className="font-['Fraunces'] text-2xl md:text-3xl text-[#F3EDE4] mb-6 font-normal">
            Problems I solve
          </h2>
          <p className="font-['Inter'] text-[#8F8A86] mb-8 leading-[1.6] text-sm md:text-base">
            From fragmented attribution models to stagnant organic visibility, I specialize in identifying the friction points in the customer journey. I deploy scalable, modular growth frameworks that turn intractable performance issues into executable roadmaps.
          </p>
          <button 
            onClick={() => setActiveTab(activeTab === 'solutions' ? null : 'solutions')}
            className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#F3EDE4] border-b border-[#7A1A94] pb-1 hover:text-[#7A1A94] transition-colors inline-flex items-center gap-2 cursor-pointer"
          >
            {activeTab === 'solutions' ? 'Show less' : 'Read more'} 
            <span className="material-symbols-outlined text-[14px]">
              {activeTab === 'solutions' ? 'expand_less' : 'arrow_forward'}
            </span>
          </button>

          {activeTab === 'solutions' && (
            <div className="mt-6 p-5 border-l-2 border-[#7A1A94] bg-[#100e09] text-xs md:text-sm text-[#8F8A86] space-y-3 animate-fadeIn">
              <p>
                <strong className="text-[#F3EDE4]">Cookieless Attribution Decay:</strong> Restoring up to 35% missing event data through server-side Meta CAPI and Google Measurement Protocol.
              </p>
              <p>
                <strong className="text-[#F3EDE4]">CAC Escalation & Plateau:</strong> Diversifying channel reliance by engineering automated LLM programmatic SEO and multi-region localization playbooks.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
