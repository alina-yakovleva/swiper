import { createContext, useContext, useState } from "react";

const Context = createContext();

export const PageProvider = ({ children }) => {
  const state = useState(0);

  return <Context.Provider value={state}>{children}</Context.Provider>;
};

export const usePage = () => useContext(Context);
