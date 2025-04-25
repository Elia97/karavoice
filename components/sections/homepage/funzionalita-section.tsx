import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Star } from "lucide-react";

export default function FunzionalitàSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Perché Scegliere la Nostra Piattaforma
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scopri tutti i vantaggi che offriamo per rendere la tua esperienza
            con gli eventi semplice e piacevole
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Eventi Aggiornati</h3>
              <p className="text-muted-foreground">
                La nostra piattaforma è sempre aggiornata con gli ultimi eventi
                in programma in tutta Italia.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community Attiva</h3>
              <p className="text-muted-foreground">
                Unisciti a una community di appassionati di eventi e condividi
                le tue esperienze con altri utenti.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-none bg-transparent">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Recensioni Verificate</h3>
              <p className="text-muted-foreground">
                Leggi recensioni autentiche di altri partecipanti per scegliere
                gli eventi migliori per te.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
