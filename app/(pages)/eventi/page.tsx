import { CalendarDays, Filter, MapPin, Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Evento {
  id: number,
  titolo: string,
  descrizione: string,
  data: string,
  luogo: string,
  categoria: string,
  immagine: string
}

// Dati di esempio per gli eventi
const eventi: Evento[] = [
  {
    id: 1,
    titolo: "Festival della Musica",
    descrizione: "Un weekend di musica dal vivo con artisti nazionali e internazionali.",
    data: "15-17 Giugno 2024",
    luogo: "Piazza Maggiore, Bologna",
    categoria: "musica",
    immagine: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    titolo: "Mostra d'Arte Contemporanea",
    descrizione: "Esposizione delle opere dei migliori artisti emergenti italiani.",
    data: "20 Giugno - 10 Luglio 2024",
    luogo: "Galleria Moderna, Milano",
    categoria: "arte",
    immagine: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    titolo: "Conferenza Tech",
    descrizione: "Scopri le ultime tendenze nel mondo della tecnologia e dell'innovazione.",
    data: "5-6 Luglio 2024",
    luogo: "Centro Congressi, Roma",
    categoria: "tecnologia",
    immagine: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 4,
    titolo: "Sagra del Tartufo",
    descrizione: "Degustazione di piatti a base di tartufo e prodotti locali.",
    data: "12-14 Luglio 2024",
    luogo: "Piazza del Popolo, Alba",
    categoria: "gastronomia",
    immagine: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 5,
    titolo: "Maratona Cittadina",
    descrizione: "Corsa competitiva e non competitiva attraverso le vie della città.",
    data: "21 Luglio 2024",
    luogo: "Partenza da Piazza Duomo, Firenze",
    categoria: "sport",
    immagine: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 6,
    titolo: "Festival del Cinema",
    descrizione: "Proiezioni di film indipendenti e incontri con registi e attori.",
    data: "1-10 Agosto 2024",
    luogo: "Cinema Centrale, Venezia",
    categoria: "cinema",
    immagine: "/placeholder.svg?height=200&width=400",
  },
]

export default function EventiPage() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <header className="space-y-4">
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
            <Input type="search" placeholder="Cerca eventi..." className="pl-8" />
          </div>
          <Button variant="outline" className="sm:w-auto">
            <Filter className="mr-2 h-4 w-4" />
            Filtri
          </Button>
        </div>
      </header>

      <Tabs defaultValue="tutti" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4 w-full">
          <TabsTrigger value="tutti">Tutti</TabsTrigger>
          <TabsTrigger value="musica">Musica</TabsTrigger>
          <TabsTrigger value="arte">Arte</TabsTrigger>
          <TabsTrigger value="tecnologia">Tech</TabsTrigger>
          <TabsTrigger value="gastronomia">Cibo</TabsTrigger>
          <TabsTrigger value="sport">Sport</TabsTrigger>
        </TabsList>

        <TabsContent value="tutti" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventi.map((evento) => (
              <EventoCard key={evento.id} evento={evento} />
            ))}
          </div>
        </TabsContent>

        {["musica", "arte", "tecnologia", "gastronomia", "sport"].map((categoria) => (
          <TabsContent key={categoria} value={categoria} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventi
                .filter((evento) => evento.categoria === categoria)
                .map((evento) => (
                  <EventoCard key={evento.id} evento={evento} />
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

interface EventoCardProps {
  evento: Evento;
}

function EventoCard({ evento }: EventoCardProps) {
  return (
    <Card className="overflow-hidden">
      <img src={evento.immagine || "/placeholder.svg"} alt={evento.titolo} className="w-full h-48 object-cover" />
      <CardHeader>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{evento.titolo}</h3>
          <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">{evento.categoria}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <p className="text-muted-foreground line-clamp-2">{evento.descrizione}</p>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="mr-1 h-4 w-4" />
          {evento.data}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-1 h-4 w-4" />
          {evento.luogo}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/eventi/${evento.id}`} className="w-full">
          <Button variant="default" className="w-full">
            Dettagli Evento
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
