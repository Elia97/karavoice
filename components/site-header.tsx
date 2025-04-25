"use client";

import { useCallback, useEffect, useState } from "react";
import { Bell, Menu, Search, UserIcon, X, LogOut } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useMobile } from "@/hooks/use-mobile";
import { toast } from "@/hooks/use-toast";
import { User } from "@/types";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Eventi", href: "/eventi" },
  { name: "Categorie", href: "/categorie" },
  { name: "Chi Siamo", href: "/chi-siamo" },
  { name: "Contatti", href: "/contatti" },
];

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  // Usiamo useEffect per verificare l'autenticazione solo una volta al montaggio del componente
  useEffect(() => {
    // Controlla se esiste un token di autenticazione nel localStorage
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);

    // Dati utente di esempio (in un'app reale verrebbero dal backend)
    if (authStatus) {
      setUser({
        id: "e58ed763-928c-4155-bee9-fdbaaadc15f3",
        name: "Mario Rossi",
        email: "mario.rossi@example.com",
        phone: "1234567890",
        address: "Via Roma 1",
        city: "Roma",
        password: "", // placeholder, should not be used in real apps
        role: "user",
        last_login_at: new Date(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }
  }, []); // Array di dipendenze vuoto per eseguirlo solo al montaggio

  // Funzione per simulare il logout
  const logout = useCallback(() => {
    localStorage.setItem("isAuthenticated", "false");
    setIsAuthenticated(false);
    setUser(null);
  }, []);

  return { isAuthenticated, user, logout };
};

export function SiteHeader() {
  const isMobile = useMobile();
  const [showSearch, setShowSearch] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    toast({
      title: "Logout effettuato",
      description: "Hai effettuato il logout con successo.",
    });

    // Forzare il ricaricamento della pagina per aggiornare lo stato di autenticazione in tutti i componenti
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto">
        <div className="flex w-full justify-between items-center relative px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">KaraVoice</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-4">
              {navigationLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          )}

          {/* Desktop Search and Actions */}
          {!isMobile && !showSearch && (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(true)}
                className="h-9 w-9 hover:cursor-pointer"
                aria-label="Cerca"
              >
                <Search className="h-5 w-5" />
              </Button>

              {isAuthenticated && user ? (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 hover:cursor-pointer"
                    aria-label="Notifiche"
                  >
                    <Bell className="h-5 w-5" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9 hover:cursor-pointer"
                        aria-label="Profilo"
                      >
                        <UserIcon className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <div className="flex items-center justify-start gap-2 p-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <UserIcon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex flex-col space-y-0.5">
                          <p className="text-sm font-medium">{user?.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {user?.email}
                          </p>
                        </div>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/profilo">Profilo</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/prenotazioni">Le mie prenotazioni</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/preferiti">Preferiti</Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Logout</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <>
                  <Link href="/auth">
                    <Button
                      variant="default"
                      size="sm"
                      className="hidden md:inline-flex hover:cursor-pointer"
                    >
                      Accedi
                    </Button>
                  </Link>
                  <Link href="/auth?tab=register">
                    <Button
                      variant="outline"
                      size="sm"
                      className="hover:cursor-pointer"
                    >
                      Registrati
                    </Button>
                  </Link>
                </>
              )}
            </div>
          )}

          {/* Desktop Search Bar */}
          {!isMobile && showSearch && (
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Cerca eventi..."
                  className="pl-8 w-40"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(false)}
                className="h-9 w-9"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 lg:hidden"
                aria-label="Cerca"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 lg:hidden"
                    aria-label="Menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  {/* Accessibilità invisibile ma presente */}
                  <VisuallyHidden>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <SheetDescription className="sr-only">
                      Questo pannello contiene i link di navigazione e le azioni
                      per accedere o registrarsi.
                    </SheetDescription>
                  </VisuallyHidden>

                  {/* Contenuto visivo */}
                  <nav className="flex flex-col gap-4 mt-8">
                    {navigationLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="h-px bg-border my-4" />

                    {isAuthenticated && user ? (
                      <>
                        <Link
                          href="/profilo"
                          className="flex items-center gap-2"
                        >
                          <UserIcon className="h-5 w-5" />
                          <span>Profilo</span>
                        </Link>
                        <Link
                          href="/prenotazioni"
                          className="flex items-center gap-2"
                        >
                          <span>Le mie prenotazioni</span>
                        </Link>
                        <Link
                          href="/preferiti"
                          className="flex items-center gap-2"
                        >
                          <span>Preferiti</span>
                        </Link>
                        <Button
                          variant="outline"
                          className="w-full mt-2 flex items-center gap-2"
                          onClick={handleLogout}
                        >
                          <LogOut className="h-5 w-5" />
                          <span>Logout</span>
                        </Button>
                      </>
                    ) : (
                      <>
                        <Link href="/auth" className="w-full">
                          <Button
                            className="w-full hover:cursor-pointer"
                            size="lg"
                          >
                            Accedi
                          </Button>
                        </Link>
                        <Link href="/auth?tab=register" className="w-full">
                          <Button
                            variant="outline"
                            className="w-full hover:cursor-pointer"
                            size="lg"
                          >
                            Registrati
                          </Button>
                        </Link>
                      </>
                    )}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
