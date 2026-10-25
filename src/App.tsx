import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import PortfolioSection from './components/PortfolioSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TeamAndReviewsSection from './components/TeamAndReviewsSection';
import FaqSection from './components/FaqSection';
import FinalCtaSection from './components/FinalCtaSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import QuickContactBar from './components/QuickContactBar';
import LegalModals from './components/LegalModals';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | undefined>('business');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenQuoteModal = (planId?: string) => {
    if (planId) {
      setSelectedPlanId(planId);
    }
    setQuoteModalOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    if (serviceId === 'ecommerce') {
      setSelectedPlanId('enterprise');
    } else if (serviceId === 'landing') {
      setSelectedPlanId('basic');
    } else {
      setSelectedPlanId('business');
    }
    setQuoteModalOpen(true);
  };

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#06152E] text-slate-100 flex flex-col font-sans selection:bg-[#087BFF] selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* 1. Hero Carousel */}
        <HeroCarousel onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 2. Services Section (Ice White Background) */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 3. Pricing Section (Deep Navy / Midnight Navy) */}
        <PricingSection onSelectPlan={handleSelectPlan} />

        {/* 4. Portfolio Section (Midnight Navy + Case Study Modal) */}
        <PortfolioSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 5. Why Choose Us Section (Pure White) */}
        <WhyChooseUsSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 6. Team & Customer Reviews Section (Deep Navy Dual Zone) */}
        <TeamAndReviewsSection />

        {/* 7. FAQ Section (Ice White 2-Column Accordion) */}
        <FaqSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 8. Final CTA Section (Cyber Horizon Glow) */}
        <FinalCtaSection onOpenQuoteModal={() => handleOpenQuoteModal()} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacyModal={() => setLegalModalType('privacy')}
        onOpenTermsModal={() => setLegalModalType('terms')}
      />

      {/* Interactive Quotation & Consultation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialPlanId={selectedPlanId}
      />

      {/* Floating Quick Action Bar */}
      <QuickContactBar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Legal Modals (Privacy Policy / Terms of Service) */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
