import { getAuthToken, getUserData } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const token = await getAuthToken();

  if (!token) {
    return NextResponse.json(
      { isLoggedIn: false, isAdmin: false },
      { status: 200 },
    );
  }

  const userData = await getUserData();
  const isAdmin = userData.role === "admin";

  return NextResponse.json(
    { isLoggedIn: !!token, isAdmin: isAdmin },
    { status: 200 },
  );
}
