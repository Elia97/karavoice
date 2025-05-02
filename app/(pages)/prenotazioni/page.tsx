"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Calendar,
  CalendarDays,
  ChevronRight,
  Clock,
  Loader2,
  MapPin,
  Search,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

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

interface Prenotazione {
  id: string;
  eventoId: number;
  titolo: string;
  data: string;
  orario: string;
  luogo: string;
  stato: string;
  numPartecipanti: number;
  dataPrenotazione: string;
  codicePrenotazione: string;
  immagine: string;
  pagamento: {
    metodo: string;
    importo: string;
    stato: string;
  };
}

// Dati di esempio per le prenotazioni
const prenotazioniEsempio: Prenotazione[] = [
  {
    id: "pren-001",
    eventoId: 1,
    titolo: "Festival della Musica",
    data: "15 Giugno 2024",
    orario: "16:00",
    luogo: "Piazza Maggiore, Bologna",
    stato: "confermata",
    numPartecipanti: 2,
    dataPrenotazione: "10 Maggio 2024",
    codicePrenotazione: "FM2024-001",
    immagine: "/placeholder.svg?height=200&width=400",
    pagamento: {
      metodo: "carta",
      importo: "€50.00",
      stato: "completato",
    },
  },
  {
    id: "pren-002",
    eventoId: 3,
    titolo: "Conferenza Tech Innovation",
    data: "5 Luglio 2024",
    orario: "09:00",
    luogo: "Centro Congressi, Roma",
    stato: "confermata",
    numPartecipanti: 1,
    dataPrenotazione: "15 Maggio 2024",
    codicePrenotazione: "TI2024-045",
    immagine: "/placeholder.svg?height=200&width=400",
    pagamento: {
      metodo: "paypal",
      importo: "€120.00",
      stato: "completato",
    },
  },
  {
    id: "pren-003",
    eventoId: 5,
    titolo: "Maratona Cittadina",
    data: "21 Luglio 2024",
    orario: "08:00",
    luogo: "Piazza Duomo, Firenze",
    stato: "in attesa",
    numPartecipanti: 1,
    dataPrenotazione: "20 Maggio 2024",
    codicePrenotazione: "MC2024-189",
    immagine: "/placeholder.svg?height=200&width=400",
    pagamento: {
      metodo: "bonifico",
      importo: "€30.00",
      stato: "in attesa",
    },
  },
  {
    id: "pren-004",
    eventoId: 2,
    titolo: "Mostra d'Arte Contemporanea",
    data: "25 Giugno 2024",
    orario: "10:00",
    luogo: "Galleria Moderna, Milano",
    stato: "confermata",
    numPartecipanti: 3,
    dataPrenotazione: "18 Maggio 2024",
    codicePrenotazione: "MAC2024-076",
    immagine: "/placeholder.svg?height=200&width=400",
    pagamento: {
      metodo: "carta",
      importo: "€36.00",
      stato: "completato",
    },
  },
  {
    id: "pren-005",
    eventoId: 6,
    titolo: "Festival del Cinema",
    data: "3 Agosto 2024",
    orario: "20:30",
    luogo: "Cinema Centrale, Venezia",
    stato: "confermata",
    numPartecipanti: 2,
    dataPrenotazione: "22 Maggio 2024",
    codicePrenotazione: "FC2024-112",
    immagine: "/placeholder.svg?height=200&width=400",
    pagamento: {
      metodo: "carta",
      importo: "€24.00",
      stato: "completato",
    },
  },
];

// Prenotazioni passate (eventi già avvenuti)
const prenotazioniPassate: Prenotazione[] = [
  {
    id: "pren-006",
    eventoId: 4,
    titolo: "Sagra del Tartufo",
    data: "14 Maggio 2024",
    orario: "19:00",
    luogo: "Piazza del Popolo, Alba",
    stato: "completata",
    numPartecipanti: 4,
    dataPrenotazione: "1 Maggio 2024",
    codicePrenotazione: "ST2024-067",
    immagine: "/placeholder.svg?height=200&width=400",
    pagamento: {
      metodo: "carta",
      importo: "€0.00 (Ingresso gratuito)",
      stato: "completato",
    },
  },
  {
    id: "pren-007",
    eventoId: 7,
    titolo: "Concerto Jazz al Tramonto",
    data: "5 Maggio 2024",
    orario: "18:30",
    luogo: "Parco della Musica, Roma",
    stato: "completata",
    numPartecipanti: 2,
    dataPrenotazione: "20 Aprile 2024",
    codicePrenotazione: "JT2024-034",
    immagine: "/placeholder.svg?height=200&width=400",
    pagamento: {
      metodo: "paypal",
      importo: "€40.00",
      stato: "completato",
    },
  },
];

export default function PrenotazioniPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState("future");
  const [searchQuery, setSearchQuery] = useState("");
  const [prenotazioni, setPrenotazioni] = useState<Prenotazione[]>([]);
  const [prenotazioniStorico, setPrenotazioniStorico] = useState<
    Prenotazione[]
  >([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Carica i dati delle prenotazioni
  useEffect(() => {
    if (isAuthenticated) {
      // Simulazione di caricamento dati dal server
      setTimeout(() => {
        setPrenotazioni(prenotazioniEsempio);
        setPrenotazioniStorico(prenotazioniPassate);
        setIsLoaded(true);
      }, 1000);
    }
  }, [isAuthenticated]);

  // Reindirizza alla pagina di login se l'utente non è autenticato
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth?returnUrl=/prenotazioni");
    }
  }, [isLoading, isAuthenticated, router]);

  // Filtra le prenotazioni in base alla ricerca
  const filteredPrenotazioni = prenotazioni.filter(
    (pren) =>
      pren.titolo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pren.codicePrenotazione.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredStorico = prenotazioniStorico.filter(
    (pren) =>
      pren.titolo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pren.codicePrenotazione.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Funzione per annullare una prenotazione
  const handleCancellaPrenotazione = (id: string) => {
    // Simulazione di chiamata API per cancellare la prenotazione
    setPrenotazioni((prev) => prev.filter((pren) => pren.id !== id));

    toast.success("Prenotazione annullata con successo!");
  };

  // Mostra un loader mentre verifichiamo l'autenticazione
  if (isLoading || !isLoaded) {
    return (
      <div className="container max-w-4xl mx-auto py-12 px-4 flex justify-center items-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Se l'utente non è autenticato, non mostrare nulla (il reindirizzamento avverrà tramite useEffect)
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Le mie prenotazioni</h1>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Cerca per nome evento o codice prenotazione..."
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

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 mb-8">
          <TabsTrigger value="future">Prenotazioni future</TabsTrigger>
          <TabsTrigger value="passate">Storico prenotazioni</TabsTrigger>
        </TabsList>

        {/* Prenotazioni future */}
        <TabsContent value="future">
          {filteredPrenotazioni.length === 0 ? (
            <div className="text-center py-12">
              {searchQuery ? (
                <>
                  <p className="text-lg mb-2">
                    Nessuna prenotazione trovata per &quot;{searchQuery}&quot;
                  </p>
                  <p className="text-muted-foreground">
                    Prova a cercare con un altro termine o codice
                  </p>
                </>
              ) : (
                <>
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg mb-2">Non hai prenotazioni future</p>
                  <p className="text-muted-foreground mb-6">
                    Esplora gli eventi disponibili e prenota subito!
                  </p>
                  <Link href="/eventi">
                    <Button>Scopri eventi</Button>
                  </Link>
                </>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPrenotazioni.map((prenotazione) => (
                <Card key={prenotazione.id} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      import Image from &quot;next/image&quot;;
                      <Image
                        src={prenotazione.immagine || "/placeholder.svg"}
                        alt={prenotazione.titolo}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover aspect-video md:aspect-square"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-xl font-bold">
                          {prenotazione.titolo}
                        </h2>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            prenotazione.stato === "confermata"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {prenotazione.stato === "confermata"
                            ? "Confermata"
                            : "In attesa"}
                        </span>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <CalendarDays className="mr-2 h-4 w-4" />
                          {prenotazione.data}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-2 h-4 w-4" />
                          {prenotazione.orario}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4" />
                          {prenotazione.luogo}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="font-medium">Codice:</span>{" "}
                          {prenotazione.codicePrenotazione}
                        </div>
                        <div>
                          <span className="font-medium">Partecipanti:</span>{" "}
                          {prenotazione.numPartecipanti}
                        </div>
                        <div>
                          <span className="font-medium">Pagamento:</span>{" "}
                          {prenotazione.pagamento.importo}
                        </div>
                        <div>
                          <span className="font-medium">Metodo:</span>{" "}
                          {prenotazione.pagamento.metodo}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Link href={`/eventi/${prenotazione.eventoId}`}>
                          <Button variant="outline" size="sm" className="gap-1">
                            Dettagli evento
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            handleCancellaPrenotazione(prenotazione.id)
                          }
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          Annulla prenotazione
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        {/* Storico prenotazioni */}
        <TabsContent value="passate">
          {filteredStorico.length === 0 ? (
            <div className="text-center py-12">
              {searchQuery ? (
                <>
                  <p className="text-lg mb-2">
                    Nessuna prenotazione trovata per &quot;{searchQuery}&quot;
                  </p>
                  <p className="text-muted-foreground">
                    Prova a cercare con un altro termine o codice
                  </p>
                </>
              ) : (
                <>
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg mb-2">Non hai prenotazioni passate</p>
                  <p className="text-muted-foreground">
                    Il tuo storico prenotazioni apparirà qui
                  </p>
                </>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredStorico.map((prenotazione) => (
                <Card key={prenotazione.id} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <Image
                        src={prenotazione.immagine || "/placeholder.svg"}
                        alt={prenotazione.titolo}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover aspect-video md:aspect-square"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h2 className="text-xl font-bold">
                          {prenotazione.titolo}
                        </h2>
                        <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                          Completata
                        </span>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <CalendarDays className="mr-2 h-4 w-4" />
                          {prenotazione.data}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-2 h-4 w-4" />
                          {prenotazione.orario}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4" />
                          {prenotazione.luogo}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <span className="font-medium">Codice:</span>{" "}
                          {prenotazione.codicePrenotazione}
                        </div>
                        <div>
                          <span className="font-medium">Partecipanti:</span>{" "}
                          {prenotazione.numPartecipanti}
                        </div>
                        <div>
                          <span className="font-medium">Pagamento:</span>{" "}
                          {prenotazione.pagamento.importo}
                        </div>
                        <div>
                          <span className="font-medium">Metodo:</span>{" "}
                          {prenotazione.pagamento.metodo}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Link href={`/eventi/${prenotazione.eventoId}`}>
                          <Button variant="outline" size="sm" className="gap-1">
                            Dettagli evento
                            <ChevronRight className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
