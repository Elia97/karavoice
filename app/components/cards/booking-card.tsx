"use client";

import { UUID } from "crypto";
import { FC, useState } from "react";

interface BookingCardProps {
  id: UUID;
  status: "pending" | "confirmed" | "canceled";
  participants: number;
  notes: string;
  event_name: string;
  event_location_name: string;
  event_date: Date;
  event_start_time: string | undefined;
  onDelete: (id: UUID) => void; // Funzione da chiamare quando la prenotazione viene eliminata
}

const BookingCard: FC<BookingCardProps> = ({
  id,
  status,
  participants,
  notes,
  event_name,
  event_location_name,
  event_date,
  event_start_time,
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
      className={`relative rounded-lg bg-gradient-to-r p-3 shadow-md hover:shadow-lg dark:from-fuchsia-950 dark:to-sky-950`}
      onClick={() => setExpanded(!expanded)}
      tabIndex={0}
      role="button"
    >
      <div
        className={`absolute right-2 top-2 size-6 rounded-full ${status === "pending" ? "bg-transparent" : "bg-green-500"}`}
      />
      <h3 className="mb-4 text-lg font-semibold tracking-wide text-white">
        {event_name}
      </h3>
      <p className="mb-2 text-base font-medium">
        {new Date(event_date).toLocaleDateString("it-IT", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        - {` ore ${event_start_time?.slice(0, 5)}`}
      </p>
      <p className="text-sm tracking-wide text-white">{event_location_name}</p>
      <div
        className={`overflow-hidden rounded-b-lg bg-gradient-to-l transition-all duration-500 ease-in-out dark:from-fuchsia-950 dark:to-sky-950 ${expanded ? "-m-3 mt-6 max-h-80 p-3" : "max-h-0"}`}
      >
        <p>
          <strong>Partecipanti:</strong> {participants}
        </p>
        <p>
          <strong>Note:</strong> {notes}
        </p>
        <div className="mt-6">
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
    </div>
  );
};

export default BookingCard;
