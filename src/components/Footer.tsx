import { Phone, Mail, MessageSquare, ArrowUp, Shield } from 'lucide-react';
import { AGENCY_CONTACT } from '../data/landingData';

interface FooterProps {
  onOpenPrivacyModal?: () => void;
  onOpenTermsModal?: () => void;
}

export default function Footer({ onOpenPrivacyModal, onOpenTermsModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040E20] text-slate-300 pt-16 pb-12 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#087BFF] to-[#38D5FF] p-0.5 shadow-md shadow-[#087BFF]/30">
                <div className="w-full h-full bg-[#06152E] rounded-[10px] flex items-center justify-center">
                  <span className="text-[#38D5FF] font-bold text-sm">P</span>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white font-display">
                  proweb<span className="text-[#38D5FF]">create</span>
                </span>
                <span className="text-[10px] tracking-wider text-slate-400 font-thai block">
                  Your Website, Our Passion
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-thai leading-relaxed">
              เราคือดิจิทัลสตูดิโอรับออกแบบและพัฒนาเว็บไซต์ระดับพรีเมียม ผสานดีไซน์แห่งอนาคตเข้ากับความใช้งานง่าย เพื่อผลลัพธ์ทางธุรกิจที่จับต้องได้
            </p>

            <div className="pt-2 flex items-center gap-2">
              <span className="text-xs font-thai text-emerald-400 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5" />
                ใบอนุญาตและการจดทะเบียนพาณิชย์อิเล็กทรอนิกส์
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-white font-thai uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              บริการ & ผลงาน
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-thai">
              <li>
                <a href="#services" className="hover:text-[#38D5FF] transition-colors">
                  เว็บไซต์ธุรกิจ (Corporate)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#38D5FF] transition-colors">
                  เว็บไซต์ร้านค้าออนไลน์ (E-Commerce)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#38D5FF] transition-colors">
                  Sale Page / Landing Page
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#38D5FF] transition-colors">
                  แพ็กเกจราคาทำเว็บไซต์
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-[#38D5FF] transition-colors">
                  ผลงานและเคสศึกษา
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Information */}
          <div>
            <h4 className="text-sm font-bold text-white font-thai uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              เกี่ยวกับเรา
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-thai">
              <li>
                <a href="#why-us" className="hover:text-[#38D5FF] transition-colors">
                  ทำไมต้องเลือก Prowebcreate
                </a>
              </li>
              <li>
                <a href="#team-reviews" className="hover:text-[#38D5FF] transition-colors">
                  ทีมงานผู้เชี่ยวชาญ
                </a>
              </li>
              <li>
                <a href="#team-reviews" className="hover:text-[#38D5FF] transition-colors">
                  รีวิวและความประทับใจลูกค้า
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#38D5FF] transition-colors">
                  คำถามที่พบบ่อย (FAQ)
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#38D5FF] transition-colors">
                  ขอใบเสนอราคาอย่างเป็นทางการ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Social Channels */}
          <div>
            <h4 className="text-sm font-bold text-white font-thai uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              ติดต่อเรา
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm font-thai">
              <li>
                <a
                  href={`tel:${AGENCY_CONTACT.phone}`}
                  className="flex items-center gap-2 hover:text-[#38D5FF] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#38D5FF]" />
                  <span className="font-num">{AGENCY_CONTACT.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${AGENCY_CONTACT.email}`}
                  className="flex items-center gap-2 hover:text-[#38D5FF] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#38D5FF]" />
                  <span>{AGENCY_CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={AGENCY_CONTACT.lineUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>LINE: {AGENCY_CONTACT.lineId}</span>
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-3">
              <a
                href={AGENCY_CONTACT.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#087BFF] text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="Facebook"
              >
                FB
              </a>
              <a
                href={AGENCY_CONTACT.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-rose-600 text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="YouTube"
              >
                YT
              </a>
              <a
                href={AGENCY_CONTACT.tiktok}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-[#38D5FF] hover:text-black text-white flex items-center justify-center transition-colors text-xs font-bold"
                aria-label="TikTok"
              >
                TT
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-thai">
          <div>
            © 2026 prowebcreate.com. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              นโยบายความเป็นส่วนตัว (Privacy Policy)
            </button>
            <button
              onClick={onOpenTermsModal}
              className="hover:text-slate-300 transition-colors cursor-pointer"
            >
              เงื่อนไขการให้บริการ (Terms of Service)
            </button>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span className="font-display text-[11px]">Your Website, Our Passion</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-[#087BFF] text-white transition-colors cursor-pointer"
              aria-label="Back to Top"
              title="กลับสู่ด้านบน"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
