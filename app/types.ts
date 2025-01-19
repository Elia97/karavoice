import { UUID } from "crypto";

export interface Event {
  id: UUID; // ID univoco dell'evento
  name: string; // Nome dell'evento
  description: string; // Descrizione dettagliata
  category: "karaoke" | "dj set" | "live music"; // Categoria dell'evento
  image: string; // URL dell'immagine (opzionale)
  location: Location;
  start_time?: string; // Orario (formato HH:mm:ss)
  end_time?: string; // Orario (formato HH:mm:ss)
  date: Date; // Data specifica (formato ISO, opzionale)
  createdAt: string; // Timestamp di creazione
  updatedAt: string; // Timestamp di aggiornamento
}

export interface Location {
  id: UUID; // ID univoco della location
  name: string; // Nome della location
  address: string; // Indirizzo
  city: string; // Città
  province: string; // Provincia
  zip_code: string; // Codice postale
  country: string; // Paese
  latitude: number; // Latitudine
  longitude: number; // Longitudine
  createdAt: string; // Timestamp di creazione
  updatedAt: string; // Timestamp di aggiornamento
}

export interface User {
  id: UUID;
  name: string;
  email: string;
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
