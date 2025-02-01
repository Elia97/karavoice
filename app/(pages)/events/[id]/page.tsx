import { getUserData } from "@/lib/auth";
import BookingSection from "@/app/components/sections/booking-section";
import { Event } from "@/app/types";
import { getEventById } from "@/lib/event";
import { UUID } from "crypto";
import { getUserBookings } from "@/lib/booking";

export default async function BookingKaraoke({
  params,
}: {
  params: { id: UUID };
}) {
  const { id } = await params;
  const event: Event = await getEventById(id);
  const userData = await getUserData();
  const userBookings = await getUserBookings();

  if (!event) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <p className="text-xl font-semibold">Evento non trovato</p>
      </div>
    );
  }

  return (
    <BookingSection
      event={event}
      userId={userData.id}
      userBookings={userBookings}
    />
  );
}
