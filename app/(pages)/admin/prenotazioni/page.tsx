import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CalendarDays, Eye, Search } from "lucide-react";

export default function AdminPrenotazioniPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Gestione Prenotazioni</h1>
        <p className="text-muted-foreground">
          Visualizza e gestisci tutte le prenotazioni sulla piattaforma.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Cerca prenotazioni..." className="pl-10" />
        </div>
        <Button variant="outline" className="gap-1">
          <CalendarDays className="h-4 w-4" />
          Filtra per data
        </Button>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Utente</TableHead>
              <TableHead>Evento</TableHead>
              <TableHead>Data evento</TableHead>
              <TableHead>Data prenotazione</TableHead>
              <TableHead>Stato</TableHead>
              <TableHead>Pagamento</TableHead>
              <TableHead className="text-right">Azioni</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              {
                id: "PREN-001",
                utente: "Mario Rossi",
                evento: "Festival della Musica",
                dataEvento: "15 Giugno 2024",
                dataPrenotazione: "10 Maggio 2024",
                stato: "confermata",
                pagamento: "completato",
              },
              {
                id: "PREN-002",
                utente: "Laura Bianchi",
                evento: "Conferenza Tech Innovation",
                dataEvento: "5 Luglio 2024",
                dataPrenotazione: "15 Maggio 2024",
                stato: "confermata",
                pagamento: "completato",
              },
              {
                id: "PREN-003",
                utente: "Giovanni Verdi",
                evento: "Maratona Cittadina",
                dataEvento: "21 Luglio 2024",
                dataPrenotazione: "20 Maggio 2024",
                stato: "in attesa",
                pagamento: "in attesa",
              },
              {
                id: "PREN-004",
                utente: "Giulia Neri",
                evento: "Mostra d'Arte Contemporanea",
                dataEvento: "25 Giugno 2024",
                dataPrenotazione: "18 Maggio 2024",
                stato: "confermata",
                pagamento: "completato",
              },
              {
                id: "PREN-005",
                utente: "Roberto Blu",
                evento: "Festival del Cinema",
                dataEvento: "3 Agosto 2024",
                dataPrenotazione: "22 Maggio 2024",
                stato: "confermata",
                pagamento: "completato",
              },
            ].map((prenotazione) => (
              <TableRow key={prenotazione.id}>
                <TableCell className="font-medium">{prenotazione.id}</TableCell>
                <TableCell>{prenotazione.utente}</TableCell>
                <TableCell>{prenotazione.evento}</TableCell>
                <TableCell>{prenotazione.dataEvento}</TableCell>
                <TableCell>{prenotazione.dataPrenotazione}</TableCell>
                <TableCell>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs ${
                      prenotazione.stato === "confermata"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {prenotazione.stato === "confermata"
                      ? "Confermata"
                      : "In attesa"}
                  </span>
                </TableCell>
                <TableCell>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs ${
                      prenotazione.pagamento === "completato"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {prenotazione.pagamento === "completato"
                      ? "Completato"
                      : "In attesa"}
                  </span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
