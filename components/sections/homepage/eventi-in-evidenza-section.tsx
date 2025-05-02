import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Event } from "@/types";
import Link from "next/link";
import EventoCard from "@/components/evento-card";

export default async function EventiInEvidenzaSection() {
  const res = await fetch("http://localhost:3001/api/events/featured", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="container mx-auto py-6">
        <h1 className="text-3xl font-bold">
          Errore durante il recupero degli eventi
        </h1>
      </div>
    );
  }

  const featuredEvents: Event[] = await res.json();

  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Eventi in Evidenza</h2>
            <p className="text-muted-foreground">
              Gli eventi più popolari da non perdere
            </p>
          </div>
          <Link href="/eventi">
            <Button variant="outline" className="gap-2 cursor-pointer">
              Tutti gli eventi
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredEvents.map((event) => (
            <EventoCard key={event.id} event={event} isHomePage={true} />
          ))}
        </div>
      </div>
    </section>
  );
}
