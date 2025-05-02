import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Booking, Event } from "@/types";
import { Calendar, Users, Ticket } from "lucide-react";
import { cookies } from "next/headers";

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Benvenuto nel pannello di amministrazione di EventiApp.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Calendar className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl mb-1">{data.totalEvents}</CardTitle>
            <CardDescription>Eventi totali</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl mb-1">{data.totalUsers}</CardTitle>
            <CardDescription>Utenti registrati</CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <Ticket className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl mb-1">{data.totalBookings}</CardTitle>
            <CardDescription>Prenotazioni</CardDescription>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Eventi recenti</CardTitle>
            <CardDescription>
              Gli ultimi eventi aggiunti alla piattaforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.recentEvents.map((event: Event) => (
                <div
                  key={event.id}
                  className="flex items-center justify-between border-b pb-2 last:border-0"
                >
                  <div>
                    <p className="font-medium">{event.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Aggiunto il{" "}
                      {new Date(event.createdAt).toLocaleDateString("it-IT", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ultime prenotazioni</CardTitle>
            <CardDescription>
              Le prenotazioni più recenti sulla piattaforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.latestBookings.map((booking: Booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between border-b pb-2 last:border-0"
                >
                  <div>
                    <p className="font-medium">{booking.user.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {booking.event.name}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {booking.updatedAt
                      ? new Date(booking.updatedAt).toLocaleDateString(
                          "it-IT",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )
                      : new Date(booking.createdAt).toLocaleDateString(
                          "it-IT",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
