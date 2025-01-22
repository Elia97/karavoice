"use client";

import { FC, useState } from "react";
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
  { href: "/about-us", label: "Chi siamo", collapse: false },
  { href: "/events", label: "Eventi", collapse: true },
];

const eventCategories: EventCategory[] = [
  { slug: "karaoke", label: "Karaoke" },
  { slug: "dj-set", label: "Dj Set" },
  { slug: "live-music", label: "Live Music" },
];

const Navbar: FC = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-4">
        {navLinks.map((link) => {
          return link.collapse ? (
            <li
              key={link.href}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              className={`relative flex items-center ${eventCategories.some((category) => pathname.startsWith(`/${category.slug}`)) && "border-b border-sky-500 text-sky-500"}`}
            >
              <button
                type="button"
                className={`p-3 hover:text-sky-500 ${
                  pathname.startsWith(link.href) && "border-b"
                }`}
              >
                {link.label}
              </button>
              <ChevronDown className="cursor-pointer" />
              <ul
                className={`absolute top-full flex-col text-nowrap rounded-lg shadow-lg ${isDropdownOpen ? "flex" : "hidden"}`}
              >
                {eventCategories.map((category) => {
                  return (
                    <li key={category.slug} className="py-3 hover:text-sky-500">
                      <Link
                        href={`/${category.slug}`}
                        className="p-3"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {category.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          ) : (
            <li key={link.href} className="hover:text-sky-500">
              <Link
                href={link.href}
                className={`border-sky-500 p-3 ${
                  (link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href)) && "border-b text-sky-500"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
