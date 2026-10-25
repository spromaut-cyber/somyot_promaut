import { useState, useRef } from 'react';
import { Award, Palette, Cpu, Headphones, Play, X, Sparkles } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/landingData';
import { useSectionAnimation } from '../hooks/useGsapAnimation';

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
}

export default function WhyChooseUsSection({ onOpenQuoteModal }: WhyChooseUsProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useSectionAnimation({
    triggerRef: sectionRef,
    cardsSelector: '.gsap-pillar-card',
    headerSelector: '.gsap-header',
    stagger: 0.12,
    yOffset: 30,
    duration: 0.75,
  });

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-6 h-6 text-[#087BFF]" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-[#087BFF]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#087BFF]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#087BFF]" />;
      default:
        return <Award className="w-6 h-6 text-[#087BFF]" />;
    }
  };

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="py-24 bg-white text-slate-900 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 4 Pillars & Text */}
          <div className="lg:col-span-6">
            <div className="gsap-header">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#087BFF] text-xs font-semibold tracking-wider uppercase mb-3">
                <span>WHY CHOOSE US</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-4.5xl font-extrabold font-thai tracking-tight text-[#06152E] mb-4">
                ทำไมต้องเลือกเรา?
              </h2>

              <p className="text-base sm:text-lg text-slate-600 font-thai leading-relaxed mb-10">
                เพราะเราไม่ได้แค่ “ทำเว็บไซต์” แต่เราสร้างเว็บไซต์ที่มีเอกลักษณ์ และตอบโจทย์ธุรกิจของคุณจริง ๆ
              </p>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {WHY_CHOOSE_US.map((item, idx) => (
                <div
                  key={idx}
                  className="gsap-pillar-card p-5 rounded-2xl bg-[#F4F8FF] border border-blue-100 hover:border-[#087BFF]/40 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-blue-100 flex items-center justify-center mb-3 shadow-xs">
                    {getPillarIcon(item.icon)}
                  </div>
                  <h3 className="text-base font-bold font-thai text-[#06152E] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-thai leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="gsap-reveal">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 rounded-xl bg-[#087BFF] hover:bg-[#0062d6] text-white font-thai font-semibold text-sm shadow-md shadow-[#087BFF]/25 hover:shadow-lg transition-all cursor-pointer"
              >
                เริ่มต้นโปรเจกต์ของคุณกับเรา
              </button>
            </div>
          </div>

          {/* Right Column: 3D Multi-Device Visual Mockup */}
          <div className="gsap-reveal lg:col-span-6 relative">
            
            {/* Floating Top Right Tagline */}
            <div className="absolute -top-6 right-0 z-20 bg-[#06152E] text-white text-xs font-thai font-semibold px-4 py-2 rounded-2xl shadow-xl border border-slate-700/80 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#38D5FF]" />
              <span>เว็บไซต์ที่สร้างเพื่อธุรกิจของคุณ</span>
            </div>

            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/80 via-cyan-100/40 to-transparent rounded-3xl blur-2xl transform scale-95" />

            {/* Devices Composition Container */}
            <div className="relative bg-[#071D3A] rounded-3xl p-6 sm:p-8 border border-slate-700/80 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 cyber-grid opacity-30" />

              {/* Main Laptop Simulation */}
              <div className="relative z-10 bg-slate-900 rounded-xl p-3 border border-slate-700 shadow-2xl">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[10px] text-slate-400 font-mono">
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span>prowebcreate.com/agency-vision</span>
                </div>

                <div className="aspect-[16/10] bg-gradient-to-br from-[#06152E] via-[#071D3A] to-[#0b2752] rounded-lg p-5 flex flex-col justify-between relative overflow-hidden group">
                  <div className="relative z-10 flex items-center justify-between text-xs text-white">
                    <span className="font-bold tracking-wider">YOUR VISION. OUR CREATION.</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#087BFF]/40 text-[#38D5FF]">Production Grade</span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="relative z-10 my-auto text-center">
                    <button
                      onClick={() => setVideoModalOpen(true)}
                      className="w-16 h-16 rounded-full bg-[#087BFF] hover:bg-[#38D5FF] text-white flex items-center justify-center mx-auto shadow-xl shadow-[#087BFF]/50 transition-all duration-300 transform group-hover:scale-110 cursor-pointer"
                      aria-label="Play showreel video"
                    >
                      <Play className="w-7 h-7 fill-white ml-1" />
                    </button>
                    <span className="text-xs text-slate-300 font-thai block mt-2">
                      กดเพื่อดูวิดีโอแนะนำผลงาน (Showreel)
                    </span>
                  </div>

                  {/* Bottom Stats Inside Mockup */}
                  <div className="relative z-10 grid grid-cols-3 gap-2 text-center text-[10px] text-slate-300 pt-2 border-t border-slate-800/80">
                    <div>
                      <div className="text-[#38D5FF] font-bold font-num">100%</div>
                      <div>Responsive</div>
                    </div>
                    <div>
                      <div className="text-emerald-400 font-bold font-num">95+</div>
                      <div>PageSpeed</div>
                    </div>
                    <div>
                      <div className="text-indigo-400 font-bold font-num">24/7</div>
                      <div>Support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overlapping Smartphone */}
              <div className="absolute -bottom-4 -right-2 sm:right-4 w-32 aspect-[9/18] bg-slate-950 rounded-2xl p-1.5 border-2 border-[#38D5FF]/60 shadow-2xl z-20 hidden sm:block">
                <div className="w-full h-full bg-[#06152E] rounded-xl p-2 flex flex-col justify-between text-[8px] text-white">
                  <div className="text-center text-[8px] text-slate-400">Mobile Ready</div>
                  <div className="space-y-1">
                    <div className="w-full h-6 rounded bg-[#087BFF]/30 flex items-center justify-center text-[7px] text-[#38D5FF] font-bold">
                      Conversion Funnel
                    </div>
                    <div className="w-full h-1 bg-slate-800 rounded" />
                    <div className="w-2/3 h-1 bg-slate-800 rounded" />
                  </div>
                  <div className="text-center font-num text-[8px] text-emerald-400 font-bold">
                    Fast & Secure
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Showreel Video Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#071D3A] text-white w-full max-w-2xl rounded-3xl p-6 border border-slate-700 shadow-2xl relative">
            <button
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-xl cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#38D5FF]" />
              <h3 className="text-lg font-bold font-thai">
                Prowebcreate Showreel & Work Process
              </h3>
            </div>

            <div className="aspect-video bg-slate-900 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 cyber-grid opacity-30" />
              <div className="relative z-10 max-w-md">
                <div className="w-16 h-16 rounded-full bg-[#087BFF]/20 text-[#38D5FF] flex items-center justify-center mx-auto mb-3">
                  <Play className="w-8 h-8 fill-[#38D5FF]" />
                </div>
                <h4 className="text-base font-bold font-thai mb-2">
                  เบื้องหลังการออกแบบและพัฒนาเว็บไซต์
                </h4>
                <p className="text-xs text-slate-300 font-thai leading-relaxed mb-4">
                  เราผสานขั้นตอน UI/UX Research, High-Fidelity Prototyping, Modern Frontend Architecture และ Technical SEO เพื่อสร้างเว็บไซต์ที่พร้อมทำเงินให้คุณ
                </p>
                <div className="flex justify-center gap-2">
                  <span className="px-3 py-1 bg-slate-800 text-[11px] rounded-full text-slate-300">Design Sprints</span>
                  <span className="px-3 py-1 bg-slate-800 text-[11px] rounded-full text-slate-300">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-slate-800 text-[11px] rounded-full text-slate-300">Clean Code</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setVideoModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-[#087BFF] text-white text-xs font-thai font-semibold cursor-pointer"
              >
                เข้าใจแล้ว / ปิดหน้าต่าง
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
