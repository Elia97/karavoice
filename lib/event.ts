import { UUID } from "crypto";
import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Ottieni il token dai cookie
async function getAuthToken() {
  const cookieStore = await cookies();
  return cookieStore.get("auth_token")?.value || null;
}

export async function getEventById(id: UUID) {
  const token = await getAuthToken();

  if (!token) {
    throw new Error("Token mancante");
  }

  try {
    const res = await fetch(`${API_URL}/events/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const event = res.json();

    return event;
  } catch (error) {
    throw new Error(`Errore: ${(error as Error).message}`);
  }
}
