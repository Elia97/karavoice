import { cookies } from "next/headers";
import AuthSection from "@/app/components/sections/auth-section";
import { redirect } from "next/navigation";

export default async function Auth() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return <AuthSection />;
  } else {
    redirect("/profile");
  }
}
