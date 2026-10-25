import { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, Phone, MessageSquare, Calculator, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PRICING_PLANS, AGENCY_CONTACT } from '../data/landingData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanId?: string;
}

export default function QuoteModal({ isOpen, onClose, initialPlanId }: QuoteModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<string>(initialPlanId || 'business');
  const [projectType, setProjectType] = useState<string>('corporate');
  const [includeDomain, setIncludeDomain] = useState<boolean>(true);
  const [includeEcommerce, setIncludeEcommerce] = useState<boolean>(false);
  const [includeMultiLang, setIncludeMultiLang] = useState<boolean>(false);

  // Form Fields
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [lineId, setLineId] = useState('');
  const [details, setDetails] = useState('');

  // Form State
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (initialPlanId) {
      setSelectedPlan(initialPlanId);
    }
  }, [initialPlanId]);

  if (!isOpen) return null;

  // Calculate instant total estimate
  const currentPlanObj = PRICING_PLANS.find((p) => p.id === selectedPlan) || PRICING_PLANS[1];
  let calculatedTotal = currentPlanObj.priceNumber;
  if (includeDomain) calculatedTotal += 800; // .com domain + cloud DNS
  if (includeEcommerce && selectedPlan !== 'enterprise') calculatedTotal += 4500;
  if (includeMultiLang && selectedPlan !== 'professional' && selectedPlan !== 'enterprise') calculatedTotal += 3000;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validation
    if (!fullName.trim()) {
      setErrorMessage('กรุณาระบุชื่อ-นามสกุล ของท่าน');
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, '').length < 9) {
      setErrorMessage('กรุณาระบุเบอร์โทรศัพท์ที่ถูกต้อง (อย่างน้อย 9-10 หลัก)');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('กรุณาระบุอีเมลที่ถูกต้อง');
      return;
    }

    setSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore
      }
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-3 sm:p-6 relative z-10">
        <div className="bg-[#071D3A] text-white w-full max-w-2xl rounded-3xl border border-slate-700 shadow-2xl overflow-hidden relative">
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-[#06152E]/90">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#087BFF]/20 text-[#38D5FF] flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-thai text-white">
                  ขอใบเสนอราคา / ปรึกษาโปรเจกต์
                </h3>
                <p className="text-xs text-slate-400 font-thai">
                  ไม่มีค่าใช้จ่ายเบื้องต้น ทีมงานติดต่อกลับภายใน 2 ชั่วโมงทำการ
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content / Success View */}
          {submitted ? (
            <div className="p-8 sm:p-10 text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border-2 border-emerald-500/50">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-bold font-thai text-white mb-2">
                  ส่งข้อมูลสำเร็จแล้ว!
                </h4>
                <p className="text-sm text-slate-300 font-thai max-w-md mx-auto leading-relaxed">
                  ขอบคุณคุณ <strong className="text-white">{fullName}</strong> ทีมงาน Prowebcreate ได้รับข้อมูลความต้องการทำเว็บไซต์เรียบร้อยแล้ว และจะติดต่อกลับทางเบอร์ <strong className="text-[#38D5FF]">{phone}</strong> หรือ LINE โดยเร็วที่สุดครับ
                </p>
              </div>

              {/* Estimate Summary Box */}
              <div className="bg-[#06152E] rounded-2xl p-5 border border-slate-800 text-left max-w-md mx-auto">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs text-slate-400 font-thai">
                  <span>แพ็กเกจที่เลือก:</span>
                  <span className="text-white font-bold">{currentPlanObj.name}</span>
                </div>
                <div className="flex items-center justify-between pt-2 text-sm font-thai">
                  <span className="text-slate-300">งบประมาณประเมินคร่าวๆ:</span>
                  <span className="text-emerald-400 font-extrabold font-num text-lg">
                    ฿{calculatedTotal.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href={`https://line.me/ti/p/~@prowebcreate`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-xl bg-[#06C755] hover:bg-[#05b34c] text-white font-bold font-thai text-sm flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>ทักแชต LINE OA ทันที</span>
                </a>

                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-thai text-sm font-semibold"
                >
                  เสร็จสิ้น / ปิดหน้าต่าง
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-5 sm:p-7 max-h-[75vh] overflow-y-auto space-y-6">
              
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/50 text-rose-200 text-xs sm:text-sm font-thai flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Step 1: Select Plan */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-thai">
                  1. เลือกแพ็กเกจที่สนใจ
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {PRICING_PLANS.map((plan) => (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                        selectedPlan === plan.id
                          ? 'bg-[#087BFF]/20 border-[#38D5FF] shadow-md shadow-[#087BFF]/20'
                          : 'bg-[#06152E] border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold text-white font-display">{plan.name}</div>
                      <div className="text-xs text-[#38D5FF] font-num font-semibold mt-0.5">
                        ฿{plan.price}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Project Type */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-thai">
                  2. ประเภทของเว็บไซต์
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#06152E] border border-slate-700 text-slate-200 text-xs sm:text-sm font-thai focus:outline-none focus:border-[#38D5FF]"
                >
                  <option value="corporate">เว็บไซต์ธุรกิจ / องค์กร (Corporate Website)</option>
                  <option value="ecommerce">ร้านค้าออนไลน์ (E-Commerce System)</option>
                  <option value="landing">Sale Page / Landing Page สำหรับยิงแอด</option>
                  <option value="redesign">ปรับปรุงเว็บไซต์เดิม (Website Redesign)</option>
                  <option value="custom">ระบบเฉพาะทาง / อื่นๆ (Custom Web Application)</option>
                </select>
              </div>

              {/* Step 3: Add-on Options */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2 font-thai">
                  3. ตัวเลือกบริการเพิ่มเติม (ไม่บังคับ)
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#06152E] border border-slate-800 cursor-pointer text-xs font-thai">
                    <input
                      type="checkbox"
                      checked={includeDomain}
                      onChange={(e) => setIncludeDomain(e.target.checked)}
                      className="rounded accent-[#087BFF] w-4 h-4"
                    />
                    <span className="flex-1 text-slate-300">
                      รวมค่าจดทะเบียนโดเมนเนม .com + บริการ DNS จัดการอีเมล (+฿800/ปี)
                    </span>
                  </label>

                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#06152E] border border-slate-800 cursor-pointer text-xs font-thai">
                    <input
                      type="checkbox"
                      checked={includeEcommerce}
                      onChange={(e) => setIncludeEcommerce(e.target.checked)}
                      className="rounded accent-[#087BFF] w-4 h-4"
                    />
                    <span className="flex-1 text-slate-300">
                      ระบบชำระเงินออนไลน์ PromptPay QR Code + บัตรเครดิต (+฿4,500)
                    </span>
                  </label>

                  <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#06152E] border border-slate-800 cursor-pointer text-xs font-thai">
                    <input
                      type="checkbox"
                      checked={includeMultiLang}
                      onChange={(e) => setIncludeMultiLang(e.target.checked)}
                      className="rounded accent-[#087BFF] w-4 h-4"
                    />
                    <span className="flex-1 text-slate-300">
                      ระบบสลับ 2 ภาษา ไทย-อังกฤษ พร้อมแปลโครงสร้างหลัก (+฿3,000)
                    </span>
                  </label>
                </div>
              </div>

              {/* Instant Estimate Banner */}
              <div className="bg-[#06152E] p-4 rounded-2xl border border-[#087BFF]/30 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-400 font-thai block">งบประมาณประเมินเบื้องต้น</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-[#38D5FF] font-num">
                    ฿{calculatedTotal.toLocaleString()}
                  </span>
                </div>
                <div className="text-right text-[10px] text-slate-400 font-thai">
                  แบ่งชำระเป็น 2 งวด <br />
                  (มัดจำ 50% / ส่งมอบ 50%)
                </div>
              </div>

              {/* Step 4: Contact Details */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 font-thai">
                  4. ข้อมูลสำหรับติดต่อกลับ
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      placeholder="ชื่อ-นามสกุล ของท่าน *"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-[#06152E] border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm font-thai focus:outline-none focus:border-[#38D5FF]"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="ชื่อบริษัท หรือ ธุรกิจ (ถ้ามี)"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#06152E] border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm font-thai focus:outline-none focus:border-[#38D5FF]"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      placeholder="เบอร์โทรศัพท์ติดต่อ *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-[#06152E] border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm font-thai font-num focus:outline-none focus:border-[#38D5FF]"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="อีเมล (สำหรับส่งใบเสนอราคา) *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2.5 rounded-xl bg-[#06152E] border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm font-thai focus:outline-none focus:border-[#38D5FF]"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="LINE ID เพื่อความสะดวกในการปรึกษา (ถ้ามี)"
                    value={lineId}
                    onChange={(e) => setLineId(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#06152E] border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm font-thai focus:outline-none focus:border-[#38D5FF]"
                  />
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder="รายละเอียดเพิ่มเติม เช่น มีเว็บไซต์ตัวอย่างที่ชอบ หรือฟังก์ชันที่ต้องการเป็นพิเศษ"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#06152E] border border-slate-700 text-white placeholder-slate-500 text-xs sm:text-sm font-thai focus:outline-none focus:border-[#38D5FF]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#087BFF] to-[#38D5FF] text-white font-bold font-thai text-sm sm:text-base shadow-xl shadow-[#087BFF]/30 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <span>กำลังบันทึกข้อมูล...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>ยืนยันขอใบเสนอราคา (ไม่มีข้อผูกมัด)</span>
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] text-slate-400 mt-2 font-thai">
                  ข้อมูลของท่านจะถูกเก็บเป็นความลับตาม พ.ร.บ. คุ้มครองข้อมูลส่วนบุคคล (PDPA)
                </p>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}
