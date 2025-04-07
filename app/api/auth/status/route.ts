import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

const JWT_SECRET = process.env.JWT_SECRET as string;

export async function GET(req: NextRequest) {
  const cookies = req.cookies;
  const token = cookies.get("auth_token")?.value;

  if (!token) {
    return NextResponse.json(
      { isLoggedIn: false, isAdmin: false },
      { status: 200 },
    );
  }

  const decodedToken = jwt.verify(token, JWT_SECRET) as { role?: string };

  const isAdmin = decodedToken.role === "admin";

  return NextResponse.json(
    { isLoggedIn: !!token, isAdmin: isAdmin },
    { status: 200 },
  );
}
