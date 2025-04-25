"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CalendarDays, Heart, Loader2, MapPin, Search, X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

// Hook per verificare l'autenticazione
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verifica se l'utente è autenticato
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);
    setIsLoading(false);
  }, []);

  return { isAuthenticated, isLoading };
};

interface Evento {
  id: number;
  titolo: string;
  descrizione: string;
  data: string;
  luogo: string;
  categoria: string;
  immagine: string;
  dataAggiunta: string;
}

// Dati di esempio per gli eventi preferiti
const eventiPreferitiEsempio: Evento[] = [
  {
    id: 1,
    titolo: "Festival della Musica",
    descrizione:
      "Un weekend di musica dal vivo con artisti nazionali e internazionali.",
    data: "15-17 Giugno 2024",
    luogo: "Piazza Maggiore, Bologna",
    categoria: "musica",
    immagine: "/placeholder.svg?height=200&width=400",
    dataAggiunta: "10 Maggio 2024",
  },
  {
    id: 3,
    titolo: "Conferenza Tech Innovation",
    descrizione:
      "Scopri le ultime tendenze nel mondo della tecnologia e dell'innovazione.",
    data: "5-6 Luglio 2024",
    luogo: "Centro Congressi, Roma",
    categoria: "tecnologia",
    immagine: "/placeholder.svg?height=200&width=400",
    dataAggiunta: "12 Maggio 2024",
  },
  {
    id: 5,
    titolo: "Maratona Cittadina",
    descrizione:
      "Corsa competitiva e non competitiva attraverso le vie della città.",
    data: "21 Luglio 2024",
    luogo: "Partenza da Piazza Duomo, Firenze",
    categoria: "sport",
    immagine: "/placeholder.svg?height=200&width=400",
    dataAggiunta: "15 Maggio 2024",
  },
  {
    id: 6,
    titolo: "Festival del Cinema",
    descrizione:
      "Proiezioni di film indipendenti e incontri con registi e attori.",
    data: "1-10 Agosto 2024",
    luogo: "Cinema Centrale, Venezia",
    categoria: "cinema",
    immagine: "/placeholder.svg?height=200&width=400",
    dataAggiunta: "18 Maggio 2024",
  },
  {
    id: 2,
    titolo: "Mostra d'Arte Contemporanea",
    descrizione:
      "Esposizione delle opere dei migliori artisti emergenti italiani.",
    data: "20 Giugno - 10 Luglio 2024",
    luogo: "Galleria Moderna, Milano",
    categoria: "arte",
    immagine: "/placeholder.svg?height=200&width=400",
    dataAggiunta: "20 Maggio 2024",
  },
];

export default function PreferitiPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [preferiti, setPreferiti] = useState<Evento[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [eventoToRemove, setEventoToRemove] = useState<Evento | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  // Carica i dati dei preferiti
  useEffect(() => {
    if (isAuthenticated) {
      // Simulazione di caricamento dati dal server
      setTimeout(() => {
        setPreferiti(eventiPreferitiEsempio);
        setIsLoaded(true);
      }, 1000);
    }
  }, [isAuthenticated]);

  // Reindirizza alla pagina di login se l'utente non è autenticato
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth?returnUrl=/preferiti");
    }
  }, [isLoading, isAuthenticated, router]);

  // Filtra gli eventi in base alla ricerca
  const filteredPreferiti = preferiti.filter(
    (evento) =>
      evento.titolo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evento.categoria.toLowerCase().includes(searchQuery.toLowerCase()) ||
      evento.luogo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Funzione per aprire il dialogo di conferma
  const openConfirmDialog = (evento: Evento) => {
    setEventoToRemove(evento);
    setShowConfirmDialog(true);
  };

  // Funzione per rimuovere un evento dai preferiti
  const handleRimuoviPreferito = () => {
    if (!eventoToRemove) return;

    setPreferiti((prev) =>
      prev.filter((evento) => evento.id !== eventoToRemove.id)
    );
    setShowConfirmDialog(false);
    setEventoToRemove(null);

    toast({
      title: "Evento rimosso dai preferiti",
      description: "L'evento è stato rimosso dalla tua lista dei preferiti.",
    });
  };

  const renderEventCards = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPreferiti.map((evento) => (
          <Card
            key={evento.id}
            className="overflow-hidden h-full flex flex-col"
          >
            <div className="relative">
              <img
                src={evento.immagine || "/placeholder.svg"}
                alt={evento.titolo}
                className="w-full h-48 object-cover"
              />
              <Button
                variant="destructive"
                size="icon"
                className="absolute top-2 right-2 h-8 w-8 rounded-full"
                onClick={() => openConfirmDialog(evento)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold">{evento.titolo}</h3>
                <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                  {evento.categoria}
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 flex-grow">
              <p className="text-muted-foreground line-clamp-2">
                {evento.descrizione}
              </p>
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarDays className="mr-1 h-4 w-4" />
                {evento.data}
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                {evento.luogo}
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                Aggiunto ai preferiti: {evento.dataAggiunta}
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
    );
  };

  if (isLoading || !isLoaded) {
    return (
      <div className="container max-w-4xl mx-auto py-12 px-4 flex justify-center items-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">I miei eventi preferiti</h1>

        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Cerca tra i tuoi preferiti..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7"
                onClick={() => setSearchQuery("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {filteredPreferiti.length === 0 ? (
          <div className="text-center py-12 border rounded-lg bg-muted/30">
            {searchQuery ? (
              <>
                <p className="text-lg mb-2">
                  Nessun evento trovato per "{searchQuery}"
                </p>
                <p className="text-muted-foreground">
                  Prova a cercare con un altro termine
                </p>
              </>
            ) : (
              <>
                <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg mb-2">Non hai ancora eventi preferiti</p>
                <p className="text-muted-foreground mb-6">
                  Esplora gli eventi e aggiungi quelli che ti interessano ai
                  preferiti
                </p>
                <Link href="/eventi">
                  <Button>Scopri eventi</Button>
                </Link>
              </>
            )}
          </div>
        ) : (
          renderEventCards()
        )}

        {/* Dialogo di conferma per la rimozione */}
        <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Conferma rimozione</DialogTitle>
              <DialogDescription>
                Sei sicuro di voler rimuovere "{eventoToRemove?.titolo}" dai
                tuoi preferiti?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="flex space-x-2 justify-end">
              <Button
                variant="outline"
                onClick={() => setShowConfirmDialog(false)}
              >
                Annulla
              </Button>
              <Button variant="destructive" onClick={handleRimuoviPreferito}>
                Rimuovi
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
