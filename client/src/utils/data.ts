import type { Institution, Testimonial, Category } from './types';


import { CalendarDays, Stethoscope, Briefcase, Scissors, GraduationCap, HelpingHand, Dumbbell, BarChart } from 'lucide-react';

export const categories: Category[] = [
  { id: '1', name: 'Medical', icon: 'Stethoscope' },
  { id: '2', name: 'Business', icon: 'Briefcase' },
  { id: '3', name: 'Beauty', icon: 'Scissors' },
  { id: '4', name: 'Education', icon: 'GraduationCap' },
  { id: '5', name: 'Consultation', icon: 'HelpingHand' },
  { id: '6', name: 'Fitness', icon: 'Dumbbell' },
  { id: '7', name: 'Financial', icon: 'BarChart' },
  { id: '8', name: 'All Services', icon: 'CalendarDays' },
];

export const institutions: Institution[] = [
  {
    id: '1',
    name: 'Wellness Medical Center',
    category: 'Medical',
    // image: 'https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    rating: 4.8,
    reviewCount: 423,
    location: 'Yaba, Lagos',
    availabilityNextWeek: 12,
  },
//   {
//     id: '2',
//     name: 'Elite Business Consulting',
//     category: 'Business',
//     image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
//     rating: 4.6,
//     reviewCount: 187,
//     location: 'New York, NY',
//     availabilityNextWeek: 8,
//   },
//   {
//     id: '3',
//     name: 'Serene Spa & Beauty',
//     category: 'Beauty',
//     image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
//     rating: 4.9,
//     reviewCount: 512,
//     location: 'Los Angeles, CA',
//     availabilityNextWeek: 15,
//   },
//   {
//     id: '4',
//     name: 'Northside Learning Center',
//     category: 'Education',
//     image: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
//     rating: 4.7,
//     reviewCount: 328,
//     location: 'Chicago, IL',
//     availabilityNextWeek: 22,
//   },
//   {
//     id: '5',
//     name: 'Financial Advisors Group',
//     category: 'Financial',
//     image: 'https://images.pexels.com/photos/7681731/pexels-photo-7681731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
//     rating: 4.5,
//     reviewCount: 156,
//     location: 'Boston, MA',
//     availabilityNextWeek: 9,
//   },
//   {
//     id: '6',
//     name: 'FitLife Gym & Training',
//     category: 'Fitness',
//     image: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
//     rating: 4.7,
//     reviewCount: 289,
//     location: 'Austin, TX',
//     availabilityNextWeek: 18,
//   }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Marketing Executive',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    content: 'The booking process was incredibly smooth. I managed to schedule an appointment with a top consultant in less than 2 minutes!',
    institution: 'Elite Business Consulting'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    role: 'Software Developer',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    content: 'I love how easy it is to reschedule appointments. The reminder notifications are also very helpful.',
    institution: 'Wellness Medical Center'
  },
  {
    id: '3',
    name: 'Jennifer Lee',
    role: 'Teacher',
    avatar: 'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    content: 'As someone who schedules multiple appointments for my family, this platform has been a lifesaver. Everything in one place!',
    institution: 'Northside Learning Center'
  }
];

export const getIconComponent = (iconName: string) => {
  switch(iconName) {
    case 'Stethoscope': return Stethoscope;
    case 'Briefcase': return Briefcase;
    case 'Scissors': return Scissors;
    case 'GraduationCap': return GraduationCap;
    case 'HelpingHand': return HelpingHand;
    case 'Dumbbell': return Dumbbell;
    case 'BarChart': return BarChart;
    case 'CalendarDays': 
    default: return CalendarDays;
  }
};

export const generateTimeSlots = () => {
  const slots = [];
  const startHour = 8; // 8 AM
  const endHour = 18; // 6 PM

  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const hourFormatted = hour % 12 || 12;
      const minuteFormatted = minute.toString().padStart(2, '0');
      const ampm = hour < 12 ? 'AM' : 'PM';
      
      slots.push(`${hourFormatted}:${minuteFormatted} ${ampm}`);
    }
  }

  return slots;
};