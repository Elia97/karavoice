"use client";

import { FC, useContext, useEffect } from "react";
import { Event } from "@/app/types";
import EventCard from "./event-card";
import { EventContext } from "@/app/context-api/contexts";

interface EventSectionProps {
  events: Event[];
}

const EventSection: FC<EventSectionProps> = ({ events }) => {
  const { setEvents } = useContext(EventContext);

  useEffect(() => {
    setEvents(events);
  });
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div>
        <h2 className="mb-8 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
          Prossimi Eventi
        </h2>
        <div className="grid justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
          {events.length > 0 ? (
            events.map((event: Event) => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <p className="col-span-3 text-lg font-medium md:text-xl lg:text-2xl">
              Nessun evento disponibile
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
