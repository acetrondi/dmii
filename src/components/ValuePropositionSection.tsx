
import React, { useEffect } from 'react';

const ValuePropositionSection = () => {
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
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-course-main">
            What Are You Taking With You?
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-course-muted leading-relaxed mb-8">
              We're giving you hands-on training with the latest AI tools, strategies, and trends that today's brands actually use. 
              Every DMII course includes real client projects, portfolio creation, and implementation labs. 
              You won't just learn what works, you'll make it work. Learn from industry experts and ex-agency professionals who've 
              run campaigns, built brands, and cracked growth strategies not just theory.
            </p>
            
            <p className="text-course-muted leading-relaxed">
              You're not just joining a course, you're entering a supportive network of marketers, entrepreneurs, and creators. 
              We help with freelancing, job prep, and internships.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl font-medium text-course-main">
              Ready to transform your skills and advance your career?
            </p>
            <p className="mt-2 text-course-muted">
              Join hundreds of successful DMII graduates working with top brands and agencies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
