import React, { useState, useEffect } from 'react';
import { CalendarCheck, Menu, X, User, LogIn } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <CalendarCheck className="h-8 w-8 text-blue-500" />
          <span className="ml-2 text-xl font-bold font-lora">Qpass</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">How It Works</a>
          <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">Institutions</a>
          <a href="#" className="text-gray-700 hover:text-blue-500 transition-colors">Testimonials</a>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
            <LogIn className="h-5 w-5 inline mr-1" /> Log In
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            <User className="h-5 w-5 inline mr-1" /> Sign Up
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="container mx-auto px-4 space-y-3">
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Home</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">How It Works</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Institutions</a>
            <a href="#" className="block py-2 text-gray-700 hover:text-blue-500">Testimonials</a>
            
            <div className="pt-2 flex flex-col space-y-2">
              <button className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700">
                Log In
              </button>
              <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};