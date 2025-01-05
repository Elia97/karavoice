"use client";

import { useContext, FC } from "react";
import { MenuContext } from "@/app/context-api/contexts";
import Logo from "./logo";
import { X } from "lucide-react";

const Sidebar: FC = () => {
  const { toggledMenu, toggleMenu } = useContext(MenuContext);
  return (
    <aside
      className={`fixed left-0 top-0 z-20 h-screen w-64 ${
        toggledMenu ? "translate-x-0" : "-translate-x-full"
      } overflow-y-auto bg-gradient-to-r from-neutral-50 via-neutral-50 to-neutral-100 transition-transform dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900`}
    >
      <div className="flex h-16 items-center justify-between px-4 lg:hidden">
        <Logo />
        <button
          type="button"
          onClick={() => toggleMenu()}
          className="lg:hidden"
        >
          <span className="sr-only">Close main menu</span>
          <X />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
