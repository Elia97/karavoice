import { ArrowLeft, CalendarDays, MapPin, Share2, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Evento {
    id: number
    titolo: string
    descrizione: string
    data: string
    orario: string
    luogo: string
    indirizzo: string
    categoria: string
    prezzo: string
    organizzatore: string
    partecipanti: number
    immagine: string
}

// Dati di esempio per gli eventi
const eventi: Evento[] = [
  {
    id: 1,
    titolo: "Festival della Musica",
    descrizione:
      "Un weekend di musica dal vivo con artisti nazionali e internazionali. Il festival ospiterà più di 20 band su 3 palchi diversi, con generi che spaziano dal rock al jazz, dall'elettronica alla musica classica. Saranno disponibili aree food & beverage, zone relax e attività collaterali per tutte le età.",
    data: "15-17 Giugno 2024",
    orario: "Dalle 16:00 alle 02:00",
    luogo: "Piazza Maggiore, Bologna",
    indirizzo: "Piazza Maggiore, 40124 Bologna BO",
    categoria: "musica",
    prezzo: "€25 - €60",
    organizzatore: "Bologna Eventi",
    partecipanti: 1250,
    immagine: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 2,
    titolo: "Mostra d'Arte Contemporanea",
    descrizione:
      "Esposizione delle opere dei migliori artisti emergenti italiani. La mostra presenta oltre 100 opere tra dipinti, sculture, installazioni e arte digitale. Un percorso espositivo che racconta le nuove tendenze dell'arte contemporanea italiana, con particolare attenzione ai temi sociali e ambientali.",
    data: "20 Giugno - 10 Luglio 2024",
    orario: "10:00 - 19:00 (chiuso il lunedì)",
    luogo: "Galleria Moderna, Milano",
    indirizzo: "Via Moderna 15, 20121 Milano MI",
    categoria: "arte",
    prezzo: "€12 (ridotto €8)",
    organizzatore: "Fondazione Arte Moderna",
    partecipanti: 450,
    immagine: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 3,
    titolo: "Conferenza Tech",
    descrizione:
      "Scopri le ultime tendenze nel mondo della tecnologia e dell'innovazione. Due giorni di conferenze, workshop e networking con esperti del settore tech. Verranno presentate le ultime novità in ambito AI, blockchain, IoT e sviluppo software. Possibilità di partecipare a sessioni di mentoring e pitch con investitori.",
    data: "5-6 Luglio 2024",
    orario: "9:00 - 18:00",
    luogo: "Centro Congressi, Roma",
    indirizzo: "Via dei Congressi 35, 00144 Roma RM",
    categoria: "tecnologia",
    prezzo: "€150 (early bird €120)",
    organizzatore: "TechItalia",
    partecipanti: 800,
    immagine: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 4,
    titolo: "Sagra del Tartufo",
    descrizione:
      "Degustazione di piatti a base di tartufo e prodotti locali. Un weekend dedicato alla celebrazione del tartufo bianco d'Alba e delle eccellenze gastronomiche piemontesi. Stand gastronomici, showcooking con chef stellati, degustazioni guidate e mercato dei produttori locali.",
    data: "12-14 Luglio 2024",
    orario: "11:00 - 23:00",
    luogo: "Piazza del Popolo, Alba",
    indirizzo: "Piazza del Popolo, 12051 Alba CN",
    categoria: "gastronomia",
    prezzo: "Ingresso gratuito, consumazioni a pagamento",
    organizzatore: "Pro Loco Alba",
    partecipanti: 3000,
    immagine: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 5,
    titolo: "Maratona Cittadina",
    descrizione:
      "Corsa competitiva e non competitiva attraverso le vie della città. Percorso di 42 km attraverso i luoghi più suggestivi di Firenze. Disponibili anche percorsi ridotti di 21 km e 10 km. Pacco gara per tutti i partecipanti e medaglia per i finisher.",
    data: "21 Luglio 2024",
    orario: "Partenza ore 8:00",
    luogo: "Partenza da Piazza Duomo, Firenze",
    indirizzo: "Piazza del Duomo, 50122 Firenze FI",
    categoria: "sport",
    prezzo: "€40 (42 km), €30 (21 km), €20 (10 km)",
    organizzatore: "Firenze Sport",
    partecipanti: 5000,
    immagine: "/placeholder.svg?height=400&width=800",
  },
  {
    id: 6,
    titolo: "Festival del Cinema",
    descrizione:
      "Proiezioni di film indipendenti e incontri con registi e attori. Dieci giorni dedicati al cinema indipendente italiano e internazionale, con oltre 50 proiezioni, masterclass, dibattiti e incontri con i protagonisti del grande schermo. Premio del pubblico e della critica per i migliori film.",
    data: "1-10 Agosto 2024",
    orario: "Proiezioni dalle 16:00 alle 24:00",
    luogo: "Cinema Centrale, Venezia",
    indirizzo: "Via Cinema 10, 30100 Venezia VE",
    categoria: "cinema",
    prezzo: "€8 per proiezione, abbonamento €60",
    organizzatore: "Associazione Cinema Indipendente",
    partecipanti: 2000,
    immagine: "/placeholder.svg?height=400&width=800",
  },
]

interface Props {
    params: {
        id: string;
    }
}

export default function EventoDettaglio({ params }: Props) {
  const id = Number.parseInt(params.id)
  const evento = eventi.find((e) => e.id === id)

  if (!evento) {
    return <div className="container mx-auto py-10">Evento non trovato</div>
  }

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="flex items-center mb-6">
        <Link href="/eventi">
          <Button variant="ghost" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Torna agli eventi
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={evento.immagine || "/placeholder.svg"}
              alt={evento.titolo}
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
            <h1 className="text-3xl font-bold mb-2">{evento.titolo}</h1>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">{evento.categoria}</span>
            </div>
            <p className="text-muted-foreground whitespace-pre-line">{evento.descrizione}</p>
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
                    <p>{evento.data}</p>
                    <p>{evento.orario}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Luogo</h3>
                <div className="flex items-start gap-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>{evento.luogo}</p>
                    <p>{evento.indirizzo}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Prezzo</h3>
                <p className="text-muted-foreground">{evento.prezzo}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Organizzatore</h3>
                <p className="text-muted-foreground">{evento.organizzatore}</p>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-5 w-5" />
                <p>{evento.partecipanti} partecipanti</p>
              </div>

              <Button className="w-full mt-4">Prenota Ora</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <iframe
                title="Mappa evento"
                className="w-full h-[200px] rounded-md border"
                src="https://www.openstreetmap.org/export/embed.html?bbox=11.3415,44.4912,11.3515,44.4962&layer=mapnik"
                style={{ border: 0 }}
                allowFullScreen
              ></iframe>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
