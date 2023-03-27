import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [data, setData] = useState({ characters: [] });

  useEffect(() => {
    const fetchData = async () => {
      const characters = await axios.get(`${BASE_URL}/character`);
      setData({ characters: characters.data.results });
    };

    fetchData();
  }, []);

  return <ApiContext.Provider value={data}>{children}</ApiContext.Provider>;
};
