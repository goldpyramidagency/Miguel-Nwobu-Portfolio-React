import React, { useState } from 'react';
import { FAQItem } from '../types';

interface FAQSectionProps {
  faqs: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-[#8F8A86]/10">
      <div className="flex flex-col mb-12">
        <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] mb-3 font-medium">
          Clear Answers
        </div>
        <h2 className="font-['Fraunces'] text-[26px] md:text-[38px] text-[#F3EDE4] font-normal">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="max-w-4xl space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div 
              key={idx}
              className="border border-[#8F8A86]/10 bg-[#0A0908] transition-colors"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full text-left p-6 flex justify-between items-center gap-4 cursor-pointer"
              >
                <div>
                  <div className="font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-[0.15em] text-[#7A1A94] mb-1 font-medium">
                    {faq.category}
                  </div>
                  <div className="font-['Fraunces'] text-lg md:text-xl text-[#F3EDE4]">
                    {faq.question}
                  </div>
                </div>
                <span className="material-symbols-outlined text-[#8F8A86] text-xl transition-transform duration-300">
                  {isOpen ? 'remove' : 'add'}
                </span>
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-0 font-['Inter'] text-[#8F8A86] text-xs md:text-sm leading-relaxed border-t border-[#8F8A86]/10 pt-4 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
