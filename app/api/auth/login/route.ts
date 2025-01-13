import { NextResponse, NextRequest } from "next/server";

interface LoginRequestBody {
  email: string;
  password: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: LoginRequestBody = await request.json();

    // Chiamata al backend esterno
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (response.ok) {
      // Puoi restituire il token o salvarlo come cookie
      const res = NextResponse.json(data);
      res.cookies.set("auth_token", data.token, {
        httpOnly: true,
        secure: true,
        path: "/",
        maxAge: 7 * 24 * 60 * 60, // 7 giorni
      });
      return res;
    } else {
      return NextResponse.json(data, { status: response.status });
    }
  } catch {
    return NextResponse.json({ error: "Errore del server" }, { status: 500 });
  }
}
