import React from 'react';
import { Users, Building, CheckCircle, Clock } from 'lucide-react';

export const Stats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Happy Users',
      color: 'text-blue-500'
    },
    {
      icon: Building,
      value: '1,200+',
      label: 'Institutions',
      color: 'text-teal-500'
    },
    {
      icon: CheckCircle,
      value: '100,000+',
      label: 'Bookings Made',
      color: 'text-indigo-500'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Availability',
      color: 'text-purple-500'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex justify-center mb-3">
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};