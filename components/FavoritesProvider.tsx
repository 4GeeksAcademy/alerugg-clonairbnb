"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface FavoritesContextValue {
  isFavorite: (propertyId: string) => boolean;
  toggleFavorite: (propertyId: string) => void;
}

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const toggleFavorite = (propertyId: string) => {
    setFavorites((prev) => ({ ...prev, [propertyId]: !prev[propertyId] }));
  };

  const isFavorite = (propertyId: string) => Boolean(favorites[propertyId]);

  return (
    <FavoritesContext.Provider value={{ isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
  }
  return context;
};
