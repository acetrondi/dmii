import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const BatchesSection = ({ batchData }) => {
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
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8 scroll-reveal">
            <div className="w-16 h-16 rounded-full bg-course-accent/30 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-course-main" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-course-main scroll-reveal">
            New Batches Launching Soon
          </h2>

          <p className="text-center text-course-muted mb-12 scroll-reveal">
            Reserve your spot now to become future-ready with AI-powered digital
            marketing skills.
          </p>

          <div className="overflow-hidden rounded-xl shadow-lg bg-white scroll-reveal">
            <div className="grid grid-cols-3 bg-course-main text-white p-4">
              <div className="font-semibold">Batch Type</div>
              <div className="font-semibold">Batch Start</div>
              <div className="font-semibold">Capacity</div>
            </div>

            {batchData.map((batch, index) => (
              <div
                key={index}
                className="grid grid-cols-3 p-4 border-b border-gray-100 hover:bg-course-light/50 transition-colors"
              >
                <div className="font-medium text-course-main">{batch.type}</div>
                <div className="text-course-muted">{batch.start}</div>
                <div className="text-course-muted">{batch.capacity}</div>
              </div>
            ))}

            <div className="p-6 bg-course-light/30 text-center">
              <p className="text-course-muted mb-4">
                Secure your seat before they fill up. Limited slots available
                per batch.
              </p>
              <Button className="bg-course-main text-white hover:bg-course-main/90">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatchesSection;
