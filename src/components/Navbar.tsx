
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-xl font-bold text-course-main">DMII</h1>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-course-main/90 hover:text-course-main transition-colors">Home</Link>
          <Link to="/course" className="text-course-main/90 hover:text-course-main transition-colors">Course</Link>
          <Link to="/course#curriculum" className="text-course-main/90 hover:text-course-main transition-colors">Curriculum</Link>
          <Link to="/course#fees" className="text-course-main/90 hover:text-course-main transition-colors">Fees</Link>
          <Link to="/course#faq" className="text-course-main/90 hover:text-course-main transition-colors">FAQ</Link>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6 text-course-main" />
        </button>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 md:hidden">
            <div className="container mx-auto px-4 flex flex-col gap-3">
              <Link to="/" className="text-course-main/90 hover:text-course-main transition-colors py-2">Home</Link>
              <Link to="/course" className="text-course-main/90 hover:text-course-main transition-colors py-2">Course</Link>
              <Link to="/course#curriculum" className="text-course-main/90 hover:text-course-main transition-colors py-2">Curriculum</Link>
              <Link to="/course#fees" className="text-course-main/90 hover:text-course-main transition-colors py-2">Fees</Link>
              <Link to="/course#faq" className="text-course-main/90 hover:text-course-main transition-colors py-2">FAQ</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
