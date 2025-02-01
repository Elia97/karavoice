import UserList from "@/app/components/admin/users/user-list";
import { User } from "@/app/types";
import { getAuthToken } from "@/lib/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function UsersPage() {
  const token = await getAuthToken();
  const res = await fetch(`${API_URL}/users`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const users: User[] = await res.json();
  return <UserList users={users} />;
}
