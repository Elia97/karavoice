"use client";

import { ReactNode, useState } from "react";
import { MenuContext, EventContext } from "./contexts";
import { Event } from "../types";

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

export const EventProvider = ({ children }: ProviderProps) => {
  const [events, setEvents] = useState<Event[]>([]);

  const contextValue = { events, setEvents };

  return (
    <EventContext.Provider value={contextValue}>
      {children}
    </EventContext.Provider>
  );
};
