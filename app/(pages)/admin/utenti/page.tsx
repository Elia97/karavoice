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
import { Edit, Search, UserPlus } from "lucide-react";

export default function AdminUtentiPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Gestione Utenti</h1>
          <p className="text-muted-foreground">
            Gestisci tutti gli utenti registrati sulla piattaforma.
          </p>
        </div>
        <Button className="gap-1">
          <UserPlus className="h-4 w-4" />
          Nuovo Utente
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Cerca utenti..." className="pl-10" />
        </div>
      </div>

      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Ruolo</TableHead>
              <TableHead>Data registrazione</TableHead>
              <TableHead>Prenotazioni</TableHead>
              <TableHead className="text-right">Azioni</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              {
                id: 1,
                nome: "Mario Rossi",
                email: "mario.rossi@example.com",
                ruolo: "user",
                dataRegistrazione: "10 Gennaio 2024",
                prenotazioni: 5,
              },
              {
                id: 2,
                nome: "Laura Bianchi",
                email: "laura.bianchi@example.com",
                ruolo: "user",
                dataRegistrazione: "15 Febbraio 2024",
                prenotazioni: 3,
              },
              {
                id: 3,
                nome: "Admin Utente",
                email: "admin@example.com",
                ruolo: "admin",
                dataRegistrazione: "1 Gennaio 2024",
                prenotazioni: 0,
              },
              {
                id: 4,
                nome: "Giovanni Verdi",
                email: "giovanni.verdi@example.com",
                ruolo: "user",
                dataRegistrazione: "20 Marzo 2024",
                prenotazioni: 2,
              },
              {
                id: 5,
                nome: "Giulia Neri",
                email: "giulia.neri@example.com",
                ruolo: "user",
                dataRegistrazione: "5 Aprile 2024",
                prenotazioni: 7,
              },
            ].map((utente) => (
              <TableRow key={utente.id}>
                <TableCell className="font-medium">{utente.id}</TableCell>
                <TableCell>{utente.nome}</TableCell>
                <TableCell>{utente.email}</TableCell>
                <TableCell>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs ${
                      utente.ruolo === "admin"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-blue-100 text-blue-800"
                    }`}
                  >
                    {utente.ruolo === "admin" ? "Amministratore" : "Utente"}
                  </span>
                </TableCell>
                <TableCell>{utente.dataRegistrazione}</TableCell>
                <TableCell>{utente.prenotazioni}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
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
