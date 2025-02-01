import { FC } from "react";
import { getUserData } from "@/lib/auth";
import { User } from "@/app/types";
import { redirect } from "next/navigation";

const CheckUser: FC = async () => {
  const userData: User = await getUserData();
  if (userData.role === "admin") {
    redirect("/admin");
  } else {
    redirect("/profile");
  }
  return null;
};

export default CheckUser;
