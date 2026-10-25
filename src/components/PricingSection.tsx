import { useRef } from 'react';
import { Check, Sparkles, ArrowRight, CornerDownRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/landingData';
import { useSectionAnimation } from '../hooks/useGsapAnimation';

interface PricingSectionProps {
  onSelectPlan: (planId: string) => void;
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useSectionAnimation({
    triggerRef: sectionRef,
    cardsSelector: '.gsap-pricing-card',
    headerSelector: '.gsap-header',
    stagger: 0.12,
    yOffset: 36,
    duration: 0.8,
  });

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#071D3A] via-[#06152E] to-[#071D3A] text-white relative overflow-hidden"
    >
      {/* Background Cyber Grid & Ambient Blue Glow */}
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#087BFF]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#38D5FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Split Layout: Intro on Left & Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="gsap-header lg:col-span-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#087BFF]/20 border border-[#38D5FF]/30 text-[#38D5FF] text-xs font-semibold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TRANSPARENT PRICING</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-thai tracking-tight mb-4 leading-tight">
              เลือกแพ็กเกจที่ใช่ <br className="hidden sm:inline" />
              <span className="text-[#38D5FF] glow-text-cyan">สำหรับธุรกิจของคุณ</span>
            </h2>
            
            <p className="text-slate-300 text-base sm:text-lg font-thai leading-relaxed max-w-2xl">
              เรามี 4 แพ็กเกจให้คุณเลือกตามเป้าหมายและงบประมาณ ชัดเจนทุกรายการ ไม่มีค่าใช้จ่ายแอบแฝง พร้อมทีมงานดูแลคุณตลอดอายุการใช้งาน
            </p>
          </div>

          {/* Value Highlights with pointing badge */}
          <div className="gsap-header lg:col-span-4 bg-[#06152E]/90 border border-slate-700/70 rounded-2xl p-6 relative backdrop-blur-md">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-[#38D5FF] tracking-wider uppercase">
                ทุกแพ็กเกจการันตี
              </span>
              <div className="inline-flex items-center gap-1 text-xs font-thai font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                พร้อมใช้งานจริง
              </div>
            </div>

            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-thai">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#38D5FF] shrink-0" />
                <span>ออกแบบเฉพาะธุรกิจคุณ ไม่ซ้ำใคร</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#38D5FF] shrink-0" />
                <span>รองรับมือถือ 100% (Responsive)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#38D5FF] shrink-0" />
                <span>โครงสร้าง SEO คุณภาพสูง</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#38D5FF] shrink-0" />
                <span>ดูแลหลังการขายตลอดอายุการใช้งาน</span>
              </li>
            </ul>

            {/* Hand-drawn style start price pointer */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-end gap-2 text-[#38D5FF]">
              <CornerDownRight className="w-4 h-4 text-[#38D5FF] transform -rotate-12" />
              <span className="text-sm font-bold font-thai tracking-wide animate-pulse">
                เริ่มต้นเพียง 3,900 บาท
              </span>
            </div>
          </div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isBusiness = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`gsap-pricing-card relative rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between ${
                  isBusiness
                    ? 'bg-gradient-to-b from-[#0b2b5c] via-[#071D3A] to-[#06152E] border-2 border-[#38D5FF] shadow-2xl shadow-[#087BFF]/30 -translate-y-2'
                    : 'bg-[#071D3A]/80 hover:bg-[#071D3A] border border-slate-700/60 hover:border-slate-500 shadow-xl'
                }`}
              >
                {/* Popular Pill Badge on Business */}
                {isBusiness && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#087BFF] to-[#38D5FF] text-white text-[11px] font-bold font-display uppercase tracking-wider shadow-md shadow-[#087BFF]/40">
                      Most Popular
                    </span>
                  </div>
                )}

                <div>
                  {/* Card Title & Target */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold font-display text-white mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-thai min-h-[32px]">
                      {plan.targetAudience}
                    </p>
                  </div>

                  {/* Price Tag */}
                  <div className="mb-6 pb-6 border-b border-slate-700/70">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-num tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-sm font-semibold text-slate-300 font-thai">บาท</span>
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 font-thai">
                      ระยะเวลาทำ {plan.deliveryTime}
                    </div>
                  </div>

                  {/* Bullet List of Features */}
                  <div className="mb-8">
                    <span className="text-xs font-semibold text-slate-300 font-thai block mb-3">
                      สิ่งที่คุณจะได้รับ:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200 font-thai">
                          <div className={`mt-0.5 rounded-full p-0.5 shrink-0 ${isBusiness ? 'bg-[#38D5FF]/20 text-[#38D5FF]' : 'bg-[#087BFF]/20 text-[#087BFF]'}`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                  <button
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3.5 rounded-xl font-bold font-thai text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer ${
                      isBusiness
                        ? 'bg-gradient-to-r from-[#087BFF] to-[#38D5FF] text-white shadow-lg shadow-[#087BFF]/40 hover:shadow-[#38D5FF]/50 hover:brightness-110'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 hover:border-slate-500'
                    }`}
                  >
                    <span>สั่งซื้อแพ็กเกจนี้</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[10px] text-slate-400 mt-2 font-thai">
                    สามารถขอใบเสนอราคาอย่างเป็นทางการได้
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Note */}
        <div className="gsap-reveal mt-12 text-center text-xs text-slate-400 font-thai max-w-2xl mx-auto">
          หมายเหตุ: ราคาดังกล่าวรวมบริการติดตั้งและสอนการใช้งานเบื้องต้นเรียบร้อยแล้ว หากมีความต้องการระบบเฉพาะทางเพิ่มเติม สามารถแจ้งเพื่อประเมินราคาตามขอบเขตงานได้ครับ
        </div>
      </div>
    </section>
  );
}
