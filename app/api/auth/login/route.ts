import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body: { email: string; password: string } = await request.json();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(body),
        credentials: "include",
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(
        { error: data.error || "Login failed" },
        { status: response.status }
      );
    }

    const setCookie = response.headers.get("set-cookie");
    const nextResponse = NextResponse.json(data, { status: 200 });

    if (setCookie) {
      nextResponse.headers.append("Set-Cookie", setCookie);
    }

    return nextResponse;
  } catch (error) {
    console.error("Errore durante il login: ", error);
    return NextResponse.json(
      { error: "Errore durante il login" },
      { status: 500 }
    );
  }
}
