"use client";

import type React from "react";

import { useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "@/app/context/authContext";
import { Loader2 } from "lucide-react";

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  requireAdmin?: boolean;
}

export function AuthGuard({
  children,
  requireAuth = false,
  requireAdmin = false,
}: AuthGuardProps) {
  const { isAuthenticated, isLoading, user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  // Funzione per verificare se l'utente è admin
  const isAdmin = useCallback(() => {
    return user?.role === "admin";
  }, [user]);

  useEffect(() => {
    if (!isLoading) {
      // Se richiede autenticazione ma l'utente non è autenticato
      if (requireAuth && !isAuthenticated) {
        router.push(`/auth?returnUrl=${encodeURIComponent(pathname)}`);
        return;
      }

      // Se richiede admin ma l'utente non è admin
      if (requireAdmin && (!isAuthenticated || !isAdmin())) {
        // Reindirizza alla home o a una pagina di accesso negato
        router.push("/accesso-negato");
        return;
      }

      // Se l'utente è autenticato e sta cercando di accedere a pagine di autenticazione
      if (isAuthenticated && pathname.startsWith("/auth")) {
        router.push("/");
        return;
      }
    }
  }, [
    isLoading,
    isAuthenticated,
    requireAuth,
    requireAdmin,
    router,
    pathname,
    user,
    isAdmin,
  ]);

  // Mostra un loader mentre verifica l'autenticazione
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // Se richiede autenticazione ma l'utente non è autenticato, non mostrare nulla
  // (il reindirizzamento avverrà tramite useEffect)
  if (requireAuth && !isAuthenticated) {
    return null;
  }

  // Se richiede admin ma l'utente non è admin, non mostrare nulla
  if (requireAdmin && (!isAuthenticated || !isAdmin())) {
    return null;
  }

  return <>{children}</>;
}
