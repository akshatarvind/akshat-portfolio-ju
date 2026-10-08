import React, { useState } from 'react';
import { 
  Terminal, FileCode2, FileCode, Palette, 
  BrainCircuit, Sparkles, Cpu, MessageSquareCode, 
  Atom, Zap, Layers, Smartphone, 
  CheckCircle2, Wand2, Lightbulb, Code2, Flame
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const iconMap = {
    Terminal: Terminal,
    FileCode2: FileCode2,
    FileCode: FileCode,
    Palette: Palette,
    BrainCircuit: BrainCircuit,
    Sparkles: Sparkles,
    Cpu: Cpu,
    MessageSquareCode: MessageSquareCode,
    Atom: Atom,
    Zap: Zap,
    Layers: Layers,
    Smartphone: Smartphone,
    CheckCircle2: CheckCircle2,
    Wand2: Wand2,
    Lightbulb: Lightbulb,
  };

  const categories = ["ALL", "PROGRAMMING", "AI & TECHNOLOGY", "WEB DEVELOPMENT", "PRODUCTIVITY"];

  const filteredCategories = selectedCategory === "ALL" 
    ? skillsData 
    : skillsData.filter(cat => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative scroll-mt-20" aria-label="Skills and Technologies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/50 border border-red-800/50 text-red-400 text-xs font-mono font-medium mb-3">
              <Flame className="w-3.5 h-3.5 text-orange-400" />
              <span>TOOLKIT & FOUNDATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Skills & Technologies
            </h2>
            <p className="mt-2 text-slate-400 text-sm sm:text-base max-w-xl">
              Languages, artificial intelligence concepts, modern web libraries, and productivity workflows I actively practice.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono font-medium rounded-xl transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold shadow-md shadow-red-600/30'
                    : 'bg-dark-card border border-dark-border text-slate-400 hover:text-white hover:border-red-900/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grouped by Category */}
        <div className="space-y-10">
          {filteredCategories.map((catGroup, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center justify-between border-b border-dark-border pb-2.5">
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-red-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)]" />
                  {catGroup.category}
                </h3>
                <span className="text-xs text-slate-400 hidden sm:inline-block">
                  {catGroup.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {catGroup.skills.map((skill, sIdx) => {
                  const IconComp = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={sIdx}
                      className="glass-card p-5 rounded-xl border border-dark-border glass-card-hover group flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-10 h-10 rounded-xl bg-red-950/40 border border-red-800/40 flex items-center justify-center text-red-400 mb-4 group-hover:scale-105 group-hover:border-red-500/60 transition-transform">
                          <IconComp className="w-5 h-5 text-red-400" />
                        </div>
                        <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                          {skill.detail}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span>Practicing</span>
                        <span className="text-red-500 font-semibold">Active</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
