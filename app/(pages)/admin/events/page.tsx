import EventList from "@/app/components/admin/events/event-list";
import { Event } from "@/app/types";
import { getAuthToken } from "@/lib/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function EventsPage() {
  const token = await getAuthToken();
  const res = await fetch(`${API_URL}/events`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const events: Event[] = await res.json();
  return <EventList events={events} />;
}
