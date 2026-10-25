import { useRef } from 'react';
import { Building2, ShoppingCart, Sparkles, RefreshCw, ShieldCheck, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/landingData';
import { useSectionAnimation } from '../hooks/useGsapAnimation';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  useSectionAnimation({
    triggerRef: sectionRef,
    cardsSelector: '.gsap-service-card',
    headerSelector: '.gsap-header',
    stagger: 0.1,
    yOffset: 32,
    duration: 0.75,
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#087BFF]" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-6 h-6 text-[#087BFF]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#087BFF]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-[#087BFF]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#087BFF]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#087BFF]" />;
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 bg-[#F4F8FF] text-slate-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="gsap-header text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#087BFF] text-xs font-semibold tracking-wider uppercase mb-3">
            <span>OUR SERVICES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06152E] font-thai tracking-tight mb-4">
            บริการรับทำเว็บไซต์ครบวงจร
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-thai leading-relaxed">
            ไม่ว่าคุณจะเริ่มต้นธุรกิจ หรืออยากยกระดับแบรนด์ เรามีโซลูชันที่เหมาะกับเป้าหมายและงบประมาณของคุณ
          </p>
        </div>

        {/* 5 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              onClick={() => onSelectService(service.id)}
              className="gsap-service-card group bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#087BFF]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden hover:-translate-y-1.5"
            >
              {/* Subtle blue accent glow on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#087BFF]/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-[#087BFF]/20 transition-colors" />

              <div>
                {/* Icon Container with gentle glow */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50/80 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#087BFF]/10 transition-transform duration-300">
                  {getIcon(service.icon)}
                </div>

                {/* Service Title & Subtitle */}
                <h3 className="text-lg font-bold text-[#06152E] font-thai mb-1 group-hover:text-[#087BFF] transition-colors">
                  {service.title}
                </h3>
                <span className="text-xs font-medium text-slate-400 font-display block mb-3">
                  {service.subtitle}
                </span>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 font-thai leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat, fIdx) => (
                    <li key={fIdx} className="text-xs text-slate-500 font-thai flex items-start gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#087BFF] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer / Action */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#087BFF] group-hover:text-[#0052cc]">
                <span className="font-thai">ปรึกษาบริการนี้</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="gsap-reveal mt-14 max-w-4xl mx-auto bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#06152E] font-thai">
                ทุกโปรเจกต์มีสัญญาจ้างและขอบเขตงานชัดเจน
              </h4>
              <p className="text-xs text-slate-500 font-thai">
                ส่งมอบงานตรงเวลา มีรอบตรวจแก้ พร้อมดูแลระบบหลังการขายอย่างจริงใจ
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectService('consult')}
            className="px-5 py-2.5 rounded-xl bg-[#087BFF] hover:bg-[#0062d6] text-white text-xs sm:text-sm font-semibold font-thai transition-colors shrink-0 shadow-md shadow-[#087BFF]/20 cursor-pointer"
          >
            ขอคำปรึกษาฟรี
          </button>
        </div>

      </div>
    </section>
  );
}
