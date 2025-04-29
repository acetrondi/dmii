
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Clock, Users, BookOpen, Calendar, FileText } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative pt-28 pb-20 overflow-hidden" ref={heroRef}>
      <div 
        className="absolute top-0 left-0 w-full h-full gradient-bg -z-10"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 mb-3 rounded-full bg-course-accent/20 text-course-main text-sm font-medium animate-pulse-light">
              New Course Launch
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-course-main scroll-reveal">
              FOUNDATION IN <span className="text-gradient">AI DIGITAL MARKETING</span>
            </h1>
            
            <p className="text-xl text-course-muted max-w-xl scroll-reveal">
              Learn digital marketing from scratch with the power of AI. Master the fundamentals and get hands-on experience with industry-leading tools.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 pt-2 scroll-reveal">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-course-accent" />
                <span className="text-sm">Duration 3 months</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-course-accent" />
                <span className="text-sm">AI tools</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-course-accent" />
                <span className="text-sm">Hands-on Project</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-course-accent" />
                <span className="text-sm">SEO & Google Ads</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-course-accent" />
                <span className="text-sm">Certificate</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-course-accent" />
                <span className="text-sm">Real client work</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6 scroll-reveal">
              <Button className="bg-course-main text-white hover:bg-course-main/90 px-8 py-6">
                Enroll Now
              </Button>
              <Button variant="outline" className="border-course-accent text-course-main hover:bg-course-accent/10 px-8 py-6">
                Talk to Mentor
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl overflow-hidden glass-card p-6 shadow-xl animate-float">
                <div className="w-12 h-12 rounded-full bg-course-accent/30 flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6 text-course-main" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-course-main">Why Choose This Course?</h3>
                
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mt-1 mr-2 bg-course-accent/20 p-1 rounded-full">
                      <Check className="w-3 h-3 text-course-main" />
                    </div>
                    <span className="text-sm">Industry-recognized certification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-2 bg-course-accent/20 p-1 rounded-full">
                      <Check className="w-3 h-3 text-course-main" />
                    </div>
                    <span className="text-sm">Live classes with marketing experts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-2 bg-course-accent/20 p-1 rounded-full">
                      <Check className="w-3 h-3 text-course-main" />
                    </div>
                    <span className="text-sm">1-on-1 mentorship sessions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-2 bg-course-accent/20 p-1 rounded-full">
                      <Check className="w-3 h-3 text-course-main" />
                    </div>
                    <span className="text-sm">Portfolio-ready projects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mt-1 mr-2 bg-course-accent/20 p-1 rounded-full">
                      <Check className="w-3 h-3 text-course-main" />
                    </div>
                    <span className="text-sm">Lifetime access to course content</span>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <p className="text-xs text-course-muted">Starting from</p>
                  <div className="flex items-end">
                    <span className="text-3xl font-bold text-course-main">₹35,000</span>
                    <span className="text-course-muted ml-2">all-inclusive</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-2xl bg-course-accent/30 animate-pulse-light"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
