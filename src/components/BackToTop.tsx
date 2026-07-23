import React, { useState, useEffect } from 'react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 280) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-8 scale-75 pointer-events-none'
      }`}
    >
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Scroll back to top"
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#7A1A94] text-[#F3EDE4] shadow-[0_8px_30px_rgb(122,26,148,0.45)] hover:shadow-[0_12px_40px_rgb(242,175,255,0.6)] hover:bg-[#8e1fb0] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border border-[#f2afff]/30"
      >
        {/* Animated Bubbly Pulsing Outer Rings */}
        <span className="absolute -inset-1 rounded-full bg-[#7A1A94]/40 animate-ping pointer-events-none opacity-75 group-hover:opacity-100"></span>
        <span className="absolute -inset-2 rounded-full bg-[#f2afff]/10 animate-pulse pointer-events-none"></span>

        {/* Inner Arrow Icon & Subtle Bubbly Sparkle */}
        <span className="material-symbols-outlined text-2xl group-hover:-translate-y-1 transition-transform duration-300 relative z-10 font-bold">
          arrow_upward
        </span>

        {/* Bubbly Label Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-full bg-[#181614] border border-[#8F8A86]/30 text-[#F3EDE4] font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl pointer-events-none translate-x-2 group-hover:translate-x-0">
          Top ▲
        </span>
      </button>
    </div>
  );
};
