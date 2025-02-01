import EventSection from "@/app/components/sections/event-section";

export default async function Events() {
  const res = await fetch("http://localhost:3001/api/events/upcoming", {
    cache: "no-store",
  });
  const events = await res.json();
  return <EventSection events={events} />;
}
