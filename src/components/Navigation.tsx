import React, { useState } from 'react';

export type AppView = 'home' | 'about' | 'portfolio' | 'project' | 'blog' | 'post';

interface NavigationProps {
  onOpenProjectModal: () => void;
  currentPage: AppView;
  onNavigate: (page: AppView, hash?: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ 
  onOpenProjectModal, 
  currentPage, 
  onNavigate 
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, page: AppView, hash?: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(page, hash);
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#0A0908]/85 backdrop-blur-md border-b border-[#8F8A86]/20 transition-all">
      <div className="flex justify-between items-center px-6 md:px-16 lg:px-24 py-4 max-w-full">
        <a 
          href="#" 
          onClick={(e) => handleLinkClick(e, 'home')}
          className="font-['Fraunces'] text-[22px] md:text-[26px] text-[#F3EDE4] tracking-tighter hover:text-[#f2afff] transition-colors cursor-pointer font-medium"
        >
          Miguel Nwobu
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#" 
            onClick={(e) => handleLinkClick(e, 'home')}
            className={`font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer ${
              currentPage === 'home' 
                ? 'text-[#f2afff] font-semibold border-b border-[#7A1A94] pb-0.5' 
                : 'text-[#8F8A86] hover:text-[#F3EDE4]'
            }`}
          >
            Home
          </a>

          <a 
            href="#about" 
            onClick={(e) => handleLinkClick(e, 'about')}
            className={`font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer ${
              currentPage === 'about' 
                ? 'text-[#f2afff] font-semibold border-b border-[#7A1A94] pb-0.5' 
                : 'text-[#8F8A86] hover:text-[#F3EDE4]'
            }`}
          >
            About
          </a>

          <a 
            href="#portfolio" 
            onClick={(e) => handleLinkClick(e, 'portfolio')}
            className={`font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer ${
              currentPage === 'portfolio' || currentPage === 'project'
                ? 'text-[#f2afff] font-semibold border-b border-[#7A1A94] pb-0.5' 
                : 'text-[#8F8A86] hover:text-[#F3EDE4]'
            }`}
          >
            Projects Archive
          </a>

          <a 
            href="#blog" 
            onClick={(e) => handleLinkClick(e, 'blog')}
            className={`font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer ${
              currentPage === 'blog' || currentPage === 'post'
                ? 'text-[#f2afff] font-semibold border-b border-[#7A1A94] pb-0.5' 
                : 'text-[#8F8A86] hover:text-[#F3EDE4]'
            }`}
          >
            Blog / Insights
          </a>

          <a 
            href="#faq" 
            onClick={(e) => handleLinkClick(e, 'home', 'faq')}
            className="text-[#8F8A86] font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] hover:text-[#F3EDE4] transition-colors duration-300 cursor-pointer"
          >
            FAQ
          </a>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onOpenProjectModal}
            className="hidden sm:inline-flex bg-[#F3EDE4] text-[#0A0908] px-6 py-2.5 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] font-medium smooth-transition hover:bg-[#7A1A94] hover:text-[#F3EDE4] active:scale-95 cursor-pointer shadow-md"
          >
            Start a Project
          </button>

          {/* Mobile hamburger button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#F3EDE4] p-2 hover:text-[#7A1A94] transition-colors"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0908] border-b border-[#8F8A86]/20 px-6 py-8 flex flex-col gap-6 animate-fadeIn">
          <a 
            href="#" 
            onClick={(e) => handleLinkClick(e, 'home')}
            className={`font-['IBM_Plex_Mono'] text-sm uppercase tracking-[0.15em] ${
              currentPage === 'home' ? 'text-[#f2afff] font-semibold' : 'text-[#8F8A86] hover:text-[#F3EDE4]'
            }`}
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleLinkClick(e, 'about')}
            className={`font-['IBM_Plex_Mono'] text-sm uppercase tracking-[0.15em] ${
              currentPage === 'about' ? 'text-[#f2afff] font-semibold' : 'text-[#8F8A86] hover:text-[#F3EDE4]'
            }`}
          >
            About
          </a>
          <a 
            href="#portfolio" 
            onClick={(e) => handleLinkClick(e, 'portfolio')}
            className={`font-['IBM_Plex_Mono'] text-sm uppercase tracking-[0.15em] ${
              currentPage === 'portfolio' || currentPage === 'project' ? 'text-[#f2afff] font-semibold' : 'text-[#8F8A86] hover:text-[#F3EDE4]'
            }`}
          >
            Projects Archive
          </a>
          <a 
            href="#blog" 
            onClick={(e) => handleLinkClick(e, 'blog')}
            className={`font-['IBM_Plex_Mono'] text-sm uppercase tracking-[0.15em] ${
              currentPage === 'blog' || currentPage === 'post' ? 'text-[#f2afff] font-semibold' : 'text-[#8F8A86] hover:text-[#F3EDE4]'
            }`}
          >
            Blog / Insights Archive
          </a>
          <a 
            href="#faq" 
            onClick={(e) => handleLinkClick(e, 'home', 'faq')}
            className="text-[#8F8A86] font-['IBM_Plex_Mono'] text-sm uppercase tracking-[0.15em] hover:text-[#F3EDE4]"
          >
            FAQ
          </a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenProjectModal(); }}
            className="w-full bg-[#F3EDE4] text-[#0A0908] py-3 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#7A1A94] hover:text-[#F3EDE4] transition-colors"
          >
            Start a Project
          </button>
        </div>
      )}
    </nav>
  );
};

