
import React, { useEffect } from 'react';
import { Book, Users, Calendar, Check, Play, Clock } from 'lucide-react';

const features = [
  {
    title: "AI-Driven Marketing",
    description: "Learn to leverage cutting-edge AI tools to amplify your marketing efforts and stay ahead of the curve.",
    icon: <Play className="w-8 h-8 text-course-accent" />
  },
  {
    title: "Learn by Doing",
    description: "Work on real campaigns and projects that build your portfolio while you learn practical skills.",
    icon: <Book className="w-8 h-8 text-course-accent" />
  },
  {
    title: "Mentors, Not Instructors",
    description: "Get personalized guidance from industry professionals with years of marketing experience.",
    icon: <Users className="w-8 h-8 text-course-accent" />
  },
  {
    title: "Community & Career",
    description: "Join a supportive network of marketers and get access to job opportunities and internships.",
    icon: <Users className="w-8 h-8 text-course-accent" />
  },
  {
    title: "Certifications That Matter",
    description: "Earn industry-recognized credentials that employers actually value and respect.",
    icon: <Check className="w-8 h-8 text-course-accent" />
  },
  {
    title: "Real Growth. Real Clients.",
    description: "Work with actual businesses to implement strategies and see real-world results.",
    icon: <Clock className="w-8 h-8 text-course-accent" />
  }
];

const FeaturesSection = () => {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-course-main">
            Future-Proof Your Career — The DMII Way
          </h2>
          <p className="text-course-muted text-lg">
            Our program combines cutting-edge AI technologies with proven marketing strategies 
            to prepare you for today's dynamic digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card p-6 bg-white hover:bg-course-light scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="motion-trigger">
                <div className="w-16 h-16 rounded-full bg-course-accent/20 flex items-center justify-center mb-6 motion-element">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-course-main">{feature.title}</h3>
              <p className="text-course-muted">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
