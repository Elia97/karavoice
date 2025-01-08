"use client";

import { Menu, LogIn, LogOut } from "lucide-react";
import Logo from "./logo";
import { useContext, FC } from "react";
import { MenuContext } from "@/app/context-api/contexts";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Link from "next/link";

const Header: FC = () => {
  const { toggleMenu } = useContext(MenuContext);
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
          ? "bg-neutral-50 shadow shadow-neutral-200 dark:bg-neutral-950 dark:shadow-neutral-800"
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
        {!false ? (
          <Link href={"/auth"}>
            <button
              type="button"
              className="group flex items-center gap-2 rounded-full p-1.5 lg:text-lg"
            >
              <span className="invisible hover:underline sm:visible lg:invisible lg:group-hover:visible">
                Accedi
              </span>
              <LogIn className="lg:size-7" />
            </button>
          </Link>
        ) : (
          <button
            type="button"
            className="group flex items-center gap-2 rounded-full p-1.5 lg:text-lg"
          >
            <span className="invisible pl-1.5 hover:underline sm:visible lg:invisible lg:group-hover:visible">
              Disconnetti
            </span>
            <LogOut className="lg:size-7" />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
