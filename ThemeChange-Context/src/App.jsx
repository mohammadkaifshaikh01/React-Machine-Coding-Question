import React from "react";
import { useContext } from "react";
import { Context } from "./context/ContextApi";

const App = () => {
  const { theme, setTheme } = useContext(Context);

  const handleToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="app-container">
      <div className={theme}>
        <h1>{theme === "light" ? "Najim Farzi" : "Kaif Bhaijaan"}</h1>
        <button onClick={handleToggle}>
          {theme === "light" ? "Change To Dark" : "Change To Light"}
        </button>
      </div>
    </div>
  );
};

export default App;
