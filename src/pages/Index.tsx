import { useState, useEffect } from 'react';
import TypewriterIntro from '@/components/TypewriterIntro';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showMain, setShowMain] = useState(false);

  const handleIntroComplete = () => {
    setShowIntro(false);
    // Small delay for smoother transition
    setTimeout(() => setShowMain(true), 300);
  };

  return (
    <>
      {showIntro && <TypewriterIntro onComplete={handleIntroComplete} />}
      
      {showMain && (
        <div className="min-h-screen bg-hero-bg animate-fade-in">
          <Header />
          <HeroSection />
        </div>
      )}
    </>
  );
};

export default Index;
