import { CalendarDays, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Event } from "@/types";
import { Button } from "@/components/ui/button";

interface EventoCardProps {
  event: Event;
  isHomePage: boolean;
}

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUD_NAME;

export default function EventoCard({ event, isHomePage }: EventoCardProps) {
  return (
    <Card className="overflow-hidden bg-card pt-0 hover:shadow-md transition-shadow">
      <Image
        src={`https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${event.image}`}
        alt={event.name}
        height={200}
        width={400}
        className="w-full object-cover"
        {...(isHomePage ? { loading: "lazy" } : { priority: true })}
      />
      <CardHeader>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{event.name}</h3>
          <span className="text-sm bg-secondary/10 text-secondary px-2 py-1 rounded-full">
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
