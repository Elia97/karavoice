"use client";

import { FC, useState, MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
  collapse: boolean;
}

interface EventCategory {
  slug: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home", collapse: false },
  { href: "/chi-siamo", label: "Chi siamo", collapse: false },
  { href: "/eventi", label: "Eventi", collapse: true },
];

const eventCategories: EventCategory[] = [
  { slug: "karaoke", label: "Karaoke" },
  { slug: "dj-set", label: "Dj Set" },
  { slug: "live-music", label: "Live Music" },
];

const Navbar: FC = () => {
  const pathname = usePathname();
  const [isEventsOpen, setIsEventOpen] = useState<boolean>(false);

  const toggleEvents = (e: MouseEvent<SVGSVGElement | HTMLUListElement>) => {
    e.preventDefault();
    setIsEventOpen((prev) => !prev);
  };

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-4">
        {navLinks.map((link) => {
          return link.collapse ? (
            <li key={link.href} className="relative flex items-center">
              <Link
                href={link.href}
                className={`p-3 ${
                  pathname.startsWith(link.href) && "border-b"
                }`}
              >
                {link.label}
              </Link>
              <ChevronDown
                onClick={toggleEvents}
                aria-expanded={isEventsOpen}
                className={`transition-transform duration-300 ${
                  isEventsOpen && "rotate-180"
                }`}
              />
              <ul
                onClick={toggleEvents}
                className="absolute top-full flex flex-col text-nowrap rounded-lg bg-neutral-950 shadow-lg"
              >
                {isEventsOpen &&
                  eventCategories.map((category) => {
                    return (
                      <li key={category.slug} className="py-3">
                        <Link href={`/eventi/${category.slug}`} className="p-3">
                          {category.label}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </li>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={`p-3 ${
                (link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href)) && "border-b"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
