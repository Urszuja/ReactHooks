/*
Uses of useMemo:
1. to prevent slow functions from running, every time component runs/ changes only if function input changes
2. to ensure that reference of an object or array is the same, unless their content changes
*/
import React from "react";
import { useState, useEffect, useMemo } from "react";

function AppUseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  // wrapping an object in useMemo ensures, that it only when update, when dark changes
  // without it, it would update every time sth changes, themeStyles would have another reference
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  useEffect(() => {
    console.log("theme changed");
  }, [themeStyles]);

  return (
    <div className="main">
      <h1>Simple example of React useMemo hook</h1>
      <div className="container">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Change Theme
        </button>
        <div style={themeStyles}>{doubleNumber}</div>
      </div>
    </div>
  );
}

function slowFunction(number) {
  console.log("Calling slow function");
  for (let i = 0; i < 1000000000000000; i++) {
    return number * 2;
  }
}

export default AppUseMemo;
