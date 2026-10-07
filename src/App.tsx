import { useState, useRef } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PlatformSection } from './components/PlatformSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { MarketPricingSection } from './components/MarketPricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PilotModal } from './components/PilotModal';

export function App() {
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const activeTriggerRef = useRef<HTMLElement | null>(null);

  const handleOpenPilotModal = (triggerElem?: HTMLElement | null) => {
    if (triggerElem) {
      activeTriggerRef.current = triggerElem;
    }
    setIsPilotModalOpen(true);
  };

  const handleClosePilotModal = () => {
    setIsPilotModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-body font-sans">
      {/* Sticky Header with wordmark, nav links and Request a Pilot CTA */}
      <Header onRequestPilot={handleOpenPilotModal} />

      <main className="flex-grow">
        {/* Section 1: Home */}
        <HeroSection onRequestPilot={handleOpenPilotModal} />

        {/* Section 2: About */}
        <AboutSection />

        {/* Section 3: Platform */}
        <PlatformSection />

        {/* Section 4: How It Works */}
        <HowItWorksSection />

        {/* Section 5: Market & Pricing */}
        <MarketPricingSection onRequestPilot={handleOpenPilotModal} />

        {/* Section 6: FAQ */}
        <FaqSection />
      </main>

      {/* Section 7: Footer */}
      <Footer />

      {/* Pilot Request Modal (accessible dialog) */}
      <PilotModal
        isOpen={isPilotModalOpen}
        onClose={handleClosePilotModal}
        triggerRef={activeTriggerRef}
      />
    </div>
  );
}

export default App;
