"use client";

import { MenuContext, UserContext } from "@/app/context-api/contexts";
import { LogIn, Menu } from "lucide-react";
import Link from "next/link";
import { FC, useContext, useEffect, useState } from "react";
import Logo from "./logo";
import Navbar from "./navbar";

const Header: FC = () => {
  const { toggleMenu } = useContext(MenuContext);
  const { isLoggedIn, isAdmin } = useContext(UserContext);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-10 flex h-16 w-full items-center justify-between px-4 ${
        isScrolled
          ? "bg-fuchsia-300 shadow shadow-fuchsia-200 dark:bg-fuchsia-950 dark:shadow-fuchsia-900"
          : "bg-transparent"
      }`}
    >
      <div className="flex w-16 items-center lg:hidden">
        <button type="button" onClick={() => toggleMenu()}>
          <span className="sr-only">Open main menu</span>
          <Menu />
        </button>
      </div>
      <Logo />
      <div className="flex items-center gap-8">
        <Navbar />

        <Link href={isLoggedIn ? (isAdmin ? "/admin" : "/profile") : "/auth"}>
          <button
            type="button"
            className="group flex items-center gap-2 rounded-full p-1.5 lg:text-lg"
          >
            <span className="invisible hover:underline sm:visible lg:invisible lg:group-hover:visible">
              {isLoggedIn ? "Entra" : "Accedi"}
            </span>
            <LogIn className="lg:size-7" />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
