import { ArrowLeft, CalendarDays, MapPin, Share2 } from "lucide-react";
import Link from "next/link";
import { Event } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { UUID } from "crypto";
// import { PrenotaEventoDialog } from "@/components/prenota-evento-dialog";
import Image from "next/image";
import { PrenotaEventoDialog } from "@/components/prenota-evento-dialog";
import GoogleMaps from "@/components/google-maps";

export default async function EventoDettaglio({
  params,
}: {
  params: { id: UUID };
}) {
  const { id } = await params;

  const res = await fetch(`http://localhost:3001/api/events/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    return <div className="container mx-auto py-10">Evento non trovato</div>;
  }

  const event: Event = await res.json();

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await wait(3000);

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex items-center mb-6">
        <Link href="/eventi">
          <Button variant="ghost" className="gap-1 cursor-pointer">
            <ArrowLeft className="h-4 w-4" />
            Torna agli eventi
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.name}
              width={800}
              height={400}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
            <div className="absolute top-4 right-4">
              <Button variant="secondary" size="sm" className="gap-1">
                <Share2 className="h-4 w-4" />
                Condividi
              </Button>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{event.name}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm">
                {event.category.name}
              </span>
            </div>
            <p className="text-muted-foreground whitespace-pre-line">
              {event.description}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="font-medium">Data e Orario</h3>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <CalendarDays className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>
                      {new Date(event.date).toLocaleDateString("it-IT", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                    <p>{`dalle ore ${event.start_time?.slice(
                      0,
                      5
                    )} alle ore ${event.end_time?.slice(0, 5)}`}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Luogo</h3>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>{event.location.name}</p>
                    <p>{event.location.address}</p>
                  </div>
                </div>
              </div>
              <PrenotaEventoDialog evento={event} />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="px-6">
              <GoogleMaps
                lat={Number(event.location.latitude)}
                lng={Number(event.location.longitude)}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
