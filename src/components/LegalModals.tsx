import { X, Shield, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export default function LegalModals({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="min-h-full flex items-center justify-center p-4 relative z-10">
        <div className="bg-[#071D3A] text-white w-full max-w-2xl rounded-3xl border border-slate-700 shadow-2xl overflow-hidden relative">
          
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-[#06152E]/90">
            <div className="flex items-center gap-2.5">
              {type === 'privacy' ? (
                <Shield className="w-5 h-5 text-[#38D5FF]" />
              ) : (
                <FileText className="w-5 h-5 text-[#38D5FF]" />
              )}
              <h3 className="text-lg font-bold font-thai text-white">
                {type === 'privacy' ? 'นโยบายความเป็นส่วนตัว (Privacy Policy)' : 'เงื่อนไขการให้บริการ (Terms of Service)'}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 max-h-[70vh] overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-300 font-thai leading-relaxed">
            {type === 'privacy' ? (
              <>
                <p>
                  <strong>prowebcreate.com</strong> (“เรา”) ให้ความสำคัญอย่างยิ่งต่อการคุ้มครองข้อมูลส่วนบุคคลของท่านตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562 (PDPA)
                </p>
                <h4 className="font-bold text-white text-sm pt-2">1. ข้อมูลที่เราเก็บรวบรวม</h4>
                <p>
                  เรารวบรวมข้อมูลที่ท่านระบุในแบบฟอร์มขอใบเสนอราคา ได้แก่ ชื่อ-นามสกุล, เบอร์โทรศัพท์, อีเมล, LINE ID, ชื่อบริษัท และข้อมูลความต้องการในการทำเว็บไซต์ เพื่อการติดต่อกลับและจัดทำใบเสนอราคาเท่านั้น
                </p>
                <h4 className="font-bold text-white text-sm pt-2">2. วัตถุประสงค์ในการประมวลผลข้อมูล</h4>
                <p>
                  ข้อมูลของท่านจะถูกนำมาใช้เพื่อการประเมินราคา, นัดหมายเพื่อปรึกษาโปรเจกต์, และการประสานงานการส่งมอบงานตามสัญญาว่าจ้าง เราจะไม่เปิดเผยหรือจำหน่ายข้อมูลส่วนบุคคลของท่านให้แก่บุคคลภายนอกโดยเด็ดขาด
                </p>
                <h4 className="font-bold text-white text-sm pt-2">3. ความปลอดภัยของข้อมูล</h4>
                <p>
                  เราใช้มาตรการรักษาความปลอดภัยทางเทคนิคและการเข้ารหัสข้อมูล SSL/TLS เพื่อป้องกันการเข้าถึงข้อมูลโดยไม่ได้รับอนุญาต
                </p>
              </>
            ) : (
              <>
                <p>
                  เงื่อนไขและข้อตกลงการให้บริการออกแบบและพัฒนาเว็บไซต์โดย <strong>prowebcreate.com</strong>
                </p>
                <h4 className="font-bold text-white text-sm pt-2">1. ขอบเขตการทำงาน (Scope of Work)</h4>
                <p>
                  การดำเนินงานจัดทำเว็บไซต์จะเป็นไปตามรายละเอียดในใบเสนอราคาและเอกสารสัญญาว่าจ้างที่ได้ตกลงร่วมกัน โดยมีจำนวนหน้าและฟังก์ชันตามแพ็กเกจที่เลือก
                </p>
                <h4 className="font-bold text-white text-sm pt-2">2. เงื่อนไขการชำระเงิน</h4>
                <p>
                  การชำระเงินแบ่งเป็น 2 งวด: งวดที่ 1 ชำระมัดจำ 50% ก่อนเริ่มงานออกแบบ และงวดที่ 2 ชำระส่วนที่เหลือ 50% หลังจากการทดสอบระบบและส่งมอบงานสมบูรณ์
                </p>
                <h4 className="font-bold text-white text-sm pt-2">3. การส่งมอบและการรับประกัน</h4>
                <p>
                  ผู้ว่าจ้างจะได้รับสิทธิ์ความเป็นเจ้าของซอร์สโค้ดและข้อมูลเว็บไซต์ 100% หลังชำระเงินครบถ้วน โดยเราดูแลความเสถียรและความปลอดภัยของระบบตามระยะเวลาที่ระบุไว้ในแพ็กเกจ
                </p>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-800 bg-[#06152E] flex justify-end">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#087BFF] text-white text-xs font-thai font-semibold"
            >
              รับทราบ / ปิดหน้าต่าง
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
