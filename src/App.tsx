import React, { useState, useEffect } from 'react';
import { Navigation, AppView } from './components/Navigation';
import { Hero } from './components/Hero';
import { Metrics } from './components/Metrics';
import { Projects } from './components/Projects';
import { LeadershipSolutions } from './components/LeadershipSolutions';
import { LabExperiments } from './components/LabExperiments';
import { InsightsSection } from './components/InsightsSection';
import { FAQSection } from './components/FAQSection';
import { AboutPage } from './components/AboutPage';
import { PortfolioArchivePage } from './components/PortfolioArchivePage';
import { ProjectSinglePage } from './components/ProjectSinglePage';
import { BlogArchivePage } from './components/BlogArchivePage';
import { BlogSinglePage } from './components/BlogSinglePage';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

import { ProjectModal } from './components/ProjectModal';
import { CVModal } from './components/CVModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { LabModal } from './components/LabModal';

import { PROJECTS as STATIC_PROJECTS, LAB_EXPERIMENTS, INSIGHTS as STATIC_INSIGHTS, FAQS } from './data/portfolioData';
import { Project, LabExperiment, InsightArticle } from './types';
import { fetchWordPressPosts, fetchWordPressProjects } from './services/wordpressApi';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentPage, setCurrentPage] = useState<AppView>('home');

  // Dynamic Headless CMS State
  const [projectsList, setProjectsList] = useState<Project[]>(STATIC_PROJECTS);
  const [articlesList, setArticlesList] = useState<InsightArticle[]>(STATIC_INSIGHTS);
  const [isCmsLoading, setIsCmsLoading] = useState(true);

  // Selected items for single pages
  const [activeProject, setActiveProject] = useState<Project>(STATIC_PROJECTS[0]);
  const [activeArticle, setActiveArticle] = useState<InsightArticle>(STATIC_INSIGHTS[0]);

  // Modal states
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null);
  const [selectedExperiment, setSelectedExperiment] = useState<LabExperiment | null>(null);

  // Fetch dynamic content from Headless WordPress on mount
  useEffect(() => {
    async function loadHeadlessContent() {
      setIsCmsLoading(true);
      try {
        const [wpProjects, wpArticles] = await Promise.all([
          fetchWordPressProjects(),
          fetchWordPressPosts()
        ]);

        if (wpProjects && wpProjects.length > 0) {
          setProjectsList(wpProjects);
          setActiveProject(wpProjects[0]);
        }

        if (wpArticles && wpArticles.length > 0) {
          setArticlesList(wpArticles);
          setActiveArticle(wpArticles[0]);
        }
      } catch (err) {
        console.warn('Error loading Headless WordPress content:', err);
      } finally {
        setIsCmsLoading(false);
      }
    }

    loadHeadlessContent();
  }, []);

  // Parallax effect for faded background watermark text
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleNavigate = (page: AppView, hash?: string) => {
    setCurrentPage(page);
    if (hash && page === 'home') {
      setTimeout(() => {
        const elem = document.getElementById(hash);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectSingleProject = (project: Project) => {
    setActiveProject(project);
    setCurrentPage('project');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSingleArticle = (article: InsightArticle) => {
    setActiveArticle(article);
    setCurrentPage('post');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0A0908] text-[#F3EDE4] font-['Inter'] min-h-screen overflow-x-hidden relative selection:bg-[#7A1A94] selection:text-[#F3EDE4]">
      {/* Faded Background Watermark Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-4 -left-12 text-[12vw] md:text-[9vw] font-['Fraunces'] font-black faded-text uppercase tracking-tighter transition-transform duration-300 ease-out opacity-20"
          style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
        >
          Growth
        </div>
        <div 
          className="absolute bottom-4 -right-12 text-[12vw] md:text-[9vw] font-['Fraunces'] font-black faded-text uppercase tracking-tighter transition-transform duration-300 ease-out opacity-20"
          style={{ transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)` }}
        >
          Engine
        </div>
        <div className="absolute inset-0 hive-gradient pointer-events-none" />
      </div>

      {/* Shared Header Navigation */}
      <Navigation 
        onOpenProjectModal={() => setIsProjectModalOpen(true)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main View Router */}
      <main className="relative z-10">
        {currentPage === 'about' && (
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
            <AboutPage 
              onOpenContact={() => setIsProjectModalOpen(true)}
              onOpenCV={() => setIsCVModalOpen(true)}
            />
          </div>
        )}

        {currentPage === 'portfolio' && (
          <PortfolioArchivePage 
            projects={projectsList}
            onSelectProject={handleSelectSingleProject}
            onNavigateHome={() => handleNavigate('home')}
            onOpenProjectModal={() => setIsProjectModalOpen(true)}
          />
        )}

        {currentPage === 'project' && (
          <ProjectSinglePage 
            project={activeProject}
            allProjects={projectsList}
            onSelectProject={handleSelectSingleProject}
            onBackToPortfolio={() => handleNavigate('portfolio')}
            onOpenProjectModal={() => setIsProjectModalOpen(true)}
          />
        )}

        {currentPage === 'blog' && (
          <BlogArchivePage 
            articles={articlesList}
            onSelectArticle={handleSelectSingleArticle}
            onNavigateHome={() => handleNavigate('home')}
            onOpenProjectModal={() => setIsProjectModalOpen(true)}
          />
        )}

        {currentPage === 'post' && (
          <BlogSinglePage 
            article={activeArticle}
            allArticles={articlesList}
            onSelectArticle={handleSelectSingleArticle}
            onBackToArchive={() => handleNavigate('blog')}
            onOpenProjectModal={() => setIsProjectModalOpen(true)}
          />
        )}

        {currentPage === 'home' && (
          <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
            <Hero 
              onOpenContact={() => setIsProjectModalOpen(true)}
              onOpenCV={() => setIsCVModalOpen(true)}
            />

            <Metrics />

            <Projects 
              projects={projectsList}
              onSelectProject={handleSelectSingleProject}
              onSeeMoreProjects={() => handleNavigate('portfolio')}
            />

            <LeadershipSolutions />

            <LabExperiments 
              experiments={LAB_EXPERIMENTS}
              onSelectExperiment={(exp) => setSelectedExperiment(exp)}
            />

            <InsightsSection 
              articles={articlesList} 
              onSelectArticle={handleSelectSingleArticle}
              onViewAllArticles={() => handleNavigate('blog')}
            />

            <FAQSection faqs={FAQS} />

            {/* Final CTA Section */}
            <section className="py-28 md:py-36 text-center relative z-10">
              <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.3em] text-[#7A1A94] mb-4 font-medium">
                THE NEXT MOVE IS YOURS
              </div>

              <h2 
                onClick={() => setIsProjectModalOpen(true)}
                className="font-['Fraunces'] text-[6vw] md:text-[4.5vw] mb-8 leading-none hover:italic transition-all duration-700 cursor-pointer select-none font-normal"
              >
                Let's build.
              </h2>

              <button 
                onClick={() => setIsProjectModalOpen(true)}
                className="bg-[#F3EDE4] text-[#0A0908] px-8 py-4 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#7A1A94] hover:text-[#F3EDE4] transition-all transform hover:scale-105 cursor-pointer shadow-lg"
              >
                Start a Project
              </button>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back To Top Button */}
      <BackToTop />

      {/* Modals & Drawers */}
      <ProjectModal 
        isOpen={isProjectModalOpen} 
        onClose={() => setIsProjectModalOpen(false)} 
      />

      <CVModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />

      <CaseStudyModal 
        project={selectedModalProject} 
        onClose={() => setSelectedModalProject(null)} 
        onOpenProjectModal={() => setIsProjectModalOpen(true)}
      />

      <LabModal 
        experiment={selectedExperiment}
        onClose={() => setSelectedExperiment(null)}
      />
    </div>
  );
}

