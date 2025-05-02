import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        credentials: "include",
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Logout failed" },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Rimuovi il cookie dal browser
    const nextResponse = NextResponse.json(data, { status: 200 });
    nextResponse.headers.set(
      "Set-Cookie",
      "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    );

    return nextResponse;
  } catch (error) {
    console.error("Errore durante il logout: ", error);
    return NextResponse.json(
      { error: "Errore durante il logout" },
      { status: 500 }
    );
  }
}
