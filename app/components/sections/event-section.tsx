"use client";

import { Event } from "@/app/types";
import { FC, useState } from "react";
import EventCard from "../cards/event-card";

interface EventSectionProps {
  events: Event[];
}

const categories: string[] = ["tutti", "karaoke", "dj set", "live music"];

const EventSection: FC<EventSectionProps> = ({ events }) => {
  const [filter, setFilter] = useState<string>("");

  const filteredEvents: Event[] = events?.filter((event) =>
    event.category.startsWith(filter),
  );

  const handleClick = (e: React.MouseEvent<HTMLUListElement>) => {
    const target = e.target as HTMLElement;
    const filterValue = target.dataset.filter;
    if (filterValue === "tutti") {
      setFilter("");
    } else {
      setFilter(filterValue!);
    }
  };

  return (
    <section className="mx-auto mt-16 min-h-screen max-w-screen-xl overflow-hidden px-4 py-6">
      <h2 className="mb-8 text-center text-4xl font-semibold">
        Prossimi Eventi
      </h2>
      <div className="my-4">
        <ul className="flex justify-center gap-4" onClick={handleClick}>
          {categories.map((category, index) => {
            return (
              <li
                key={index}
                className={`rounded-full border px-4 py-2 hover:cursor-pointer hover:bg-sky-950 ${filter === category && "bg-sky-950"}`}
                data-filter={category}
              >
                {category}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="grid justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-4">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event: Event) => (
            <EventCard key={event.id} event={event} />
          ))
        ) : (
          <p className="col-span-3 text-lg font-medium md:text-xl lg:text-2xl">
            Nessun evento disponibile
          </p>
        )}
      </div>
    </section>
  );
};

export default EventSection;
