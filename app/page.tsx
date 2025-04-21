import { ArrowRight, Calendar, CalendarDays, MapPin, Search, Star, Users } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// Dati di esempio per gli eventi in evidenza
const eventiInEvidenza = [
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
    id: 3,
    titolo: "Conferenza Tech Innovation",
    descrizione: "Scopri le ultime tendenze nel mondo della tecnologia e dell'innovazione.",
    data: "5-6 Luglio 2024",
    luogo: "Centro Congressi, Roma",
    categoria: "tecnologia",
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
]

// Dati di esempio per le categorie
const categorie = [
  { nome: "Musica", icona: "🎵", count: 24 },
  { nome: "Arte", icona: "🎨", count: 18 },
  { nome: "Tecnologia", icona: "💻", count: 15 },
  { nome: "Gastronomia", icona: "🍽️", count: 22 },
  { nome: "Sport", icona: "🏃", count: 20 },
  { nome: "Cinema", icona: "🎬", count: 12 },
]

// Dati di esempio per le testimonianze
const testimonianze = [
  {
    nome: "Marco Rossi",
    ruolo: "Organizzatore eventi",
    testo: "Grazie a questa piattaforma ho potuto promuovere i miei eventi raggiungendo un pubblico molto più ampio.",
    avatar: "/placeholder.svg?height=50&width=50",
    valutazione: 5,
  },
  {
    nome: "Laura Bianchi",
    ruolo: "Appassionata di eventi culturali",
    testo:
      "Finalmente un'app che mi permette di trovare facilmente tutti gli eventi nella mia città. Interfaccia intuitiva e informazioni sempre aggiornate.",
    avatar: "/placeholder.svg?height=50&width=50",
    valutazione: 4,
  },
  {
    nome: "Giovanni Verdi",
    ruolo: "Turista",
    testo:
      "Ho scoperto eventi locali interessanti durante il mio viaggio in Italia che non avrei mai trovato altrimenti. Ottimo servizio!",
    avatar: "/placeholder.svg?height=50&width=50",
    valutazione: 5,
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
          <img
            src="/placeholder.svg?height=600&width=1200"
            alt="Eventi background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-20 text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Scopri Eventi Straordinari</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Trova e partecipa agli eventi più interessanti nella tua città e in tutta Italia
          </p>
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-2 md:p-3">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-5 w-5 text-white/70" />
                <Input
                  type="search"
                  placeholder="Cerca eventi..."
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/70 h-12"
                />
              </div>
              <Button className="h-12 px-8">Cerca</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categorie Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Esplora per Categoria</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trova eventi che corrispondono ai tuoi interessi tra le nostre diverse categorie
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categorie.map((categoria) => (
              <Link href={`/eventi?categoria=${categoria.nome.toLowerCase()}`} key={categoria.nome}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-4xl mb-3">{categoria.icona}</div>
                    <h3 className="font-medium mb-1">{categoria.nome}</h3>
                    <p className="text-sm text-muted-foreground">{categoria.count} eventi</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Eventi in Evidenza Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Eventi in Evidenza</h2>
              <p className="text-muted-foreground">Gli eventi più popolari da non perdere</p>
            </div>
            <Link href="/eventi">
              <Button variant="outline" className="gap-2">
                Tutti gli eventi
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventiInEvidenza.map((evento) => (
              <Card key={evento.id} className="overflow-hidden h-full hover:shadow-md transition-shadow">
                <img
                  src={evento.immagine || "/placeholder.svg"}
                  alt={evento.titolo}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold">{evento.titolo}</h3>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {evento.categoria}
                    </span>
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
            ))}
          </div>
        </div>
      </section>

      {/* Funzionalità Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Perché Scegliere la Nostra Piattaforma</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Scopri tutti i vantaggi che offriamo per rendere la tua esperienza con gli eventi semplice e piacevole
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
                  La nostra piattaforma è sempre aggiornata con gli ultimi eventi in programma in tutta Italia.
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
                  Unisciti a una community di appassionati di eventi e condividi le tue esperienze con altri utenti.
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
                  Leggi recensioni autentiche di altri partecipanti per scegliere gli eventi migliori per te.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonianze Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cosa Dicono di Noi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Scopri le esperienze di chi ha già utilizzato la nostra piattaforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonianze.map((testimonianza, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <img
                        src={testimonianza.avatar || "/placeholder.svg"}
                        alt={testimonianza.nome}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonianza.nome}</h4>
                      <p className="text-sm text-muted-foreground">{testimonianza.ruolo}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonianza.valutazione ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4 text-center mx-auto">
          <h2 className="text-3xl font-bold mb-4">Pronto a Scoprire Nuovi Eventi?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Registrati gratuitamente e inizia subito a esplorare gli eventi più interessanti vicino a te
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Registrati Ora
            </Button>
            <Link href="/eventi">
              <Button variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white/10">
                Esplora Eventi
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
