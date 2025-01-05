"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { EventContext } from "@/app/context-api/contexts";
import { Event } from "@/app/types";

export default function BookingKaraoke() {
  const { id } = useParams(); // Ottieni il parametro id dalla URL
  const eventId = Array.isArray(id) ? parseInt(id[0]) : parseInt(id || "");
  const { events } = useContext(EventContext);
  const event: Event | undefined = events.find((event) => event.id === eventId);

  if (!event) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <p className="text-xl font-semibold">Evento non trovato</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="mx-auto max-w-screen-xl">
        <h1 className="text-3xl font-bold">{event.name}</h1>
        <p className="text-gray-700">{event.description}</p>
        <p>
          <strong>Data:</strong>{" "}
          {new Date(event.date || new Date()).toLocaleDateString("it-IT", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p>
          <strong>Ora:</strong> {event.start_time.slice(0, 5)}
        </p>
        <Image
          src={`http://localhost:3001${event.image}`}
          alt={event.name}
          className="rounded-lg shadow-md"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
