import { CalendarDays, ChevronRight, User } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Dati di esempio per gli articoli del blog
const articoli = [
  {
    id: 1,
    titolo: "Come organizzare un evento di successo: guida completa",
    estratto:
      "Scopri i segreti per organizzare un evento memorabile, dalla pianificazione alla promozione fino alla gestione del giorno stesso.",
    data: "15 Maggio 2024",
    autore: "Marco Bianchi",
    categoria: "Guide",
    immagine: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 2,
    titolo: "I 10 festival musicali da non perdere quest'estate in Italia",
    estratto:
      "Una selezione dei migliori festival musicali che animeranno l'estate italiana, con lineup, location e consigli pratici.",
    data: "2 Maggio 2024",
    autore: "Laura Rossi",
    categoria: "Musica",
    immagine: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 3,
    titolo: "Food Festival: le sagre gastronomiche più interessanti del 2024",
    estratto:
      "Un viaggio attraverso i sapori e le tradizioni culinarie italiane, alla scoperta delle sagre e dei festival gastronomici da non perdere.",
    data: "20 Aprile 2024",
    autore: "Giovanni Verdi",
    categoria: "Gastronomia",
    immagine: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 4,
    titolo: "Come scegliere l'evento giusto per te: consigli e suggerimenti",
    estratto:
      "Una guida pratica per aiutarti a scegliere gli eventi più adatti ai tuoi interessi, al tuo budget e alle tue esigenze.",
    data: "10 Aprile 2024",
    autore: "Giulia Neri",
    categoria: "Consigli",
    immagine: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 5,
    titolo: "Le mostre d'arte più importanti del 2024",
    estratto:
      "Un calendario delle esposizioni artistiche più significative dell'anno, dai grandi musei alle gallerie indipendenti.",
    data: "1 Aprile 2024",
    autore: "Alessandro Belli",
    categoria: "Arte",
    immagine: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 6,
    titolo: "Eventi tech: le conferenze e gli hackathon da segnare in agenda",
    estratto:
      "Una panoramica degli eventi tecnologici più interessanti dell'anno, perfetti per networking e aggiornamento professionale.",
    data: "25 Marzo 2024",
    autore: "Marco Bianchi",
    categoria: "Tecnologia",
    immagine: "/placeholder.svg?height=300&width=600",
  },
];

// Dati di esempio per le categorie
const categorie = [
  { nome: "Guide", count: 8 },
  { nome: "Musica", count: 12 },
  { nome: "Gastronomia", count: 7 },
  { nome: "Consigli", count: 10 },
  { nome: "Arte", count: 6 },
  { nome: "Tecnologia", count: 9 },
];

export default async function BlogPage() {
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await wait(3000);

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Scopri le ultime novità, consigli e guide sul mondo degli eventi
        </p>
        <div className="relative max-w-xl mx-auto">
          <Input
            type="search"
            placeholder="Cerca nel blog..."
            className="h-12"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Articoli principali */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 gap-8">
            {articoli.map((articolo) => (
              <Card key={articolo.id} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={articolo.immagine || "/placeholder.svg"}
                      alt={articolo.titolo}
                      className="w-full h-full object-cover aspect-video md:aspect-square"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {articolo.categoria}
                        </span>
                      </div>
                      <Link
                        href={`/blog/${articolo.id}`}
                        className="hover:underline"
                      >
                        <h2 className="text-xl font-bold">{articolo.titolo}</h2>
                      </Link>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {articolo.estratto}
                      </p>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="mr-1 h-4 w-4" />
                        <span className="mr-4">{articolo.autore}</span>
                        <CalendarDays className="mr-1 h-4 w-4" />
                        <span>{articolo.data}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/blog/${articolo.id}`}>
                        <Button variant="ghost" className="p-0 h-auto">
                          Leggi l'articolo
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline">Carica altri articoli</Button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Categorie */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold">Categorie</h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {categorie.map((categoria) => (
                  <li key={categoria.nome}>
                    <Link
                      href={`/blog?categoria=${categoria.nome.toLowerCase()}`}
                      className="flex justify-between items-center py-2 hover:text-primary transition-colors"
                    >
                      <span>{categoria.nome}</span>
                      <span className="text-sm text-muted-foreground">
                        {categoria.count}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Articoli recenti */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold">Articoli Recenti</h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {articoli.slice(0, 3).map((articolo) => (
                  <li key={articolo.id} className="flex gap-3">
                    <img
                      src={articolo.immagine || "/placeholder.svg"}
                      alt={articolo.titolo}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <Link
                        href={`/blog/${articolo.id}`}
                        className="font-medium hover:text-primary transition-colors line-clamp-2"
                      >
                        {articolo.titolo}
                      </Link>
                      <p className="text-xs text-muted-foreground">
                        {articolo.data}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Newsletter */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold">Iscriviti alla Newsletter</h3>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Ricevi aggiornamenti sui nuovi articoli e consigli esclusivi
                direttamente nella tua casella di posta.
              </p>
              <div className="space-y-2">
                <Input placeholder="La tua email" type="email" />
                <Button className="w-full">Iscriviti</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
