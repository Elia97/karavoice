import { getAuthToken } from "./auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Recupera le prenotazioni dell'utente
export async function getUserBookings() {
  const token = await getAuthToken();

  if (!token) {
    throw new Error("Token mancante");
  }

  try {
    const res = await fetch(`${API_URL}/bookings/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      return [];
    }

    return res.json();
  } catch (error) {
    throw new Error(
      `Errore nel recupero delle prenotazioni: ${(error as Error).message}`,
    );
  }
}
