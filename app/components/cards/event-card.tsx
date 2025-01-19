"use client";

import { FC, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Event } from "@/app/types";
import { usePathname } from "next/navigation";

interface EventCardProps {
  event: Event;
}

const EventCard: FC<EventCardProps> = ({ event }) => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("api/auth/status");
        const data = await res.json();
        setIsLoggedIn(data.loggedIn);
      } catch {
        setIsLoggedIn(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <div className="mx-auto max-w-sm rounded-xl bg-gradient-to-r shadow-lg transition-transform hover:scale-105 sm:mx-0 dark:from-fuchsia-950 dark:to-sky-950">
      {/* Immagine */}
      <Image
        src={`${event.image}`}
        alt={event.name}
        className="w-full rounded-t-xl object-cover"
        width={400}
        height={200}
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
          - {`alle ${event.start_time?.slice(0, 5)}`}
        </p>
        <p className="text-sm font-light">{event.location.name}</p>
        <div className="mt-4 flex justify-end">
          <Link href={`${pathname}/${event.id}`}>
            <button
              type="button"
              disabled={!isLoggedIn}
              className="rounded-lg bg-gradient-to-l px-4 py-2 text-base font-medium text-white transition-all hover:scale-105 disabled:cursor-not-allowed disabled:hover:scale-100 dark:from-fuchsia-950 dark:to-sky-950 dark:disabled:bg-neutral-800"
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
