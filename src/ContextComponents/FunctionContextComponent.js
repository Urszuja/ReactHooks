import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";
// import of createContext from parent
// React.createContext().Consumer doesn't work here
// instead we pass that import to useContext hook

/* WORKFLOW:
1. useTheme custom hook passes state from ThemeContext to the component
2. useThemeUpdate hook passes toggle function from ThemeContext to the component
3. darkTheme gets state
4. toggleTheme gets toggle function 
*/
export default function FunctionContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  // button removed from AppUseContext
  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}> Function Theme</div>;
    </>
  );
}
