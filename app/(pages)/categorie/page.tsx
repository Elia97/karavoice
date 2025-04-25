import { Search } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Dati di esempio per le categorie
const categorie = [
  {
    nome: "Musica",
    icona: "🎵",
    count: 24,
    descrizione:
      "Concerti, festival, spettacoli dal vivo e molto altro. Scopri gli eventi musicali più interessanti in tutta Italia.",
    immagine: "/placeholder.svg?height=300&width=600",
    sottocategorie: [
      "Rock",
      "Jazz",
      "Classica",
      "Pop",
      "Elettronica",
      "Hip Hop",
    ],
  },
  {
    nome: "Arte",
    icona: "🎨",
    count: 18,
    descrizione:
      "Mostre, esposizioni, vernissage e laboratori artistici. Esplora il mondo dell'arte in tutte le sue forme.",
    immagine: "/placeholder.svg?height=300&width=600",
    sottocategorie: [
      "Pittura",
      "Scultura",
      "Fotografia",
      "Arte Contemporanea",
      "Installazioni",
    ],
  },
  {
    nome: "Tecnologia",
    icona: "💻",
    count: 15,
    descrizione:
      "Conferenze, workshop, hackathon e incontri dedicati all'innovazione e alle nuove tecnologie.",
    immagine: "/placeholder.svg?height=300&width=600",
    sottocategorie: [
      "AI",
      "Blockchain",
      "Sviluppo Web",
      "Startup",
      "IoT",
      "Gaming",
    ],
  },
  {
    nome: "Gastronomia",
    icona: "🍽️",
    count: 22,
    descrizione:
      "Sagre, degustazioni, festival gastronomici e corsi di cucina. Scopri i sapori e le tradizioni culinarie italiane.",
    immagine: "/placeholder.svg?height=300&width=600",
    sottocategorie: [
      "Vino",
      "Street Food",
      "Cucina Regionale",
      "Pasticceria",
      "Corsi di Cucina",
    ],
  },
  {
    nome: "Sport",
    icona: "🏃",
    count: 20,
    descrizione:
      "Competizioni, tornei, maratone e attività sportive per tutti i livelli. Partecipa o assisti agli eventi sportivi.",
    immagine: "/placeholder.svg?height=300&width=600",
    sottocategorie: [
      "Calcio",
      "Running",
      "Ciclismo",
      "Yoga",
      "Basket",
      "Tennis",
    ],
  },
  {
    nome: "Cinema",
    icona: "🎬",
    count: 12,
    descrizione:
      "Festival cinematografici, proiezioni speciali, anteprime e incontri con registi e attori.",
    immagine: "/placeholder.svg?height=300&width=600",
    sottocategorie: [
      "Film Festival",
      "Documentari",
      "Cinema Indipendente",
      "Anteprime",
      "Retrospettive",
    ],
  },
  {
    nome: "Teatro",
    icona: "🎭",
    count: 16,
    descrizione:
      "Spettacoli teatrali, commedie, drammi, musical e performance dal vivo sui palcoscenici di tutta Italia.",
    immagine: "/placeholder.svg?height=300&width=600",
    sottocategorie: ["Commedia", "Dramma", "Musical", "Opera", "Danza"],
  },
  {
    nome: "Formazione",
    icona: "📚",
    count: 14,
    descrizione:
      "Corsi, seminari, workshop e conferenze per ampliare le tue conoscenze e sviluppare nuove competenze.",
    immagine: "/placeholder.svg?height=300&width=600",
    sottocategorie: [
      "Lingue",
      "Business",
      "Marketing",
      "Sviluppo Personale",
      "Creatività",
    ],
  },
];

export default async function CategoriePage() {
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await wait(3000);
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Esplora le Categorie</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Trova eventi che corrispondono ai tuoi interessi tra le nostre diverse
          categorie
        </p>
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Cerca categorie..."
            className="pl-10 h-12"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categorie.map((categoria) => (
          <Card
            key={categoria.nome}
            className="overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative h-48">
              <img
                src={categoria.immagine || "/placeholder.svg"}
                alt={categoria.nome}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{categoria.icona}</span>
                    <h2 className="text-2xl font-bold">{categoria.nome}</h2>
                  </div>
                  <p className="text-white/80 text-sm">
                    {categoria.count} eventi
                  </p>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                {categoria.descrizione}
              </p>
              <div className="mb-4">
                <h3 className="text-sm font-medium mb-2">Sottocategorie:</h3>
                <div className="flex flex-wrap gap-2">
                  {categoria.sottocategorie.map((sottocategoria) => (
                    <Link
                      key={sottocategoria}
                      href={`/eventi?categoria=${categoria.nome.toLowerCase()}&sottocategoria=${sottocategoria.toLowerCase()}`}
                    >
                      <span className="inline-block px-3 py-1 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors">
                        {sottocategoria}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
              <Link href={`/eventi?categoria=${categoria.nome.toLowerCase()}`}>
                <Button className="w-full">Esplora {categoria.nome}</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
