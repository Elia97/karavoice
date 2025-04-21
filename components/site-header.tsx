"use client"

import { Bell, Menu, Search, User, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useMobile } from "@/hooks/use-mobile"

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Eventi", href: "/eventi" },
  { name: "Categorie", href: "/categorie" },
  { name: "Chi Siamo", href: "/chi-siamo" },
  { name: "Contatti", href: "/contatti" },
]

export function SiteHeader() {
  const isMobile = useMobile()
  const [showSearch, setShowSearch] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto">
        <div className="flex w-full justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">EventiApp</span>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="mx-6 items-center space-x-4 lg:space-x-6 hidden md:flex">
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
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(true)}
                className="h-9 w-9"
                aria-label="Cerca"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Notifiche">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9" aria-label="Profilo">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="default" size="sm">
                Accedi
              </Button>
            </div>
          )}

          {/* Desktop Search Bar */}
          {!isMobile && showSearch && (
            <div className="flex items-center space-x-2 w-full max-w-sm ml-auto">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Cerca eventi..." className="pl-8" />
              </div>
              <Button variant="ghost" size="icon" onClick={() => setShowSearch(false)} className="h-9 w-9">
                <X className="h-5 w-5" />
              </Button>
            </div>
          )}

          {/* Mobile Menu */}
          {isMobile && (
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="h-9 w-9 md:hidden" aria-label="Cerca">
                <Search className="h-5 w-5" />
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-9 w-9 md:hidden" aria-label="Menu">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
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
                    <Button className="w-full" size="lg">
                      Accedi
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      Registrati
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
