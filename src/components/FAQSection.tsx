
import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who is this course for?",
    answer: "This course is perfect for beginners — students, fresh graduates, freelancers, and career switchers who want to enter the world of digital marketing with an AI edge. No prior experience needed!"
  },
  {
    question: "Do I need any technical or marketing background to join?",
    answer: "Not at all. We start from the very basics and gradually introduce concepts, tools, and strategies — all with hands-on support and guidance."
  },
  {
    question: "What will I be able to do after completing this course?",
    answer: "You'll be able to confidently: Create content and social media strategies, Use AI tools for marketing tasks, Run basic ad campaigns, Build and present pitch decks, Add one solid project to your portfolio, and Prepare for freelance or internship opportunities."
  },
  {
    question: "What tools will I learn to use?",
    answer: "You'll get hands-on experience with tools like: Canva, ChatGPT, Meta Ads Manager (overview), Google Sheets, Mailchimp, Instagram, LinkedIn, YouTube, and more."
  },
  {
    question: "Is this a live or recorded course?",
    answer: "It's a hybrid model — mostly live sessions for interactive learning, plus recorded content you can revisit anytime. You also get lifetime access to updated resources."
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes! You'll receive a Foundation Certification from DMII, recognized by clients and companies. It's a great way to showcase your skills on LinkedIn and resumes."
  },
  {
    question: "Are there any assignments or projects?",
    answer: "Yes — this is a hands-on course. You'll work on mini-assignments throughout and complete a final brand strategy project where you present your own pitch deck."
  },
  {
    question: "Can I upgrade to the Intermediate course later?",
    answer: "Absolutely! Many of our students continue their journey with us. You'll get a special discounted upgrade and a smooth transition into the Intermediate level."
  },
  {
    question: "What's the schedule like? Are weekend batches available?",
    answer: "Yes! We offer flexible options including weekend and evening batches. You can choose what fits your routine best."
  },
  {
    question: "What if I have doubts during the course?",
    answer: "You'll have access to doubt-clearing sessions, a dedicated mentor, and a community group where you can ask questions anytime. You're never learning alone."
  }
];

const FAQSection = () => {
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
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-course-main">
            Frequently Asked Questions
          </h2>
          <p className="text-course-muted text-lg">
            Everything you need to know about our AI Digital Marketing course
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg scroll-reveal">
          <Accordion type="single" collapsible className="p-6">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-b border-gray-100 last:border-0">
                <AccordionTrigger className="py-4 hover:no-underline">
                  <h3 className="text-lg font-medium text-course-main text-left">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="py-4 text-course-muted animate-slide-in">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center scroll-reveal">
          <p className="text-course-muted">
            Still have questions? <a href="#" className="text-course-main font-medium underline">Contact our admissions team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
