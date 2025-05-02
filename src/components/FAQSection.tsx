import React, { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = ({ faqs }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

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
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border-b border-gray-100 last:border-0"
              >
                <AccordionTrigger className="py-4 hover:no-underline">
                  <h3 className="text-lg font-medium text-course-main text-left">
                    {faq.question}
                  </h3>
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
            Still have questions?{" "}
            <a href="#" className="text-course-main font-medium underline">
              Contact our admissions team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
