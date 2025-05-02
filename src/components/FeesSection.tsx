import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const FeesSection = ({ amount = "35,000" }) => {
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
    <section id="fees" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-course-main">
            Fees & Payment Options
          </h2>
          <p className="text-course-muted text-lg">
            Invest in your future with our affordable course pricing
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl overflow-hidden shadow-lg scroll-reveal">
          <div className="bg-course-main text-white p-8 text-center">
            <h3 className="text-2xl font-bold">₹{amount}</h3>
            <p className="text-gray-300 mt-2">All-inclusive program fee</p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4 text-course-main">
                  What's Included
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-course-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>3 months of live online classes</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-course-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Course materials and resources</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-course-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Project assessments and reviews</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-course-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Certification upon completion</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-course-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Lifetime access to community</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-course-main">
                  Payment Options
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-course-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Full payment with 5% discount</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-course-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>EMI options available (3, 6 months)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-course-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Group discount for 2+ enrollments</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-course-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>Student discount available</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-course-accent mr-2 flex-shrink-0 mt-0.5" />
                    <span>All major payment methods accepted</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-course-muted mb-4">
                Have questions about pricing or payment options? Get in touch
                with our admissions team.
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

export default FeesSection;
