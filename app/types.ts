export interface Event {
  id: number; // ID univoco dell'evento
  name: string; // Nome dell'evento
  description: string; // Descrizione dettagliata
  category: "karaoke" | "dj set" | "live music"; // Categoria dell'evento
  image?: string; // URL dell'immagine (opzionale)
  location: Location;
  start_time: string; // Orario (formato HH:mm:ss)
  end_time: string; // Orario (formato HH:mm:ss)
  date: string; // Data specifica (formato ISO, opzionale)
  createdAt: string; // Timestamp di creazione
  updatedAt: string; // Timestamp di aggiornamento
}

export interface Location {
  id: number; // ID univoco della location
  name: string; // Nome della location
  address: string; // Indirizzo
  latitude: number; // Latitudine
  longitude: number; // Longitudine
  createdAt: string; // Timestamp di creazione
  updatedAt: string; // Timestamp di aggiornamento
}
