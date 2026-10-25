import { useState, useRef, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { TEAM_MEMBERS, CUSTOMER_REVIEWS } from '../data/landingData';
import { useSectionAnimation } from '../hooks/useGsapAnimation';

export default function TeamAndReviewsSection() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const reviewCardRef = useRef<HTMLDivElement | null>(null);

  useSectionAnimation({
    triggerRef: sectionRef,
    cardsSelector: '.gsap-team-member',
    headerSelector: '.gsap-header',
    stagger: 0.1,
    yOffset: 30,
    duration: 0.75,
  });

  // Micro-fade on review switch
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !reviewCardRef.current) return;

    gsap.fromTo(
      reviewCardRef.current,
      { opacity: 0.5, y: 8 },
      { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out' }
    );
  }, [currentReviewIndex]);

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % CUSTOMER_REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + CUSTOMER_REVIEWS.length) % CUSTOMER_REVIEWS.length);
  };

  const review = CUSTOMER_REVIEWS[currentReviewIndex];

  return (
    <section
      id="team-reviews"
      ref={sectionRef}
      className="py-24 bg-[#071D3A] text-white relative overflow-hidden"
    >
      {/* Background Cyber Horizon & Subtle Grids */}
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#087BFF]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#38D5FF]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Dual-Zone Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* ZONE 1: TEAM */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="gsap-header">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#087BFF]/20 border border-[#38D5FF]/30 text-[#38D5FF] text-xs font-semibold tracking-wider uppercase mb-3">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>OUR EXPERTS</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-3.5xl font-extrabold font-thai text-white tracking-tight mb-2">
                  ทีมงานของเรา
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-thai leading-relaxed mb-8">
                  ผู้เชี่ยวชาญด้านเว็บไซต์ พร้อมดูแลคุณในทุกขั้นตอน
                </p>
              </div>

              {/* 5 Team Member Avatars List */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-3 text-center mb-6">
                {TEAM_MEMBERS.map((member) => (
                  <div
                    key={member.id}
                    className="gsap-team-member group flex flex-col items-center"
                  >
                    {/* Circle Avatar with Glowing Rim */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-0.5 bg-gradient-to-tr from-[#087BFF] to-[#38D5FF] mb-2 shadow-lg shadow-[#087BFF]/25 group-hover:scale-105 group-hover:shadow-[#38D5FF]/50 transition-all duration-300">
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${member.avatarBg} flex items-center justify-center text-white font-bold text-sm sm:text-base border-2 border-[#071D3A] relative overflow-hidden`}>
                        <span>{member.initials}</span>
                        <div className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 rounded-full border border-slate-900 flex items-center justify-center">
                          <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold font-thai text-white group-hover:text-[#38D5FF] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 font-thai leading-tight mt-0.5">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Team Commitment Bar */}
            <div className="gsap-reveal bg-[#06152E]/80 rounded-2xl p-4 border border-slate-700/70 text-xs text-slate-300 font-thai flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#38D5FF] shrink-0" />
              <span>
                ทีมงานประจำในไทย ไม่ส่งต่องานคนกลาง สามารถนัดคุยงานออนไลน์หรือเจอตัวได้
              </span>
            </div>
          </div>

          {/* ZONE 2: CUSTOMER REVIEWS */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="gsap-header">
                <div className="flex items-center justify-between mb-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[#38D5FF] text-xs font-semibold tracking-wider uppercase">
                    <span>TESTIMONIALS</span>
                  </div>

                  {/* Pagination Indicator 1 / 6 */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-slate-400">
                      <span className="text-[#38D5FF]">{currentReviewIndex + 1}</span> / {CUSTOMER_REVIEWS.length}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={prevReview}
                        aria-label="Previous review"
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={nextReview}
                        aria-label="Next review"
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-3.5xl font-extrabold font-thai text-white tracking-tight mb-2">
                  รีวิวจากลูกค้า
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-thai leading-relaxed mb-6">
                  ความประทับใจจากลูกค้าที่ไว้วางใจให้เราดูแลเว็บไซต์
                </p>
              </div>

              {/* Review Testimonial Card */}
              <div
                ref={reviewCardRef}
                className="gsap-reveal bg-[#06152E] rounded-3xl p-6 sm:p-7 border border-slate-700/80 shadow-2xl relative"
              >
                <Quote className="w-10 h-10 text-[#087BFF]/30 absolute top-5 right-6 pointer-events-none" />

                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-white ml-2 font-num">5.0</span>
                </div>

                <p className="text-sm sm:text-base text-slate-200 font-thai leading-relaxed mb-6 italic min-h-[90px]">
                  “{review.quote}”
                </p>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#087BFF] to-[#38D5FF] p-0.5">
                      <div className="w-full h-full rounded-full bg-[#071D3A] flex items-center justify-center text-xs font-bold font-mono text-[#38D5FF]">
                        {review.initials}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold font-thai text-white">
                        {review.author}
                      </h3>
                      <p className="text-xs text-slate-400 font-thai">
                        {review.role} · <strong className="text-slate-300 font-semibold">{review.business}</strong>
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:block text-right">
                    <span className="text-[10px] font-thai text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                      ✓ ยืนยันลูกค้าจริง
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Carousel Dots */}
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {CUSTOMER_REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReviewIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentReviewIndex === idx ? 'w-6 bg-[#38D5FF]' : 'w-2 bg-slate-700'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
