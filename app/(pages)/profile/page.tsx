import BookingsList from "@/app/components/booking-list";
import { getUserData } from "@/lib/auth";
import { getUserBookings } from "@/lib/booking";
import { User, Booking } from "@/app/types";

export default async function Profile() {
  const userData: User = await getUserData();
  const userBookings: Booking[] = await getUserBookings();

  return (
    <section className="mx-auto mt-16 min-h-screen max-w-screen-xl px-4 py-6">
      <h1 className="mb-8 text-center text-5xl font-bold tracking-tight drop-shadow sm:text-6xl lg:text-7xl">
        Bentornato, {userData.name}
      </h1>
      <div>
        <h2 className="mb-8 text-center text-2xl font-semibold sm:text-3xl lg:text-4xl">
          Le tue prenotazioni
        </h2>
        <BookingsList initialBookings={userBookings} />
      </div>
    </section>
  );
}
