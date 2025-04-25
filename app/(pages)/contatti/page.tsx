"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    oggetto: "informazioni",
    messaggio: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, oggetto: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form inviato:", formData);
    toast({
      title: "Messaggio inviato",
      description:
        "Grazie per averci contattato. Ti risponderemo al più presto.",
    });
    setFormData({
      nome: "",
      email: "",
      oggetto: "informazioni",
      messaggio: "",
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contattaci</h1>
        <p className="text-muted-foreground text-lg">
          Hai domande, suggerimenti o vuoi collaborare con noi? Siamo qui per
          aiutarti.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Informazioni di contatto */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">
                  Informazioni di Contatto
                </h3>
                <p className="text-sm text-muted-foreground">
                  Puoi contattarci utilizzando uno dei seguenti metodi o
                  compilando il modulo.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <p className="text-sm text-muted-foreground">
                      info@eventiapp.it
                    </p>
                    <p className="text-sm text-muted-foreground">
                      supporto@eventiapp.it
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Telefono</h4>
                    <p className="text-sm text-muted-foreground">
                      +39 123 456 7890
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Lun-Ven: 9:00-18:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Indirizzo</h4>
                    <p className="text-sm text-muted-foreground">
                      Via degli Eventi 123
                    </p>
                    <p className="text-sm text-muted-foreground">
                      00100 Roma, Italia
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-4">Sede Principale</h3>
              <div className="aspect-video w-full rounded-md overflow-hidden">
                <iframe
                  title="Mappa sede"
                  className="w-full h-full border-0"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=12.4763,41.9023,12.4863,41.9123&layer=mapnik"
                  style={{ border: 0 }}
                  allowFullScreen
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Modulo di contatto */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-6">Inviaci un Messaggio</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome e Cognome</Label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      placeholder="Inserisci il tuo nome"
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
                      placeholder="Inserisci la tua email"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Oggetto</Label>
                  <RadioGroup
                    value={formData.oggetto}
                    onValueChange={handleRadioChange}
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="informazioni" id="informazioni" />
                      <Label htmlFor="informazioni" className="cursor-pointer">
                        Richiesta informazioni
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="supporto" id="supporto" />
                      <Label htmlFor="supporto" className="cursor-pointer">
                        Supporto tecnico
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="partnership" id="partnership" />
                      <Label htmlFor="partnership" className="cursor-pointer">
                        Proposta di partnership
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="altro" id="altro" />
                      <Label htmlFor="altro" className="cursor-pointer">
                        Altro
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="messaggio">Messaggio</Label>
                  <Textarea
                    id="messaggio"
                    name="messaggio"
                    value={formData.messaggio}
                    onChange={handleChange}
                    placeholder="Scrivi il tuo messaggio..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" className="w-full md:w-auto">
                  <Send className="mr-2 h-4 w-4" />
                  Invia Messaggio
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Domande Frequenti
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Come posso pubblicare un evento?
              </h3>
              <p className="text-muted-foreground">
                Per pubblicare un evento, devi registrarti come organizzatore.
                Dopo la registrazione, potrai accedere al pannello di controllo
                e creare il tuo primo evento.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Come posso modificare la mia prenotazione?
              </h3>
              <p className="text-muted-foreground">
                Puoi modificare la tua prenotazione accedendo al tuo account,
                nella sezione "Le mie prenotazioni", fino a 48 ore prima
                dell'evento.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Quali sono i metodi di pagamento accettati?
              </h3>
              <p className="text-muted-foreground">
                Accettiamo pagamenti con carte di credito/debito (Visa,
                Mastercard, American Express), PayPal e bonifico bancario per
                alcuni eventi.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Come posso ricevere assistenza?
              </h3>
              <p className="text-muted-foreground">
                Puoi contattarci via email a supporto@eventiapp.it,
                telefonicamente al numero +39 123 456 7890 o utilizzando il
                modulo di contatto in questa pagina.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
