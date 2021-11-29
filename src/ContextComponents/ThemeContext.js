import React, { useState, useContext } from "react";

// to control state
const ThemeContext = React.createContext();
// to use toogleTheme
const ThemeUpdateContext = React.createContext();

//custom hook, so we can pass the context to children
export function useTheme() {
  return useContext(ThemeContext);
}

//custom hook, so we can pass the toggle context to children
export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((darkTheme) => !darkTheme);
  }
  /* ============== FLOW =================
1. ThemeContext gives the state (dark Theme) to ThemeUpdateContext
2. TheUpdateContext uses the state (dark Theme) in function (toggleTheme)
3. They pass both state and function to the children
*/
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
