"use client";

import { useState } from "react";
import { Booking } from "@/app/types";
import BookingCard from "@/app/components/cards/booking-card";
import { UUID } from "crypto";

interface BookingsListProps {
  initialBookings: Booking[];
}

const BookingsList: React.FC<BookingsListProps> = ({ initialBookings }) => {
  const [userBookings, setUserBookings] = useState<Booking[]>(initialBookings);

  const handleDeleteBooking = (id: UUID) => {
    setUserBookings(userBookings.filter((booking) => booking.id !== id));
  };

  return (
    <ul className="mx-auto max-w-screen-md space-y-3">
      {userBookings.length > 0 ? (
        userBookings.map((booking) => (
          <BookingCard
            key={booking.id}
            id={booking.id}
            status={booking.status}
            participants={booking.participants}
            notes={booking.notes}
            event_name={booking.event.name}
            event_location_name={booking.event.location.name}
            event_date={booking.event.date}
            event_start_time={booking.event.start_time}
            onDelete={handleDeleteBooking} // Passa la funzione onDelete
          />
        ))
      ) : (
        <li className="text-center">Nessuna prenotazione</li>
      )}
    </ul>
  );
};

export default BookingsList;
