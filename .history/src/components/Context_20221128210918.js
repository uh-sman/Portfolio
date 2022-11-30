import { createContext, useState, useContext } from "react";
const StateContext = createContext();
export const ContextProvider = ({ children }) => {
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
  };
  const themeColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };
  return (
    <StateContext.Provider
      value={{
        setMode,
        themeColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
