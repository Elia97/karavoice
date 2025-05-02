import { CalendarDays, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Event } from "@/types";
import EventiSection from "@/components/sections/eventi/eventi-section";

export default async function EventiPage({
  searchParams,
}: {
  searchParams: { categoria?: string };
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/events/upcoming`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    }
  );

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
      <div className="space-y-4 px-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Eventi in Programma</h1>
          <Button variant="outline" className="cursor-pointer">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span className="hidden sm:block">Visualizza Calendario</span>
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
      <EventiSection events={events} category={category} />
    </div>
  );
}
