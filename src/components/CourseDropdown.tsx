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

  // Function to scroll to the courses section
  const scrollToCoursesSection = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);

    // If we're not on the home page, navigate to home page first
    if (window.location.pathname !== "/") {
      window.location.href = "/#courses";
      return;
    }

    // If we're already on the home page, scroll to the section
    const coursesSection = document.getElementById("courses");
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          <a
            href="#courses"
            className="block px-4 py-2 text-course-main hover:bg-course-accent/10 transition-colors"
            onClick={scrollToCoursesSection}
          >
            All Courses
          </a>
        </div>
      )}
    </div>
  );
};

export default CourseDropdown;
