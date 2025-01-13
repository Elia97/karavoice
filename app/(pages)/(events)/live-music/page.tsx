import EventSection from "@/app/components/sections/event-section";

export default async function LiveMusic() {
  const res = await fetch(
    "http://localhost:3001/api/events/upcoming?category=live%20music",
    { cache: "no-store" },
  );
  const events = await res.json();
  return <EventSection events={events} />;
}
