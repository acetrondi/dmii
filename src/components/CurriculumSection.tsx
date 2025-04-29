
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  {
    id: "module-1",
    title: "Module 1: Introduction to Marketing",
    content: (
      <>
        <p className="mb-3">Goal: Understand the roots of marketing and how it evolved into digital.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>What is Marketing?</li>
          <li>Introduction, Definition, Real-life Examples</li>
          <li>Traditional vs Digital Marketing</li>
          <li>Definitions, Methods, Use Cases, Case Studies</li>
        </ul>
      </>
    )
  },
  {
    id: "module-2",
    title: "Module 2: The Digital Mindset",
    content: (
      <>
        <p className="mb-3">Goal: Learn how digital marketing functions and what makes it different.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Platforms Overview: Social, Search, Email</li>
          <li>Customer Journey Models: AIDA, ACCA, Sales Funnels</li>
          <li>USP Creation</li>
          <li>Case Study + Funnel Project</li>
        </ul>
      </>
    )
  },
  {
    id: "module-3",
    title: "Module 3: Knowing Your Audience",
    content: (
      <>
        <p className="mb-3">Goal: Build empathy and strategy by identifying your ideal customer.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Buyer Personas: Templates, Examples (with top 2 brand studies)</li>
          <li>Communication Strategy: Storytelling, Brand Voice, Ad Messaging</li>
          <li>What is Marketing vs Ad Communication</li>
          <li>Powerful Presentations & Pitching</li>
          <li>Design Basics</li>
          <li>Presenting with Confidence</li>
        </ul>
      </>
    )
  },
  {
    id: "module-4",
    title: "Module 4: Content, Copy & Creative Writing",
    content: (
      <>
        <p className="mb-3">Goal: Build writing skills for modern marketing.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Types of Content (Short-form, Long-form, UGC, AI-generated)</li>
          <li>Hooks, Headlines, CTAs</li>
          <li>Brand Tone & Voice</li>
          <li>EVENT: Live Debate – "Creativity vs Algorithms"</li>
        </ul>
      </>
    )
  },
  {
    id: "module-5",
    title: "Module 5: Social Media Marketing (Organic)",
    content: (
      <>
        <p className="mb-3">Goal: Create a strong organic presence on major platforms.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Platforms Covered: Instagram, Facebook, LinkedIn, YouTube, Quora, X (Twitter), Snapchat</li>
          <li>Platform Strengths + Content Pillars</li>
          <li>Analytics Basics</li>
          <li>Competitor Study & Case Examples</li>
          <li>Project: Build and Present an Organic Strategy for a Brand</li>
          <li>Paid Social Advertising</li>
        </ul>
      </>
    )
  },
  {
    id: "module-6",
    title: "Module 6: SEO & SEM Fundamentals",
    content: (
      <>
        <p className="mb-3">Goal: Learn how brands appear on Google organically and via ads.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>SEO Basics: Keywords, On-page, Off-page, Tools</li>
          <li>Tools: Ubersuggest, Google Search Console, ChatGPT for SEO</li>
          <li>SEM (Search Engine Marketing)</li>
          <li>Google Search Ads Overview</li>
          <li>Difference from SEO</li>
          <li>Ad Copy & Structure</li>
        </ul>
      </>
    )
  },
  {
    id: "module-7",
    title: "Module 7: Final Project Presentation",
    content: (
      <>
        <ul className="list-disc pl-5 space-y-1">
          <li>Combine everything learned into one strategy for a mock or real brand</li>
          <li>Present in class using Canva / Slides / Video format</li>
          <li>Peer + Mentor Feedback</li>
          <li>Foundation Course Certification from DMII</li>
          <li>Portfolio-ready project</li>
          <li>Upgrade guidance to Intermediate level</li>
          <li>Lifetime access to learning community</li>
        </ul>
      </>
    )
  }
];

const CurriculumSection = () => {
  const [openItem, setOpenItem] = useState<string | null>("module-1");
  
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
    <section id="curriculum" className="py-20 bg-course-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 scroll-reveal">
            <div className="inline-block px-4 py-1.5 mb-3 rounded-full bg-course-accent/20 text-course-main text-sm font-medium">
              Course Structure
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-course-main">
              Curriculum
            </h2>
            <p className="text-lg text-course-muted">
              <span className="font-medium">Duration:</span> 3 Months
              <br />
              <span className="font-medium">Format:</span> Live + Recorded Classes | Projects | Certification
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 scroll-reveal">
            <Accordion type="single" collapsible value={openItem || undefined} onValueChange={(value) => setOpenItem(value)}>
              {modules.map((module) => (
                <AccordionItem key={module.id} value={module.id} className="border-b border-gray-100 last:border-0">
                  <AccordionTrigger className="py-6 hover:no-underline">
                    <h3 className="text-lg font-medium text-course-main text-left">{module.title}</h3>
                  </AccordionTrigger>
                  <AccordionContent className="py-4 text-course-muted animate-slide-in">
                    {module.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-8 flex justify-center">
              <Button className="bg-course-main text-white hover:bg-course-main/90">
                Download Detailed Syllabus
              </Button>
            </div>
          </div>
          
          <div className="mt-12 text-center text-course-muted scroll-reveal">
            <p className="italic">
              "Our curriculum is constantly updated to reflect the latest AI tools and digital marketing trends."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
