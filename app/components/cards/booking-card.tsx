"use client";

import { UUID } from "crypto";
import { FC, useState } from "react";

interface BookingCardProps {
  title: string;
  location: string;
  date: Date;
  start_time: string | undefined;
  id: UUID;
  onDelete: (id: UUID) => void; // Funzione da chiamare quando la prenotazione viene eliminata
}

const BookingCard: FC<BookingCardProps> = ({
  title,
  location,
  date,
  start_time,
  id,
  onDelete,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const deleteBooking = async (id: UUID) => {
    try {
      const res = await fetch("/api/booking", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) {
        throw new Error("Errore durante la cancellazione della prenotazione");
      }

      onDelete(id); // Chiama la funzione onDelete per rimuovere la prenotazione dalla lista
    } catch (error) {
      console.error(error as Error);
    }
  };

  return (
    <div
      className={`rounded-lg bg-gradient-to-r from-fuchsia-950 to-sky-950 p-3 shadow-md hover:shadow-lg`}
      onClick={() => setExpanded(!expanded)}
      tabIndex={0}
      role="button"
    >
      <h3 className="mb-4 text-lg font-semibold tracking-wide text-white">
        {title}
      </h3>
      <p className="mb-2 text-base font-medium">
        {new Date(date).toLocaleDateString("it-IT", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        - {` ore ${start_time?.slice(0, 5)}`}
      </p>
      <p className="text-sm tracking-wide text-white">{location}</p>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${expanded ? "mt-4 max-h-40" : "max-h-0"}`}
      >
        <small>
          <strong className="block">Riferimento prenotazione</strong> {id}
        </small>
        <div
          role="button"
          className="inline rounded-lg shadow-lg"
          onClick={() => deleteBooking(id)}
        >
          <small className="ml-4 underline-offset-2 hover:underline">
            Cancella
          </small>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
