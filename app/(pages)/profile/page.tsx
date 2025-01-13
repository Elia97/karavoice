import { redirect } from "next/navigation";
import { getUserBookings, getUserData } from "./actions";
import { Booking } from "@/app/types";
import BookingCard from "@/app/components/cards/booking-card";

export default async function Profile() {
  try {
    const userData = await getUserData(); // Chiamata alla server action
    const userBookings = await getUserBookings();

    return (
      <section className="mx-auto mt-16 flex min-h-screen max-w-screen-xl flex-col items-center px-4 py-6">
        <h1 className="mb-8 text-5xl font-bold tracking-tight drop-shadow sm:text-6xl lg:text-7xl">
          Bentornato, {userData.name}
        </h1>
        <div>
          <h2 className="mb-8 text-center text-4xl font-semibold">
            Le tue prenotazioni
          </h2>
          <ol>
            {userBookings.length > 0 ? (
              userBookings.map((booking: Booking) => {
                return (
                  <BookingCard
                    key={booking.id}
                    title={booking.event.name}
                    location={booking.event.location.name}
                  />
                );
              })
            ) : (
              <li>Nessuna prenotazione</li>
            )}
          </ol>
        </div>
      </section>
    );
  } catch (error) {
    console.error((error as Error).message);
    redirect("/");
  }
}
