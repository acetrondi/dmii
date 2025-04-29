
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import BatchesSection from '@/components/BatchesSection';
import ToolsSection from '@/components/ToolsSection';
import CurriculumSection from '@/components/CurriculumSection';
import FeesSection from '@/components/FeesSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Handle scroll reveal animations
    const handleScrollAnimation = () => {
      const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
      
      scrollRevealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Trigger once on initial load
    handleScrollAnimation();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <BatchesSection />
        <ToolsSection />
        <CurriculumSection />
        <FeesSection />
        <ValuePropositionSection />
        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
