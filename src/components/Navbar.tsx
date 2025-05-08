import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import CourseDropdown from "./CourseDropdown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to a specific section
  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // If we're not on the home page, navigate to home page first
    if (window.location.pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    // If we're already on the home page, scroll to the section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            {/* <h1 className="text-xl font-bold text-course-main">DMII</h1> */}
            <img src={"./brand/dmii-logo.png"} alt="DMII" className="h-10" />
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <a
            href="/"
            className="text-course-main/90 hover:text-course-main transition-colors relative nav-link"
          >
            Home
          </a>
          <CourseDropdown />

          {/* <Link
            to="/#certificates"
            className="text-course-main/90 hover:text-course-main transition-colors relative nav-link"
          >
            Certificates
          </Link> */}
          <Link
            to="/blog"
            className="text-course-main/90 hover:text-course-main transition-colors relative nav-link"
          >
            Blog
          </Link>
          <a
            href="#contact"
            className="text-course-main/90 hover:text-course-main transition-colors relative nav-link"
            onClick={(e) => scrollToSection(e, "contact")}
          >
            Contact
          </a>
          <a
            href="#about"
            className="text-course-main/90 hover:text-course-main transition-colors relative nav-link"
            onClick={(e) => scrollToSection(e, "about")}
          >
            About
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden flex items-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-course-main" />
          ) : (
            <Menu className="h-6 w-6 text-course-main" />
          )}
        </button>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 lg:hidden animate-fade-in">
            <div className="container mx-auto px-4 flex flex-col gap-3">
              <a
                href="/"
                className="text-course-main/90 hover:text-course-main transition-colors py-2"
              >
                Home
              </a>
              <Link
                to="#courses"
                className="text-course-main/90 hover:text-course-main transition-colors py-2"
                onClick={(e) => scrollToSection(e, "courses")}
              >
                All Courses
              </Link>
              <Link
                to="/foundation-in-digital-marketing"
                className="text-course-main/90 hover:text-course-main transition-colors py-2 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Foundation in Digital Marketing
              </Link>
              <Link
                to="/intermediate-in-ai-ditigal-marketing"
                className="text-course-main/90 hover:text-course-main transition-colors py-2 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Intermediate in AI Digital Marketing
              </Link>
              <Link
                to="/expert-in-digital-marketing"
                className="text-course-main/90 hover:text-course-main transition-colors py-2 pl-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Expert in Digital Marketing
              </Link>
              <Link
                to="/blog"
                className="text-course-main/90 hover:text-course-main transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <a
                href="#contact"
                className="text-course-main/90 hover:text-course-main transition-colors py-2"
                onClick={(e) => scrollToSection(e, "contact")}
              >
                Contact
              </a>
              <a
                href="#about"
                className="text-course-main/90 hover:text-course-main transition-colors py-2"
                onClick={(e) => scrollToSection(e, "about")}
              >
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
