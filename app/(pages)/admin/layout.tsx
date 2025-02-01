"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AdminLayoutProps {
  children: ReactNode;
}

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Users", path: "/admin/users" },
  { label: "Locations", path: "/admin/locations" },
  { label: "Events", path: "/admin/events" },
  { label: "Bookings", path: "/admin/bookings" },
];

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className="relative flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 shadow-md">
        <div className="border-b p-4">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        <nav className="p-4">
          <ul>
            {navItems.map((item) => (
              <li key={item.path} className="mb-2">
                <Link
                  href={item.path}
                  className={`block rounded px-4 py-2 ${
                    pathname === item.path
                      ? "bg-neutral-900 text-white"
                      : "hover:bg-neutral-900"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <Link href={"/"} className="absolute right-3 top-3">
        Torna sul sito
      </Link>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default AdminLayout;
