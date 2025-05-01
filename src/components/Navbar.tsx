
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-xl font-bold text-course-main">DMII</h1>
          </Link>
        </div>
        
        <nav className="hidden lg:flex items-center gap-6">
          <Link to="/" className="text-course-main/90 hover:text-course-main transition-colors relative nav-link">Home</Link>
          <Link to="/course" className="text-course-main/90 hover:text-course-main transition-colors relative nav-link">Courses</Link>
          <Link to="/#usp" className="text-course-main/90 hover:text-course-main transition-colors relative nav-link">USP</Link>
          <Link to="/#ai-tools" className="text-course-main/90 hover:text-course-main transition-colors relative nav-link">AI</Link>
          <Link to="/#certificates" className="text-course-main/90 hover:text-course-main transition-colors relative nav-link">Certificates</Link>
          <Link to="/#blog" className="text-course-main/90 hover:text-course-main transition-colors relative nav-link">Blogs</Link>
          <Link to="/#contact" className="text-course-main/90 hover:text-course-main transition-colors relative nav-link">Contact</Link>
          <Link to="/#about" className="text-course-main/90 hover:text-course-main transition-colors relative nav-link">About</Link>
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
              <Link to="/" className="text-course-main/90 hover:text-course-main transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/course" className="text-course-main/90 hover:text-course-main transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Courses</Link>
              <Link to="/#usp" className="text-course-main/90 hover:text-course-main transition-colors py-2" onClick={() => setIsMenuOpen(false)}>USP</Link>
              <Link to="/#ai-tools" className="text-course-main/90 hover:text-course-main transition-colors py-2" onClick={() => setIsMenuOpen(false)}>AI</Link>
              <Link to="/#certificates" className="text-course-main/90 hover:text-course-main transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Certificates</Link>
              <Link to="/#blog" className="text-course-main/90 hover:text-course-main transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Blogs</Link>
              <Link to="/#contact" className="text-course-main/90 hover:text-course-main transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link to="/#about" className="text-course-main/90 hover:text-course-main transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
