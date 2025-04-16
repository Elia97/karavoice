import { UUID } from "crypto";
import { getAuthToken } from "./auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

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
