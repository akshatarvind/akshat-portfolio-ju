import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Flame } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer({ onOpenModal }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (e, platform, url) => {
    e.preventDefault();
    if (url.includes('[YOUR') || url.includes('placeholder')) {
      onOpenModal({
        title: `${platform} Link Notice`,
        message: (
          <div className="space-y-2">
            <p className="text-sm text-slate-300">
              The {platform} link is currently a placeholder (<code className="px-1.5 py-0.5 rounded bg-black/60 text-red-300 font-mono text-xs">{url}</code>).
            </p>
            <p className="text-xs text-slate-400">
              To update it with your real URL, open <code className="text-red-400 font-mono">src/data/portfolioData.js</code>.
            </p>
          </div>
        ),
        actionText: null,
        actionUrl: null
      });
      return;
    }

    if (platform === 'Email') {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <footer className="relative border-t border-dark-border bg-dark-base/90 backdrop-blur-md pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Identity & Role */}
          <div className="text-center md:text-left space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-tr from-red-600 via-rose-600 to-orange-500 text-white text-xs font-mono font-bold shadow-sm shadow-red-600/30">
                AA
              </span>
              <span className="font-extrabold tracking-wider text-base text-white">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {personalInfo.role}
            </p>
            <p className="text-xs font-mono text-slate-500">
              {personalInfo.college} • {personalInfo.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              onClick={(e) => handleLinkClick(e, 'GitHub', personalInfo.githubUrl)}
              className="w-10 h-10 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500/50 hover:bg-dark-card/90 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedinUrl}
              onClick={(e) => handleLinkClick(e, 'LinkedIn', personalInfo.linkedinUrl)}
              className="w-10 h-10 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500/50 hover:bg-dark-card/90 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.emailLink}
              onClick={(e) => handleLinkClick(e, 'Email', personalInfo.emailLink)}
              className="w-10 h-10 rounded-xl bg-dark-card border border-dark-border flex items-center justify-center text-slate-400 hover:text-white hover:border-red-500/50 hover:bg-dark-card/90 transition-all"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top Button */}
            <button
              type="button"
              onClick={scrollToTop}
              className="w-10 h-10 rounded-xl bg-red-950/40 border border-red-800/40 flex items-center justify-center text-red-400 hover:bg-red-900/50 hover:text-white transition-all ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Tag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 Akshat Arvind. All rights reserved.
          </div>

          <div className="flex items-center gap-2 font-mono">
            <span>Built with React &amp; Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
