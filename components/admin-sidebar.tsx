"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  CalendarDays,
  ChevronLeft,
  Home,
  Settings,
  Ticket,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/authContext";
import { cn } from "@/lib/utils";

export function AdminSidebar() {
  const pathname = usePathname();
  const { user } = useAuth();
  const [expanded, setExpanded] = useState(true);

  const navItems = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: BarChart3,
    },
    {
      title: "Eventi",
      href: "/admin/eventi",
      icon: CalendarDays,
    },
    {
      title: "Utenti",
      href: "/admin/utenti",
      icon: Users,
    },
    {
      title: "Prenotazioni",
      href: "/admin/prenotazioni",
      icon: Ticket,
    },
    {
      title: "Impostazioni",
      href: "/admin/impostazioni",
      icon: Settings,
    },
  ];

  return (
    <div
      className={cn(
        " bg-sidebar min-h-screen border-r flex flex-col transition-all duration-300",
        expanded ? "w-64" : "w-20"
      )}
    >
      <div className="p-4 border-b flex items-center justify-between">
        <div
          className={cn(
            "flex items-center cursor-pointer",
            !expanded && "justify-center w-full"
          )}
          onClick={() => setExpanded(true)}
        >
          <span className={cn("font-bold text-xl", !expanded && "hidden")}>
            KaraVoice
          </span>
          <span className={cn("hidden font-bold", !expanded && "block")}>
            KV
          </span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setExpanded(!expanded)}
          className="h-8 w-8"
        >
          {expanded ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4 rotate-180" />
          )}
        </Button>
      </div>

      <div className="flex-1 py-4 overflow-auto">
        <nav className="space-y-1 px-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                pathname === item.href
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                !expanded && "justify-center"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span
                className={cn("text-sm font-medium", !expanded && "hidden")}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </nav>
      </div>

      <div className="p-4 border-t">
        <div
          className={cn(
            "flex items-center gap-3 mb-4",
            !expanded && "justify-center"
          )}
        >
          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
            <Users className="h-4 w-4 text-primary" />
          </div>
          <div className={cn(!expanded && "hidden")}>
            <p className="text-sm font-medium">{user?.name}</p>
            <p className="text-xs text-muted-foreground">{user?.email}</p>
          </div>
        </div>
        <Button
          variant="outline"
          className={cn(
            "w-full gap-2 cursor-pointer",
            !expanded && "justify-center"
          )}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <Home className="h-4 w-4" />
          <span className={cn(!expanded && "hidden")}>Torna al sito</span>
        </Button>
      </div>
    </div>
  );
}
