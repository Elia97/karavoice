"use client";

import { ReactNode, useEffect, useState, useRef } from "react";
import { MenuContext, UserContext } from "./contexts";

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

export const UserProvider = ({ children }: ProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // useRef mantiene lo stesso oggetto EventTarget tra i render
  const authEventsRef = useRef(new EventTarget());

  const checkAuthStatus = async () => {
    try {
      const response = await fetch("/api/auth/status");
      if (response.ok) {
        const data = await response.json();
        setIsLoggedIn(data.isLoggedIn);
      }
    } catch (error) {
      console.error("Errore nel recuperare lo stato di autenticazione:", error);
    }
  };

  useEffect(() => {
    checkAuthStatus();

    // Copia il riferimento attuale prima di usarlo nell'evento
    const authEvents = authEventsRef.current;

    const updateAuth = () => checkAuthStatus();
    authEvents.addEventListener("authChange", updateAuth);

    return () => {
      authEvents.removeEventListener("authChange", updateAuth);
    };
  }, []);

  const contextValue = { isLoggedIn, authEvents: authEventsRef.current };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
