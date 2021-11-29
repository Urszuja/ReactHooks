import React from "react";
import FunctionContextComponent from "./ContextComponents/FunctionContextComponent";
//import ClassContextComponent from "./ContextComponents/ClassContextComponent";
import { ThemeProvider } from "./ContextComponents/ThemeContext";

// ThemeProvider controls states, updates and values provided as props for the children -> here FunctionContextComponent

export default function AppUseEffect() {
  return (
    <div className="main">
      <h1>Simple example of useContext hook</h1>
      <div className="container">
        <ThemeProvider>
          <FunctionContextComponent />
        </ThemeProvider>
      </div>
    </div>
  );
}
