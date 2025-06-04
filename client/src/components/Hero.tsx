import React, { useState } from 'react';
import { Search, CalendarDays, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-teal-400 pt-24 pb-20 md:pt-32 md:pb-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2225%22%20height%3D%2225%22%20viewBox%3D%220%200%2025%2025%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ccircle%20cx%3D%2212.5%22%20cy%3D%2212.5%22%20r%3D%221.5%22%20fill%3D%22%23FFFFFF%22%2F%3E%3C%2Fsvg%3E')]" />
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Book Appointments <br className="hidden sm:block" />
            <span className="text-blue-100">With Ease</span>
          </h1>
          
          <p className="text-white text-xl opacity-90 mb-8 leading-relaxed">
            Schedule appointments with your favorite institutions in minutes. 
            No phone calls, no waiting.
          </p>
          
          {/* Search Box */}
          <div className="bg-white p-4 rounded-xl shadow-lg mb-8 md:p-2 md:rounded-full animate-slide-up transition-all">
            <div className="flex flex-col md:flex-row md:items-center">
              <div className="flex items-center flex-1 mb-3 md:mb-0 md:border-r md:border-gray-200 px-2">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full border-none outline-none text-gray-700"
                />
              </div>
              
              <div className="flex items-center flex-1 mb-3 md:mb-0 md:border-r md:border-gray-200 px-2">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full border-none outline-none text-gray-700"
                />
              </div>
              
              <div className="px-2">
                <button className="w-full md:w-auto bg-blue-500 hover:bg-blue-600 transition-colors text-white 
                px-6 py-2 rounded-full font-medium flex items-center justify-center cursor-pointer">
                  <CalendarDays className="h-5 w-5 mr-2" />
                  Find Appointments
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-blue-100 text-sm">
            Popular: Government, Medical, Business, Education, Beauty
          </div>
        </div>
      </div>
    </div>
  );
};

