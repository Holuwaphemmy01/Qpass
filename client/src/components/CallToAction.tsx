import React from 'react';
import { ArrowRight } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Simplify Your Booking Experience?</h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Join thousands of satisfied users who have transformed the way they book appointments. 
            No more waiting on hold or dealing with complicated scheduling systems.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors">
              Sign Up for Free
            </button>
            <button className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
              Learn More <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};