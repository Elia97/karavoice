import { decodeJwt } from "jose";
import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Ottieni il token dai cookie
export async function getAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get("auth_token")?.value || null;
}

// Recupera i dati dell'utente
export async function getUserData() {
  const token = await getAuthToken();

  if (!token) {
    throw new Error("Token mancante");
  }

  try {
    const decodedToken = decodeJwt(token);

    const res = await fetch(`${API_URL}/users/${decodedToken?.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Errore nel recupero dei dati dell'utente");
    }

    return res.json();
  } catch (error) {
    throw new Error(
      `Errore nel recupero dei dati: ${(error as Error).message}`,
    );
  }
}
