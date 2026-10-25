import { useState, useEffect } from 'react';
import { MessageSquare, Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { AGENCY_CONTACT } from '../data/landingData';

interface NavbarProps {
  onOpenQuoteModal: (planId?: string) => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['services', 'pricing', 'portfolio', 'why-us', 'team-reviews', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'หน้าแรก', href: '#hero', id: 'hero' },
    { label: 'บริการ', href: '#services', id: 'services' },
    { label: 'แพ็กเกจ', href: '#pricing', id: 'pricing' },
    { label: 'ผลงาน', href: '#portfolio', id: 'portfolio' },
    { label: 'ทีมงาน & รีวิว', href: '#team-reviews', id: 'team-reviews' },
    { label: 'คำถามที่พบบ่อย', href: '#faq', id: 'faq' },
    { label: 'ติดต่อเรา', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-nav py-3 shadow-lg shadow-black/20' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38D5FF] rounded-lg"
            >
              {/* Futuristic Brand Icon */}
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#087BFF] via-[#0052cc] to-[#38D5FF] p-0.5 shadow-md shadow-[#087BFF]/30 group-hover:shadow-[#38D5FF]/50 transition-all duration-300">
                <div className="w-full h-full bg-[#06152E] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#087BFF]/20 to-transparent" />
                  <svg className="w-6 h-6 text-[#38D5FF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M6 4H14C16.7614 4 19 6.23858 19 9C19 11.7614 16.7614 14 14 14H6V4Z"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 14V20"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                    <circle cx="14" cy="9" r="2" fill="#087BFF" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-display flex items-center gap-1">
                  proweb<span className="text-[#38D5FF]">create</span>
                </span>
                <span className="text-[10px] tracking-wider text-slate-400 font-thai hidden sm:block">
                  Your Website, Our Passion
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Clean Single-Line Typography) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap ${
                      isActive
                        ? 'text-[#38D5FF] font-semibold bg-[#087BFF]/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${AGENCY_CONTACT.phone}`}
                className="hidden xl:flex items-center gap-2 text-xs text-slate-300 hover:text-[#38D5FF] px-2.5 py-1.5 rounded-lg border border-slate-700/60 hover:border-[#087BFF]/40 transition-colors"
                title="โทรหาเราทันที"
              >
                <Phone className="w-3.5 h-3.5 text-[#38D5FF]" />
                <span className="font-num font-medium">{AGENCY_CONTACT.phoneDisplay}</span>
              </a>

              <button
                onClick={() => onOpenQuoteModal()}
                className="relative group overflow-hidden px-4 py-2 rounded-xl bg-gradient-to-r from-[#087BFF] to-[#0062d6] text-white font-medium text-xs md:text-sm shadow-md shadow-[#087BFF]/30 hover:shadow-[#087BFF]/60 hover:from-[#0062d6] hover:to-[#38D5FF] transition-all duration-300 flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#38D5FF]"
              >
                <MessageSquare className="w-4 h-4 text-[#38D5FF] group-hover:text-white transition-colors" />
                <span className="whitespace-nowrap font-thai">ติดต่อเรา / ขอใบเสนอราคา</span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenQuoteModal()}
                className="sm:hidden px-3 py-1.5 rounded-lg bg-[#087BFF] text-white text-xs font-thai font-medium"
              >
                ติดต่อเรา
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
                aria-expanded={mobileMenuOpen}
                className="p-2 text-slate-300 hover:text-white bg-slate-800/80 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#38D5FF]"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#06152E] border-l border-slate-800 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-lg font-bold font-display text-white">
                  proweb<span className="text-[#38D5FF]">create</span>
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-4 py-2.5 rounded-xl text-base font-thai font-medium flex items-center justify-between transition-colors ${
                        isActive
                          ? 'bg-[#087BFF]/15 text-[#38D5FF]'
                          : 'text-slate-200 hover:bg-slate-800/50 hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <a
                href={AGENCY_CONTACT.lineUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#06C755] text-white font-medium text-sm"
              >
                <span>LINE: {AGENCY_CONTACT.lineId}</span>
              </a>

              <a
                href={`tel:${AGENCY_CONTACT.phone}`}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-slate-700 text-slate-200 hover:bg-slate-800 font-medium text-sm font-num"
              >
                <Phone className="w-4 h-4 text-[#38D5FF]" />
                <span>{AGENCY_CONTACT.phoneDisplay}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#087BFF] to-[#38D5FF] text-white font-semibold text-sm shadow-lg shadow-[#087BFF]/30"
              >
                ขอใบเสนอราคา / ปรึกษาฟรี
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
