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
    <ul className="space-y-3">
      {userBookings.length > 0 ? (
        userBookings.map((booking) => (
          <BookingCard
            key={booking.id}
            title={booking.event.name}
            location={booking.event.location.name}
            date={booking.event.date}
            start_time={booking.event.start_time}
            id={booking.id}
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
