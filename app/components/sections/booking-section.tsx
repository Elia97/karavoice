"use client";

import { FC, useEffect, useState } from "react";
import { Event, Booking } from "@/app/types";
import Image from "next/image";
import BookingForm from "../forms/booking-form";
import { UUID } from "crypto";
import Map from "../map";

interface BookingSectionProps {
  event: Event;
  userId: UUID;
  userBookings: Booking[];
}

const BookingSection: FC<BookingSectionProps> = ({
  event,
  userId,
  userBookings,
}) => {
  const [isOpenedModal, setIsOpenedModal] = useState<boolean>(false);
  const [isBooked, setIsBooked] = useState<boolean>(false);

  useEffect(() => {
    const hasBooking = userBookings.some(
      (booking) => booking.event.id === event.id,
    );
    setIsBooked(hasBooking);
  }, [userBookings, event.id]);

  const handleCloseModal = (success: boolean) => {
    setIsOpenedModal(false);
    if (success) setIsBooked(true);
  };

  return (
    <section className="mx-auto mt-16 min-h-screen max-w-screen-xl">
      <div className="flex flex-col items-center gap-8 xl:flex-row xl:px-4 xl:py-6">
        <Image
          src={event.image}
          alt={event.name}
          width={640}
          height={360}
          className="mx-auto xl:mx-0 xl:rounded-xl"
        />
        <div className="text-center">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            {event.name}
          </h1>
          <button
            type="button"
            className="rounded-lg bg-gradient-to-r px-8 py-4 text-base font-medium text-white dark:from-fuchsia-950 dark:to-sky-950"
            disabled={isBooked}
            onClick={() => setIsOpenedModal(true)}
          >
            {isBooked ? "Prenotato" : "Prenota"}
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 px-4 py-6 xl:flex-row">
        <div className="rounded-lg bg-neutral-900 px-4 py-6">
          <p className="max-w-2xl text-lg leading-relaxed">
            {event.description}
          </p>
        </div>
        <div className="rounded-lg bg-neutral-900 px-4 py-6">
          <h3>Dettagli evento</h3>
          <p className="text-xl font-medium">{event.location.name}</p>
          <small className="mt-2 block tracking-wider">
            {`${event.location.address}, ${event.location.zip_code} - ${event.location.city}, ${event.location.province}`}
          </small>
          <p className="my-3 text-base font-medium">
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
      </div>

      <div className="py-12">
        <Map
          lat={Number(event.location.latitude)}
          lng={Number(event.location.longitude)}
        />
      </div>

      {/* Modale */}
      {isOpenedModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/90">
          <div className="relative">
            <BookingForm
              onClose={handleCloseModal}
              userId={userId}
              eventId={event.id}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default BookingSection;
