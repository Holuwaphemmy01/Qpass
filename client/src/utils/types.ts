export type Institution = {
  id: string;
  name: string;
  category: string;
  image: string;
  rating: number;
  reviewCount: number;
  location: string;
  availabilityNextWeek: number;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  institution: string;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
};