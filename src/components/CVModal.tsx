import React from 'react';
import { CV_DATA } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0908]/90 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#100e09] border border-[#8F8A86]/20 p-8 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Action Header */}
        <div className="flex justify-between items-center pb-6 mb-8 border-b border-[#8F8A86]/20">
          <div>
            <span className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94]">
              Curriculum Vitae
            </span>
            <h2 className="font-['Fraunces'] text-2xl text-[#F3EDE4]">
              {CV_DATA.name}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrint}
              className="bg-[#F3EDE4] text-[#0A0908] px-4 py-2 font-['IBM_Plex_Mono'] text-xs uppercase tracking-wider font-medium hover:bg-[#7A1A94] hover:text-[#F3EDE4] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">print</span> Print CV
            </button>
            <button 
              onClick={onClose}
              className="text-[#8F8A86] hover:text-[#F3EDE4] p-2"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
        </div>

        {/* CV Content */}
        <div className="space-y-8 font-['Inter']">
          <div>
            <h3 className="font-['Fraunces'] text-xl text-[#F3EDE4] mb-2">{CV_DATA.title}</h3>
            <p className="text-[#8F8A86] text-sm leading-relaxed">{CV_DATA.summary}</p>
          </div>

          <div>
            <h4 className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] mb-4">
              Core Capabilities
            </h4>
            <div className="flex flex-wrap gap-2">
              {CV_DATA.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="font-['IBM_Plex_Mono'] text-xs text-[#e7e2d9] bg-[#0A0908] border border-[#8F8A86]/20 px-3 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] mb-6">
              Leadership & Career History
            </h4>
            <div className="space-y-8">
              {CV_DATA.roles.map((role, i) => (
                <div key={i} className="border-l-2 border-[#7A1A94]/50 pl-6 space-y-2">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h5 className="font-['Fraunces'] text-lg text-[#F3EDE4]">{role.role}</h5>
                    <span className="font-['IBM_Plex_Mono'] text-xs text-[#8F8A86]">{role.period}</span>
                  </div>
                  <div className="font-['IBM_Plex_Mono'] text-xs text-[#7A1A94]">{role.company}</div>
                  <ul className="list-disc list-inside text-sm text-[#8F8A86] space-y-1 pt-2">
                    {role.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
