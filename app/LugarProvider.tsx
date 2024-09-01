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
      id: 29,
      name: "Cristo de la Concordia",
      location: "Cerro San Pedro",
      image:
        "https://www.boliviaentusmanos.com/imagenes/ciudades/650x400/cochabamba.jpg",
      favorito: false,
      ruta: "/cristo",
      categories: ["monumentos"],
    },
    {
      id: 30,
      name: "Monumento las Heroínas de la Coronilla",
      location: "Cercado",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Heroinas_de_la_Coronilla%2C_Cochabamba%2C_Bolivia-1-Erik_Garcia_Alvarado.jpg/2560px-Heroinas_de_la_Coronilla%2C_Cochabamba%2C_Bolivia-1-Erik_Garcia_Alvarado.jpg",
      favorito: false,
      ruta: "/heroinas",
      categories: ["monumentos"],
    },
    {
      id: 31,
      name: "Monumento a Simón Bolívar",
      location: "Plaza Bolívar",
      image:
        "https://www.lostiempos.com/sites/default/files/media_imagen/2017/7/15/3_c1_simon_bolivar.jpg",
      favorito: false,
      ruta: "/simonBolivar",
      categories: ["monumentos"],
    },
    {
      id: 32,
      name: "Monumento a Gualberto Villarroel",
      location: "Cercado",
      image:
        "https://assets.isu.pub/document-structure/200301205022-a4c1af5bee7f42cf95de5e328d27e5ac/v1/91439035b64462d574201176592c05fe.jpg",
      favorito: false,
      ruta: "/villarroel",
      categories: ["monumentos"],
    },
    {
      id: 33,
      name: "Monumento a Eduardo Abaroa",
      location: "Plaza Abaroa",
      image:
        "https://i0.wp.com/amun.bo/wp-content/uploads/2024/01/WhatsApp-Image-2023-03-23-at-08.02.02-1.webp?fit=696%2C464&ssl=1",
      favorito: false,
      ruta: "/abaroa",
      categories: ["monumentos"],
    },
    {
      id: 34,
      name: "Monumento al Soldado Desconocido",
      location: "Cercado",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9LccQCzzKGo-FuUYr3QKsA3PNzqvCqcYB1g&s",
      favorito: false,
      ruta: "/soldado",
      categories: ["monumentos"],
    },
    {
      id: 35,
      name: "Monumento Condor",
      location: "Cercado",
      image:
        "https://media-cdn.tripadvisor.com/media/photo-s/06/fa/d8/0f/plaza-14-de-septiembre.jpg",
      favorito: false,
      ruta: "/condor",
      categories: ["monumentos"],
    },
    //DESDE AQUI SON LAS PLAZAS
    {
      id: 36,
      name: "Plaza 14 de Septiembre",
      location: "Cercado",
      image:
        "https://www.ibolivia.org/wp-content/uploads/2018/10/plaza-14-de-septiembre.jpg",
      favorito: false,
      ruta: "/septiembre",
      categories: ["plazas"],
    },
    {
      id: 37,
      name: "Plaza Colón",
      location: "Cercado",
      image:
        "https://as1.ftcdn.net/v2/jpg/01/84/56/66/1000_F_184566688_yzDa2Gskp5JnZkJirzMfjF156nuiyvNn.jpg",
      favorito: false,
      ruta: "/colon",
      categories: ["plazas"],
    },
    {
      id: 38,
      name: "Plaza Sucre",
      location: "Cercado",
      image:
        "https://guia.lostiemposvideos.com/wp-content/uploads/2022/12/15_me_2_andiaaaaa-min-1.jpg",
      favorito: false,
      ruta: "/sucre",
      categories: ["plazas"],
    },
    {
      id: 39,
      name: "Plaza de las Banderas",
      location: "Av. Libertador",
      image:
        "https://as1.ftcdn.net/v2/jpg/01/79/99/66/1000_F_179996670_glZxlTO8viCNRMdGpwEmhmxcO32He4lB.jpg",
      favorito: false,
      ruta: "/banderas",
      categories: ["plazas"],
    },
    {
      id: 40,
      name: "Plaza Quintanilla",
      location: "Cercado",
      image:
        "https://www.lostiempos.com/sites/default/files/media_imagen/2016/7/4/2-_a_5-_lopezzz.jpg",
      favorito: false,
      ruta: "/quintanilla",
      categories: ["plazas"],
    },
    {
      id: 41,
      name: "Plaza de Cala Cala",
      location: "Cala Cala",
      image:
        "https://as2.ftcdn.net/v2/jpg/01/80/44/23/1000_F_180442314_Q2iYckpULS0BxyU6bDYJZmMixLY0GWqX.jpg",
      favorito: false,
      ruta: "/calacala",
      categories: ["plazas"],
    },
    {
      id: 42,
      name: "Plaza San Sebastián",
      location: "Cercado",
      image:
        "https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2018/6/1/14_me_2_rochaaa.jpg?itok=e0tbwDU8",
      favorito: false,
      ruta: "/sanSebastian",
      categories: ["plazas"],
    },
    {
      id: 43,
      name: "Plaza Tarija",
      location: "Zona norte",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Plaza_in_Tarija.jpg/640px-Plaza_in_Tarija.jpg",
      favorito: false,
      ruta: "/tarija",
      categories: ["plazas"],
    },
    {
      id: 44,
      name: "Plazuela Corazonistas",
      location: "Cercado",
      image:
        "https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2021/11/28/whatsapp_image_2021-11-28_at_13.20.56_4.jpeg?itok=d1yjfruu",
      favorito: false,
      ruta: "/corazonistas",
      categories: ["plazas"],
    },
    //DESDE AQUI INICIA LAS AREAS VERDES
    {
      id: 45,
      name: "Parque Nacional Tunari",
      location: "Tunari",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Laguna_del_Parque_Nacional_Tunari%2C_Cochabamba%2C_Bolivia.jpg",
      favorito: false,
      ruta: "/parqueTunari",
      categories: ["verdes"],
    },
    {
      id: 46,
      name: "Parque Mariscal Santa Cruz",
      location: "Cercado",
      image:
        "https://www.boliviaentusmanos.com/turismo/imagenes/parque-mariscal-andres-de-santa-cruz-acuatico-1.jpg",
      favorito: false,
      ruta: "/mariscal",
      categories: ["verdes"],
    },
    {
      id: 47,
      name: "Parque de la Familia",
      location: "Zona central",
      image:
        "https://www.boliviaentusmanos.com/turismo/imagenes/parque-de-la-familia-1.jpg",
      favorito: false,
      ruta: "/familia",
      categories: ["verdes"],
    },
    {
      id: 48,
      name: "Parque Lincoln",
      location: "Zona norte",
      image:
        "https://as2.ftcdn.net/v2/jpg/01/93/85/31/1000_F_193853112_raNDjPeSiMlgpMgZdlb18ZSQce8dGE6y.jpg",
      favorito: false,
      ruta: "/lincoln",
      categories: ["verdes"],
    },
    {
      id: 49,
      name: "Jardín Botánico Martín Cárdenas",
      location: "Cercado",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Palmeras_en_el_Jard%C3%ADn_Bot%C3%A1nico_Mart%C3%ADn_C%C3%A1rdenas_de_Cochabamba.jpg/1200px-Palmeras_en_el_Jard%C3%ADn_Bot%C3%A1nico_Mart%C3%ADn_C%C3%A1rdenas_de_Cochabamba.jpg",
      favorito: false,
      ruta: "/botanico",
      categories: ["verdes"],
    },
    {
      id: 50,
      name: "Parque Ecológico de la Angostura",
      location: "Angostura",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/3/33/Laguna_Angostura_near_Cochabamba%2C_Bolivia.jpg",
      favorito: false,
      ruta: "/angostura",
      categories: ["verdes"],
    },
    {
      id: 21,
      name: "Parque Kanata",
      location: "Zona sur",
      image:
        "https://dondebolivia.com/wp-content/uploads/cache/images/7-_b_1-_andiaaa/7-_b_1-_andiaaa-2944062932.jpg",
      favorito: false,
      ruta: "/kanata",
      categories: ["verdes"],
    },
    {
      id: 52,
      name: "Parque Demetrio Canelas",
      location: "Zona norte",
      image:
        "https://as2.ftcdn.net/v2/jpg/01/41/04/61/1000_F_141046198_bBgIp1d5FRj11TVO20HIamRygVzaeF15.jpg",
      favorito: false,
      ruta: "/demetrio",
      categories: ["verdes"],
    },
    {
      id: 53,
      name: "Parque Ex Combatientes",
      location: "Zona central",
      image:
        "https://t4.ftcdn.net/jpg/01/40/80/85/360_F_140808543_ZqRVuO7LsqYqKMiQF7otsYP1n7B7PKSp.jpg",
      favorito: false,
      ruta: "/combatientes",
      categories: ["verdes"],
    },
    {
      id: 54,
      name: "Parque Fidel Anze",
      location: "Zona norte",
      image:
        "https://manfredreyesvilla.com/sites/default/files/styles/wide/public/2023-10/Imagen%20de%20WhatsApp%202023-10-04%20a%20las%2012.40.27_83c12b1a.jpg?itok=hBXycZ2t",
      favorito: false,
      ruta: "/fidelAnze",
      categories: ["verdes"],
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
