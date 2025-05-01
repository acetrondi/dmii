
import React, { useState, useEffect, useRef } from 'react';

interface CounterAnimationProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const CounterAnimation = ({ end, duration = 2000, suffix = '', prefix = '' }: CounterAnimationProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let startTime: number;
    let animationFrameId: number;

    if (isVisible) {
      const startAnimation = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(percentage * end));

        if (percentage < 1) {
          animationFrameId = requestAnimationFrame(startAnimation);
        }
      };

      animationFrameId = requestAnimationFrame(startAnimation);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default CounterAnimation;
