import React, { createContext, useState, ReactNode, useContext } from "react";

// Define la estructura de un lugar
interface Lugar {
  id: number;
  name: string;
  location: string;
  image: string;
  favorito: boolean;
  filtrado?: boolean;
  ruta: string;
  categories: string[];
}

// Define el contexto y el tipo de su valor
interface LugarContextProps {
  lugares: Lugar[];
  addLugar: (lugar: Lugar) => void;
  filterLugarByName: (name: string) => void;
  addToFavorite: (id: number) => void;
}

// Crea el contexto con un valor por defecto
const LugarContext = createContext<LugarContextProps | undefined>(undefined);

// Proveedor del contexto
export const LugarProvider = ({ children }: { children: ReactNode }) => {
  const [lugares, setLugares] = useState<Lugar[]>([
    {
      id: 1,
      name: "Villa Tunari",
      location: "Carretera a Chapare",
      image:
        "https://www.ibolivia.org/wp-content/uploads/2018/10/villa-tunari.jpg",
      favorito: false,
      ruta: "/cristo",
      categories: ["monumentos"],
    },
    {
      id: 2,
      name: "Arani",
      location: "Arani, Valle Alto",
      image:
        "https://www.gamarani.com/site/files/2020/10/website-arani-datos-generales-ubicacion.jpg",
      favorito: false,
      ruta: "/arani",
      categories: ["verdes"],
    },
    {
      id: 3,
      name: "Totora",
      location: "Totora",
      image:
        "https://www.ibolivia.org/wp-content/uploads/2018/10/villa-tunari.jpg",
      favorito: false,
      ruta: "/lincoln",
      categories: ["plazas"],
    },
  ]);

  // Función para agregar un nuevo lugar al array
  const addLugar = (lugar: Lugar) => {
    setLugares([...lugares, lugar]);
  };

  const filterLugarByName = (name: string) => {
    const concidencias = lugares.map((lugar) => {
      const filtrado = Boolean(
        lugar.name.toLowerCase().includes(name.toLowerCase())
      );
      return { ...lugar, filtrado };
    });

    setLugares(concidencias);
  };

  const addToFavorite = (id: number) => {
    const newLugares = lugares.map((lugar) => {
      if (lugar.id === id) {
        return { ...lugar, favorito: !lugar.favorito };
      }
      return lugar;
    });

    setLugares(newLugares);
  };

  return (
    <LugarContext.Provider
      value={{ lugares, addLugar, filterLugarByName, addToFavorite }}
    >
      {children}
    </LugarContext.Provider>
  );
};

// Hook para usar el contexto
export const useLugar = () => {
  const context = useContext(LugarContext);
  if (!context) {
    throw new Error("useLugar debe ser usado dentro de un LugarProvider");
  }
  return context;
};
