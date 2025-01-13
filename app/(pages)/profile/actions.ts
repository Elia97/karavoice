"use server";

import { cookies } from "next/headers";
import { decodeJwt } from "jose"; // Importa la funzione per verificare e decodificare il token

// Server action per ottenere i dati dell'utente
export async function getUserData() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    throw new Error("Token mancante");
  }

  try {
    const decodedToken = decodeJwt(token);

    // Recupera i dati dell'utente dal backend
    const res = await fetch(
      `http://localhost:3001/api/users/${decodedToken?.id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Aggiungi il token nell'header
          "Content-Type": "application/json",
        },
      },
    );
    const userData = await res.json();

    if (!res.ok) {
      throw new Error("Errore nel recupero dei dati dell'utente");
    }

    return userData;
  } catch (error) {
    throw new Error(
      `Token non valido o errore nel recupero dei dati, ${(error as Error).message}`,
    );
  }
}

export async function getUserBookings() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    throw new Error("Token mancante");
  }

  try {
    // Recupera i dati dell'utente dal backend
    const res = await fetch("http://localhost:3001/api/bookings/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // Aggiungi il token nell'header
        "Content-Type": "application/json",
      },
    });
    let userBookings = await res.json();

    if (!res.ok) {
      userBookings = [];
    }

    return userBookings;
  } catch (error) {
    throw new Error(
      `Token non valido o errore nel recupero dei dati, ${(error as Error).message}`,
    );
  }
}
