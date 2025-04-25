"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Camera, Loader2, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

interface User {
  id: string;
  nome: string;
  email: string;
  telefono: string;
  indirizzo: string;
  bio: string;
  avatar: string;
  dataNascita: string;
  preferenze: {
    categorie: string[];
    notifiche: boolean;
    newsletter: boolean;
  };
}

// Hook per verificare l'autenticazione
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verifica se l'utente è autenticato
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);

    if (authStatus) {
      // Dati utente di esempio (in un'app reale verrebbero dal backend)
      setUser({
        id: "user123",
        nome: "Mario Rossi",
        email: "mario.rossi@example.com",
        telefono: "3331234567",
        indirizzo: "Via Roma 123, 00100 Roma",
        bio: "Appassionato di eventi culturali e concerti. Mi piace scoprire nuove esperienze e conoscere persone interessanti.",
        avatar: "/placeholder.svg?height=100&width=100",
        dataNascita: "1985-06-15",
        preferenze: {
          categorie: ["musica", "arte", "tecnologia"],
          notifiche: true,
          newsletter: true,
        },
      });
    }

    setIsLoading(false);
  }, []);

  return { isAuthenticated, user, isLoading };
};

export default function ProfiloPage() {
  const router = useRouter();
  const { isAuthenticated, user, isLoading } = useAuth();
  const [activeTab, setActiveTab] = useState("informazioni");
  const [isSaving, setIsSaving] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    indirizzo: "",
    bio: "",
    dataNascita: "",
    notifiche: true,
    newsletter: true,
  });

  // Popola il form con i dati dell'utente quando sono disponibili
  useEffect(() => {
    if (user) {
      setFormData({
        nome: user.nome || "",
        email: user.email || "",
        telefono: user.telefono || "",
        indirizzo: user.indirizzo || "",
        bio: user.bio || "",
        dataNascita: user.dataNascita || "",
        notifiche:
          user.preferenze?.notifiche !== undefined
            ? user.preferenze.notifiche
            : true,
        newsletter:
          user.preferenze?.newsletter !== undefined
            ? user.preferenze.newsletter
            : true,
      });
    }
  }, [user]);

  // Reindirizza alla pagina di login se l'utente non è autenticato
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/auth?returnUrl=/profilo");
    }
  }, [isLoading, isAuthenticated, router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    // Simulazione di salvataggio
    setTimeout(() => {
      setIsSaving(false);
      toast({
        title: "Profilo aggiornato",
        description:
          "Le modifiche al tuo profilo sono state salvate con successo.",
      });
    }, 1500);
  };

  // Mostra un loader mentre verifichiamo l'autenticazione
  if (isLoading) {
    return (
      <div className="container max-w-4xl mx-auto py-12 px-4 flex justify-center items-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Se l'utente non è autenticato, non mostrare nulla (il reindirizzamento avverrà tramite useEffect)
  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Il mio profilo</h1>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-3 mb-8">
          <TabsTrigger value="informazioni">Informazioni personali</TabsTrigger>
          <TabsTrigger value="preferenze">Preferenze</TabsTrigger>
          <TabsTrigger value="sicurezza">Sicurezza</TabsTrigger>
        </TabsList>

        {/* Informazioni personali */}
        <TabsContent value="informazioni">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Avatar e info rapide */}
            <Card>
              <CardContent className="pt-6 flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-background">
                    <img
                      src={
                        user.avatar || "/placeholder.svg?height=128&width=128"
                      }
                      alt={user.nome}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Button
                    size="icon"
                    className="absolute bottom-0 right-0 rounded-full h-8 w-8"
                    variant="secondary"
                  >
                    <Camera className="h-4 w-4" />
                    <span className="sr-only">Cambia immagine</span>
                  </Button>
                </div>
                <h2 className="text-xl font-bold">{user.nome}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {user.email}
                </p>
                <div className="w-full space-y-2">
                  <div className="text-sm">
                    <span className="font-medium">Membro dal:</span> Giugno 2023
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Eventi prenotati:</span> 12
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Eventi preferiti:</span> 8
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Form dati personali */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Informazioni personali</CardTitle>
                <CardDescription>
                  Aggiorna i tuoi dati personali e le informazioni di contatto
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nome">Nome e Cognome</Label>
                      <Input
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Telefono</Label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dataNascita">Data di nascita</Label>
                      <Input
                        id="dataNascita"
                        name="dataNascita"
                        type="date"
                        value={formData.dataNascita}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="indirizzo">Indirizzo</Label>
                    <Input
                      id="indirizzo"
                      name="indirizzo"
                      value={formData.indirizzo}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      placeholder="Raccontaci qualcosa di te..."
                      rows={4}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" disabled={isSaving}>
                    {isSaving ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Salvataggio in corso...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Salva modifiche
                      </>
                    )}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </div>
        </TabsContent>

        {/* Preferenze */}
        <TabsContent value="preferenze">
          <Card>
            <CardHeader>
              <CardTitle>Preferenze</CardTitle>
              <CardDescription>
                Gestisci le tue preferenze per eventi e notifiche
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">
                  Categorie di interesse
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    "Musica",
                    "Arte",
                    "Tecnologia",
                    "Gastronomia",
                    "Sport",
                    "Cinema",
                    "Teatro",
                    "Formazione",
                  ].map((categoria) => (
                    <div
                      key={categoria}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        id={`cat-${categoria.toLowerCase()}`}
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        defaultChecked={user.preferenze?.categorie?.includes(
                          categoria.toLowerCase()
                        )}
                      />
                      <Label htmlFor={`cat-${categoria.toLowerCase()}`}>
                        {categoria}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Comunicazioni</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="notifiche"
                      name="notifiche"
                      checked={formData.notifiche}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="notifiche">
                      Ricevi notifiche per eventi imminenti
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <Label htmlFor="newsletter">
                      Iscriviti alla newsletter
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Salva preferenze
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Sicurezza */}
        <TabsContent value="sicurezza">
          <Card>
            <CardHeader>
              <CardTitle>Sicurezza</CardTitle>
              <CardDescription>
                Gestisci la sicurezza del tuo account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Modifica password</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Password attuale</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">Nuova password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">
                      Conferma nuova password
                    </Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-medium mb-4">Sessioni attive</h3>
                <div className="space-y-3">
                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Questo dispositivo</p>
                        <p className="text-sm text-muted-foreground">
                          Chrome su Windows • Roma, Italia
                        </p>
                      </div>
                      <Button variant="outline" size="sm" disabled>
                        Attuale
                      </Button>
                    </div>
                  </div>
                  <div className="p-3 border rounded-md">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">iPhone 13</p>
                        <p className="text-sm text-muted-foreground">
                          Safari su iOS • Milano, Italia • 2 giorni fa
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Disconnetti
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                <Save className="mr-2 h-4 w-4" />
                Aggiorna password
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
