"use client";

import { FC } from "react";
import { Booking } from "@/app/types";
import { UUID } from "crypto";

interface BookingListProps {
  bookings: Booking[];
}

const BookingList: FC<BookingListProps> = ({ bookings }) => {
  const onEdit = (id: UUID) => {
    console.log(id);
  };

  const onDelete = (id: UUID) => {
    console.log(id);
  };
  return (
    <div>
      <h2 className="mb-4 text-xl font-semibold">Bookings</h2>
      <table className="w-full rounded shadow">
        <thead className="text-left">
          <tr className="border-b">
            <th className="p-2">Event</th>
            <th className="p-2">User</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.length > 0 &&
            bookings.map((booking) => (
              <tr key={booking.id} className="border-b">
                <td className="p-2">{booking.user.name}</td>
                <td className="p-2">{booking.event.name}</td>
                <td className="p-2">
                  <button
                    type="button"
                    onClick={() => onEdit(booking.id)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>{" "}
                  |{" "}
                  <button
                    type="button"
                    onClick={() => onDelete(booking.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
