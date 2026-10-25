import { useState, useRef } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS } from '../data/landingData';
import { useSectionAnimation } from '../hooks/useGsapAnimation';

interface FaqSectionProps {
  onOpenQuoteModal: () => void;
}

export default function FaqSection({ onOpenQuoteModal }: FaqSectionProps) {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3']);
  const sectionRef = useRef<HTMLElement | null>(null);

  useSectionAnimation({
    triggerRef: sectionRef,
    cardsSelector: '.gsap-faq-card',
    headerSelector: '.gsap-header',
    stagger: 0.08,
    yOffset: 24,
    duration: 0.7,
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-24 bg-[#F4F8FF] text-slate-800 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="gsap-header text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#087BFF] text-xs font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#06152E] font-thai tracking-tight mb-4">
            คำถามที่พบบ่อย
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-thai leading-relaxed">
            รวมคำตอบเกี่ยวกับบริการรับทำเว็บไซต์ เพื่อช่วยให้คุณตัดสินใจได้ง่ายขึ้น
          </p>
        </div>

        {/* 2-Column Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {FAQS.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className={`gsap-faq-card bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-[#087BFF]/50 shadow-md shadow-blue-500/5'
                    : 'border-slate-200/80 shadow-xs hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#087BFF] cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold font-thai text-[#06152E] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full shrink-0 transition-colors ${
                    isOpen ? 'bg-[#087BFF] text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-xs sm:text-sm text-slate-600 font-thai leading-relaxed border-t border-slate-100 mt-1">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Banner */}
        <div className="gsap-reveal mt-14 max-w-2xl mx-auto text-center bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h3 className="text-base sm:text-lg font-bold font-thai text-[#06152E] mb-2">
            มีคำถามเพิ่มเติมที่ยังไม่ได้ระบุไว้?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 font-thai mb-6">
            ทีมงาน Prowebcreate ยินดีให้คำแนะนำโดยละเอียดโดยไม่มีค่าใช้จ่าย ทักแชตคุยกับเราได้ตลอดเวลา
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 rounded-xl bg-[#087BFF] hover:bg-[#0062d6] text-white text-xs sm:text-sm font-semibold font-thai transition-colors flex items-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ส่งคำถามถึงทีมงาน</span>
            </button>
            <a
              href="https://line.me/ti/p/~@prowebcreate"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white text-xs sm:text-sm font-semibold font-thai transition-colors flex items-center gap-2"
            >
              <span>แชตผ่าน LINE OA</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
