import { Event } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import EventoCard from "@/components/evento-card";

export default function EventiSection({
  events,
  category,
}: {
  events: Event[];
  category: string;
}) {
  return (
    <Tabs defaultValue={category} className="w-full">
      <TabsList className="grid grid-cols-4 mb-4 w-full bg-muted rounded-xl p-1 *:cursor-pointer">
        <TabsTrigger value="tutti">Tutti</TabsTrigger>
        <TabsTrigger value="karaoke">Karaoke</TabsTrigger>
        <TabsTrigger value="dj set">Dj Set</TabsTrigger>
        <TabsTrigger value="live music">Live Music</TabsTrigger>
      </TabsList>

      <TabsContent value="tutti" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventoCard key={event.id} event={event} isHomePage={false} />
          ))}
        </div>
      </TabsContent>

      {["karaoke", "dj set", "live music"].map((category) => (
        <TabsContent key={category} value={category} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events
              .filter((event) => event.category.name === category)
              .map((event) => (
                <EventoCard key={event.id} event={event} isHomePage={false} />
              ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
