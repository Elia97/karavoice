"use client";

import { ReactNode, useState } from "react";
import { MenuContext } from "./contexts";

interface ProviderProps {
  children: ReactNode;
}

export const MenuProvider = ({ children }: ProviderProps) => {
  const [toggledMenu, setToggledMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setToggledMenu((prev) => !prev);
  };

  const contextValue = { toggledMenu, toggleMenu };

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};
