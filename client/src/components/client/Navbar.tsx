import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ListChecks, Bell, User, CalendarCheck, LogOut } from 'lucide-react';
import Notification from './Notification';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const notificationBtnRef = useRef<HTMLButtonElement>(null);

  // Close notification dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        notificationBtnRef.current &&
        !notificationBtnRef.current.contains(event.target as Node)
      ) {
        setIsNotificationOpen(false);
      }
    }
    if (isNotificationOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNotificationOpen]);

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
          <button
            ref={notificationBtnRef}
            className="flex items-center text-gray-700 hover:text-blue-500 transition-colors
             focus:outline-none cursor-pointer"
            onClick={() => setIsNotificationOpen((prev) => !prev)} 
          >
            <Bell className="h-5 w-5 mr-1" /> Notifications
          </button>
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-500 transition-colors">
            <User className="h-5 w-5 mr-1" /> Profile
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-500 transition-colors">
            <LogOut className="h-5 w-5 mr-1" /> Logout
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {/* Notification Dropdown (always rendered, positioned absolutely) */}
      <div className="absolute right-4 top-14 z-[9999]">
        <Notification open={isNotificationOpen} onClose={() => setIsNotificationOpen(false)} />
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="container mx-auto px-4 space-y-3">
            <a href="#" className="flex items-center py-2 text-gray-700 hover:text-blue-500">
              <ListChecks className="h-5 w-5 mr-1" /> My Queues
            </a>
            <button
              ref={notificationBtnRef}
              className="flex items-center py-2 text-gray-700 hover:text-blue-500 w-full"
              onClick={() => setIsNotificationOpen((prev) => !prev)}
            >
              <Bell className="h-5 w-5 mr-1" /> Notifications
            </button>
            <a href="#" className="flex items-center py-2 text-gray-700 hover:text-blue-500">
              <User className="h-5 w-5 mr-1" /> Profile
            </a>
            <a href="#" className="flex items-center py-2 text-gray-700 hover:text-blue-500">
              <LogOut className="h-5 w-5 mr-1" /> Logout
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
