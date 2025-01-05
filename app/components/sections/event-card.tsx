"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Event } from "@/app/types";
import { usePathname } from "next/navigation";

interface EventCardProps {
  event: Event;
}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventCard: FC<EventCardProps> = ({ event }) => {
  const pathname = usePathname();

  return (
    <div className="mx-auto max-w-xs rounded-xl bg-neutral-800 shadow-lg transition-transform hover:scale-105 sm:mx-0">
      {/* Immagine */}
      <Image
        src={`${BASE_URL}${event.image}`}
        alt={event.name}
        className="w-full rounded-t-xl object-cover"
        width={400}
        height={300}
      />

      {/* Contenuto */}
      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold tracking-tight">
          {event.name}
        </h3>

        <p className="mb-3 text-sm font-medium tracking-wide">
          {new Date(event.date || new Date()).toLocaleDateString("it-IT", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          - {`alle ${event.start_time.slice(0, 5)}`}
        </p>
        <p className="text-sm font-light">{event.location.name}</p>
        <div className="mt-4 flex justify-end">
          <Link href={`${pathname}/${event.id}`}>
            <button
              type="button"
              className="rounded-full bg-fuchsia-500 px-3 py-2 text-sm font-medium text-white shadow-md transition hover:bg-fuchsia-600"
              onClick={() => window.scrollTo(0, 0)}
            >
              Prenota ora
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
