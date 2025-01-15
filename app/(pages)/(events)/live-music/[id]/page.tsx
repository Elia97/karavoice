import BookingSection from "@/app/components/sections/booking-section";

export default async function BookingLiveMusic({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3001/api/events/${id}`, {
    cache: "no-store", // Evita la cache per ottenere dati aggiornati
  });

  const event = await res.json();

  if (!event) {
    return (
      <div className="flex min-h-screen w-full items-center justify-center">
        <p className="text-xl font-semibold">Evento non trovato</p>
      </div>
    );
  }

  return <BookingSection event={event} />;
}
