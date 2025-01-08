import { FC } from "react";
import { Event } from "@/app/types";
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

interface BookingSectionProps {
  event: Event;
}

const BookingSection: FC<BookingSectionProps> = ({ event }) => {
  return (
    <section className="mx-auto mt-16 max-w-screen-xl">
      <div className="grid items-center justify-items-center sm:pt-12 xl:grid-cols-2">
        <Image
          src={`${BASE_URL}${event.image}`}
          alt={event.name}
          width={640}
          height={360}
          className="md:rounded-xl"
        />
        <h1 className="pt-6">{event.name}</h1>
        <div className="px-4 py-12 xl:col-span-2">
          <p>{event.description}</p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
