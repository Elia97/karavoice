"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { Event } from "../types";

interface MenuContextType {
  toggledMenu: boolean;
  toggleMenu: () => void;
}

interface EventContextType {
  events: Event[];
  setEvents: Dispatch<SetStateAction<Event[]>>;
}

export const MenuContext = createContext<MenuContextType>({
  toggledMenu: false,
  toggleMenu: () => {},
});

export const EventContext = createContext<EventContextType>({
  events: [] as Event[],
  setEvents: () => {},
});
