
import React, { useState, useEffect } from 'react';

const words = ["Empowering", "Enabling", "Inspiring", "Uplifting"];

const AnimatedHeading = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      // After animation out completes, change word
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-course-main">
      <span 
        className={`inline-block transition-all duration-300 ${isAnimating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'}`}
      >
        {words[currentWordIndex]}
      </span>{" "}
      the Future of Digital Marketing with <span className="text-gradient">AI</span>
    </h1>
  );
};

export default AnimatedHeading;
