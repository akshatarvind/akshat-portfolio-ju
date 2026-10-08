import React from 'react';
import { ArrowDown, ArrowRight, Code2, Flame, Terminal, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenModal }) {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const el = document.querySelector(sectionId);
    if (el) {
      const navOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPos = elPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
      aria-label="Introduction Hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-red-900/60 shadow-lg shadow-red-600/10 mb-8 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-200 tracking-wide flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-orange-400 inline" />
              <span>{personalInfo.statusBadge}</span>
            </span>
          </div>

          {/* Name & Role Hierarchy */}
          <div className="space-y-3 mb-6">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-red-500 font-semibold">
              Personal Portfolio
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
              {personalInfo.name}
            </h1>
            <p className="text-base sm:text-xl md:text-2xl font-medium text-slate-300">
              <span className="text-slate-100">{personalInfo.shortRole}</span>
              <span className="mx-2.5 text-slate-600">|</span>
              <span className="bg-gradient-to-r from-red-500 via-rose-500 to-orange-500 bg-clip-text text-transparent font-bold">
                {personalInfo.specialization}
              </span>
            </p>
          </div>

          {/* Strong Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mb-6 max-w-3xl leading-snug">
            &ldquo;{personalInfo.headline}&rdquo;
          </h2>

          {/* Short Authentic Bio */}
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-10">
            {personalInfo.shortBio}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto mb-14">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 hover:from-red-500 hover:to-orange-500 rounded-xl shadow-lg shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/70 hover:border-red-500/50 rounded-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto backdrop-blur-md"
            >
              <span>Let's Connect</span>
              <Flame className="w-4 h-4 text-orange-400" />
            </a>
          </div>

          {/* Tech Vibe Quick Indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl pt-8 border-t border-slate-800/80">
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-dark-card/60 border border-white/5 text-xs text-slate-400 font-mono">
              <Terminal className="w-3.5 h-3.5 text-red-500" />
              <span>Python & JS</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-dark-card/60 border border-white/5 text-xs text-slate-400 font-mono">
              <Cpu className="w-3.5 h-3.5 text-orange-500" />
              <span>Generative AI</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-dark-card/60 border border-white/5 text-xs text-slate-400 font-mono">
              <Code2 className="w-3.5 h-3.5 text-rose-500" />
              <span>React & Vite</span>
            </div>
            <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-dark-card/60 border border-white/5 text-xs text-slate-400 font-mono">
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>AI Workflows</span>
            </div>
          </div>

          {/* Secondary Explorer Link */}
          <div className="mt-12">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, '#about')}
              className="group inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-red-400 transition-colors"
              aria-label="Scroll to About section"
            >
              <span>Explore my journey</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
