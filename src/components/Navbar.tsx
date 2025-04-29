
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-course-main">DMII</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-course-main/90 hover:text-course-main transition-colors">Home</Link>
          <Link to="/#curriculum" className="text-course-main/90 hover:text-course-main transition-colors">Curriculum</Link>
          <Link to="/#fees" className="text-course-main/90 hover:text-course-main transition-colors">Fees</Link>
          <Link to="/#faq" className="text-course-main/90 hover:text-course-main transition-colors">FAQ</Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden sm:flex">Login</Button>
          <Button size="sm" className="bg-course-main text-white hover:bg-course-main/90">Enroll Now</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
