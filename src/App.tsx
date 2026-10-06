import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroVideo } from './components/HeroVideo';
import { PricingSection } from './components/PricingSection';
import { SocialProofSection } from './components/SocialProofSection';
import { CompatibilitySection } from './components/CompatibilitySection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CheckoutModal } from './components/CheckoutModal';
import { ExitDiscountModal } from './components/ExitDiscountModal';
import { Plan } from './types';
import { specialDiscountPlan } from './data/nexaPlayData';

export const App: React.FC = () => {
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<Plan | null>(null);
  const [showExitDiscountModal, setShowExitDiscountModal] = useState<boolean>(false);
  const [hasDeclinedDiscountOnce, setHasDeclinedDiscountOnce] = useState<boolean>(false);

  // Detector de Exit-Intent no navegador (quando o cursor sai da janela em direção à barra de abas)
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10 && !hasDeclinedDiscountOnce && !showExitDiscountModal) {
        setShowExitDiscountModal(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasDeclinedDiscountOnce, showExitDiscountModal]);

  const scrollToPricing = () => {
    const el = document.getElementById('planos');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-darkBg text-slate-100 flex flex-col relative selection:bg-primaryPurple selection:text-white">
      {/* Header Fixo */}
      <Header />

      <main className="flex-1 pb-16 sm:pb-0">
        {/* 1. Hero com Player de Vídeo e Configuração de Link */}
        <HeroVideo onScrollToPricing={scrollToPricing} />

        {/* 2. Seção de Preços (Start R$ 19,90 e Premium R$ 49,90) */}
        <PricingSection
          onSelectPlan={(plan) => setSelectedPlanForCheckout(plan)}
          onTriggerDeclineDiscount={() => setShowExitDiscountModal(true)}
        />

        {/* 3. Provas Sociais com WhatsApp e Instagram Direct */}
        <SocialProofSection />

        {/* 4. Compatibilidade de Dispositivos */}
        <CompatibilitySection />

        {/* 5. Garantia Incondicional de 7 Dias */}
        <GuaranteeSection />

        {/* 6. FAQ (Perguntas Frequentes) */}
        <FaqSection />
      </main>

      {/* Rodapé Oficial */}
      <Footer />

      {/* Barra de Conversão Fixa Mobile */}
      <StickyBottomBar onScrollToPricing={scrollToPricing} />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />

      {/* Modal de Checkout */}
      {selectedPlanForCheckout && (
        <CheckoutModal
          plan={selectedPlanForCheckout}
          onClose={(shouldTriggerDecline) => {
            setSelectedPlanForCheckout(null);
            if (shouldTriggerDecline && !hasDeclinedDiscountOnce) {
              setShowExitDiscountModal(true);
            }
          }}
        />
      )}

      {/* Pop-up de Desconto de R$ 29,90 para o Plano Premium em Caso de Recusa */}
      <ExitDiscountModal
        isOpen={showExitDiscountModal}
        onClose={() => {
          setShowExitDiscountModal(false);
          setHasDeclinedDiscountOnce(true);
        }}
        onAcceptSpecialOffer={() => {
          setShowExitDiscountModal(false);
          setHasDeclinedDiscountOnce(true);
          setSelectedPlanForCheckout(specialDiscountPlan);
        }}
      />
    </div>
  );
};

export default App;
