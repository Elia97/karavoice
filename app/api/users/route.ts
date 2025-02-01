import { NextRequest, NextResponse } from "next/server";

export async function GET_ALL(req: NextRequest) {
  try {
    const token = req.cookies.get("auth_token");
    if (!token) {
      return NextResponse.json({ error: "Token mancante" }, { status: 401 });
    }

    const response = await fetch("http://localhost:3001/api/users", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const users = await response.json();
      return NextResponse.json(users, { status: 200 });
    } else {
      const errorData = await response.text();
      return NextResponse.json(
        { error: errorData || "Errore nel recupero utenti" },
        { status: response.status },
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        error: "Errore durante il recupero utenti",
        message: (error as Error).message,
      },
      { status: 500 },
    );
  }
}
