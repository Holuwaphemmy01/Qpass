import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { generateTimeSlots } from '../utils/data';

export const BookingProcess: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };
  
  const generateCalendarDays = () => {
    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 14; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      days.push(date);
    }
    
    return days;
  };
  
  const calendarDays = generateCalendarDays();
  const timeSlots = generateTimeSlots();
  
  const availableTimeSlots = timeSlots.filter(() => Math.random() > 0.3);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto">
          <div className="md:flex">
            
            <div className="md:w-2/5 bg-gradient-to-br from-blue-500 to-teal-400 text-white p-8 md:p-12">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Ready to Book Your Next Appointment?</h2>
                  <p className="text-blue-50 mb-6">
                    Select a date and time that works for you, and confirm your booking in just a few clicks.
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium">Quick Tip</p>
                      <p className="text-sm text-blue-50">Book early for the most availability</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mr-2" />
                      Most popular times are weekday mornings
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mr-2" />
                      Receive confirmation instantly
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mr-2" />
                      Easy rescheduling if needed
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Select Date & Time</h3>
              
              <div className="mb-8">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Choose a Date
                </label>
                <div className="flex overflow-x-auto pb-2 space-x-2">
                  {calendarDays.map((date, index) => {
                    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                    const isToday = date.toDateString() === new Date().toDateString();
                    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleDateSelect(date)}
                        className={`flex-shrink-0 w-16 h-20 rounded-lg flex flex-col items-center justify-center border transition-all ${
                          isSelected 
                            ? 'bg-blue-500 text-white border-blue-500' 
                            : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300'
                        }`}
                      >
                        <span className={`text-xs ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
                          {dayNames[date.getDay()]}
                        </span>
                        <span className="text-xl font-bold my-1">{date.getDate()}</span>
                        <span className={`text-xs ${isSelected ? 'text-blue-100' : 'text-gray-500'}`}>
                          {date.toLocaleString('default', { month: 'short' })}
                        </span>
                        {isToday && (
                          <span className={`text-xs mt-1 px-2 py-0.5 rounded-full ${
                            isSelected ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-700'
                          }`}>
                            Today
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
              
              
              {selectedDate && (
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Choose a Time
                  </label>
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4">
                    {availableTimeSlots.map((time, index) => {
                      const isSelected = time === selectedTime;
                      
                      return (
                        <button
                          key={index}
                          onClick={() => setSelectedTime(time)}
                          className={`py-2 rounded-lg text-sm font-medium transition-colors ${
                            isSelected 
                              ? 'bg-blue-500 text-white' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                  
                  {selectedTime && (
                    <div className="mt-8">
                      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-colors font-medium">
                        Confirm Booking
                      </button>
                      <p className="text-center text-sm text-gray-500 mt-3">
                        Your appointment will be confirmed instantly
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};