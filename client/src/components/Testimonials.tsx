import React, { useState } from 'react';
import { testimonials } from '../utils/data';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Thousands of users trust our platform to book their important appointments. Here's what some of them have to say.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute -top-10 left-0 md:left-10 opacity-10">
            <Quote className="h-24 w-24 text-blue-300 transform rotate-180" />
          </div>
          
          <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm overflow-hidden">
            <div className="absolute -bottom-10 right-0 md:right-10 opacity-10">
              <Quote className="h-24 w-24 text-blue-300" />
            </div>
            
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className="md:flex items-center">
                  <div className="mb-6 md:mb-0 md:mr-8">
                    <div className="w-24 h-24 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-white shadow-md">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div>
                      <div className="font-bold text-gray-800">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.role}</div>
                      <div className="text-blue-500 text-sm mt-1">
                        Booked with {testimonial.institution}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="hidden md:flex absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-5">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          </div>
          
          <div className="hidden md:flex absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-5">
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-6 md:hidden space-x-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 border border-gray-100"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 border border-gray-100"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};