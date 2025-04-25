"use client";

import { useState } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

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
import { toast } from "@/hooks/use-toast";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Email inviata",
        description:
          "Controlla la tua casella di posta per le istruzioni di reset.",
      });
    }, 1500);
  };

  return (
    <div className="container max-w-md mx-auto py-12 px-4">
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
          <CardDescription>
            {isSubmitted
              ? "Ti abbiamo inviato un'email con le istruzioni per reimpostare la password."
              : "Inserisci la tua email per ricevere le istruzioni di reset."}
          </CardDescription>
        </CardHeader>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="nome@esempio.it"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Invia istruzioni
              </Button>
            </CardContent>
          </form>
        ) : (
          <CardContent className="space-y-4">
            <div className="bg-muted p-4 rounded-md text-sm">
              <p>
                Abbiamo inviato un'email a <strong>{email}</strong> con le
                istruzioni per reimpostare la tua password.
              </p>
              <p className="mt-2">
                Se non ricevi l'email entro pochi minuti, controlla la cartella
                spam o junk.
              </p>
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setEmail("");
                setIsSubmitted(false);
              }}
            >
              Prova con un'altra email
            </Button>
          </CardContent>
        )}

        <CardFooter className="flex justify-center">
          <Link href="/auth">
            <Button variant="ghost" className="gap-1">
              <ArrowLeft className="h-4 w-4" />
              Torna al login
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
