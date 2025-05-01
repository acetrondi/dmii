
import React, { useRef, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Digital Marketing Manager",
    company: "TechCorp",
    image: "https://source.unsplash.com/random/100x100/?portrait,woman1",
    text: "The AI marketing course at DMII was a game-changer for my career. I've implemented the strategies and seen a 40% increase in our campaign ROI."
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Content Strategist",
    company: "MediaPulse",
    image: "https://source.unsplash.com/random/100x100/?portrait,man1",
    text: "Learning at DMII gave me practical, hands-on experience with actual clients. The AI tools and techniques I learned are now essential to my daily workflow."
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "Social Media Specialist",
    company: "BrandGrowth",
    image: "https://source.unsplash.com/random/100x100/?portrait,woman2",
    text: "From a social media beginner to managing campaigns for major brands—DMII's real-world training and AI focus made all the difference."
  },
  {
    id: 4,
    name: "James Wilson",
    role: "SEO Director",
    company: "RankMasters",
    image: "https://source.unsplash.com/random/100x100/?portrait,man2",
    text: "The AI-powered SEO techniques I learned at DMII have revolutionized how I approach search optimization. Highly recommend to anyone serious about digital marketing."
  },
  {
    id: 5,
    name: "Leila Ahmed",
    role: "Email Marketing Strategist",
    company: "ConversionPro",
    image: "https://source.unsplash.com/random/100x100/?portrait,woman3",
    text: "The mentorship and real client projects at DMII prepared me for my dream role better than years of traditional education could have."
  },
  {
    id: 6,
    name: "David Lee",
    role: "PPC Campaign Manager",
    company: "AdVantage",
    image: "https://source.unsplash.com/random/100x100/?portrait,man3",
    text: "Learning how to integrate AI with paid campaigns has reduced our client's acquisition costs by 35%. The DMII certification opened doors to high-level opportunities."
  },
];

const TestimonialCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' 
        ? -carouselRef.current.clientWidth * 0.8 
        : carouselRef.current.clientWidth * 0.8;
      
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  
  const checkScrollable = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      
      // Check if we can scroll left
      setCanScrollLeft(scrollLeft > 0);
      
      // Check if we can scroll right
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10); // Adding a small buffer
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    
    if (carousel) {
      carousel.addEventListener('scroll', checkScrollable);
      // Initial check
      checkScrollable();
      
      return () => {
        carousel.removeEventListener('scroll', checkScrollable);
      };
    }
  }, []);

  return (
    <div className="relative">
      <div 
        ref={carouselRef}
        className="flex overflow-x-auto space-x-4 pb-8 hide-scrollbar scroll-smooth"
      >
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id}
            className="min-w-[300px] md:min-w-[400px] bg-white p-6 rounded-lg shadow-md flex-shrink-0 border border-gray-100"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-14 w-14 rounded-full overflow-hidden">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-course-main">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
            <p className="text-course-muted">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
      
      <div className="absolute top-1/2 -left-4 -translate-y-1/2">
        <Button 
          onClick={() => scroll('left')} 
          variant="outline" 
          size="icon" 
          className={`rounded-full bg-white shadow-md hover:bg-course-accent/10 ${
            !canScrollLeft ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={!canScrollLeft}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="absolute top-1/2 -right-4 -translate-y-1/2">
        <Button 
          onClick={() => scroll('right')} 
          variant="outline" 
          size="icon" 
          className={`rounded-full bg-white shadow-md hover:bg-course-accent/10 ${
            !canScrollRight ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={!canScrollRight}
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
