"use client";

import { createContext } from "react";

interface MenuContextType {
  toggledMenu: boolean;
  toggleMenu: () => void;
}

export const MenuContext = createContext<MenuContextType>({
  toggledMenu: false,
  toggleMenu: () => {},
});
