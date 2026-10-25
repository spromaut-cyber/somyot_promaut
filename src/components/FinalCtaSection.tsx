import { useRef } from 'react';
import { MessageSquare, Phone, Mail, ArrowRight, Sparkles, Shield, Clock, Zap } from 'lucide-react';
import { AGENCY_CONTACT } from '../data/landingData';
import { useSectionAnimation } from '../hooks/useGsapAnimation';

interface FinalCtaProps {
  onOpenQuoteModal: () => void;
}

export default function FinalCtaSection({ onOpenQuoteModal }: FinalCtaProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useSectionAnimation({
    triggerRef: sectionRef,
    cardsSelector: '.gsap-cta-card',
    headerSelector: '.gsap-header',
    stagger: 0.1,
    yOffset: 32,
    duration: 0.8,
  });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#06152E] via-[#071D3A] to-[#06152E] text-white relative overflow-hidden"
    >
      {/* Background Cyber Horizon & Ambient Grids */}
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#087BFF]/25 via-[#38D5FF]/15 to-transparent blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Glow Accent Pill */}
        <div className="gsap-header inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#087BFF]/20 border border-[#38D5FF]/40 text-[#38D5FF] text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
          <Sparkles className="w-4 h-4" />
          <span>START YOUR DIGITAL JOURNEY</span>
        </div>

        {/* Dominant Headline */}
        <h2 className="gsap-header text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold font-thai text-white tracking-tight leading-[1.2] mb-6 max-w-4xl mx-auto">
          พร้อมเริ่มต้นสร้างเว็บไซต์ <br />
          <span className="text-[#38D5FF] glow-text-cyan">ที่เป็นเอกลักษณ์ของคุณ</span> แล้วหรือยัง?
        </h2>

        {/* Subtitle */}
        <p className="gsap-header text-base sm:text-xl text-slate-300 font-thai leading-relaxed max-w-2xl mx-auto mb-10">
          พูดคุยกับทีมงานเพื่อค้นหาแนวทางที่เหมาะกับธุรกิจและงบประมาณของคุณ ให้เราช่วยเปลี่ยนไอเดียให้กลายเป็นยอดขายจริง
        </p>

        {/* CTA Buttons */}
        <div className="gsap-header flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#087BFF] via-[#0062d6] to-[#087BFF] text-white font-bold font-thai text-base sm:text-lg shadow-xl shadow-[#087BFF]/40 hover:shadow-[#087BFF]/70 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5 text-[#38D5FF]" />
            <span>ติดต่อเราวันนี้</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={AGENCY_CONTACT.lineUrl}
            target="_blank"
            rel="noreferrer"
            className="px-7 py-4 rounded-2xl bg-[#06C755] hover:bg-[#05b34c] text-white font-bold font-thai text-base sm:text-lg shadow-xl shadow-[#06C755]/30 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2.5"
          >
            <span>ทักแชต LINE OA ({AGENCY_CONTACT.lineId})</span>
          </a>
        </div>

        {/* Quick Contact Information Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-8 border-t border-slate-800">
          <a
            href={`tel:${AGENCY_CONTACT.phone}`}
            className="gsap-cta-card flex items-center justify-center gap-3 p-4 rounded-xl bg-[#071D3A]/70 border border-slate-700/60 hover:border-[#38D5FF]/50 transition-colors text-slate-300 hover:text-white"
          >
            <div className="w-9 h-9 rounded-lg bg-[#087BFF]/20 text-[#38D5FF] flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-thai">โทรศัพท์ด่วน</div>
              <div className="text-xs sm:text-sm font-bold font-num text-white">{AGENCY_CONTACT.phoneDisplay}</div>
            </div>
          </a>

          <a
            href={`mailto:${AGENCY_CONTACT.email}`}
            className="gsap-cta-card flex items-center justify-center gap-3 p-4 rounded-xl bg-[#071D3A]/70 border border-slate-700/60 hover:border-[#38D5FF]/50 transition-colors text-slate-300 hover:text-white"
          >
            <div className="w-9 h-9 rounded-lg bg-[#087BFF]/20 text-[#38D5FF] flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-thai">ส่งอีเมล</div>
              <div className="text-xs sm:text-sm font-bold text-white truncate max-w-[150px]">{AGENCY_CONTACT.email}</div>
            </div>
          </a>

          <div className="gsap-cta-card flex items-center justify-center gap-3 p-4 rounded-xl bg-[#071D3A]/70 border border-slate-700/60 text-slate-300">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] text-slate-400 font-thai">เวลาทำการ</div>
              <div className="text-xs sm:text-sm font-bold text-white font-thai">{AGENCY_CONTACT.workingHours}</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="gsap-reveal mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-thai">
          <span className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-emerald-400" />
            สัญญาจ้างและใบเสนอราคาถูกต้อง
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#38D5FF]" />
            ปรึกษาเบื้องต้นฟรี ไม่มีข้อผูกมัด
          </span>
        </div>

      </div>
    </section>
  );
}
