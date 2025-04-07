"use client";

import { createContext } from "react";

interface MenuContextType {
  toggledMenu: boolean;
  toggleMenu: () => void;
}

interface UserContextType {
  isLoggedIn: boolean;
  isAdmin: boolean;
  authEvents: EventTarget;
}

export const MenuContext = createContext<MenuContextType>({
  toggledMenu: false,
  toggleMenu: () => {},
});

export const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  isAdmin: false,
  authEvents: new EventTarget(),
});
