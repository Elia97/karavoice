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
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

export default function AdminImpostazioniPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Impostazioni</h1>
        <p className="text-muted-foreground">
          Gestisci le impostazioni della piattaforma.
        </p>
      </div>

      <Tabs defaultValue="generali" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="generali">Generali</TabsTrigger>
          <TabsTrigger value="notifiche">Notifiche</TabsTrigger>
          <TabsTrigger value="pagamenti">Pagamenti</TabsTrigger>
        </TabsList>

        <TabsContent value="generali">
          <Card>
            <CardHeader>
              <CardTitle>Impostazioni Generali</CardTitle>
              <CardDescription>
                Configura le impostazioni generali della piattaforma.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="site-name">Nome del Sito</Label>
                <Input id="site-name" defaultValue="EventiApp" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="site-description">Descrizione del Sito</Label>
                <Textarea
                  id="site-description"
                  defaultValue="Trova e partecipa agli eventi più interessanti nella tua città e in tutta Italia"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email di Contatto</Label>
                <Input
                  id="contact-email"
                  type="email"
                  defaultValue="info@eventiapp.it"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="support-email">Email di Supporto</Label>
                <Input
                  id="support-email"
                  type="email"
                  defaultValue="supporto@eventiapp.it"
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Funzionalità</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="registration">Registrazione Utenti</Label>
                    <p className="text-sm text-muted-foreground">
                      Consenti agli utenti di registrarsi sul sito
                    </p>
                  </div>
                  <Switch id="registration" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="comments">Commenti</Label>
                    <p className="text-sm text-muted-foreground">
                      Consenti agli utenti di commentare gli eventi
                    </p>
                  </div>
                  <Switch id="comments" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="reviews">Recensioni</Label>
                    <p className="text-sm text-muted-foreground">
                      Consenti agli utenti di recensire gli eventi
                    </p>
                  </div>
                  <Switch id="reviews" defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salva Impostazioni</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifiche">
          <Card>
            <CardHeader>
              <CardTitle>Impostazioni Notifiche</CardTitle>
              <CardDescription>
                Configura le impostazioni per le notifiche email e push.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notifiche Email</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="new-user">Nuovi Utenti</Label>
                    <p className="text-sm text-muted-foreground">
                      Ricevi notifiche quando un nuovo utente si registra
                    </p>
                  </div>
                  <Switch id="new-user" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="new-booking">Nuove Prenotazioni</Label>
                    <p className="text-sm text-muted-foreground">
                      Ricevi notifiche per nuove prenotazioni
                    </p>
                  </div>
                  <Switch id="new-booking" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="payment-complete">
                      Pagamenti Completati
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Ricevi notifiche quando un pagamento viene completato
                    </p>
                  </div>
                  <Switch id="payment-complete" defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notifiche Utenti</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="event-reminder">Promemoria Eventi</Label>
                    <p className="text-sm text-muted-foreground">
                      Invia promemoria agli utenti prima degli eventi
                    </p>
                  </div>
                  <Switch id="event-reminder" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="marketing-emails">Email Marketing</Label>
                    <p className="text-sm text-muted-foreground">
                      Invia email promozionali agli utenti
                    </p>
                  </div>
                  <Switch id="marketing-emails" defaultChecked />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salva Impostazioni</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="pagamenti">
          <Card>
            <CardHeader>
              <CardTitle>Impostazioni Pagamenti</CardTitle>
              <CardDescription>
                Configura i metodi di pagamento e le commissioni.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Metodi di Pagamento</h3>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="credit-card">Carta di Credito/Debito</Label>
                    <p className="text-sm text-muted-foreground">
                      Abilita pagamenti con carta
                    </p>
                  </div>
                  <Switch id="credit-card" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="paypal">PayPal</Label>
                    <p className="text-sm text-muted-foreground">
                      Abilita pagamenti con PayPal
                    </p>
                  </div>
                  <Switch id="paypal" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="bank-transfer">Bonifico Bancario</Label>
                    <p className="text-sm text-muted-foreground">
                      Abilita pagamenti con bonifico bancario
                    </p>
                  </div>
                  <Switch id="bank-transfer" defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Commissioni</h3>
                <div className="space-y-2">
                  <Label htmlFor="platform-fee">
                    Commissione Piattaforma (%)
                  </Label>
                  <Input
                    id="platform-fee"
                    type="number"
                    defaultValue="5"
                    min="0"
                    max="100"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment-fee">Commissione Pagamento (%)</Label>
                  <Input
                    id="payment-fee"
                    type="number"
                    defaultValue="2.5"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salva Impostazioni</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
