import { useState, useRef } from 'react';
import { ExternalLink, TrendingUp, Sparkles, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/landingData';
import { PortfolioItem } from '../types';
import CaseStudyModal from './CaseStudyModal';
import { useSectionAnimation } from '../hooks/useGsapAnimation';

interface PortfolioSectionProps {
  onOpenQuoteModal: (planId?: string) => void;
}

export default function PortfolioSection({ onOpenQuoteModal }: PortfolioSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'property' | 'food' | 'tech'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  useSectionAnimation({
    triggerRef: sectionRef,
    cardsSelector: '.gsap-portfolio-card',
    headerSelector: '.gsap-header',
    stagger: 0.14,
    yOffset: 36,
    duration: 0.8,
  });

  const categories = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'property', label: 'Real Estate / Property' },
    { id: 'food', label: 'Restaurant / Food' },
    { id: 'tech', label: 'Corporate / Technology' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  const handleNext = () => {
    setActiveSlideIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    setActiveSlideIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="py-24 bg-[#06152E] text-white relative overflow-hidden"
    >
      {/* Background Digital Horizon & Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#087BFF]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-[#38D5FF]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="gsap-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#087BFF]/20 border border-[#38D5FF]/30 text-[#38D5FF] text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>OUR WORKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-thai tracking-tight text-white">
              ผลงานที่เราภูมิใจ
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-thai mt-3 max-w-2xl leading-relaxed">
              ทุกเว็บไซต์คือผลงานที่เราตั้งใจ เพื่อให้ธุรกิจของคุณเติบโตอย่างยั่งยืน
            </p>
          </div>

          {/* Carousel Arrows & Total Counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 font-num">
              {filteredProjects.length} โปรเจกต์ไฮไลต์
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label="Previous portfolio project"
                className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next portfolio project"
                className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="gsap-header flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id as any);
                setActiveSlideIndex(0);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-thai font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#087BFF] to-[#0052cc] text-white shadow-md shadow-[#087BFF]/30 border border-[#38D5FF]/40'
                  : 'bg-[#071D3A]/60 text-slate-400 hover:text-white hover:bg-[#071D3A] border border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="gsap-portfolio-card group bg-[#071D3A]/80 rounded-3xl border border-slate-700/70 hover:border-[#38D5FF]/50 shadow-xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Mockup Container */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative aspect-[16/10] bg-gradient-to-b from-slate-900 to-[#06152E] overflow-hidden p-4 flex items-center justify-center cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-tr ${project.accentBg} opacity-80 group-hover:opacity-100 transition-opacity`} />
                  <div className="absolute inset-0 cyber-grid opacity-30" />

                  {/* High Fidelity Mockup Simulation */}
                  <div className="relative z-10 w-full max-w-[90%] bg-slate-950 rounded-xl border border-slate-700/80 shadow-2xl overflow-hidden p-2 transform group-hover:scale-105 transition-transform duration-500">
                    <div className="flex items-center gap-1 pb-1.5 border-b border-slate-800 mb-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[8px] font-mono text-slate-400 ml-1.5 truncate">{project.title.toLowerCase()}.com</span>
                    </div>

                    <div className="h-28 sm:h-32 rounded-lg bg-[#06152E] p-3 flex flex-col justify-between relative overflow-hidden border border-slate-800/80">
                      <div className="flex items-center justify-between text-[9px] text-slate-400">
                        <span className="font-bold text-white tracking-wider">{project.title}</span>
                        <span className="text-[#38D5FF]">{project.type}</span>
                      </div>

                      <div className="my-auto">
                        <h4 className="text-xs sm:text-sm font-bold text-white font-thai leading-snug">
                          {project.title}
                        </h4>
                        <p className="text-[9px] text-slate-300 mt-0.5 line-clamp-1 font-thai">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-[8px] text-slate-400 pt-1 border-t border-slate-800">
                        <span>Responsive UI</span>
                        <span className="text-emerald-400 font-num">SEO Ready</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] z-20">
                    <span className="px-4 py-2 rounded-xl bg-[#087BFF] text-white text-xs font-thai font-semibold flex items-center gap-1.5 shadow-lg shadow-[#087BFF]/40">
                      <Eye className="w-4 h-4" />
                      ดูรายละเอียดเคสนี้
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold font-thai text-white group-hover:text-[#38D5FF] transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400">
                      {project.type}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-[#38D5FF] font-display mb-3">
                    {project.categoryLabel}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 font-thai leading-relaxed mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Metrics Badges */}
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
                    <div className="bg-[#06152E]/90 p-3 rounded-2xl border border-slate-800/80">
                      <div className="text-lg sm:text-xl font-extrabold text-[#38D5FF] font-num flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-[#38D5FF]" />
                        {project.metrics.value1}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-400 font-thai mt-0.5">
                        {project.metrics.label1}
                      </div>
                    </div>

                    <div className="bg-[#06152E]/90 p-3 rounded-2xl border border-slate-800/80">
                      <div className="text-lg sm:text-xl font-extrabold text-emerald-400 font-num flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        {project.metrics.value2}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-slate-400 font-thai mt-0.5">
                        {project.metrics.label2}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 rounded-xl bg-slate-800/80 hover:bg-[#087BFF] text-slate-200 hover:text-white text-xs font-semibold font-thai transition-all duration-200 flex items-center justify-center gap-2 border border-slate-700/60 hover:border-[#087BFF] cursor-pointer"
                >
                  <span>อ่านเรื่องราวความสำเร็จ (Case Study)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Banner */}
        <div className="gsap-reveal mt-16 text-center">
          <p className="text-sm text-slate-400 font-thai mb-4">
            ต้องการสร้างเว็บไซต์ที่ตอบโจทย์เฉพาะทางสำหรับธุรกิจของคุณ?
          </p>
          <button
            onClick={() => onOpenQuoteModal()}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#087BFF] to-[#38D5FF] text-white text-sm font-bold font-thai shadow-lg shadow-[#087BFF]/30 hover:brightness-110 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>ปรึกษาไอเดียเว็บไซต์กับเราฟรี</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestQuoteForSimilar={() => {
          setSelectedProject(null);
          onOpenQuoteModal();
        }}
      />
    </section>
  );
}
