import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0908] border-t border-[#8F8A86]/10 py-12 md:py-16 px-12 md:px-32 lg:px-44">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex flex-col gap-4">
          <div className="font-['Fraunces'] text-[#F3EDE4] text-2xl font-normal">
            Miguel Nwobu
          </div>
          <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#8F8A86]">
            Composure is a weapon.
          </div>
        </div>

        <div className="flex flex-wrap gap-8">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#8F8A86] hover:text-[#7A1A94] transition-colors"
          >
            LinkedIn
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#8F8A86] hover:text-[#7A1A94] transition-colors"
          >
            Twitter
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#8F8A86] hover:text-[#7A1A94] transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#8F8A86] hover:text-[#7A1A94] transition-colors"
          >
            Instagram
          </a>
        </div>

        <div className="font-['IBM_Plex_Mono'] text-[#8F8A86]/50 text-[10px] uppercase tracking-widest">
          © 2026 Miguel Nwobu. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};
