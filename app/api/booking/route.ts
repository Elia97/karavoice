import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  if (req.method !== "DELETE") {
    return NextResponse.json(
      { error: "Metodo non consentito" },
      { status: 405 },
    );
  }

  const { id } = await req.json(); // Estrai l'id del booking dalla body
  const token = req.cookies.get("auth_token"); // Recupera il token dai cookie

  if (!token) {
    return NextResponse.json({ error: "Token non trovato" }, { status: 401 });
  }

  try {
    const response = await fetch(`http://localhost:3001/api/bookings/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token.value}`, // Usa il token nell'intestazione Authorization
        "Content-Type": "application/json",
      },
    });

    if (response.ok || response.status === 204) {
      // Se la risposta è OK o 204 (No Content)
      return NextResponse.json(
        { message: "Prenotazione cancellata" },
        { status: 200 },
      );
    } else {
      // Se la risposta non è OK o 204, gestiamo l'errore
      const errorData = await response.text(); // Leggi il corpo della risposta come testo
      return NextResponse.json(
        { error: errorData || "Errore sconosciuto" },
        { status: response.status },
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: "Errore durante la cancellazione della prenotazione",
        message: (error as Error).message,
      },
      { status: 500 },
    );
  }
}
