import React, { useState, useRef } from 'react';
import  { institutions } from '../utils/data';
import type { Institution } from '../utils/types';
import { ChevronLeft, ChevronRight, Star, MapPin, Calendar } from 'lucide-react';
// import { useBooking } from '../../context/BookingContext';

export const FeaturedInstitutions: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const { setSelectedInstitution } = useBooking();
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      setVisibleStartIndex(Math.max(0, visibleStartIndex - 1));
    }
  };
  
  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      setVisibleStartIndex(Math.min(institutions.length - 3, visibleStartIndex + 1));
    }
  };
  
//   const handleBookNow = (institution: Institution) => {
//     setSelectedInstitution(institution);
//     // In a real application, this would navigate to the booking page
//     // or open a modal for booking
//     alert(`Booking with ${institution.name}`);
//   };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Institutions</h2>
            <p className="text-gray-600">Top-rated places with available appointments</p>
          </div>
          
          <div className="hidden md:flex space-x-2">
            <button 
              onClick={handleScrollLeft} 
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              disabled={visibleStartIndex === 0}
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={handleScrollRight}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              disabled={visibleStartIndex >= institutions.length - 3}
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
        
        <div 
          className="flex overflow-x-auto pb-4 scrollbar-hide snap-x gap-6" 
          ref={scrollContainerRef}
        >
          {institutions.map((institution) => (
            <div 
              key={institution.id}
              className="min-w-[300px] max-w-[340px] bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex-shrink-0 snap-start transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={institution.image} 
                  alt={institution.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium">
                  {institution.category}
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-800 text-lg">{institution.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm ml-1 font-medium">{institution.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>{institution.location}</span>
                </div>
                
                <div className="flex items-center text-sm text-blue-500 mb-4">
                  <Calendar className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>{institution.availabilityNextWeek} slots available next week</span>
                </div>
                
                <button 
                //   onClick={() => handleBookNow(institution)}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors font-medium"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            <button 
              onClick={handleScrollLeft}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              disabled={visibleStartIndex === 0}
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button 
              onClick={handleScrollRight}
              className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
              disabled={visibleStartIndex >= institutions.length - 3}
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};