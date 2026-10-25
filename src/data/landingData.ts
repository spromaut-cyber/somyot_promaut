import { Slide, ServiceItem, PricingPlan, PortfolioItem, TeamMember, CustomerReview, FAQ } from '../types';

export const HERO_SLIDES: Slide[] = [
  {
    id: 1,
    tag: 'MODERN WEBSITE DESIGN & DEVELOPMENT',
    slideTitleShort: 'Digital Identity',
    headline: 'มากกว่าแค่เว็บไซต์\nคือ “ตัวตน” ของธุรกิจคุณ',
    subheadline: 'เราสร้างเว็บไซต์ที่ไม่ได้มีแค่ความสวย แต่ช่วยให้ธุรกิจของคุณเติบโต ด้วยดีไซน์ที่โดดเด่น เทคโนโลยีล้ำสมัย และกลยุทธ์ที่ตอบโจทย์จริง',
    bullets: [
      'ดีไซน์สวย ไม่เหมือนใคร',
      'รองรับทุกอุปกรณ์ มือถือ / แท็บเล็ต / คอม',
      'เร็ว ปลอดภัย SEO Friendly',
      'ดูแลหลังการขาย ตลอดอายุการใช้งาน'
    ],
    ctaPrimary: 'เริ่มต้นสร้างเว็บไซต์ของคุณ',
    ctaSecondary: 'ดูผลงานของเรา',
    deviceTitle: 'Build Your Digital Future',
    deviceSub: 'High-Performance Web Architecture',
    colorAccent: '#38D5FF',
    bgImage: '/assets/reference_design.png',
    bgGradient: 'radial-gradient(ellipse at 50% 10%, rgba(8, 123, 255, 0.28) 0%, rgba(6, 21, 46, 0.95) 75%)'
  },
  {
    id: 2,
    tag: 'STRATEGIC DIGITAL GROWTH',
    slideTitleShort: 'Business Growth',
    headline: 'เปลี่ยนธุรกิจของคุณ\nให้พร้อมเติบโตบนโลกออนไลน์',
    subheadline: 'เว็บไซต์ที่ออกแบบอย่างมีกลยุทธ์ รองรับมือถือ 100% พร้อมโครงสร้าง SEO และช่องทางติดต่อที่ชัดเจน ปิดการขายได้รวดเร็ว',
    bullets: [
      'สถาปัตยกรรมเว็บไซต์เพื่อ Conversion',
      'ระบบหลังบ้านจัดการง่าย ไม่ต้องรู้โค้ด',
      'เชื่อมต่อ LINE OA และโซเชียลมีเดีย',
      'วัดผลได้ด้วย Google Analytics 4'
    ],
    ctaPrimary: 'ดูแพ็กเกจเว็บไซต์',
    ctaSecondary: 'ปรึกษาทีมงานฟรี',
    deviceTitle: 'Scalable Enterprise Solutions',
    deviceSub: 'Seamless Omni-Channel Commerce',
    colorAccent: '#087BFF',
    bgImage: '',
    bgGradient: 'radial-gradient(ellipse at 60% 15%, rgba(56, 213, 255, 0.22) 0%, rgba(7, 29, 58, 0.95) 80%)'
  },
  {
    id: 3,
    tag: 'BESPOKE CREATIVE EXPERIENCE',
    slideTitleShort: 'Creative Experience',
    headline: 'ทุกผลงานมีเอกลักษณ์\nทุกธุรกิจมีเรื่องราว',
    subheadline: 'ออกแบบเว็บไซต์ให้สะท้อนอัตลักษณ์แบรนด์ของคุณ พร้อมประสบการณ์ใช้งานระดับพรีเมียม ลื่นไหลบนทุกขนาดหน้าจอ',
    bullets: [
      'Custom UI/UX ออกแบบเฉพาะแบรนด์',
      'Micro-interactions และอนิเมชันลื่นไหล',
      'Core Web Vitals คะแนนเต็ม 95+',
      'มาตรฐานความปลอดภัย SSL & DDoS Shield'
    ],
    ctaPrimary: 'สำรวจผลงานของเรา',
    ctaSecondary: 'ขอใบเสนอราคา',
    deviceTitle: 'Crafted for Distinction',
    deviceSub: 'Where Aesthetics Meet Engineering',
    colorAccent: '#00F0FF',
    bgImage: '',
    bgGradient: 'radial-gradient(ellipse at 40% 20%, rgba(0, 240, 255, 0.2) 0%, rgba(6, 21, 46, 0.96) 75%)'
  },
  {
    id: 4,
    tag: 'ENTERPRISE ARCHITECTURE & PERFORMANCE',
    slideTitleShort: 'Enterprise Scale',
    headline: 'ยกระดับองค์กรสู่สากล\nด้วยระบบเว็บระดับ Enterprise',
    subheadline: 'ออกแบบและพัฒนาสำหรับองค์กรที่ต้องการความเสถียรสูงสุด รองรับผู้ใช้งานหลักแสน พร้อมระบบความปลอดภัยระดับสถาบันการเงิน',
    bullets: [
      'Cloud Architecture & Load Balancing',
      'API Integration & CRM / ERP Sync',
      'ระบบบริหารจัดการสิทธิ์ผู้ใช้ (RBAC)',
      'มาตรฐานความปลอดภัย PDPA & ISO'
    ],
    ctaPrimary: 'ปรึกษาโปรเจกต์ Enterprise',
    ctaSecondary: 'ดูสถาปัตยกรรมระบบ',
    deviceTitle: 'Mission-Critical Reliability',
    deviceSub: '99.99% Uptime High-Throughput Engine',
    colorAccent: '#6366F1',
    bgImage: '',
    bgGradient: 'radial-gradient(ellipse at 70% 10%, rgba(99, 102, 241, 0.25) 0%, rgba(6, 21, 46, 0.97) 80%)'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'corporate',
    icon: 'Building2',
    title: 'เว็บไซต์ธุรกิจ',
    subtitle: 'Corporate Website',
    description: 'สร้างความน่าเชื่อถือและภาพลักษณ์ระดับมืออาชีพ ให้กับธุรกิจและองค์กรของคุณ',
    features: [
      'ดีไซน์ตรงตาม Brand CI',
      'โครงสร้างแสดงบริการและประวัติบริษัท',
      'ฟอร์มติดต่อและแผนที่ Google Maps',
      'ระบบบริหารจัดการบทความ / ข่าวสาร'
    ],
    recommendedFor: 'บริษัท, โรงงาน, ธุรกิจ B2B, บริการเฉพาะทาง'
  },
  {
    id: 'ecommerce',
    icon: 'ShoppingCart',
    title: 'เว็บไซต์ร้านค้าออนไลน์',
    subtitle: 'E-Commerce System',
    description: 'เพิ่มยอดขาย ด้วยระบบ E-Commerce ครบวงจร รองรับตะกร้าสินค้าและการชำระเงิน',
    features: [
      'ระบบแคตตาล็อกและสต็อกสินค้า',
      'รองรับ QR PromptPay, บัตรเครดิต',
      'ระบบจัดการออเดอร์และแจ้งเตือน LINE',
      'เชื่อมต่อระบบขนส่งชั้นนำ'
    ],
    recommendedFor: 'ร้านค้าปลีก, แบรนด์สินค้า, ตัวแทนจำหน่าย'
  },
  {
    id: 'landing',
    icon: 'Sparkles',
    title: 'Landing Page',
    subtitle: 'High-Converting Sale Page',
    description: 'ดึงดูดลูกค้า ด้วยหน้าเพจที่ออกแบบมาเพื่อการขายและปิดการสนทนาโดยเฉพาะ',
    features: [
      'โครงสร้างเน้น Call-to-Action ชัดเจน',
      'ปุ่มโทรออกและแอด LINE OA ทันที',
      'ติดตั้ง Facebook Pixel / TikTok Pixel',
      'สปีดโหลดไวพิเศษ เพื่อลด Bounce Rate'
    ],
    recommendedFor: 'ยิงแคมเปญโฆษณา, คอร์สเรียน, อสังหาฯ, โปรโมชัน'
  },
  {
    id: 'redesign',
    icon: 'RefreshCw',
    title: 'ปรับปรุงเว็บไซต์',
    subtitle: 'Website Redesign',
    description: 'อัปเดตดีไซน์และประสบการณ์ใช้งานให้ทันสมัย เพิ่มประสิทธิภาพให้ตรงเป้าหมาย',
    features: [
      'ยกเครื่องดีไซน์ให้ร่วมสมัย',
      'ปรับให้รองรับสมาร์ตโฟน 100%',
      'เพิ่มความเร็วในการโหลดหน้าเว็บ',
      'ย้ายข้อมูลเดิมอย่างปลอดภัย ไม่กระทบ SEO'
    ],
    recommendedFor: 'เว็บไซต์เก่าที่ต้องการรีแบรนด์และปรับปรุง UX'
  },
  {
    id: 'maintenance',
    icon: 'ShieldCheck',
    title: 'ดูแลเว็บไซต์รายปี',
    subtitle: 'Maintenance & Support',
    description: 'อัปเดต ปลอดภัย พร้อมให้คำปรึกษาและซัพพอร์ตตลอดอายุการใช้งานตามแพ็กเกจ',
    features: [
      'สำรองข้อมูลอัตโนมัติ (Daily Backup)',
      'ตรวจสอบความปลอดภัยและมัลแวร์',
      'อัปเดตระบบและปลั๊กอินให้สดใหม่อยู่เสมอ',
      'ทีมซัพพอร์ตตอบคำถามและช่วยเหลือรวดเร็ว'
    ],
    recommendedFor: 'ธุรกิจที่ต้องการความอุ่นใจและมีผู้เชี่ยวชาญดูแล'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '3,900',
    priceNumber: 3900,
    badge: 'เริ่มต้นง่าย',
    targetAudience: 'เหมาะสำหรับเริ่มต้นธุรกิจ',
    features: [
      'ดีไซน์สวย ทันสมัย',
      'รองรับมือถือ 100% (Responsive)',
      'หน้าเพจ 5 หน้าพื้นฐาน',
      'ฟอร์มติดต่อ + แผนที่',
      'โครงสร้าง SEO พื้นฐาน',
      'ติดตั้ง SSL ความปลอดภัยฟรี',
      'เชื่อมต่อปุ่มแชต LINE & โทร'
    ],
    deliveryTime: '5-7 วันทำการ',
    revisions: 'ปรับแก้ได้ 2 ครั้ง'
  },
  {
    id: 'business',
    name: 'Business',
    price: '9,900',
    priceNumber: 9900,
    badge: 'Most Popular',
    isPopular: true,
    targetAudience: 'เหมาะสำหรับธุรกิจที่กำลังเติบโต',
    features: [
      'ดีไซน์เฉพาะแบรนด์ตาม CI',
      'รองรับมือถือ 100% ลื่นไหล',
      'หน้าเพจ 10 หน้าตามขอบเขตงาน',
      'ระบบจัดการเนื้อหา (CMS) ใช้งานง่าย',
      'SEO ขั้นสูงพร้อมโครงสร้างข้อมูล',
      'ฟอร์มติดต่อ + แผนที่ Google Maps',
      'เชื่อมต่อระบบวิเคราะห์สถิติ',
      'คู่มือการใช้งานระบบแบบวิดีโอ'
    ],
    deliveryTime: '10-14 วันทำการ',
    revisions: 'ปรับแก้ได้ 3 ครั้ง'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: '24,900',
    priceNumber: 24900,
    badge: 'สำหรับธุรกิจขนาดกลาง',
    targetAudience: 'เหมาะสำหรับธุรกิจขนาดกลาง',
    features: [
      'ดีไซน์ระดับพรีเมียม Custom UI/UX',
      'รองรับมือถือ 100% ความเร็วสูง',
      'หน้าเพจไม่จำกัด (โครงสร้างระบบยืดหยุ่น)',
      'ระบบสมาชิก / ระบบจอง / ระบบสั่งซื้อ',
      'ระบบวิเคราะห์ข้อมูลขั้นสูง',
      'SEO + Google Analytics 4 ครบเซ็ต',
      'รองรับ 2 ภาษา (TH / EN)',
      'ดูแลและอัปเดตระบบฟรี 6 เดือน'
    ],
    deliveryTime: '15-25 วันทำการ',
    revisions: 'ปรับแก้ได้ 5 ครั้ง'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '59,000',
    priceNumber: 59000,
    badge: 'ระดับองค์กร',
    targetAudience: 'เหมาะสำหรับองค์กรขนาดใหญ่',
    features: [
      'ดีไซน์พิเศษระดับองค์กร (Bespoke Architecture)',
      'รองรับมือถือ 100% พร้อม Performance ขั้นสุด',
      'ฟังก์ชันและระบบไม่จำกัดตามขอบเขต',
      'ระบบ E-Commerce ครบวงจรหรือระบบเฉพาะทาง',
      'เชื่อมต่อ API / ERP / ระบบภายใน',
      'การทดสอบความปลอดภัย & Load Test',
      'สิทธิ์ความเป็นเจ้าของซอร์สโค้ด 100%',
      'ดูแลและให้คำปรึกษาเฉพาะทางระดับ Priority'
    ],
    deliveryTime: '30-45 วันทำการ',
    revisions: 'ปรับแก้ตามรอบการพัฒนา'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioItem[] = [
  {
    id: 'b-plus-property',
    title: 'B-Plus Property',
    category: 'property',
    categoryLabel: 'Real Estate / Property',
    type: 'Development & Design',
    description: 'เว็บไซต์อสังหาริมทรัพย์ระดับพรีเมียม พร้อมระบบค้นหาโครงการชั้นสูง และแบบฟอร์มลงทะเบียนนัดหมายชมโครงการที่ใช้งานง่าย',
    metrics: {
      label1: 'ยอดผู้เข้าชมเพิ่มขึ้น',
      value1: '+120%',
      label2: 'ยอดการติดต่อขอชมโครงการ',
      value2: '+85%'
    },
    client: 'B-Plus Asset Development Co., Ltd.',
    year: '2025',
    challenge: 'ลูกค้าต้องการเว็บไซต์ที่สะท้อนภาพลักษณ์ความหรูหราของโครงการบ้านเดี่ยวและคอนโดมิเนียม พร้อมระบบกรองทำเลและราคาที่รวดเร็ว เพื่อรองรับการยิงแอดและการเข้าชมผ่านมือถือ',
    solution: 'ออกแบบ UI สไตล์ Modern Luxury ใช้โทนขาว น้ำเงิน และภาพสถาปัตยกรรมคมชัด วางระบบ Search & Filter อัจฉริยะ พร้อมปุ่มนัดหมายทาง LINE OA ที่เข้าถึงได้ทันทีจากทุกหน้าจอ',
    features: [
      'ระบบ Virtual Gallery และ Floor Plan โครงการ',
      'ระบบคำนวณเงินกู้และค่างวดเบื้องต้น',
      'ฟอร์มลงทะเบียนจองสิทธิ์พิเศษพร้อม SMS แจ้งเตือน',
      'เชื่อมต่อ Google Maps แสดงสิ่งอำนวยความสะดวกใกล้เคียง'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Google Maps API'],
    previewUrl: 'https://bplus-property.example.com',
    themeColor: '#087BFF',
    accentBg: 'from-blue-900/60 to-slate-900/90'
  },
  {
    id: 'krua-thai',
    title: 'Krua Thai',
    category: 'food',
    categoryLabel: 'Restaurant / Food',
    type: 'Design & Development',
    description: 'เว็บไซต์ร้านอาหารไทยร่วมสมัย พร้อมระบบเมนูอาหารดิจิทัล ระบบจองโต๊ะล่วงหน้า และระบบสั่งอาหารเดลิเวอรี่ตรงไม่ผ่านคนกลาง',
    metrics: {
      label1: 'ยอดสั่งซื้อออนไลน์ตรง',
      value1: '+200%',
      label2: 'ลูกค้าใหม่เพิ่มขึ้น',
      value2: '+65%'
    },
    client: 'Krua Thai Cuisine & Catering',
    year: '2025',
    challenge: 'เดิมร้านอาหารต้องพึ่งพาแอปพลิเคชันเดลิเวอรี่ที่มีค่า GP สูง ต้องการมีช่องทางสั่งอาหารตรงเป็นของตนเอง พร้อมทั้งดึงดูดนักท่องเที่ยวต่างชาติให้เข้ามาจองโต๊ะทานที่ร้าน',
    solution: 'จัดวาง Visual ดีไซน์โทนสีทอง-น้ำตาลอบอุ่น นำเสนอภาพอาหารความละเอียดสูง มีระบบเมนู 2 ภาษา (ไทย-อังกฤษ) และขั้นตอนสั่งซื้อ PromptPay ที่รวดเร็วเพียง 3 ขั้นตอน',
    features: [
      'เมนูอาหารพร้อมภาพประกอบและตัวเลือกปรับแต่งรสชาติ',
      'ระบบจองโต๊ะล่วงหน้าพร้อมปฏิทินตรวจเช็คที่นั่งว่าง',
      'ระบบสะสมแต้มและโค้ดส่วนลดโปรโมชัน',
      'แจ้งเตือนออเดอร์ใหม่เข้าห้องครัวผ่าน LINE Notify ทันที'
    ],
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'LINE Messaging API', 'PromptPay'],
    previewUrl: 'https://kruathai-cuisine.example.com',
    themeColor: '#FFB800',
    accentBg: 'from-amber-950/60 to-slate-900/90'
  },
  {
    id: 'nextgen-tech',
    title: 'NextGen Tech',
    category: 'tech',
    categoryLabel: 'Corporate / Technology',
    type: 'Development & UI/UX',
    description: 'เว็บไซต์องค์กรเทคโนโลยีชั้นนำ สไตล์โมเดิร์น เรียบหรู พร้อมระบบจัดการเนื้อหาบล็อกเทคโนโลยีและหน้าสมัครงานออนไลน์',
    metrics: {
      label1: 'ยอดผู้เข้าชมเพิ่มขึ้น',
      value1: '+150%',
      label2: 'การติดต่อจากลูกค้า B2B',
      value2: '+70%'
    },
    client: 'NextGen Tech Innovations Co., Ltd.',
    year: '2025',
    challenge: 'บริษัทเทคโนโลยีด้าน Cloud & AI มีโซลูชันที่มีความซับซ้อน ต้องการเว็บไซต์ที่สื่อสารข้อเสนอทางธุรกิจให้เข้าใจง่าย สร้างความน่าเชื่อถือกับลูกค้าระดับ Enterprise',
    solution: 'ผสมผสานสไตล์ Futuristic Digital Studio เข้ากับ Swiss Minimalism นำเสนอ Interactive Product Architecture และกราฟิกอธิบายระบบที่เข้าใจได้ในเวลาไม่กี่วินาที',
    features: [
      'Interactive Cloud Architecture Showcase',
      'Whitepaper & Case Study Download Gated Content',
      'ระบบค้นหาตำแหน่งงานและส่ง Resume ออนไลน์',
      'ระบบความปลอดภัยตามมาตรฐาน PDPA และ ISO 27001'
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'PostgreSQL'],
    previewUrl: 'https://nextgentech.example.com',
    themeColor: '#38D5FF',
    accentBg: 'from-cyan-950/60 to-slate-900/90'
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: 'Award',
    title: 'ทีมงานมืออาชีพ',
    description: 'ประสบการณ์เชี่ยวชาญกว่า 10 ปี ในการพัฒนาเว็บไซต์ให้แก่องค์กรและแบรนด์ชั้นนำ'
  },
  {
    icon: 'Palette',
    title: 'ดีไซน์เฉพาะตัว ไม่เหมือนใคร',
    description: 'ออกแบบใหม่ทุกโปรเจกต์ตามอัตลักษณ์แบรนด์ (CI) หลีกเลี่ยงเทมเพลตสำเร็จรูปซ้ำซาก'
  },
  {
    icon: 'Cpu',
    title: 'เทคโนโลยีทันสมัย',
    description: 'พัฒนาด้วยโค้ดมาตรฐานสากล รองรับทุกอุปกรณ์ โหลดรวดเร็ว ปลอดภัย และ SEO Friendly'
  },
  {
    icon: 'Headphones',
    title: 'ดูแลหลังการขาย',
    description: 'ดูแลตลอดอายุการใช้งาน ให้คำปรึกษาและแก้ไขปัญหาอย่างรวดเร็วโดยทีมงานจริง'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'member-1',
    name: 'คุณเอ็กซ์',
    role: 'Founder & CEO',
    roleEn: 'Digital Strategist & Tech Lead',
    experience: '12+ ปีในสายงาน Web & Cloud',
    bio: 'ผู้เชี่ยวชาญด้านกลยุทธ์ดิจิทัลและการวางสถาปัตยกรรมระบบเว็บไซต์ระดับองค์กร',
    initials: 'EX',
    avatarBg: 'from-blue-600 to-indigo-800'
  },
  {
    id: 'member-2',
    name: 'คุณนันท์',
    role: 'UI/UX Designer',
    roleEn: 'Lead Product Designer',
    experience: '8+ ปีในสายงาน Design System',
    bio: 'ผู้ออกแบบ User Experience ที่ผสมผสานความสวยงามแห่งอนาคตเข้ากับความใช้งานง่าย',
    initials: 'NN',
    avatarBg: 'from-cyan-500 to-blue-700'
  },
  {
    id: 'member-3',
    name: 'คุณบอส',
    role: 'Frontend Developer',
    roleEn: 'Senior Frontend Engineer',
    experience: '7+ ปีในสายงาน React / Next.js',
    bio: 'เชี่ยวชาญด้านการพัฒนา Web Performance, Micro-animations และ Responsive Design',
    initials: 'BS',
    avatarBg: 'from-sky-500 to-indigo-900'
  },
  {
    id: 'member-4',
    name: 'คุณเบส',
    role: 'Backend Developer',
    roleEn: 'System & Database Architect',
    experience: '8+ ปีในสายงาน Cloud & Security',
    bio: 'ดูแลความปลอดภัย การเชื่อมต่อ API ฐานข้อมูล และระบบจัดการเนื้อหาความเสถียรสูง',
    initials: 'BT',
    avatarBg: 'from-indigo-600 to-purple-900'
  },
  {
    id: 'member-5',
    name: 'คุณปิ๊ก',
    role: 'Digital Marketing & SEO',
    roleEn: 'SEO & Growth Specialist',
    experience: '6+ ปีในสายงาน Technical SEO',
    bio: 'ผู้วางโครงสร้าง SEO และวิเคราะห์ Conversion Funnel ให้เว็บไซต์ติดอันดับหน้าแรก Google',
    initials: 'PK',
    avatarBg: 'from-teal-500 to-blue-800'
  }
];

export const CUSTOMER_REVIEWS: CustomerReview[] = [
  {
    id: 'review-1',
    quote: 'ทีมงานให้คำแนะนำดีมาก ออกแบบเว็บไซต์ได้สวย ใช้งานง่าย ตรงตามความต้องการ และดูแลต่อเนื่องหลังจากส่งมอบงาน ประทับใจมากครับ ยอดผู้เข้าชมและติดต่อโครงการเพิ่มขึ้นชัดเจน',
    author: 'คุณรณภัทร วงศ์เจริญ',
    role: 'เจ้าของธุรกิจ',
    business: 'Krua Thai Cuisine',
    rating: 5,
    projectType: 'E-Commerce & Restaurant System',
    initials: 'RP'
  },
  {
    id: 'review-2',
    quote: 'หลังจากเปิดตัวเว็บไซต์ใหม่กับ Prowebcreate ลูกค้าชมว่าเว็บไซต์ดูพรีเมียมและค้นหาโครงการได้ง่ายมาก ระบบโหลดเร็วบนมือถือ ฟอร์มนัดหมายเชื่อม LINE OA ช่วยให้ปิดการขายได้เร็วขึ้นมากครับ',
    author: 'คุณกิตติศักดิ์ พัฒนไพศาล',
    role: 'Managing Director',
    business: 'B-Plus Asset Co., Ltd.',
    rating: 5,
    projectType: 'Corporate & Property Portal',
    initials: 'KT'
  },
  {
    id: 'review-3',
    quote: 'งานประณีตระดับมืออาชีพ โครงสร้างโค้ดสะอาด ตรงตามมาตรฐานความปลอดภัยระดับสากล และทีมงานส่งมอบงานตรงตามกำหนดเวลา แนะนำสำหรับองค์กรที่ต้องการเว็บไซต์ระดับ Enterprise',
    author: 'ดร.วิชัย ธนเศรษฐกุล',
    role: 'Chief Technology Officer',
    business: 'NextGen Tech Innovations',
    rating: 5,
    projectType: 'Enterprise Web Portal',
    initials: 'WC'
  },
  {
    id: 'review-4',
    quote: 'เริ่มต้นจากแพ็กเกจ Business ทางทีมงานช่วยวางโครงสร้างให้เสร็จสรรพ อธิบายเข้าใจง่ายสำหรับคนที่ไม่มีความรู้เรื่องคอมพิวเตอร์ เว็บไซต์ขึ้นหน้าแรก Google ได้จริงตามที่วางแผนไว้ค่ะ',
    author: 'คุณพัชราภรณ์ มั่งมีศรี',
    role: 'ผู้ก่อตั้งแบรนด์',
    business: 'Aura Skin Clinic',
    rating: 5,
    projectType: 'Business Website & Booking',
    initials: 'PC'
  },
  {
    id: 'review-5',
    quote: 'ทำ Sale Page สำหรับยิงแอดคอนโดและคอร์สสัมมนา ได้ผลตอบรับดีเกินคาด หน้าเว็บโหลดไวมาก แม้คนเข้ามาพร้อมกันหลักพันคน ยอด Conversion พุ่งขึ้นกว่า 40%',
    author: 'คุณธีรวัฒน์ ชัยมงคล',
    role: 'Marketing Director',
    business: 'Prime Real Estate Hub',
    rating: 5,
    projectType: 'High-Converting Landing Page',
    initials: 'TW'
  },
  {
    id: 'review-6',
    quote: 'ปรับปรุงเว็บไซต์เดิมที่เก่าและไม่รองรับมือถือ หลังจากทีมงาน Prowebcreate รีดีไซน์ใหม่ ภาพลักษณ์บริษัทเปลี่ยนไปอย่างสิ้นเชิง ลูกค้าต่างชาติให้ความเชื่อถือเพิ่มขึ้นมากครับ',
    author: 'คุณสุรเชษฐ์ อัครเดชา',
    role: 'General Manager',
    business: 'Siam Industrial Solutions',
    rating: 5,
    projectType: 'Full Website Redesign',
    initials: 'SC'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq-1',
    question: 'ใช้เวลาทำเว็บไซต์นานแค่ไหน?',
    answer: 'ระยะเวลาขึ้นอยู่กับแพ็กเกจและขอบเขตงาน: แพ็กเกจ Basic ใช้เวลาประมาณ 5–7 วันทำการ, แพ็กเกจ Business ใช้เวลา 10–14 วันทำการ, และแพ็กเกจ Professional / Enterprise ใช้เวลาประมาณ 15–30 วันทำการ โดยนับจากวันที่ได้รับข้อมูลและสรุปดีไซน์เรียบร้อยครับ',
    category: 'timeline'
  },
  {
    id: 'faq-2',
    question: 'หากไม่มี Domain และ Hosting ต้องทำอย่างไร?',
    answer: 'ไม่ต้องกังวลครับ! ทีมงาน Prowebcreate มีบริการช่วยจดทะเบียน Domain (.com, .co.th, .net ฯลฯ) และจัดเตรียม Cloud Hosting ความเร็วสูงที่มีความปลอดภัย พร้อมติดตั้งใบรับรองความปลอดภัย SSL ให้ฟรี ครบจบในที่เดียว',
    category: 'setup'
  },
  {
    id: 'faq-3',
    question: 'เว็บไซต์รองรับมือถือ (Responsive) หรือไม่?',
    answer: 'ทุกเว็บไซต์ที่เราจัดทำ รองรับการแสดงผลบนสมาร์ตโฟน แท็บเล็ต และคอมพิวเตอร์ทุกขนาดหน้าจอ 100% (Fully Responsive) มีการปรับแต่งขนาดตัวอักษรและปุ่มกดให้ใช้งานง่าย สะดวกต่อการสั่งซื้อและติดต่อ',
    category: 'design'
  },
  {
    id: 'faq-4',
    question: 'สามารถแก้ไขเนื้อหาเว็บไซต์ภายหลังได้หรือไม่?',
    answer: 'สามารถแก้ไขได้ครับ! ในแพ็กเกจ Business ขึ้นไป จะมีระบบจัดการเนื้อหา (CMS) ที่ใช้งานง่าย สามารถเปลี่ยนข้อความ รูปภาพ เพิ่มสินค้า หรือเขียนบล็อกได้เอง โดยเรามีคลิปวิดีโอคู่มือการใช้งานสอนอย่างละเอียด พร้อมทีมงานคอยให้คำแนะนำ',
    category: 'features'
  },
  {
    id: 'faq-5',
    question: 'เว็บไซต์รองรับการทำ SEO หรือไม่?',
    answer: 'เรารองรับ SEO ตั้งแต่ระดับโครงสร้าง (Clean Semantic HTML, Title, Meta Tags, Open Graph, Sitemap.xml, Schema.org) และออกแบบตามมาตรฐาน Core Web Vitals เพื่อให้ Google สามารถเข้ามาจัดอันดับได้ง่ายและติดหน้าแรกได้รวดเร็ว',
    category: 'seo'
  },
  {
    id: 'faq-6',
    question: 'สามารถเชื่อมต่อ LINE OA และ Facebook Pixel ได้หรือไม่?',
    answer: 'สามารถเชื่อมต่อได้ครบถ้วนครับ ทั้งปุ่มแชต LINE OA, ปุ่มโทรออกทันที, Facebook Pixel, TikTok Pixel, Google Analytics 4 และ Google Tag Manager เพื่อใช้วัดผลและยิงโฆษณาได้อย่างแม่นยำ',
    category: 'marketing'
  },
  {
    id: 'faq-7',
    question: 'มีบริการดูแลเว็บไซต์หลังส่งมอบอย่างไร?',
    answer: 'เรามีบริการดูแลหลังการขาย ทั้งการสำรองข้อมูล (Backup), อัปเดตความปลอดภัย, ตรวจเช็คสถานะการออนไลน์ และให้คำปรึกษาตลอดอายุการใช้งานตามเงื่อนไขแพ็กเกจ พร้อมทีมงานที่พร้อมช่วยเหลือเมื่อเกิดปัญหา',
    category: 'support'
  },
  {
    id: 'faq-8',
    question: 'ขั้นตอนการชำระเงินและเงื่อนไขเป็นอย่างไร?',
    answer: 'การชำระเงินแบ่งเป็น 2-3 งวดตามมาตรฐานสากล: งวดที่ 1 ชำระมัดจำ 50% ก่อนเริ่มงานออกแบบและพัฒนา, และงวดที่ 2 ชำระส่วนที่เหลือ 50% เมื่อส่งมอบงานและทดสอบระบบเรียบร้อย สามารถออกใบเสนอราคาและใบเสร็จ/ใบกำกับภาษีได้ถูกต้องครับ',
    category: 'payment'
  }
];

export const AGENCY_CONTACT = {
  phone: '081-234-5678',
  phoneDisplay: '081-234-5678',
  email: 'info@prowebcreate.com',
  lineId: '@prowebcreate',
  lineUrl: 'https://line.me/ti/p/~@prowebcreate',
  address: 'กรุงเทพมหานคร ประเทศไทย',
  workingHours: 'จันทร์ - ศุกร์: 09:00 - 18:00 น.',
  facebook: 'https://facebook.com/prowebcreate',
  youtube: 'https://youtube.com/@prowebcreate',
  tiktok: 'https://tiktok.com/@prowebcreate'
};
