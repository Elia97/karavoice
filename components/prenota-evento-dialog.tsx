"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

interface Evento {
  id: string;
  titolo: string;
  descrizione: string;
  categoria: string;
  immagine: string;
  data: string;
  oraInizio: string;
  oraFine: string;
  luogo: string;
}

interface User {
  id: string;
  nome: string;
  email: string;
  telefono: string;
}

// Modificare l'hook useAuth per evitare aggiornamenti infinitas
const useAuth = () => {
  // Verifica se siamo nel browser
  const isClient = typeof window !== "undefined";

  // Usiamo useState per mantenere lo stato di autenticazione
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Usiamo useEffect per verificare l'autenticazione solo una volta al montaggio del componente
  useEffect(() => {
    if (isClient) {
      const authStatus = localStorage.getItem("isAuthenticated") === "true";
      setIsAuthenticated(authStatus);

      if (authStatus) {
        setUser({
          id: "user123",
          nome: "Mario Rossi",
          email: "mario.rossi@example.com",
          telefono: "3331234567",
        });
      }
    }
  }, [isClient]); // Si esegue solo quando cambia isClient (praticamente solo al montaggio)

  // Funzione per simulare il login
  const login = useCallback(() => {
    if (isClient) {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      setUser({
        id: "user123",
        nome: "Mario Rossi",
        email: "mario.rossi@example.com",
        telefono: "3331234567",
      });
    }
  }, [isClient]);

  // Funzione per simulare il logout
  const logout = useCallback(() => {
    if (isClient) {
      localStorage.setItem("isAuthenticated", "false");
      setIsAuthenticated(false);
      setUser(null);
    }
  }, [isClient]);

  return { isAuthenticated, user, login, logout };
};

export function PrenotaEventoDialog({ evento }: { evento: Evento }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    numPartecipanti: "1",
    note: "",
    pagamento: "carta",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Precompila i dati dell'utente se autenticato
  useEffect(() => {
    if (isAuthenticated && user) {
      setFormData((prevData) => ({
        ...prevData,
        nome: user.nome,
        email: user.email,
        telefono: user.telefono || prevData.telefono,
      }));
    }
  }, [isAuthenticated, user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, pagamento: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulazione di invio al server
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      toast({
        title: "Prenotazione confermata",
        description: `Grazie per aver prenotato "${evento.titolo}". Riceverai un'email di conferma a breve.`,
      });
      setFormData((prev) => ({
        ...prev,
        numPartecipanti: "1",
        note: "",
        pagamento: "carta",
      }));
    }, 1500);
  };

  const handleDialogOpen = (open: boolean) => {
    // Se il dialogo viene aperto e l'utente non è autenticato, mostra il prompt di login
    if (open && !isAuthenticated) {
      setShowLoginPrompt(true);
    } else {
      setShowLoginPrompt(false);
    }
    setIsOpen(open);
  };

  const redirectToLogin = () => {
    setIsOpen(false);
    router.push(
      "/auth?returnUrl=" + encodeURIComponent(window.location.pathname)
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogOpen}>
      <DialogTrigger asChild>
        <Button className="w-full mt-4">Prenota Ora</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        {showLoginPrompt ? (
          <>
            <DialogHeader>
              <DialogTitle>Accesso richiesto</DialogTitle>
              <DialogDescription>
                Per prenotare "{evento.titolo}" è necessario accedere al tuo
                account o registrarti.
              </DialogDescription>
            </DialogHeader>
            <div className="py-6 flex flex-col items-center">
              <p className="text-center mb-6">
                La prenotazione è riservata agli utenti registrati. Accedi al
                tuo account per continuare.
              </p>
              <div className="flex gap-4">
                <Button onClick={redirectToLogin}>Accedi</Button>
                <Button variant="outline" onClick={() => setIsOpen(false)}>
                  Annulla
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Prenota Evento</DialogTitle>
              <DialogDescription>
                Compila il form per prenotare "{evento.titolo}" in data{" "}
                {evento.data}.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                {/* Campi utente precompilati e disabilitati */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="nome" className="text-right">
                    Nome
                  </Label>
                  <Input
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className="col-span-3 bg-muted"
                    disabled
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="col-span-3 bg-muted"
                    disabled
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="telefono" className="text-right">
                    Telefono
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="col-span-3 bg-muted"
                    disabled
                  />
                </div>

                {/* Campi per la prenotazione */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="numPartecipanti" className="text-right">
                    Partecipanti
                  </Label>
                  <Select
                    value={formData.numPartecipanti}
                    onValueChange={(value) =>
                      handleSelectChange("numPartecipanti", value)
                    }
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Seleziona il numero di partecipanti" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "persona" : "persone"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="note" className="text-right">
                    Note
                  </Label>
                  <Textarea
                    id="note"
                    name="note"
                    value={formData.note}
                    onChange={handleChange}
                    placeholder="Eventuali richieste speciali..."
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                  <Label className="text-right pt-2">Pagamento</Label>
                  <RadioGroup
                    value={formData.pagamento}
                    onValueChange={handleRadioChange}
                    className="col-span-3 space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="carta" id="carta" />
                      <Label htmlFor="carta">Carta di credito/debito</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Label htmlFor="paypal">PayPal</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bonifico" id="bonifico" />
                      <Label htmlFor="bonifico">Bonifico bancario</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                >
                  Annulla
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Prenotazione in corso...</span>
                      <span className="animate-spin">⏳</span>
                    </>
                  ) : (
                    "Conferma prenotazione"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
