import { CalendarDays, Filter, MapPin, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Event } from "@/types";

export default async function EventiPage({
  searchParams,
}: {
  searchParams: { categoria?: string };
}) {
  const res = await fetch("http://localhost:3001/api/events/upcoming", {
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

  const params = await searchParams;

  const category = params.categoria ?? "tutti";

  const events: Event[] = await res.json();

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await wait(3000);

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Eventi in Programma</h1>
          <Button variant="outline">
            <CalendarDays className="mr-2 h-4 w-4" />
            Visualizza Calendario
          </Button>
        </div>

        <div className="flex flex-cols sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Cerca eventi..."
              className="pl-8"
            />
          </div>
          <Button variant="outline" className="sm:w-auto">
            <Filter className="mr-2 h-4 w-4" />
            Filtri
          </Button>
        </div>
      </div>

      <Tabs defaultValue={category} className="w-full">
        <TabsList className="grid grid-cols-4 mb-4 w-full">
          <TabsTrigger value="tutti">Tutti</TabsTrigger>
          <TabsTrigger value="karaoke">Karaoke</TabsTrigger>
          <TabsTrigger value="dj set">Dj Set</TabsTrigger>
          <TabsTrigger value="live music">Live Music</TabsTrigger>
        </TabsList>

        <TabsContent value="tutti" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventoCard key={event.id} event={event} />
            ))}
          </div>
        </TabsContent>

        {["karaoke", "dj set", "live music"].map((category) => (
          <TabsContent key={category} value={category} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events
                .filter((event) => event.category.name === category)
                .map((event) => (
                  <EventoCard key={event.id} event={event} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

interface EventoCardProps {
  event: Event;
}

function EventoCard({ event }: EventoCardProps) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={event.image}
        alt={event.name}
        height={200}
        width={400}
        className="w-full object-cover"
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
          {new Date(event.date).toLocaleDateString("it-IT", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-1 h-4 w-4" />
          {event.location.name}, {event.location.city},{" "}
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
  );
}
