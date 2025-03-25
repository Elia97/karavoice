import BookingList from "@/app/components/admin/bookings/booking-list";
import { Booking } from "@/app/types";
import { getAuthToken } from "@/lib/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function BookingsPage() {
  const token = await getAuthToken();
  const res = await fetch(`${API_URL}/bookings`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const bookings: Booking[] = await res.json();
  return <BookingList bookings={bookings} />;
}
