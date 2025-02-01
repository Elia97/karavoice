"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  href: string;
  label: string;
}

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "Chi siamo" },
  { href: "/events", label: "Eventi" },
];

const Navbar: FC = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-4">
        {navLinks.map((link) => {
          return (
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
