import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

// Dati di esempio per le testimonianze
const testimonianze = [
  {
    nome: "Marco Rossi",
    ruolo: "Organizzatore eventi",
    testo:
      "Grazie a questa piattaforma ho potuto promuovere i miei eventi raggiungendo un pubblico molto più ampio.",
    avatar: "/marco-rossi.webp",
    valutazione: 5,
  },
  {
    nome: "Laura Bianchi",
    ruolo: "Appassionata di eventi culturali",
    testo:
      "Finalmente un'app che mi permette di trovare facilmente tutti gli eventi nella mia città. Interfaccia intuitiva e informazioni sempre aggiornate.",
    avatar: "/laura-bianchi.webp",
    valutazione: 4,
  },
  {
    nome: "Giovanni Verdi",
    ruolo: "Turista",
    testo:
      "Ho scoperto eventi locali interessanti durante il mio viaggio in Italia che non avrei mai trovato altrimenti. Ottimo servizio!",
    avatar: "/giovanni-verdi.webp",
    valutazione: 5,
  },
];

export default function TestimonianzeSection() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Cosa Dicono di Noi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Scopri le esperienze di chi ha già utilizzato la nostra piattaforma
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonianze.map((testimonianza, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 size-12 relative">
                    <Image
                      src={testimonianza.avatar || "/placeholder.svg"}
                      alt={testimonianza.nome}
                      fill
                      className="rounded-full object-cover"
                      loading="lazy"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonianza.nome}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonianza.ruolo}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonianza.valutazione
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonianza.testo}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
