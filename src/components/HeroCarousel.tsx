import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Play, ArrowRight, ShieldCheck, Smartphone, Zap, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { HERO_SLIDES } from '../data/landingData';

interface HeroCarouselProps {
  onOpenQuoteModal: (planId?: string) => void;
  onSelectPortfolioProject?: (projectId: string) => void;
}

export default function HeroCarousel({ onOpenQuoteModal }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const totalSlides = HERO_SLIDES.length;

  // GSAP Initial Mount Animation
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        '.hero-anim-tag',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
        .fromTo(
          '.hero-anim-title',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.3'
        )
        .fromTo(
          '.hero-anim-desc',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '.hero-anim-badge',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          '-=0.3'
        )
        .fromTo(
          '.hero-anim-cta',
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 },
          '-=0.2'
        )
        .fromTo(
          '.hero-anim-device',
          { opacity: 0, y: 30, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          '-=0.6'
        );
    }, el);

    return () => ctx.revert();
  }, []);

  // Slide transition animation
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0.4, x: 12 },
      { opacity: 1, x: 0, duration: 0.45, ease: 'power2.out' }
    );
  }, [currentSlide]);

  // Autoplay timer with pause on hover
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 7000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const slide = HERO_SLIDES[currentSlide];

  const handleCtaClick = (ctaText: string) => {
    if (ctaText.includes('สร้างเว็บไซต์') || ctaText.includes('แพ็กเกจ') || ctaText.includes('เสนอราคา') || ctaText.includes('ปรึกษา')) {
      onOpenQuoteModal();
    } else {
      const portfolioEl = document.getElementById('portfolio');
      portfolioEl?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      aria-label="Hero Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#06152E]"
    >
      {/* Dynamic Slide Background Image & Atmospheric Lighting Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            {/* Optional Custom Background Image for this Slide */}
            {s.bgImage && (
              <img
                src={s.bgImage}
                alt=""
                role="presentation"
                className="w-full h-full object-cover object-top opacity-20 filter brightness-75 contrast-125 transition-transform duration-1000 scale-105"
              />
            )}

            {/* Individual Slide Custom Radial Aura / Gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  s.bgGradient ||
                  'radial-gradient(circle at 50% 20%, rgba(8, 123, 255, 0.22) 0%, transparent 70%)',
              }}
            />
          </div>
        ))}

        {/* Global Measured Scrim: Ensures text readability and deep brand tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06152E] via-[#06152E]/80 to-[#06152E]/90" />
      </div>

      {/* Cyber Grid Lines Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[#087BFF]/25 via-[#38D5FF]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#06152E] via-[#06152E]/80 to-transparent pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & Actions */}
          <div ref={contentRef} className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Tag / Category Indicator */}
            <div className="hero-anim-tag inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#38D5FF] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-[#38D5FF] uppercase font-display">
                {slide.tag}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-anim-title text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl font-extrabold text-white leading-[1.18] tracking-tight font-thai mb-6">
              {slide.headline.split('\n').map((line, idx) => (
                <span key={idx} className="block">
                  {line.includes('“ตัวตน”') ? (
                    <>
                      คือ <span className="text-[#38D5FF] glow-text-cyan">“ตัวตน”</span> ของธุรกิจคุณ
                    </>
                  ) : line.includes('เติบโต') ? (
                    <>
                      ให้พร้อม<span className="text-[#38D5FF]">เติบโต</span>บนโลกออนไลน์
                    </>
                  ) : line.includes('เรื่องราว') ? (
                    <>
                      ทุกธุรกิจมี<span className="text-[#38D5FF]">เรื่องราว</span>
                    </>
                  ) : line.includes('Enterprise') ? (
                    <>
                      ด้วยระบบเว็บระดับ <span className="text-[#38D5FF]">Enterprise</span>
                    </>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            {/* Sub-headline */}
            <p className="hero-anim-desc text-slate-300 text-base sm:text-lg leading-relaxed font-thai max-w-xl mb-8">
              {slide.subheadline}
            </p>

            {/* 4 Feature Points matching reference */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
              <div className="hero-anim-badge flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-[#071D3A]/70 border border-slate-700/50 rounded-xl px-3 py-2.5 backdrop-blur-sm">
                <CheckCircle2 className="w-4 h-4 text-[#38D5FF] shrink-0" />
                <span className="font-thai">{slide.bullets[0] || 'ดีไซน์สวย ไม่เหมือนใคร'}</span>
              </div>
              <div className="hero-anim-badge flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-[#071D3A]/70 border border-slate-700/50 rounded-xl px-3 py-2.5 backdrop-blur-sm">
                <Smartphone className="w-4 h-4 text-[#38D5FF] shrink-0" />
                <span className="font-thai">{slide.bullets[1] || 'รองรับทุกอุปกรณ์'}</span>
              </div>
              <div className="hero-anim-badge flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-[#071D3A]/70 border border-slate-700/50 rounded-xl px-3 py-2.5 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-[#38D5FF] shrink-0" />
                <span className="font-thai">{slide.bullets[2] || 'เร็ว ปลอดภัย SEO Friendly'}</span>
              </div>
              <div className="hero-anim-badge flex items-center gap-2.5 text-xs sm:text-sm text-slate-200 bg-[#071D3A]/70 border border-slate-700/50 rounded-xl px-3 py-2.5 backdrop-blur-sm">
                <ShieldCheck className="w-4 h-4 text-[#38D5FF] shrink-0" />
                <span className="font-thai">{slide.bullets[3] || 'ดูแลหลังการขายตลอดอายุ'}</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => handleCtaClick(slide.ctaPrimary)}
                className="hero-anim-cta px-6 sm:px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#087BFF] via-[#0062d6] to-[#087BFF] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#087BFF]/40 hover:shadow-[#087BFF]/70 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2.5 group cursor-pointer"
              >
                <span className="font-thai">{slide.ctaPrimary}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleCtaClick(slide.ctaSecondary)}
                className="hero-anim-cta px-5 sm:px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white border border-slate-700 font-medium text-sm sm:text-base backdrop-blur-sm transition-all duration-200 flex items-center gap-2 group cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 text-[#38D5FF] fill-[#38D5FF]/30 group-hover:fill-[#38D5FF] transition-colors" />
                <span className="font-thai">{slide.ctaSecondary}</span>
              </button>
            </div>
          </div>

          {/* Right Column: 3D Showcase Multi-Device Composition */}
          <div className="hero-anim-device lg:col-span-6 relative flex items-center justify-center">
            
            {/* Floating Top-Right Speech Badge */}
            <div className="absolute -top-6 sm:-top-8 -right-2 sm:right-4 z-20 bg-gradient-to-r from-[#087BFF]/95 to-[#0052cc]/95 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-2xl rounded-br-none shadow-xl shadow-[#087BFF]/30 border border-[#38D5FF]/50 backdrop-blur-md flex items-center gap-2 animate-bounce">
              <Sparkles className="w-4 h-4 text-[#38D5FF]" />
              <span className="font-thai">
                เว็บไซต์สวยๆ ที่ช่วยให้คุณ <strong className="text-[#38D5FF] underline decoration-wavy">“รวยได้”</strong>
              </span>
            </div>

            {/* Glowing Aura Behind Devices */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#087BFF]/30 via-[#38D5FF]/20 to-transparent rounded-3xl blur-2xl transform scale-90" />

            {/* Main Composition Container */}
            <div className="relative w-full max-w-[560px] aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center">
              
              {/* Device 1: Premium Laptop Mockup */}
              <div className="w-full relative z-10 transition-transform duration-500 hover:scale-[1.01]">
                {/* Laptop Lid Screen */}
                <div className="bg-[#0b192e] rounded-t-2xl p-2.5 sm:p-3 border-2 border-slate-600/60 shadow-2xl shadow-black/80 relative overflow-hidden">
                  {/* Top Bar with Camera & LEDs */}
                  <div className="flex items-center justify-between pb-2 px-1 border-b border-slate-800">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <div className="text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded-md border border-slate-800 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      prowebcreate.com/showcase
                    </div>
                    <div className="w-4" />
                  </div>

                  {/* Screen Inside Content */}
                  <div className="relative aspect-[16/10] bg-[#071D3A] rounded-lg overflow-hidden border border-slate-800 flex flex-col justify-between p-4 sm:p-5">
                    {/* Background Graphic inside mockup */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#087BFF]/30 via-transparent to-[#38D5FF]/20 opacity-70" />
                    <div className="absolute inset-0 cyber-grid opacity-40" />

                    {/* Mockup Header */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-md bg-[#087BFF] flex items-center justify-center font-bold text-white text-xs">
                          P
                        </div>
                        <span className="text-xs font-bold text-white tracking-wider">PROWEB</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-300">
                        <span className="hidden sm:inline">Solutions</span>
                        <span className="hidden sm:inline">Portfolio</span>
                        <span className="bg-[#087BFF] text-white px-2 py-0.5 rounded font-medium">Contact</span>
                      </div>
                    </div>

                    {/* Mockup Center Hero */}
                    <div className="relative z-10 text-center my-auto py-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#38D5FF]/10 text-[#38D5FF] text-[10px] font-semibold tracking-wider uppercase mb-1 border border-[#38D5FF]/30">
                        {slide.deviceSub}
                      </span>
                      <h3 className="text-sm sm:text-xl font-bold text-white tracking-tight font-display">
                        {slide.deviceTitle}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-slate-300 max-w-xs mx-auto mt-1 line-clamp-2">
                        Architecting high-converting digital experiences with bleeding-edge technology.
                      </p>
                    </div>

                    {/* Mockup Footer Grid */}
                    <div className="relative z-10 grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80">
                      <div className="bg-[#06152E]/80 rounded p-1 text-center">
                        <div className="text-[9px] text-slate-400">Page Speed</div>
                        <div className="text-[11px] font-bold text-[#38D5FF] font-num">99/100</div>
                      </div>
                      <div className="bg-[#06152E]/80 rounded p-1 text-center">
                        <div className="text-[9px] text-slate-400">Conversion</div>
                        <div className="text-[11px] font-bold text-emerald-400 font-num">+180%</div>
                      </div>
                      <div className="bg-[#06152E]/80 rounded p-1 text-center">
                        <div className="text-[9px] text-slate-400">Security</div>
                        <div className="text-[11px] font-bold text-indigo-400 font-num">A+ Grade</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Laptop Base & Keyboard Shelf */}
                <div className="h-3 sm:h-4 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 rounded-b-xl border-t border-slate-500 shadow-xl flex items-center justify-center">
                  <div className="w-16 h-1 bg-slate-500/80 rounded-full" />
                </div>
              </div>

              {/* Device 2: Smartphone Mockup */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 w-28 sm:w-36 aspect-[9/18] bg-[#0c1c33] rounded-2xl sm:rounded-3xl p-1.5 sm:p-2 border-2 border-[#38D5FF]/50 shadow-2xl shadow-black z-20 backdrop-blur-md">
                <div className="w-10 h-2 bg-slate-900 rounded-full mx-auto mb-1" />
                <div className="w-full h-[calc(100%-12px)] bg-gradient-to-b from-[#071D3A] to-[#06152E] rounded-xl overflow-hidden p-2 flex flex-col justify-between border border-slate-700/60 text-[8px]">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-[9px]">Proweb</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="my-auto py-1 space-y-1">
                    <div className="w-full h-10 rounded bg-[#087BFF]/20 border border-[#087BFF]/40 flex items-center justify-center text-center p-1">
                      <span className="text-[8px] font-bold text-white leading-tight">Mobile Optimized</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-700 rounded-full" />
                    <div className="w-3/4 h-1.5 bg-slate-700 rounded-full" />
                  </div>
                  <div className="w-full py-1 rounded bg-[#087BFF] text-white text-center font-bold text-[8px]">
                    LINE Chat
                  </div>
                </div>
              </div>

              {/* Device 3: Tablet Mockup */}
              <div className="absolute -bottom-2 -left-2 sm:-left-6 w-36 sm:w-48 aspect-[4/3] bg-[#0d203a] rounded-xl sm:rounded-2xl p-1.5 sm:p-2 border border-slate-600/80 shadow-2xl shadow-black z-20 hidden xs:block">
                <div className="w-full h-full bg-[#071D3A] rounded-lg overflow-hidden p-2 flex flex-col justify-between border border-slate-800 text-[8px]">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-1">
                    <span className="font-semibold text-white">Tablet Responsive</span>
                    <span className="text-slate-400 font-num">100%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 my-1">
                    <div className="h-8 rounded bg-slate-800/80 p-1 flex flex-col justify-center">
                      <span className="text-[7px] text-slate-400">SEO Structure</span>
                      <span className="text-[8px] font-bold text-emerald-400">Optimized</span>
                    </div>
                    <div className="h-8 rounded bg-slate-800/80 p-1 flex flex-col justify-center">
                      <span className="text-[7px] text-slate-400">Core Vitals</span>
                      <span className="text-[8px] font-bold text-[#38D5FF]">Green</span>
                    </div>
                  </div>
                  <div className="text-[7px] text-slate-400 text-center">Touch Friendly Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Slide Indicators & Controls - Fully Dynamic for 3, 4, 5+ Slides */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 max-w-full">
            {HERO_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => goToSlide(idx)}
                className={`group flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer shrink-0 ${
                  currentSlide === idx
                    ? 'bg-[#087BFF]/20 border border-[#38D5FF]/40 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              >
                <span className={`text-xs font-mono font-bold ${currentSlide === idx ? 'text-[#38D5FF]' : 'text-slate-500'}`}>
                  0{idx + 1}
                </span>
                <span className="text-xs font-thai hidden sm:inline">
                  {s.slideTitleShort || `สไลด์ ${idx + 1}`}
                </span>
                {currentSlide === idx && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38D5FF]" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[11px] text-slate-400 mr-2 hidden md:inline font-thai">
              {isPaused ? 'หยุดชั่วคราวขณะวางเมาส์' : 'เปลี่ยนสไลด์อัตโนมัติ'}
            </span>
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="p-2 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="p-2 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
