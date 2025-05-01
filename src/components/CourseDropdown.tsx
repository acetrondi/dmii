import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const CourseDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center text-course-main/90 hover:text-course-main transition-colors relative nav-link"
        onClick={() => setIsOpen(!isOpen)}
      >
        Courses
        {isOpen ? (
          <ChevronUp className="ml-1 h-4 w-4" />
        ) : (
          <ChevronDown className="ml-1 h-4 w-4" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-2 z-50 animate-fade-in">
          <Link
            to="/foundation-in-digital-marketing"
            className="block px-4 py-2 text-course-main hover:bg-course-accent/10 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Foundation in Digital Marketing
          </Link>
          <Link
            to="/intermediate-in-ai-ditigal-marketing"
            className="block px-4 py-2 text-course-main hover:bg-course-accent/10 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Intermediate in AI Digital Marketing
          </Link>
          <Link
            to="/expert-in-digital-marketing"
            className="block px-4 py-2 text-course-main hover:bg-course-accent/10 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Expert in Digital Marketing
          </Link>
          <Link
            to="/course"
            className="block px-4 py-2 text-course-main hover:bg-course-accent/10 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            All Courses
          </Link>
        </div>
      )}
    </div>
  );
};

export default CourseDropdown;
