// without external file ThemeContext.js

import React from "react";
import { useState } from "react";
import FunctionContextComponent from "./ContextComponents/FunctionContextComponent";
//import ClassContextComponent from "./ContextComponents/ClassContextComponent";
// export fo functionality, to change styles in both components
// React.createContext().Provider ~master
export const ThemeContext = React.createContext(); // wrap all elements to be included in context

export default function AppUseEffect() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((darkTheme) => !darkTheme);
  }

  return (
    <div className="main">
      <h1>Simple example of useContext hook</h1>
      <div className="container">
        <ThemeContext.Provider value={darkTheme}>
          <button onClick={toggleTheme}>Toggle Theme</button>
          <FunctionContextComponent />
          <ClassContextComponent />
        </ThemeContext.Provider>
      </div>
    </div>
  );
}
