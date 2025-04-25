import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Event } from "@/types";
import Link from "next/link";

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
            <Card
              key={event.id}
              className="overflow-hidden h-full hover:shadow-md transition-shadow"
            >
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold">{event.name}</h3>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {event.category.name}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground line-clamp-2">
                  {event.description}
                </p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarDays className="mr-1 h-4 w-4" />
                  {event.date instanceof Date
                    ? event.date.toLocaleDateString()
                    : event.date}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="mr-1 h-4 w-4" />
                  {event.location.address}, {event.location.city},{" "}
                  {event.location.province}
                </div>
              </CardContent>
              <CardFooter>
                <Link href={`/eventi/${event.id}`} className="w-full">
                  <Button variant="default" className="w-full cursor-pointer">
                    Dettagli Evento
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
