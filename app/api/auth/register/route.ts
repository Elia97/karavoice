import { NextResponse, NextRequest } from "next/server";

interface RegisterRequestBody {
  username: string;
  phone: string;
  email: string;
  password: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: RegisterRequestBody = await request.json();

    // Chiamata al backend esterno per la registrazione
    const response = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (response.ok) {
      // Restituisci il risultato al client
      return NextResponse.json(data, { status: 201 }); // 201 Created
    } else {
      return NextResponse.json(data, { status: response.status });
    }
  } catch {
    return NextResponse.json({ error: "Errore del server" }, { status: 500 });
  }
}
