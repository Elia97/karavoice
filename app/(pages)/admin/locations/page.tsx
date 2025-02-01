import LocationList from "@/app/components/admin/locations/location-list";
import { Location } from "@/app/types";
import { getAuthToken } from "@/lib/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function UsersPage() {
  const token = await getAuthToken();
  const res = await fetch(`${API_URL}/locations`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const locations: Location[] = await res.json();
  return <LocationList locations={locations} />;
}
