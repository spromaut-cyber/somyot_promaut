import { useState } from 'react';
import { X, ExternalLink, CheckCircle2, TrendingUp, Laptop, Tablet, Smartphone, Calendar, Building, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../types';

interface CaseStudyModalProps {
  project: PortfolioItem | null;
  onClose: () => void;
  onRequestQuoteForSimilar: (projectTitle: string) => void;
}

export default function CaseStudyModal({ project, onClose, onRequestQuoteForSimilar }: CaseStudyModalProps) {
  const [deviceView, setDeviceView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-3 sm:p-4 md:p-6 relative z-10">
        <div className="bg-[#071D3A] text-white w-full max-w-4xl rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden relative">
          
          {/* Header Bar */}
          <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-[#06152E]/90">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#38D5FF] animate-pulse" />
              <div>
                <span className="text-xs font-semibold text-[#38D5FF] tracking-wider uppercase font-display">
                  {project.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-thai text-white">
                  {project.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto space-y-8">
            
            {/* Interactive Device Preview Showcase */}
            <div className="bg-[#06152E] rounded-2xl p-4 sm:p-6 border border-slate-800">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
                <div className="text-xs font-medium text-slate-400 font-thai flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#38D5FF]" />
                  <span>ตัวอย่างการแสดงผลบนอุปกรณ์จริง</span>
                </div>

                {/* Device Switcher Controls */}
                <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setDeviceView('desktop')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                      deviceView === 'desktop'
                        ? 'bg-[#087BFF] text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span>Desktop</span>
                  </button>
                  <button
                    onClick={() => setDeviceView('tablet')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                      deviceView === 'tablet'
                        ? 'bg-[#087BFF] text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" />
                    <span>Tablet</span>
                  </button>
                  <button
                    onClick={() => setDeviceView('mobile')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                      deviceView === 'mobile'
                        ? 'bg-[#087BFF] text-white'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* Responsive Container for Mockup */}
              <div className="flex justify-center items-center py-4 min-h-[280px]">
                {deviceView === 'desktop' && (
                  <div className="w-full max-w-2xl bg-slate-900 rounded-xl border-2 border-slate-700 shadow-2xl p-3">
                    <div className="flex items-center gap-1.5 pb-2 border-b border-slate-800 mb-2">
                      <div className="w-2 h-2 rounded-full bg-rose-500" />
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px] text-slate-400 font-mono ml-2">https://{project.id}.com</span>
                    </div>
                    <div className={`p-6 rounded-lg bg-gradient-to-br ${project.accentBg} text-white`}>
                      <span className="text-[10px] uppercase tracking-wider text-[#38D5FF] font-semibold">{project.categoryLabel}</span>
                      <h4 className="text-xl sm:text-2xl font-bold font-thai mt-1">{project.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-lg font-thai">{project.description}</p>
                      <div className="mt-6 flex gap-3">
                        <span className="px-3 py-1.5 rounded-lg bg-[#087BFF] text-white text-xs font-medium">ดูเว็บไซต์ตัวอย่าง</span>
                        <span className="px-3 py-1.5 rounded-lg bg-white/10 text-slate-300 text-xs font-medium">นัดหมายออนไลน์</span>
                      </div>
                    </div>
                  </div>
                )}

                {deviceView === 'tablet' && (
                  <div className="w-80 sm:w-96 bg-slate-900 rounded-2xl border-2 border-slate-700 shadow-2xl p-3">
                    <div className="text-center pb-2 text-[10px] text-slate-400 font-mono border-b border-slate-800 mb-2">
                      Tablet View (768px)
                    </div>
                    <div className={`p-5 rounded-xl bg-gradient-to-br ${project.accentBg} text-white`}>
                      <span className="text-[10px] uppercase text-[#38D5FF] font-semibold">{project.title}</span>
                      <h4 className="text-lg font-bold font-thai mt-1">{project.type}</h4>
                      <p className="text-xs text-slate-300 mt-2 font-thai">{project.description}</p>
                      <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-center text-xs">
                        <div className="bg-slate-900/60 p-1.5 rounded">
                          <div className="text-[10px] text-slate-400">{project.metrics.label1}</div>
                          <div className="font-bold text-[#38D5FF] font-num">{project.metrics.value1}</div>
                        </div>
                        <div className="bg-slate-900/60 p-1.5 rounded">
                          <div className="text-[10px] text-slate-400">{project.metrics.label2}</div>
                          <div className="font-bold text-emerald-400 font-num">{project.metrics.value2}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {deviceView === 'mobile' && (
                  <div className="w-56 bg-slate-900 rounded-3xl border-2 border-slate-700 shadow-2xl p-2.5">
                    <div className="w-12 h-2 bg-slate-800 rounded-full mx-auto mb-2" />
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.accentBg} text-white`}>
                      <span className="text-[9px] uppercase text-[#38D5FF] font-bold">Mobile First</span>
                      <h4 className="text-sm font-bold font-thai mt-1">{project.title}</h4>
                      <p className="text-[10px] text-slate-300 mt-1 line-clamp-3 font-thai">{project.description}</p>
                      <div className="mt-3 w-full py-1.5 bg-[#087BFF] rounded-lg text-center text-[10px] font-bold">
                        ติดต่อผ่าน LINE OA
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Impact Metrics Banner */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#06152E] rounded-2xl p-5 border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-[#38D5FF] flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#38D5FF] font-num">
                    {project.metrics.value1}
                  </div>
                  <div className="text-xs text-slate-400 font-thai">
                    {project.metrics.label1}
                  </div>
                </div>
              </div>

              <div className="bg-[#06152E] rounded-2xl p-5 border border-slate-800 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-num">
                    {project.metrics.value2}
                  </div>
                  <div className="text-xs text-slate-400 font-thai">
                    {project.metrics.label2}
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Details: Challenge & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#06152E] rounded-2xl p-5 border border-slate-800">
                <h4 className="text-sm font-bold text-rose-400 font-thai uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  โจทย์และความต้องการ (Challenge)
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-thai leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="bg-[#06152E] rounded-2xl p-5 border border-slate-800">
                <h4 className="text-sm font-bold text-emerald-400 font-thai uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  แนวทางการออกแบบและแก้ปัญหา (Solution)
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-thai leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features Built */}
            <div className="bg-[#06152E] rounded-2xl p-5 border border-slate-800">
              <h4 className="text-sm font-bold text-white font-thai mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#38D5FF]" />
                ฟีเจอร์สำคัญที่พัฒนาในระบบ
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 font-thai bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38D5FF] mt-1.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Metadata */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white font-thai">เทคโนโลยีที่ใช้:</span>
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[11px] border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 font-thai">
                <span className="flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-slate-500" />
                  {project.client}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  ปี {project.year}
                </span>
              </div>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="p-5 sm:p-6 border-t border-slate-800 bg-[#06152E]/90 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-800 font-thai text-sm font-medium transition-colors cursor-pointer"
            >
              กลับสู่หน้าหลัก
            </button>

            <button
              onClick={() => {
                onClose();
                onRequestQuoteForSimilar(project.title);
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#087BFF] to-[#38D5FF] text-white font-thai text-sm font-bold shadow-lg shadow-[#087BFF]/30 hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>สนใจสร้างเว็บไซต์สไตล์นี้</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
