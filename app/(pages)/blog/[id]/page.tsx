import { Input } from "@/components/ui/input";
import { CalendarDays, ChevronLeft, Share2, User } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

// Dati di esempio per gli articoli del blog
const articoli = [
  {
    id: 1,
    titolo: "Come organizzare un evento di successo: guida completa",
    estratto:
      "Scopri i segreti per organizzare un evento memorabile, dalla pianificazione alla promozione fino alla gestione del giorno stesso.",
    contenuto: `
      <h2>Introduzione</h2>
      <p>Organizzare un evento di successo richiede pianificazione, attenzione ai dettagli e una buona dose di creatività. Che si tratti di un piccolo raduno o di un grande festival, i principi fondamentali rimangono gli stessi.</p>
      
      <h2>1. Definisci gli obiettivi</h2>
      <p>Prima di iniziare qualsiasi pianificazione, è fondamentale avere chiari gli obiettivi dell'evento. Cosa vuoi ottenere? Chi è il tuo pubblico target? Quali sono le metriche di successo? Rispondendo a queste domande, potrai orientare tutte le decisioni successive.</p>
      
      <h2>2. Crea un budget dettagliato</h2>
      <p>Un budget ben strutturato è la spina dorsale di qualsiasi evento. Considera tutte le spese possibili: location, catering, personale, marketing, tecnologia, decorazioni, permessi e licenze. Aggiungi sempre un margine del 10-15% per imprevisti.</p>
      
      <h2>3. Scegli la location giusta</h2>
      <p>La scelta della location è cruciale e dipende dal tipo di evento, dal numero di partecipanti e dall'atmosfera che vuoi creare. Visita sempre personalmente i luoghi prima di prenotare e verifica la disponibilità di parcheggi, l'accessibilità e le attrezzature tecniche.</p>
      
      <h2>4. Pianifica la logistica</h2>
      <p>La logistica include tutti gli aspetti pratici dell'evento: dalla disposizione degli spazi al flusso di persone, dall'audio-video alla sicurezza. Crea una timeline dettagliata e assegna responsabilità specifiche al tuo team.</p>
      
      <h2>5. Promuovi l'evento</h2>
      <p>Una strategia di marketing efficace è essenziale per attirare partecipanti. Utilizza un mix di canali: social media, email marketing, PR, partnership e, se il budget lo consente, pubblicità tradizionale. Inizia la promozione con largo anticipo e intensificala man mano che si avvicina la data.</p>
      
      <h2>6. Cura l'esperienza dei partecipanti</h2>
      <p>Dall'iscrizione al follow-up, ogni punto di contatto con i partecipanti deve essere curato nei minimi dettagli. Pensa a come accoglierli, come guidarli durante l'evento e come raccogliere feedback alla fine.</p>
      
      <h2>7. Prepara un piano B</h2>
      <p>Gli imprevisti sono inevitabili: un relatore che cancella all'ultimo minuto, problemi tecnici, maltempo per eventi all'aperto. Avere un piano di emergenza per ogni aspetto critico ti permetterà di affrontare qualsiasi situazione con serenità.</p>
      
      <h2>Conclusione</h2>
      <p>Organizzare un evento richiede impegno e dedizione, ma vedere i partecipanti soddisfatti ripaga di tutti gli sforzi. Ricorda che ogni evento è un'opportunità di apprendimento: raccogli feedback, analizza cosa ha funzionato e cosa no, e usa queste informazioni per migliorare il prossimo evento.</p>
    `,
    data: "15 Maggio 2024",
    autore: "Marco Bianchi",
    categoria: "Guide",
    immagine: "/placeholder.svg?height=500&width=1000",
    tags: ["Organizzazione eventi", "Pianificazione", "Marketing", "Logistica"],
  },
  {
    id: 2,
    titolo: "I 10 festival musicali da non perdere quest'estate in Italia",
    estratto:
      "Una selezione dei migliori festival musicali che animeranno l'estate italiana, con lineup, location e consigli pratici.",
    contenuto: `
      <h2>Introduzione</h2>
      <p>L'estate italiana si anima con decine di festival musicali che offrono esperienze uniche per tutti i gusti. Dalla musica elettronica al rock, dal jazz alla classica, ecco i 10 appuntamenti da non perdere quest'anno.</p>
      
      <h2>1. Nome Festival - Località</h2>
      <p>Descrizione dettagliata del festival, con informazioni su lineup, location, date, prezzi e peculiarità che lo rendono speciale.</p>
      
      <h2>2. Nome Festival - Località</h2>
      <p>Descrizione dettagliata del festival, con informazioni su lineup, location, date, prezzi e peculiarità che lo rendono speciale.</p>
      
      <h2>3. Nome Festival - Località</h2>
      <p>Descrizione dettagliata del festival, con informazioni su lineup, location, date, prezzi e peculiarità che lo rendono speciale.</p>
      
      <h2>4. Nome Festival - Località</h2>
      <p>Descrizione dettagliata del festival, con informazioni su lineup, location, date, prezzi e peculiarità che lo rendono speciale.</p>
      
      <h2>5. Nome Festival - Località</h2>
      <p>Descrizione dettagliata del festival, con informazioni su lineup, location, date, prezzi e peculiarità che lo rendono speciale.</p>
      
      <h2>6. Nome Festival - Località</h2>
      <p>Descrizione dettagliata del festival, con informazioni su lineup, location, date, prezzi e peculiarità che lo rendono speciale.</p>
      
      <h2>7. Nome Festival - Località</h2>
      <p>Descrizione dettagliata del festival, con informazioni su lineup, location, date, prezzi e peculiarità che lo rendono speciale.</p>
      
      <h2>8. Nome Festival - Località</h2>
      <p>Descrizione dettagliata del festival, con informazioni su lineup, location, date, prezzi e peculiarità che lo rendono speciale.</p>
      
      <h2>9. Nome Festival - Località</h2>
      <p>Descrizione dettagliata del festival, con informazioni su lineup, location, date, prezzi e peculiarità che lo rendono speciale.</p>
      
      <h2>10. Nome Festival - Località</h2>
      <p>Descrizione dettagliata del festival, con informazioni su lineup, location, date, prezzi e peculiarità che lo rendono speciale.</p>
      
      <h2>Consigli pratici per godersi un festival</h2>
      <p>Suggerimenti su cosa portare, come vestirsi, come pianificare gli spostamenti e altri consigli utili per vivere al meglio l'esperienza di un festival musicale.</p>
      
      <h2>Conclusione</h2>
      <p>L'estate italiana offre un panorama ricchissimo di festival musicali, adatti a tutti i gusti e a tutte le tasche. Che siate appassionati di rock, elettronica, jazz o world music, c'è sicuramente un evento che fa per voi. Non vi resta che scegliere e prepararvi a vivere un'esperienza indimenticabile!</p>
    `,
    data: "2 Maggio 2024",
    autore: "Laura Rossi",
    categoria: "Musica",
    immagine: "/placeholder.svg?height=500&width=1000",
    tags: ["Festival", "Musica", "Estate", "Concerti"],
  },
  {
    id: 3,
    titolo: "Food Festival: le sagre gastronomiche più interessanti del 2024",
    estratto:
      "Un viaggio attraverso i sapori e le tradizioni culinarie italiane, alla scoperta delle sagre e dei festival gastronomici da non perdere.",
    contenuto: `
      <h2>Introduzione</h2>
      <p>L'Italia è famosa in tutto il mondo per la sua tradizione culinaria, e le sagre gastronomiche sono un modo perfetto per scoprire i sapori autentici del territorio. Ecco una selezione delle manifestazioni più interessanti del 2024.</p>
      
      <h2>Nord Italia</h2>
      <p>Descrizione dettagliata delle sagre e dei festival gastronomici più interessanti del Nord Italia, con informazioni su specialità, date, location e attività collaterali.</p>
      
      <h2>Centro Italia</h2>
      <p>Descrizione dettagliata delle sagre e dei festival gastronomici più interessanti del Centro Italia, con informazioni su specialità, date, location e attività collaterali.</p>
      
      <h2>Sud Italia e Isole</h2>
      <p>Descrizione dettagliata delle sagre e dei festival gastronomici più interessanti del Sud Italia e delle Isole, con informazioni su specialità, date, location e attività collaterali.</p>
      
      <h2>Festival tematici</h2>
      <p>Oltre alle sagre tradizionali, esistono numerosi festival dedicati a specifici prodotti o cucine: festival del cioccolato, del gelato, della pizza, della cucina vegetariana, ecc. Ecco i più interessanti del 2024.</p>
      
      <h2>Consigli per godersi una sagra gastronomica</h2>
      <p>Suggerimenti pratici per vivere al meglio l'esperienza di una sagra: come arrivare, quando andare per evitare la folla, come assaggiare più specialità possibili, ecc.</p>
      
      <h2>Conclusione</h2>
      <p>Le sagre gastronomiche sono molto più di semplici eventi culinari: sono celebrazioni della cultura e delle tradizioni locali, occasioni di incontro e di scoperta. Partecipare a una sagra significa immergersi nell'autenticità di un territorio e delle sue persone, oltre che deliziare il palato con sapori unici.</p>
    `,
    data: "20 Aprile 2024",
    autore: "Giovanni Verdi",
    categoria: "Gastronomia",
    immagine: "/placeholder.svg?height=500&width=1000",
    tags: ["Gastronomia", "Sagre", "Cibo", "Tradizioni"],
  },
  {
    id: 4,
    titolo: "Come scegliere l'evento giusto per te: consigli e suggerimenti",
    estratto:
      "Una guida pratica per aiutarti a scegliere gli eventi più adatti ai tuoi interessi, al tuo budget e alle tue esigenze.",
    contenuto: `
      <h2>Introduzione</h2>
      <p>Con migliaia di eventi disponibili ogni mese, scegliere quelli più adatti alle proprie esigenze può essere una sfida. Questa guida ti aiuterà a selezionare gli eventi che ti daranno maggiore soddisfazione.</p>
      
      <h2>Conosci i tuoi interessi</h2>
      <p>Il primo passo è avere chiari i propri interessi e passioni. Che tipo di musica ti piace? Quali argomenti ti appassionano? Preferisci eventi all'aperto o al chiuso? Rispondendo a queste domande, potrai già restringere notevolmente il campo.</p>
      
      <h2>Considera il tuo budget</h2>
      <p>Gli eventi possono avere costi molto variabili, dal gratuito a centinaia di euro. Definisci in anticipo quanto sei disposto a spendere, considerando non solo il biglietto ma anche le spese accessorie come trasporti, pernottamento, cibo e bevande.</p>
      
      <h2>Valuta la logistica</h2>
      <p>La location dell'evento è facilmente raggiungibile? Ci sono opzioni di pernottamento nelle vicinanze? Quanto tempo dovrai dedicare agli spostamenti? La logistica è un aspetto fondamentale da considerare, soprattutto per eventi che si svolgono lontano da casa.</p>
      
      <h2>Informati sulla reputazione</h2>
      <p>Prima di acquistare un biglietto, cerca recensioni e opinioni su edizioni precedenti dell'evento. I social media, i forum specializzati e le piattaforme di recensioni possono offrirti informazioni preziose sull'organizzazione, la qualità dei contenuti e l'atmosfera generale.</p>
      
      <h2>Considera la compagnia</h2>
      <p>Alcuni eventi sono più divertenti se vissuti in compagnia, altri possono essere apprezzati anche da soli. Pensa a chi potrebbe accompagnarti e se l'evento è adatto alle persone che hai in mente.</p>
      
      <h2>Pianifica in anticipo</h2>
      <p>I biglietti per gli eventi più popolari spesso si esauriscono rapidamente. Pianificare in anticipo ti permette non solo di assicurarti un posto, ma anche di trovare le migliori offerte su biglietti, trasporti e alloggi.</p>
      
      <h2>Sii aperto a nuove esperienze</h2>
      <p>Pur seguendo i tuoi interessi principali, non chiuderti a nuove possibilità. Alcuni degli eventi più memorabili sono quelli che ci sorprendono, che ci portano fuori dalla nostra zona di comfort e ci fanno scoprire nuove passioni.</p>
      
      <h2>Conclusione</h2>
      <p>Scegliere l'evento giusto è un equilibrio tra seguire i propri interessi e essere aperti a nuove esperienze. Con un po' di pianificazione e le giuste informazioni, puoi massimizzare le probabilità di vivere esperienze memorabili e arricchenti.</p>
    `,
    data: "10 Aprile 2024",
    autore: "Giulia Neri",
    categoria: "Consigli",
    immagine: "/placeholder.svg?height=500&width=1000",
    tags: ["Consigli", "Pianificazione", "Budget", "Esperienze"],
  },
  {
    id: 5,
    titolo: "Le mostre d'arte più importanti del 2024",
    estratto:
      "Un calendario delle esposizioni artistiche più significative dell'anno, dai grandi musei alle gallerie indipendenti.",
    contenuto: `
      <h2>Introduzione</h2>
      <p>Il 2024 si preannuncia un anno ricco di appuntamenti imperdibili per gli amanti dell'arte. Dai grandi maestri del passato alle avanguardie contemporanee, ecco le mostre più significative in programma in Italia e in Europa.</p>
      
      <h2>Grandi retrospettive</h2>
      <p>Descrizione dettagliata delle principali mostre retrospettive dedicate a grandi artisti del passato, con informazioni su date, location, opere esposte e peculiarità dell'allestimento.</p>
      
      <h2>Arte contemporanea</h2>
      <p>Panoramica delle esposizioni più interessanti dedicate all'arte contemporanea, dalle installazioni multimediali alle performance, dalle opere concettuali alla street art.</p>
      
      <h2>Fotografia</h2>
      <p>Le mostre fotografiche più significative dell'anno, dai grandi maestri del passato ai talenti emergenti, dai reportage ai progetti artistici sperimentali.</p>
      
      <h2>Biennali e fiere</h2>
      <p>I grandi appuntamenti internazionali come la Biennale di Venezia, Art Basel, Frieze e altre manifestazioni che riuniscono artisti, galleristi, collezionisti e appassionati da tutto il mondo.</p>
      
      <h2>Mostre in spazi alternativi</h2>
      <p>Non solo musei e gallerie: l'arte contemporanea si esprime sempre più spesso in spazi non convenzionali come ex fabbriche, magazzini, spazi pubblici. Ecco le iniziative più interessanti in questo ambito.</p>
      
      <h2>Consigli per visitare una mostra</h2>
      <p>Suggerimenti pratici per godersi al meglio una visita: quando andare per evitare la folla, come prepararsi prima della visita, se vale la pena prenotare una visita guidata, ecc.</p>
      
      <h2>Conclusione</h2>
      <p>Il 2024 offre un panorama ricchissimo di proposte artistiche, capaci di soddisfare tutti i gusti e tutte le curiosità. Che siate appassionati di arte classica o contemporanea, di pittura o di fotografia, troverete sicuramente mostre ed eventi che sapranno emozionarvi e arricchire il vostro bagaglio culturale.</p>
    `,
    data: "1 Aprile 2024",
    autore: "Alessandro Belli",
    categoria: "Arte",
    immagine: "/placeholder.svg?height=500&width=1000",
    tags: ["Arte", "Mostre", "Musei", "Cultura"],
  },
  {
    id: 6,
    titolo: "Eventi tech: le conferenze e gli hackathon da segnare in agenda",
    estratto:
      "Una panoramica degli eventi tecnologici più interessanti dell'anno, perfetti per networking e aggiornamento professionale.",
    contenuto: `
      <h2>Introduzione</h2>
      <p>Il settore tech è in continua evoluzione, e partecipare a conferenze, workshop e hackathon è fondamentale per rimanere aggiornati sulle ultime tendenze e tecnologie. Ecco gli eventi più interessanti del 2024.</p>
      
      <h2>Conferenze internazionali</h2>
      <p>Le grandi conferenze tech come Web Summit, CES, Mobile World Congress e altre, con informazioni su date, location, temi principali e speaker di rilievo.</p>
      
      <h2>Eventi in Italia</h2>
      <p>Panoramica delle conferenze e degli eventi tech più significativi che si terranno in Italia, dalle grandi manifestazioni alle iniziative più specializzate e di nicchia.</p>
      
      <h2>Hackathon e coding challenge</h2>
      <p>Gli hackathon più interessanti dell'anno, con informazioni su temi, premi, requisiti di partecipazione e consigli per prepararsi al meglio.</p>
      
      <h2>Eventi per startup</h2>
      <p>Conferenze, pitch competition e altri eventi dedicati specificamente al mondo delle startup, con opportunità di networking, mentorship e finanziamento.</p>
      
      <h2>Formazione e workshop</h2>
      <p>Corsi, workshop e bootcamp per acquisire nuove competenze o approfondire quelle esistenti, dalle tecnologie emergenti come AI e blockchain alle competenze più consolidate.</p>
      
      <h2>Eventi online</h2>
      <p>Non tutti gli eventi richiedono la presenza fisica: molte conferenze e workshop si svolgono online, permettendo di partecipare da qualsiasi luogo. Ecco i più interessanti del 2024.</p>
      
      <h2>Consigli per trarre il massimo da un evento tech</h2>
      <p>Suggerimenti pratici per ottimizzare la partecipazione: come prepararsi, come gestire l'agenda, come fare networking efficace, come seguire up dopo l'evento.</p>
      
      <h2>Conclusione</h2>
      <p>Gli eventi tech sono molto più che semplici occasioni di aggiornamento professionale: sono opportunità per connettersi con la community, scoprire nuove tendenze, trovare ispirazione e, perché no, anche divertirsi. Con una buona pianificazione, potrete massimizzare i benefici della partecipazione e tornare a casa con nuove idee, contatti e motivazione.</p>
    `,
    data: "25 Marzo 2024",
    autore: "Marco Bianchi",
    categoria: "Tecnologia",
    immagine: "/placeholder.svg?height=500&width=1000",
    tags: ["Tecnologia", "Conferenze", "Hackathon", "Networking"],
  },
];

// Dati di esempio per gli articoli correlati
const articoliCorrelati = (id: number, categoria: string) => {
  return articoli
    .filter(
      (articolo) => articolo.id !== id && articolo.categoria === categoria
    )
    .slice(0, 3);
};

export default async function ArticoloPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number.parseInt(params.id);
  const articolo = articoli.find((a) => a.id === id);

  if (!articolo) {
    return <div className="container mx-auto py-10">Articolo non trovato</div>;
  }

  const correlati = articoliCorrelati(id, articolo.categoria);

  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  await wait(3000);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Link href="/blog">
          <Button variant="ghost" className="gap-1">
            <ChevronLeft className="h-4 w-4" />
            Torna al blog
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Intestazione articolo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                {articolo.categoria}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {articolo.titolo}
            </h1>
            <div className="flex flex-wrap items-center text-sm text-muted-foreground gap-4 mb-6">
              <div className="flex items-center">
                <User className="mr-1 h-4 w-4" />
                <span>{articolo.autore}</span>
              </div>
              <div className="flex items-center">
                <CalendarDays className="mr-1 h-4 w-4" />
                <span>{articolo.data}</span>
              </div>
            </div>
          </div>

          {/* Immagine principale */}
          <div className="rounded-xl overflow-hidden">
            <img
              src={articolo.immagine || "/placeholder.svg"}
              alt={articolo.titolo}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Contenuto articolo */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: articolo.contenuto }}
          />

          {/* Tag */}
          <div className="pt-4 border-t">
            <h3 className="font-medium mb-2">Tag:</h3>
            <div className="flex flex-wrap gap-2">
              {articolo.tags.map((tag) => (
                <Link key={tag} href={`/blog?tag=${tag.toLowerCase()}`}>
                  <span className="inline-block px-3 py-1 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors">
                    {tag}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Condivisione */}
          <div className="pt-4 border-t">
            <h3 className="font-medium mb-2">Condividi:</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Share2 className="h-4 w-4" />
                Condividi
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Autore */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold">L'autore</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt={articolo.autore}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold">{articolo.autore}</h4>
                  <p className="text-sm text-muted-foreground">
                    Scrittore e esperto di eventi
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Autore di numerosi articoli su eventi, cultura e lifestyle.
                Appassionato di musica, arte e tecnologia.
              </p>
            </CardContent>
          </Card>

          {/* Articoli correlati */}
          <Card>
            <CardHeader>
              <h3 className="text-lg font-bold">Articoli Correlati</h3>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {correlati.map((articolo) => (
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
