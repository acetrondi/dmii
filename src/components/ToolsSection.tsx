
import React, { useEffect } from 'react';

const toolLogos = [
  { name: "Google Analytics", src: "https://upload.wikimedia.org/wikipedia/commons/7/77/GAnalytics.svg" },
  { name: "Facebook Ads", src: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg" },
  { name: "Google Ads", src: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Ads_2022.svg" },
  { name: "Canva", src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg" },
  { name: "ChatGPT", src: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" },
  { name: "Hubspot", src: "https://upload.wikimedia.org/wikipedia/commons/1/12/HubSpot_Logo.svg" },
];

const ToolsSection = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-course-main">
            Marketing Tools You'll Learn
          </h2>
          <p className="text-course-muted text-lg">
            Get future-ready with industry-standard AI digital marketing tools
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {toolLogos.map((tool, index) => (
            <div 
              key={index}
              className="w-full flex flex-col items-center scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-24 h-24 flex items-center justify-center">
                <img 
                  src={tool.src} 
                  alt={tool.name} 
                  className="w-16 h-16 object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
              <span className="mt-3 text-sm text-course-muted">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
