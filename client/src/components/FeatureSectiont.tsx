import React from 'react';
import { CalendarCheck, Clock, Bell, RefreshCw, Shield, Smartphone } from 'lucide-react';

export const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: CalendarCheck,
      title: 'Instant Booking',
      description: 'Schedule appointments with just a few clicks, no waiting for confirmation.'
    },
    {
      icon: Clock,
      title: 'Real-time Availability',
      description: 'See up-to-date availability for all institutions in real time.'
    },
    {
      icon: Bell,
      title: 'Smart Reminders',
      description: 'Receive timely notifications before your upcoming appointments.'
    },
    {
      icon: RefreshCw,
      title: 'Easy Rescheduling',
      description: 'Need to change your appointment? Reschedule with just a few taps.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your personal information and booking details are always protected.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Friendly',
      description: 'Book appointments on the go from any device, anywhere, anytime.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Why Choose <span className='font-lora'>Qpass</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've built our platform with features that make booking appointments a breeze.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-all border border-gray-100 group"
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="font-bold text-gray-800 text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};