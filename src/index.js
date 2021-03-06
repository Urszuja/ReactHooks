import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import AppUseEffect from "./AppUseEffect";
import AppUseMemo from "./AppUseMemo";
import AppUseRef from "./AppUseRef";
import AppUseContext from "./AppUseContext";
import AppUseReducer from "./AppUseReducer";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <AppUseReducer />
    <AppUseContext />
    <AppUseRef />
    <AppUseMemo />
    <App />
    <AppUseEffect />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
