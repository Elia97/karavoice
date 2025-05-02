import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AccessoDeniedPage() {
  return (
    <div className="container max-w-md mx-auto py-16 px-4 text-center">
      <AlertTriangle className="h-16 w-16 text-destructive mx-auto mb-6" />
      <h1 className="text-3xl font-bold mb-4">Accesso Negato</h1>
      <p className="text-muted-foreground mb-8">
        Non hai i permessi necessari per accedere a questa pagina. Questa
        sezione è riservata agli amministratori.
      </p>
      <Link href="/">
        <Button>Torna alla Home</Button>
      </Link>
    </div>
  );
}
