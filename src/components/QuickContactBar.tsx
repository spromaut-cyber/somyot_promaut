import { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, FileText } from 'lucide-react';
import { AGENCY_CONTACT } from '../data/landingData';

interface QuickContactBarProps {
  onOpenQuoteModal: () => void;
}

export default function QuickContactBar({ onOpenQuoteModal }: QuickContactBarProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Action Buttons on Bottom Right (Desktop & Mobile) */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5">
        
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full bg-slate-800/90 hover:bg-[#087BFF] text-white shadow-lg border border-slate-700/80 flex items-center justify-center transition-all duration-200 cursor-pointer"
            title="กลับสู่ด้านบน"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Floating LINE OA Quick Contact */}
        <a
          href={AGENCY_CONTACT.lineUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on LINE"
          className="group flex items-center gap-2 bg-[#06C755] hover:bg-[#05b34c] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-xl shadow-green-900/30 hover:scale-105 transition-all duration-300"
          title="แชตผ่าน LINE OA"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2C6.48 2 2 5.92 2 10.75c0 2.98 1.7 5.62 4.34 7.21-.19.68-.7 2.47-.8 2.85-.12.47.17.46.36.33.15-.1 2.37-1.61 3.33-2.27.88.16 1.8.25 2.77.25 5.52 0 10-3.92 10-8.75S17.52 2 12 2z"/>
            </svg>
          </div>
          <span className="text-xs font-bold font-thai hidden sm:inline">
            แชต LINE
          </span>
        </a>

        {/* Floating Call Button */}
        <a
          href={`tel:${AGENCY_CONTACT.phone}`}
          aria-label="Call agency"
          className="group flex items-center gap-2 bg-[#087BFF] hover:bg-[#0062d6] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-xl shadow-blue-900/30 hover:scale-105 transition-all duration-300"
          title="โทรปรึกษาด่วน"
        >
          <Phone className="w-5 h-5" />
          <span className="text-xs font-bold font-thai hidden sm:inline">
            โทรด่วน
          </span>
        </a>

        {/* Floating Quick Quote Trigger */}
        <button
          onClick={onOpenQuoteModal}
          className="flex items-center gap-2 bg-gradient-to-r from-[#071D3A] to-[#06152E] hover:from-[#087BFF] hover:to-[#38D5FF] text-white px-3.5 py-2.5 rounded-full border border-[#38D5FF]/40 shadow-xl shadow-black/40 text-xs font-thai font-semibold hover:scale-105 transition-all cursor-pointer"
        >
          <FileText className="w-4 h-4 text-[#38D5FF]" />
          <span>ขอใบเสนอราคา</span>
        </button>

      </div>
    </>
  );
}
