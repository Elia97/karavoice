import BookingsList from "@/app/components/booking-list";
import { getUserBookings, getUserData } from "./actions";
import { Suspense } from "react";

export default async function Profile() {
  const userData = await getUserData();
  const userBookings = await getUserBookings();

  return (
    <section className="mx-auto mt-16 min-h-screen max-w-screen-xl px-4 py-6">
      <h1 className="mb-8 text-center text-5xl font-bold tracking-tight drop-shadow sm:text-6xl lg:text-7xl">
        Bentornato, {userData.name}
      </h1>
      <div>
        <h2 className="mb-8 text-center text-2xl font-semibold sm:text-3xl lg:text-4xl">
          Le tue prenotazioni
        </h2>
        <Suspense fallback={<div>Caricamento...</div>}>
          <BookingsList initialBookings={userBookings} />
        </Suspense>
      </div>
    </section>
  );
}
