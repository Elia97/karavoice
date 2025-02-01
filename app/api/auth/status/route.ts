import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const cookies = req.cookies;
  const token = cookies.get("auth_token")?.value;

  return NextResponse.json(
    { isLoggedIn: !!token }, // true se il token esiste
    { status: 200 },
  );
}
