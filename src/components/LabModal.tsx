import React, { useState } from 'react';
import { LabExperiment } from '../types';

interface LabModalProps {
  experiment: LabExperiment | null;
  onClose: () => void;
}

export const LabModal: React.FC<LabModalProps> = ({ experiment, onClose }) => {
  if (!experiment) return null;

  // Interactive SEO Tool state
  const [keyword, setKeyword] = useState('architectural lighting design');
  const [analyzingSEO, setAnalyzingSEO] = useState(false);
  const [seoResult, setSeoResult] = useState<any>(null);

  // Interactive LTV Calculator state
  const [dailyUsers, setDailyUsers] = useState(1000);
  const [day1Retention, setDay1Retention] = useState(38);
  const [avgOrderValue, setAvgOrderValue] = useState(75);

  const runSEOAnalysis = () => {
    setAnalyzingSEO(true);
    setTimeout(() => {
      setAnalyzingSEO(false);
      setSeoResult({
        searchVolume: '24,500 / mo',
        keywordDifficulty: '34 / 100 (Low-Hanging Opportunity)',
        opportunityScore: '92 / 100',
        semanticClusters: [
          'architectural lighting fixture manufacturers',
          'luxurious indoor botanical illuminations',
          'low-voltage architectural garden spotlights'
        ],
        projectedTraffic: '+8,400 visitors / mo',
        recommendedAction: 'Deploy 4 programmatic long-tail landing pages focusing on indoor botanical LED design.'
      });
    }, 1200);
  };

  // Calculate estimated Day-30 and 12-Month LTV based on parameters
  const predictedDay30LTV = Math.round(avgOrderValue * (1 + (day1Retention / 100) * 0.45));
  const predicted12MoLTV = Math.round(avgOrderValue * (1 + (day1Retention / 100) * 1.8));
  const projectedMonthlyRevenue = Math.round(dailyUsers * 30 * predictedDay30LTV * 0.03);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0908]/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#100e09] border border-[#8F8A86]/20 p-8 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-[#8F8A86] hover:text-[#F3EDE4] transition-colors p-2"
        >
          <span className="material-symbols-outlined text-2xl">close</span>
        </button>

        <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] mb-3 font-medium">
          {experiment.number} · Code & Craft
        </div>

        <h2 className="font-['Fraunces'] text-3xl md:text-4xl text-[#F3EDE4] mb-4 font-normal">
          {experiment.title}
        </h2>

        <p className="font-['Inter'] text-[#8F8A86] text-sm leading-relaxed mb-8">
          {experiment.description}
        </p>

        {/* Interactive Sandbox Section based on interactiveType */}
        {experiment.interactiveType === 'seo' && (
          <div className="p-6 border border-[#8F8A86]/20 bg-[#0A0908] space-y-6">
            <div className="flex items-center justify-between border-b border-[#8F8A86]/20 pb-3">
              <span className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider text-[#f2afff] flex items-center gap-2">
                <span className="material-symbols-outlined text-base">terminal</span> 
                Live Agent Simulator
              </span>
              <span className="font-['IBM_Plex_Mono'] text-[10px] text-[#8F8A86]">
                Gemini LLM Intent Cluster Engine
              </span>
            </div>

            <div>
              <label className="block font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-wider text-[#8F8A86] mb-2">
                Target Keyword or Topic
              </label>
              <div className="flex gap-2">
                <input 
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="flex-1 bg-[#100e09] border border-[#8F8A86]/30 px-4 py-2.5 text-[#F3EDE4] font-['Inter'] text-sm focus:outline-none focus:border-[#7A1A94]"
                />
                <button 
                  onClick={runSEOAnalysis}
                  disabled={analyzingSEO}
                  className="bg-[#7A1A94] text-[#F3EDE4] px-6 py-2.5 font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider hover:bg-[#F3EDE4] hover:text-[#0A0908] transition-colors cursor-pointer"
                >
                  {analyzingSEO ? 'Analyzing...' : 'Execute Agent'}
                </button>
              </div>
            </div>

            {seoResult && (
              <div className="space-y-4 pt-4 border-t border-[#8F8A86]/20 font-['Inter'] animate-fadeIn">
                <div className="grid grid-cols-3 gap-4 text-center bg-[#100e09] p-4 border border-[#8F8A86]/10">
                  <div>
                    <div className="text-[#8F8A86] text-[11px] font-['IBM_Plex_Mono']">Volume</div>
                    <div className="text-[#F3EDE4] font-['Fraunces'] text-lg">{seoResult.searchVolume}</div>
                  </div>
                  <div>
                    <div className="text-[#8F8A86] text-[11px] font-['IBM_Plex_Mono']">Difficulty</div>
                    <div className="text-[#f2afff] font-['Fraunces'] text-lg">{seoResult.keywordDifficulty}</div>
                  </div>
                  <div>
                    <div className="text-[#8F8A86] text-[11px] font-['IBM_Plex_Mono']">Score</div>
                    <div className="text-[#7A1A94] font-['Fraunces'] text-lg">{seoResult.opportunityScore}</div>
                  </div>
                </div>

                <div>
                  <div className="font-['IBM_Plex_Mono'] text-xs uppercase text-[#8F8A86] mb-2">
                    Extracted Semantic Intent Clusters:
                  </div>
                  <ul className="space-y-1">
                    {seoResult.semanticClusters.map((cluster: string, idx: number) => (
                      <li key={idx} className="text-sm text-[#e7e2d9] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#7A1A94]"></span>
                        {cluster}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-[#7A1A94]/10 border-l-2 border-[#7A1A94] text-xs text-[#e7e2d9]">
                  <strong>Action Plan:</strong> {seoResult.recommendedAction}
                </div>
              </div>
            )}
          </div>
        )}

        {experiment.interactiveType === 'ltv' && (
          <div className="p-6 border border-[#8F8A86]/20 bg-[#0A0908] space-y-6">
            <div className="flex items-center justify-between border-b border-[#8F8A86]/20 pb-3">
              <span className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider text-[#f2afff] flex items-center gap-2">
                <span className="material-symbols-outlined text-base">analytics</span> 
                Day-Zero LTV Predictor
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block font-['IBM_Plex_Mono'] text-[11px] uppercase text-[#8F8A86] mb-2">
                  Daily Acquisitions ({dailyUsers})
                </label>
                <input 
                  type="range" min="100" max="10000" step="100"
                  value={dailyUsers}
                  onChange={(e) => setDailyUsers(Number(e.target.value))}
                  className="w-full accent-[#7A1A94]"
                />
              </div>

              <div>
                <label className="block font-['IBM_Plex_Mono'] text-[11px] uppercase text-[#8F8A86] mb-2">
                  Day 1 Retention ({day1Retention}%)
                </label>
                <input 
                  type="range" min="10" max="80" step="1"
                  value={day1Retention}
                  onChange={(e) => setDay1Retention(Number(e.target.value))}
                  className="w-full accent-[#7A1A94]"
                />
              </div>

              <div>
                <label className="block font-['IBM_Plex_Mono'] text-[11px] uppercase text-[#8F8A86] mb-2">
                  Avg Order Value (${avgOrderValue})
                </label>
                <input 
                  type="range" min="20" max="500" step="5"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="w-full accent-[#7A1A94]"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center bg-[#100e09] p-6 border border-[#8F8A86]/10">
              <div>
                <div className="text-[#8F8A86] text-[11px] font-['IBM_Plex_Mono'] uppercase">30-Day LTV</div>
                <div className="text-[#F3EDE4] font-['Fraunces'] text-2xl md:text-3xl">${predictedDay30LTV}</div>
              </div>
              <div>
                <div className="text-[#8F8A86] text-[11px] font-['IBM_Plex_Mono'] uppercase">12-Mo Predicted LTV</div>
                <div className="text-[#f2afff] font-['Fraunces'] text-2xl md:text-3xl">${predicted12MoLTV}</div>
              </div>
              <div>
                <div className="text-[#8F8A86] text-[11px] font-['IBM_Plex_Mono'] uppercase">Monthly Run-Rate</div>
                <div className="text-[#7A1A94] font-['Fraunces'] text-2xl md:text-3xl">${projectedMonthlyRevenue.toLocaleString()}</div>
              </div>
            </div>
          </div>
        )}

        {(!experiment.interactiveType || (experiment.interactiveType !== 'seo' && experiment.interactiveType !== 'ltv')) && (
          <div className="p-6 border border-[#8F8A86]/20 bg-[#0A0908] space-y-4">
            <div className="font-['IBM_Plex_Mono'] text-xs uppercase text-[#7A1A94]">
              Experimental Methodology
            </div>
            <p className="text-sm text-[#e7e2d9] leading-relaxed">
              {experiment.fullContent || experiment.description}
            </p>
          </div>
        )}

        <div className="mt-8 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-[#F3EDE4] text-[#0A0908] px-8 py-3 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#7A1A94] hover:text-[#F3EDE4]"
          >
            Close Sandbox
          </button>
        </div>
      </div>
    </div>
  );
};
