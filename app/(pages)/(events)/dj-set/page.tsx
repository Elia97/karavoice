import EventSection from "@/app/components/sections/event-section";

export default async function DjSet() {
  const res = await fetch(
    "http://localhost:3001/api/events/upcoming?category=dj%20set",
    { cache: "no-store" },
  );
  const events = await res.json();
  return <EventSection events={events} />;
}
