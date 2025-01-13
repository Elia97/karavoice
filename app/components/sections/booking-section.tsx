import { FC } from "react";
import { Event } from "@/app/types";
import Image from "next/image";

interface BookingSectionProps {
  event: Event;
}

const BookingSection: FC<BookingSectionProps> = ({ event }) => {
  return (
    <section className="mx-auto mt-16 min-h-screen max-w-screen-xl">
      <div className="grid items-center justify-items-center gap-8 sm:pt-6 xl:grid-cols-2">
        <Image
          src={event.image}
          alt={event.name}
          width={640}
          height={360}
          className="-px-4 md:rounded-xl"
        />
        <div className="px-4 py-6 text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {event.name}
          </h1>
          <p className="text-xl font-medium">{event.location.name}</p>
          <small className="mt-2 block tracking-wider">
            {`${event.location.address}, ${event.location.zip_code} - ${event.location.city}, ${event.location.province}`}
          </small>
          <p className="mt-3 text-base font-medium">
            {new Date(event.date).toLocaleDateString("it-IT", {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
            })}{" "}
            -{" "}
            {`dalle ore ${event.start_time?.slice(0, 5)} alle ore ${event.end_time?.slice(0, 5)}`}
          </p>
        </div>
        <div className="max-w-screen-md px-4 py-6 xl:col-span-2 xl:max-w-screen-lg">
          <p className="text-lg leading-relaxed">{event.description}</p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
