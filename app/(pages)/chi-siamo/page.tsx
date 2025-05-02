import { Building, MapPin, Users } from "lucide-react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

// Dati di esempio per il team
const teamMembers = [
  {
    nome: "Marco Bianchi",
    ruolo: "CEO & Fondatore",
    bio: "Marco ha fondato EventiApp nel 2020 con l'obiettivo di creare una piattaforma che connettesse le persone attraverso eventi di qualità.",
    avatar: "/placeholder.svg?height=300&width=300",
  },
  {
    nome: "Laura Rossi",
    ruolo: "Direttore Marketing",
    bio: "Con oltre 10 anni di esperienza nel marketing digitale, Laura guida le strategie di crescita e acquisizione utenti.",
    avatar: "/placeholder.svg?height=300&width=300",
  },
  {
    nome: "Alessandro Verdi",
    ruolo: "CTO",
    bio: "Alessandro supervisiona lo sviluppo tecnologico della piattaforma, assicurando un'esperienza utente fluida e innovativa.",
    avatar: "/placeholder.svg?height=300&width=300",
  },
  {
    nome: "Giulia Neri",
    ruolo: "Responsabile Relazioni con gli Organizzatori",
    bio: "Giulia lavora a stretto contatto con gli organizzatori di eventi per garantire contenuti di qualità sulla piattaforma.",
    avatar: "/placeholder.svg?height=300&width=300",
  },
];

export default async function ChiSiamoPage() {
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await wait(3000);
  return (
    <div className="container mx-auto py-8 px-4">
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10" />
          <Image
            src="/placeholder.svg?height=400&width=1200"
            alt="Chi siamo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="relative z-20 h-full flex items-center">
          <div className="container px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Chi Siamo</h1>
              <p className="text-xl opacity-90">
                Scopri la storia e la missione di EventiApp, la piattaforma che
                connette le persone attraverso eventi straordinari
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* La Nostra Storia */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            La Nostra Storia
          </h2>
          <div className="space-y-4 text-lg">
            <p>
              EventiApp è nata nel 2020 dalla passione di un gruppo di amici che
              amavano partecipare a eventi culturali, musicali e gastronomici,
              ma che spesso trovavano difficile scoprire cosa stesse succedendo
              nella loro città.
            </p>
            <p>
              Frustrati dalla frammentazione delle informazioni e dalla mancanza
              di una piattaforma centralizzata, hanno deciso di creare
              EventiApp: un luogo dove chiunque potesse facilmente trovare,
              condividere e partecipare agli eventi più interessanti in tutta
              Italia.
            </p>
            <p>
              Da un piccolo progetto nato in un appartamento di Milano,
              EventiApp è cresciuta fino a diventare una delle principali
              piattaforme di eventi in Italia, con migliaia di utenti attivi e
              centinaia di organizzatori che utilizzano il nostro servizio per
              promuovere i loro eventi.
            </p>
          </div>
        </div>
      </section>

      {/* La Nostra Missione */}
      <section className="mb-16 bg-gray-50 py-16 -mx-4 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">La Nostra Missione</h2>
          <p className="text-xl mb-10">
            Connettere le persone attraverso esperienze significative e
            memorabili
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Comunità</h3>
                <p className="text-muted-foreground">
                  Creare una comunità vibrante di persone che condividono
                  interessi e passioni.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Accessibilità</h3>
                <p className="text-muted-foreground">
                  Rendere gli eventi culturali e sociali accessibili a tutti,
                  ovunque si trovino.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Scoperta</h3>
                <p className="text-muted-foreground">
                  Aiutare le persone a scoprire nuove esperienze e ampliare i
                  propri orizzonti.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Il Nostro Team */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Il Nostro Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.nome} className="overflow-hidden">
                <div className="aspect-square">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.nome}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.nome}</h3>
                  <p className="text-primary font-medium mb-3">
                    {member.ruolo}
                  </p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* I Nostri Valori */}
      <section className="mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">I Nostri Valori</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Qualità</h3>
                <p className="text-muted-foreground">
                  Ci impegniamo a offrire solo eventi di alta qualità,
                  selezionati con cura per garantire esperienze memorabili.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Inclusività</h3>
                <p className="text-muted-foreground">
                  Crediamo che la cultura e il divertimento debbano essere
                  accessibili a tutti, senza discriminazioni.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Innovazione</h3>
                <p className="text-muted-foreground">
                  Lavoriamo costantemente per migliorare la nostra piattaforma e
                  offrire nuove funzionalità ai nostri utenti.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">Comunità</h3>
                <p className="text-muted-foreground">
                  Mettiamo al centro le persone e le relazioni, creando spazi di
                  incontro e condivisione.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
