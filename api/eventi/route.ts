import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("http://localhost:3001/api/events/upcoming", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) {
    return NextResponse.json(
      { errore: "Errore durante il recupero degli eventi" },
      { status: 500 }
    );
  }

  return NextResponse.json(data, { status: 200 });
}
