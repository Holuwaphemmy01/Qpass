import React, { useState, useEffect } from 'react';
import { CalendarCheck, Menu, X, Users, Bell, Settings, ListChecks, User } from 'lucide-react';

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
          <span className="ml-2 text-xl font-bold">Qpass</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-500 transition-colors">
            <ListChecks className="h-5 w-5 mr-1" /> Queues
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-500 transition-colors">
            <Users className="h-5 w-5 mr-1" /> Clients
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-500 transition-colors">
            <Bell className="h-5 w-5 mr-1" /> Notifications
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-500 transition-colors">
            <Settings className="h-5 w-5 mr-1" /> Settings
          </a>
        </nav>
        
        {/* User Profile */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="flex items-center px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors">
            <User className="h-5 w-5 mr-1" /> Profile
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
            <a href="#" className="flex items-center py-2 text-gray-700 hover:text-blue-500">
              <ListChecks className="h-5 w-5 mr-1" /> Queues
            </a>
            <a href="#" className="flex items-center py-2 text-gray-700 hover:text-blue-500">
              <Users className="h-5 w-5 mr-1" /> Students
            </a>
            <a href="#" className="flex items-center py-2 text-gray-700 hover:text-blue-500">
              <Bell className="h-5 w-5 mr-1" /> Notifications
            </a>
            <a href="#" className="flex items-center py-2 text-gray-700 hover:text-blue-500">
              <Settings className="h-5 w-5 mr-1" /> Settings
            </a>
            <div className="pt-2 flex flex-col space-y-2">
              <button className="flex items-center w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700">
                <User className="h-5 w-5 mr-1" /> Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};