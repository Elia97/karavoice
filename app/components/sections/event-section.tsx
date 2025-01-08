"use client";

import { FC, useContext, useEffect } from "react";
import { Event } from "@/app/types";
import EventCard from "../cards/event-card";
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
    <section className="min-h-screen overflow-hidden">
      {/* Video Background */}
      {/* <video
        autoPlay
        loop
        muted
        className="absolute h-full w-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video> */}
      <div className="relative mx-auto mt-16 max-w-screen-md px-4 py-12">
        <h2 className="mb-8 text-center text-4xl font-semibold">
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
