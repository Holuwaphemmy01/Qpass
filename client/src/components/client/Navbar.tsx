import React, { useState } from 'react';
import { Menu, X, ListChecks, Bell, User, CalendarCheck } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md py-2">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <CalendarCheck className="h-7 w-7 text-blue-500" />
          <span className="ml-2 text-xl font-bold text-blue-600">Qpass</span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-500 transition-colors">
            <ListChecks className="h-5 w-5 mr-1" /> My Queues
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-500 transition-colors">
            <Bell className="h-5 w-5 mr-1" /> Notifications
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-500 transition-colors">
            <User className="h-5 w-5 mr-1" /> Profile
          </a>
        </nav>
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
              <ListChecks className="h-5 w-5 mr-1" /> My Queues
            </a>
            <a href="#" className="flex items-center py-2 text-gray-700 hover:text-blue-500">
              <Bell className="h-5 w-5 mr-1" /> Notifications
            </a>
            <a href="#" className="flex items-center py-2 text-gray-700 hover:text-blue-500">
              <User className="h-5 w-5 mr-1" /> Profile
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
