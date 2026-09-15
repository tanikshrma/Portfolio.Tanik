export interface Project {
  id: string;
  title: string;
  category: 'web' | 'graphic' | 'all';
  categoryLabel: string;
  year?: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  url: string;
  type: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  institution: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

