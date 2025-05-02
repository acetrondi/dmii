import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CurriculumSection = ({ modules }) => {
  const [openItem, setOpenItem] = useState<string | null>("module-1");

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
              <span className="font-medium">Format:</span> Live + Recorded
              Classes | Projects | Certification
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 scroll-reveal">
            <Accordion
              type="single"
              collapsible
              value={openItem || undefined}
              onValueChange={(value) => setOpenItem(value)}
            >
              {modules.map((module) => (
                <AccordionItem
                  key={module.id}
                  value={module.id}
                  className="border-b border-gray-100 last:border-0"
                >
                  <AccordionTrigger className="py-6 hover:no-underline">
                    <h3 className="text-lg font-medium text-course-main text-left">
                      {module.title}
                    </h3>
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
              "Our curriculum is constantly updated to reflect the latest AI
              tools and digital marketing trends."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
