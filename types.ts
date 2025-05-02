import { UUID } from "crypto";

export interface Event {
  id: UUID;
  name: string;
  description: string;
  category: Category;
  featured: boolean;
  image: string;
  location: Location;
  start_time?: string;
  end_time?: string;
  date: Date;
  createdAt: string;
  updatedAt: string;
}

export interface Location {
  id: UUID;
  name: string;
  address: string;
  city: string;
  province: string;
  zip_code: string;
  country: string;
  latitude: number;
  longitude: number;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: UUID;
  name: string;
  description: string;
  slug: string;
  icon: string;
  image: string;
  eventCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: UUID;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  bio: string;
  avatar: string;
  date_of_birth: Date | null;
  preferences: {
    categories: string[];
    notifications: boolean;
    newsletter: boolean;
  };
  password: string;
  role: string;
  last_login_at: Date;
  createdAt: string;
  updatedAt: string;
}

export interface Booking {
  id: UUID;
  user: User;
  event: Event;
  status: "pending" | "confirmed" | "canceled";
  participants: number;
  notes: string;
  createdAt: string;
  updatedAt: string;
}
