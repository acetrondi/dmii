import React, { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    image: "./1.png",
  },
  {
    id: 2,
    image: "./2.png",
  },
  {
    id: 3,
    image: "./3.png",
  },
  {
    id: 4,
    image: "./4.png",
  },
  {
    id: 5,
    image: "./5.png",
  },
  {
    id: 6,
    image: "./6.png",
  },
];

const TestimonialCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Calculate how many items to show based on screen size
  const getVisibleCount = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    }
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (direction === "left") {
      // If at the beginning, loop to the end
      if (activeIndex === 0) {
        setActiveIndex(testimonials.length - 1);
      } else {
        // Move one item at a time
        setActiveIndex((prev) => prev - 1);
      }
    } else {
      // If at the end, loop to the beginning
      if (activeIndex >= testimonials.length - 1) {
        setActiveIndex(0);
      } else {
        // Move one item at a time
        setActiveIndex((prev) => prev + 1);
      }
    }
  };

  // Calculate total slides for indicators (always equal to number of testimonials)
  const totalSlides = testimonials.length;

  // Always allow scrolling in both directions due to looping
  useEffect(() => {
    setCanScrollLeft(true);
    setCanScrollRight(true);
  }, [activeIndex]);

  // Get visible items based on current index with looping
  const getVisibleItems = () => {
    const items = [];

    for (let i = 0; i < visibleCount; i++) {
      const index = (activeIndex + i) % testimonials.length;
      items.push(testimonials[index]);
    }

    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="relative">
      <div className="overflow-hidden py-4">
        <div className="flex transition-transform duration-500 ease-in-out">
          {visibleItems.map((testimonial, idx) => (
            <div key={`${testimonial.id}-${idx}`} className="px-3 flex-1">
              <img
                src={testimonial.image}
                alt={`Testimonial ${testimonial.id}`}
                className="w-full h-auto object-contain rounded-sm"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
        <Button
          onClick={() => scroll("left")}
          variant="outline"
          size="icon"
          className="rounded-full bg-white shadow-md hover:bg-course-accent/10"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
        <Button
          onClick={() => scroll("right")}
          variant="outline"
          size="icon"
          className="rounded-full bg-white shadow-md hover:bg-course-accent/10"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              activeIndex === index ? "bg-course-main w-4" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
