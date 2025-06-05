import React from 'react';
import { Search, Calendar, CheckCircle , BellRing} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Find an Institution',
      description: 'Search and filter through our extensive database of institutions based on your needs and location.'
    },
    {
      icon: Calendar,
      title: 'Select a Time Slot',
      description: 'Browse through available appointments and choose a date and time that works for your schedule.'
    },
    {
      icon: CheckCircle,
      title: 'Confirm Booking',
      description: 'Complete your booking with a few clicks and receive instant confirmation via email or SMS.'
    },
    {
      icon: BellRing,
      title: 'Remainder',
      description: 'Get a remainder message about your appointment.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Booking an appointment has never been easier. Follow these simple steps to get started.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300 z-10">
                    <Icon className="h-10 w-10 text-blue-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className="absolute top-10 left-full w-full h-0.5 bg-blue-100 -z-10 hidden md:block"></div>
                  )}
                  
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-blue-500 font-bold border-2 border-blue-100">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};