import React from 'react';

interface AboutPageProps {
  onOpenContact: () => void;
  onOpenCV: () => void;
}

const TOOL_LOGOS = [
  { name: 'HubSpot', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi1BGgKfUBIj-fGDTiB3LGmn7AYDxzM6jKWbkUCUvS7mjUxEo-01TD_N_lgBWaT3Jq9uHdeXCzKPnVPqIySv0EsZ9Y--hpS6i19Se8_xdGjpfAvqbUDi0lAaG-Q6uUlBaJV5b3LcEZxtdb2wUAm-lVwo9EGHshOHCaik3lMlktfZQaiL6t6BjXnvM_y1QDLs2QTGsuiUpwba3CQRn200DhHJaK2A2Eukzb_ZTPG2VYvZDeMFF5kdfNc1-k-T9d4Kjxv30noGxg7g' },
  { name: 'Mailchimp', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA48iR7BywScYysEl5qnMTWfEHjKxE1-9Y_dRoXehwiHBnmvDr-WK5iDrmMZ9dEHGgUT7AeOmTohUAT_SBMKosEj4hKr6pUH4wYJRxEFH-sp9tU7GpwF7Od1leTxP45lM-es0MgW53ki9zKNQTsny6VtvqCMc_FDLA4HFFSRvDDOIKsqqvLAEae2tuSgwDbyK30u0NSf41ur_I6YUTjrLp45449GbV8ac7tQOD1rDK94TSzluvKYVhe44sNdrjHHlP8vztuqYPOLg' },
  { name: 'Semrush', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYnu4HZox9wQtqGSo-6Vb4YyhLHjHrkX4qi1dZSNDLP8daDGfTVInkce5XsYivOz_hl0Bhu_MP6nkzFJI56mb-MiRdh22hL5a8uATYnOxKWcemN74-4A_a4NRsPyLw8RTobMPx1cCdxaXKlqLxaF5zvE49fXKpU0gAt9TRpuiED2j4vgO3lhWzDD2kXB2NB5BPeIMHSpxPBDlzrzoHpz0t0e86h_fj-Glvsvg_2mX0kBW629t4mtcrFGfEqxxIs5KOY4CqbFFcKQ' },
  { name: 'Tableau', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjXVstKxgsCTNQaB5NphBIAy4m0cvVlV7mag4OXQfuGfEHk3lSrbNkUYhECukXxYQ7uRvsLpKKjIhyjccF6gAzaYx5UyExwha8lebbFDc9uiouPtgkzYyvG_aE3ktxsQgQaogSa7LFuoZ9C-eHrQ8kEeuAA_fKrN0Drhs0F0FYZ7iTB5NdxjBNNle6giDvcib_5zvRgluY9N1sVDAzjeK-cGPTVHkT5OooqfEgXrr3ryjjoDEJ8dY_KNJ0oua2H0GQ-9MXsGHu6w' },
  { name: 'Mixpanel', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzT_n0Md8bppAWMTiqN8EJQ-x7uVJ1E7Urxy6D0XTjpQjB335GQqoryBPW3fLwkBM3YJq4TcaIUI3ZKm8ajLPbtFXDqs2Dmbmmb4Zte-gDrgg9LtWPM_4FfdD5Q-J5smkFNsFuKxCKvb-bfGHWy29EKs3i-ZPLVyZbqzztq06WhcilP8oU5kOfVGAMrWm3lEDgKtyXyjEkyIoxdKF2mm_p0oBwyu62vPHs0fQ9uyj1dMk8lfbc9KTmpRdQCycdc1JZ4Cl-Sf51sg' },
  { name: 'Google Analytics', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYAUFv-Ncxb1SpIBFhSF3Ue48ssqWPbAzsowOkxNdCbjjnh99072W0kVnR8_2wEmQD2oQ6vywayP_zhk0gz_v74LB8YvtNDWpcajvn92KrIvwkDY3lizATQdZrL3NAXWesGL4n4fBJL8crCBONYcRxXT_HYZ7VJNoxsKOO1GwZwldIeSxXntlVq36u6hvrCjtElwOSkwjzYfQ_FQDbLx5YK5dQzWrlAjSVGxggVkZ2qN6WwdAA2u1cm5pjmuZ8ewojeHzp1G4-uA' },
  { name: 'Ahrefs', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8ny-_RETiNkJrlv9672xsn7RPG4q2sl6ehlhfrSrK9znJetJvXPbBAvILtilZwmDAXkEmPD8j0iRO4POf0XrMhYqFb8WVtZB7y2RgKyGbvvlOzcipxjnweDSzxnjLPYU5pFt_DjkEXwI3qCus1MF8fER_MFfriq6QYpIyDF0mHhWeJGMqkFMJ0g9oFaXRr0pdWNcuFbmdD-VHopUfOKd2ZL-eRd-s3uZWth3tzuQQyeSkFcyWL_Y2NGwnaiKn4Lt2XtmCtt3SZw' },
  { name: 'Next.js', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBy0ljfvoC-fFWBiHCmuJllA6ZLWnPQQvzEB2DuCfaqBsp2NbCqIfPyJaaSAY0w4hyy2hZSNaptyLpTi84kz4LU6GojVwfA6H3kgrCecPs8riPKe25ii_GO8vwI7aebI1-jFT0KMApXO5Q1oidk_Ec6BL3g36pyj_XXFVqkrNjw0NMP5Eq_B8W0kPkJznLgV7TrM7TrRyL7wZMN3JrunYXb3gTiUx1shaKIrKB0-iEwoUPibhxcUH-H8QglFeEUiqaPcNzGRfUy-A' },
  { name: 'React', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA2-zGvjCzwqlO9lv40tNNoV6ZpJEDwFjcAtRW2AqSU5Rv-olRFlUbgN7VXfuAW8rCCjS47G4fIT3ybE6AvgOXapXS3lWGKV3kX3B3lcpp_S9dwuPdNRn5B9l856Kwm0I1887c2ECc841LuVQCXjJydC9ils44GMcvwmWORgdeTNdj1pu_ehsKVui1X5TTGS6u2rMERSXDMqKEibjnVCSBqVvYEZXo1Z0Ykzq4QlX5exZtwzuCgc_HaUz1g-okIgYjZJG0__NUIQ' },
  { name: 'GitHub', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzLXLRlGHCP06fkxX7R65SGSyAIey5PnSpZ6BIniKgl8a-kgksAC2-fEbHrRbm8r6v9hxLu5PvlAIh4khX_XlPwvuPZm-Jtj8MZaj9cgYx92wD9k5w51wHR-Nq22EC-RhuYYVSrC2QWb7T3zH6Z4GH1X6g2PqWJx3quS4WNxu5P9V1VvzF5g4QZVUC5BDkghPx0U3Zr0-XYQ116wEa_VGT6XVMjAodThkTpYLd06N9Yvhi2R-tIimXy_nocazKi5zOsB8JsOSiUQ' },
  { name: 'Vercel', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfafexBIaoLAqLEUyFA9HBPwRzVny3X-VdpavQaiv51MypzgsVg6kNBtsMpyOcfBkvpT5rfqxdyU53e2__8Z1OdRQJZVALEhiI45qeczFGMWsVK9za3Xj8PEfhMx1F_fCSnXvFxeBQh_ht0LNEgyCLHJlZO3AjrQNzoTtKKupMr2ZYFjYWjRtCVwJAf-II5rOTEeG9mIz1iZYrdl0mvlw6h1NAy0P2H2_zc63BVLk5X4fX3xn6FNsY6W0lfusn2ePp62AfvNmEwQ' },
  { name: 'Figma', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbxZQ9oaevQABVkXYlbUuSQbne-0nvYXWo3RUskbabYJo0II-jUuCkaIFacZCMbkQXe95ZTBr82DpXV_993C0qd2VC_NtUA-FBjk7D-N8dk8KpPGsJuo-8JQT400eG5RXYzVku9oQV4liaXYK6YZzrEYw2WTpKuKKc3hdDXeTWno7nKuHeGS3wtKEiX90gj9hVVijOPJNjqlfKIQVIF_bCN1vrt_XICKx2pnynwjLeF3rGELRc_NoYXk8wPcs60UuQLht1DPVKzQ' },
  { name: 'Screaming Frog', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTUJ1oozDk74NsWjVpco8957xG2nVBKt7THPqruphouWQGzTlDUt-2dTwn9r3lrG-cSMR-_d5U_GSpMkmwp9x36Bk1dKyY9MJXx3IC5hoHLE3wYutlQRwtHJpNBMND1YO_eaWyaqF-1tNNj5td7-LywqssOvkbSi0-KxLSdnyKRhEVa4sJ5lTUKt3dHAMORT7M8HzQqMHsy-014t76EfeOUd0pV-fxupbliq9hekF0Z9HPTX783o6y5shme99USNGXN8WZR16KRA' },
  { name: 'Canva', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4IQvr5rHNP0PQhlYa2UZk3AE1VAtEKatboUkojUVImHdwgsGV0Dk8P2c9bjqmvc9t_9sO9amWVs-CtxjDWRofKUpzBy7yNMTbgZUhfU-HTjQa75VOP7KPe9qhNvPorssf1Pw1NpOh9JhMuXWXubS_HDfG-kH6CI80h7UbxemdU6CqhuXsdHRL_7zb0zjvY6XThDnzodf87nMEIdR8leNwOcyy9v4l_sa1jFQyq5oDl0RSB4nB0jwXEpAfa6xswyWeP_quLsC5Hw' },
  { name: 'Surfer SEO', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1SRhxD827H16MFQKliEPHri2aMQv5eFaGjPdRFMnlAhOulh7DuHLjoD1z5KozNi1roz4aube8WYBMg64Etfoq9HWPbJsz1B3pYzMcMEV5uO61GiAUuvs12yJLv3UG9CBdxay9W7SqeJKvLfteqw40VM-_qvvfCn2a2hdao9Z04d7s90uwuwrpZ3X31TVyR2z5tfsMkGiiob8q6q7E2YJlo4qCEEdY79ISp8DCgTquZK-V3kc87bvsbuUL6ZeVyweIl2WtGkvrdg' },
  { name: 'Jasper AI', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMHeAf1vQtYcIz2wxeMedRN0FEX2UCPqkscCujqHwDG8LWLHTXzrMB-qfzW92PK_7yMSMfwCNegV3bQSotfMW_Ow7_uhdKAcG_LYfzaZjyqUQCV1x2oFIi4i_5RlLcoB30k2djUHTyONE0yh0rk-jRZD1kV1V9PB_4yTXJOOtFcmgH9mBrYdGAAKYmLA7kOxu9ddYOOkpro9nGEdJGahemPevWKwT6_wThUyassy9-ZaN3ine4rV7UwwlyFO9Hq9H_kW4g6bAvLA' },
  { name: 'Salesforce', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4Md3tyDAQU0IVxWWhJx6yQD3KvdYsUZTf6i0NsGyAHeIgN8Dpccbs__3njUedBAiR9ahFVLJ1IYmgnsL9wy98QTpg1IbHSFi_jS0wP6lZ-ars4AQmNojkn6ctvMcgrr7ntZ9OkuTTMuCIiU53uiNtCAJtvMMgUSYbyQDHyt03Rh2RgGQTY04f-2WIXhL_kfOVvqzhNQZ1DiGBIZV7IQlwU5j1gGj5F9ZU6x9N_wv_ym8c4OYQ6WK84wOanRclfzTrKsIRB0i3UA' },
  { name: 'Meta Ads', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkoW70Hgufl4X-XlKBVT3qEQp0z9UFajpGj_jiebgsDh6I5UKVKnciOXBFYOoKVIhtM8e6WQwCb2TN9rTLtdwJWcjj5vlNGrzt0-B9ioADdlZHfzqaqopm29c3Bb2iBGS275ntPgZk4zhHYsXjKV4b-XSVwhTBn4aSl7nAKs3ejx1WFPtLvwh1FibidzsnGDTEV3UN3nFQqGPuQa9Mxxd1YgbLuGY7ZQV07PZuWek8QEl0OP-rFhM3YUgPnCDcF53Z5c1G7uFZ9Q' },
  { name: 'Google Ads', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANf5sleAbryH1A5ZplQ1NJehOLPA0I5QFHUfCtrQNkRXEYePymDiv03ibRmvjcoglumgYVE3yFwyG5XX1MylhovhpKb9n-Wf6Lw4oqyYYAU7OGyx61l0pprPVtp-C6aS7RAMxmbLe' },
  { name: 'Zapier', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOBFgdIAJVyQxnfXq6C3emRlIJN5FcUOQSWyB6hVxlQww3fNnO2lE5CJBKxYp6Fa8aZ2zuPaxwjst71O6dNPDoBud8aW4yr527lHD70UxqkeDuaE5GSIPcWC-uYplRen5xHv_mx2Mgb4xVofXtLoxKIXbkXS_Q3ia-cg4wL-rbNtQQYrNhwwNsvTBxCjC-dLF3YB7zFZO4zG38ZLG3w_TP9zB1Bc5Ks8CWBqQGvsZZlH9DDT4n_xDX1im3SDK0k5kOjRq59Scidw' }
];

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenContact, onOpenCV }) => {
  return (
    <div className="py-12 md:py-20 animate-fadeIn">
      {/* Hero Section */}
      <section className="relative mb-28 md:mb-36">
        <span className="absolute -top-12 left-0 font-['Fraunces'] text-[14vw] md:text-[10vw] faded-text select-none uppercase tracking-tighter pointer-events-none">
          ABOUT
        </span>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="font-['Fraunces'] text-[26px] md:text-[52px] leading-[1.15] tracking-[-0.02em] font-normal text-[#F3EDE4] mb-6">
            Hi, I'm Miguel. I specialize in <span className="text-[#f2afff] italic font-['Fraunces']">engineering</span> high-impact growth systems that turn curiosity into revenue.
          </h1>

          <p className="font-['Inter'] text-[#8F8A86] max-w-2xl mb-10 text-base md:text-lg leading-[1.6]">
            I am a Full Stack Growth Marketer and the architect behind "The Purple Olympian." My philosophy is simple: Composure is a weapon. In the noisy world of performance marketing, I find the signals that matter.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <button 
              onClick={onOpenContact}
              className="bg-[#F3EDE4] text-[#0A0908] px-6 py-3 font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.15em] font-medium flex items-center gap-2 hover:bg-[#7A1A94] hover:text-[#F3EDE4] transition-all cursor-pointer group"
            >
              Contact me 
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                mail
              </span>
            </button>
            <button 
              onClick={onOpenCV}
              className="border border-[#8F8A86]/30 text-[#F3EDE4] px-6 py-3 font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.15em] font-medium flex items-center gap-2 hover:border-[#7A1A94] hover:text-[#f2afff] transition-all cursor-pointer group"
            >
              Download CV 
              <span className="material-symbols-outlined text-[16px] group-hover:translate-y-0.5 transition-transform">
                download
              </span>
            </button>
          </div>
        </div>

        {/* Centralized Cinematic Low-Key Portrait Container */}
        <div className="w-full max-w-4xl mx-auto h-[480px] md:h-[620px] grayscale hover:grayscale-0 transition-all duration-700 bg-[#1d1b16] overflow-hidden border border-[#8F8A86]/10 relative group rounded-xs shadow-2xl">
          <img 
            src="https://indigo-tarsier-483796.hostingersite.com/wp-content/uploads/2026/04/You-hve-a-monster-locked-within.png" 
            alt="Miguel Nwobu - Full Stack Growth Marketer Portrait" 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            style={{ objectPosition: 'center 35%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-transparent opacity-75" />
          <div className="absolute bottom-6 left-6 font-['IBM_Plex_Mono'] text-xs text-[#8F8A86] uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#7A1A94] animate-pulse"></span>
            Miguel Nwobu • Full Stack Growth Marketer
          </div>
        </div>
      </section>

      {/* Experience Metrics (Staggered Grid) */}
      <section className="mb-28 md:mb-36">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-start">
          <div className="pt-0 md:pt-8 border-t border-[#8F8A86]/20 pt-4">
            <span className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.15em] text-[#8F8A86] block mb-2 font-medium">
              EXPERIENCE
            </span>
            <div className="font-['Fraunces'] text-4xl text-[#F3EDE4] font-normal">
              12+ <span className="text-[#f2afff] text-xl italic font-['Fraunces']">Years</span>
            </div>
            <p className="font-['Inter'] text-[#8F8A86]/80 text-xs mt-2 leading-relaxed">
              Navigating 14+ different industries with consistent growth systems.
            </p>
          </div>

          <div className="pt-0 border-t border-[#8F8A86]/20 pt-4">
            <span className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.15em] text-[#8F8A86] block mb-2 font-medium">
              GLOBAL REACH
            </span>
            <div className="font-['Fraunces'] text-4xl text-[#F3EDE4] font-normal">
              24+ <span className="text-[#f2afff] text-xl italic font-['Fraunces']">Countries</span>
            </div>
            <p className="font-['Inter'] text-[#8F8A86]/80 text-xs mt-2 leading-relaxed">
              International scaling expert across 5 continents with localized precision.
            </p>
          </div>

          <div className="pt-0 md:pt-8 border-t border-[#8F8A86]/20 pt-4">
            <span className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.15em] text-[#8F8A86] block mb-2 font-medium">
              CAMPAIGNS
            </span>
            <div className="font-['Fraunces'] text-4xl text-[#F3EDE4] font-normal">
              200+ <span className="text-[#f2afff] text-xl italic font-['Fraunces']">Executed</span>
            </div>
            <p className="font-['Inter'] text-[#8F8A86]/80 text-xs mt-2 leading-relaxed">
              Delivering over $50M in attributed revenue across acquisition channels.
            </p>
          </div>

          <div className="pt-0 border-t border-[#8F8A86]/20 pt-4">
            <span className="font-['IBM_Plex_Mono'] text-[11px] uppercase tracking-[0.15em] text-[#8F8A86] block mb-2 font-medium">
              INDUSTRIES
            </span>
            <div className="font-['Fraunces'] text-4xl text-[#F3EDE4] font-normal">
              14+ <span className="text-[#f2afff] text-xl italic font-['Fraunces']">Mastered</span>
            </div>
            <p className="font-['Inter'] text-[#8F8A86]/80 text-xs mt-2 leading-relaxed">
              SaaS, FinTech, E-Commerce, Web3, B2B Enterprise, and Consumer Apps.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="mb-28 md:mb-36 flex flex-col md:flex-row gap-12 md:gap-16 border-t border-[#8F8A86]/10 pt-16">
        <div className="md:w-1/3">
          <h2 className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] mb-3 font-medium">
            THE MISSION
          </h2>
          <div className="font-['Fraunces'] text-2xl md:text-3xl text-[#F3EDE4] leading-tight font-normal">
            Data with Soul.<br />Precision with Purpose.
          </div>
        </div>

        <div className="md:w-2/3 space-y-8">
          <div className="border-l border-[#8F8A86]/20 pl-6 md:pl-8">
            <h3 className="font-['Fraunces'] italic text-xl text-[#F3EDE4] mb-3 font-normal">
              The Quantitative Humanist
            </h3>
            <p className="font-['Inter'] text-[#8F8A86] text-sm leading-[1.6]">
              I believe that growth is not just a spreadsheet exercise—it’s an understanding of human desire quantified. My approach merges the technical rigor of data analytics with the psychological nuance of UX design. Every campaign is a conversation; every landing page is a journey.
            </p>
          </div>

          <div className="border-l border-[#8F8A86]/20 pl-6 md:pl-8">
            <h3 className="font-['Fraunces'] italic text-xl text-[#F3EDE4] mb-3 font-normal">
              Systems Over Silos
            </h3>
            <p className="font-['Inter'] text-[#8F8A86] text-sm leading-[1.6]">
              Marketing doesn't exist in a vacuum. I build full-stack environments where SEO feeds SEM, where CRO informs product roadmaps, and where automation removes friction from the human experience.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section (Technical Arsenal Grid) */}
      <section className="mb-28 md:mb-36 relative border-t border-[#8F8A86]/10 pt-16">
        <span className="absolute top-8 right-0 font-['Fraunces'] text-[14vw] md:text-[10vw] faded-text select-none uppercase tracking-tighter text-right pointer-events-none">
          STACK
        </span>
        <div className="flex flex-col mb-12">
          <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] mb-3 font-medium">
            Capabilities
          </div>
          <h2 className="font-['Fraunces'] text-[26px] md:text-[38px] text-[#F3EDE4] font-normal">
            Technical Arsenal
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { num: '01 / STRATEGY', title: 'Growth Strategy', desc: 'Designing long-term roadmaps for scalable user acquisition and unit-economic efficiency.' },
            { num: '02 / PAID MEDIA', title: 'Performance Marketing', desc: 'Google Ads, Meta CAPI, and LinkedIn targeting executed with surgical precision.' },
            { num: '03 / VISIBILITY', title: 'Technical SEO', desc: 'Beyond keywords—site architecture, programmatic SEO, and domain authority systems.' },
            { num: '04 / EXPERIENCE', title: 'CRO & UX Design', desc: 'Optimizing conversion funnels through rigorous A/B testing and intentional design.' },
            { num: '05 / SYSTEMS', title: 'Marketing Automation', desc: 'Lifecycle messaging, retention loops, and event-driven triggers that scale.' },
            { num: '06 / INTELLIGENCE', title: 'Data Analytics', desc: 'Insight extraction via GA4, BigQuery, Looker Studio, and SQL telemetry.' }
          ].map((skill) => (
            <div 
              key={skill.num}
              className="p-6 md:p-8 border border-[#8F8A86]/10 hover:border-[#7A1A94]/40 transition-all bg-[#0A0908] group cursor-default"
            >
              <div className="text-[#7A1A94] font-['IBM_Plex_Mono'] text-xs tracking-widest mb-3 font-medium">
                {skill.num}
              </div>
              <div className="font-['Fraunces'] text-xl text-[#F3EDE4] group-hover:text-[#f2afff] transition-colors font-normal mb-2">
                {skill.title}
              </div>
              <p className="font-['Inter'] text-[#8F8A86] text-xs md:text-sm leading-[1.6]">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tool Stack Carousel Section (The Ecosystem) */}
      <section className="mb-28 md:mb-36 relative border-t border-[#8F8A86]/10 pt-16">
        <span className="absolute top-8 left-0 font-['Fraunces'] text-[14vw] md:text-[10vw] faded-text select-none uppercase tracking-tighter pointer-events-none">
          TOOLS
        </span>
        <div className="flex flex-col mb-12">
          <div className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] text-[#7A1A94] mb-3 font-medium">
            Infrastructure
          </div>
          <h2 className="font-['Fraunces'] text-[26px] md:text-[38px] text-[#F3EDE4] font-normal">
            The Ecosystem
          </h2>
        </div>

        {/* Infinite Scrolling Carousel - Full Viewport Width Breakout */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden border-y border-[#8F8A86]/15 py-8 md:py-10 bg-[#070605] before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-16 md:before:w-32 before:bg-gradient-to-r before:from-[#070605] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-16 md:after:w-32 after:bg-gradient-to-l after:from-[#070605] after:to-transparent">
          <div className="flex animate-infinite-scroll w-max gap-8 md:gap-12 items-center">
            {[...TOOL_LOGOS, ...TOOL_LOGOS, ...TOOL_LOGOS].map((tool, idx) => (
              <div 
                key={`${tool.name}-${idx}`} 
                className="flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer shrink-0 hover:scale-105"
                title={tool.name}
              >
                <img 
                  src={tool.src} 
                  alt={tool.name} 
                  className="h-12 md:h-14 lg:h-16 w-auto object-contain rounded-xl shadow-md border border-[#8F8A86]/10 hover:border-[#7A1A94]/40 transition-colors" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Hide broken image gracefully if needed
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Aesthetic Shift Section (CTA) */}
      <section className="relative bg-[#100e09] border border-[#8F8A86]/10 py-20 px-8 md:px-16 text-center my-12">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-['Fraunces'] italic text-2xl md:text-3xl text-[#F3EDE4] mb-4 font-normal">
            "Composure is a weapon."
          </h2>
          <p className="font-['Inter'] text-[#8F8A86] text-sm md:text-base mb-8 leading-relaxed">
            Let's discuss how we can build your next growth engine with the precision it deserves.
          </p>
          <button 
            onClick={onOpenContact}
            className="bg-[#F3EDE4] text-[#0A0908] px-8 py-4 font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#7A1A94] hover:text-[#F3EDE4] transition-all transform hover:scale-105 cursor-pointer shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};
