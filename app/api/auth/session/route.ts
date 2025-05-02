import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("token")?.value; // dipende da come salvi il JWT

  if (!token) {
    return NextResponse.json({ user: null }, { status: 200 });
  }

  try {
    // Opzionale: puoi anche verificare il token qui oppure fare una fetch al backend
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    const user = await response.json();

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Errore nella sessione:", error);
    return NextResponse.json({ user: null }, { status: 500 });
  }
}
