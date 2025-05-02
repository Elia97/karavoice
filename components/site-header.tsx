"use client";

import { useState } from "react";
import { Bell, Menu, Search, UserIcon, X, LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { toast } from "sonner";
import { useAuth } from "@/app/context/authContext";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Eventi", href: "/eventi" },
  { name: "Categorie", href: "/categorie" },
  { name: "Chi Siamo", href: "/chi-siamo" },
  { name: "Contatti", href: "/contatti" },
];

export function SiteHeader() {
  const isMobile = useMobile();
  const [showSearch, setShowSearch] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const handleCloseMenu = () => setIsSheetOpen(false);

  const handleLogout = () => {
    logout();
    toast.success("Logout effettuato con successo", {
      description: "Sei stato disconnesso dal tuo account.",
    });

    // Forzare il ricaricamento della pagina per aggiornare lo stato di autenticazione in tutti i componenti
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  };

  if (pathname.startsWith("/admin")) {
    return null;
  }

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
                          <p className="text-sm font-medium">{user.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {user.email}
                          </p>
                        </div>
                      </div>
                      <DropdownMenuSeparator />
                      {user.role === "admin" ? (
                        <DropdownMenuItem asChild>
                          <Link href="/admin" className="cursor-pointer">
                            Dashboard
                          </Link>
                        </DropdownMenuItem>
                      ) : (
                        <>
                          <DropdownMenuItem asChild>
                            <Link href="/profilo" className="cursor-pointer">
                              Profilo
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link
                              href="/prenotazioni"
                              className="cursor-pointer"
                            >
                              Le mie prenotazioni
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/preferiti" className="cursor-pointer">
                              Preferiti
                            </Link>
                          </DropdownMenuItem>
                        </>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={handleLogout}
                        className="cursor-pointer"
                      >
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
                className="h-9 w-9 cursor-pointer"
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
                className="h-9 w-9 lg:hidden cursor-pointer"
                aria-label="Cerca"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 lg:hidden cursor-pointer"
                    aria-label="Menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-[400px] [&>button]:cursor-pointer"
                >
                  {/* Accessibilità invisibile ma presente */}
                  <VisuallyHidden>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                    <SheetDescription className="sr-only">
                      Questo pannello contiene i link di navigazione e le azioni
                      per accedere o registrarsi.
                    </SheetDescription>
                  </VisuallyHidden>

                  {/* Contenuto visivo */}
                  <nav className="flex flex-col gap-4 mt-8 px-4">
                    {navigationLinks.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                        onClick={handleCloseMenu}
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
                          onClick={handleCloseMenu}
                        >
                          <UserIcon className="h-5 w-5" />
                          <span>Profilo</span>
                        </Link>
                        <Link
                          href="/prenotazioni"
                          className="flex items-center gap-2"
                          onClick={handleCloseMenu}
                        >
                          <span>Le mie prenotazioni</span>
                        </Link>
                        <Link
                          href="/preferiti"
                          className="flex items-center gap-2"
                          onClick={handleCloseMenu}
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
                            onClick={handleCloseMenu}
                          >
                            Accedi
                          </Button>
                        </Link>
                        <Link href="/auth?tab=register" className="w-full">
                          <Button
                            variant="outline"
                            className="w-full hover:cursor-pointer"
                            size="lg"
                            onClick={handleCloseMenu}
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
