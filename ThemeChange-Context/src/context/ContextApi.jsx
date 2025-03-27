import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const Context = createContext();
const ContextApi = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const value = {
    theme,
    setTheme,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextApi;
