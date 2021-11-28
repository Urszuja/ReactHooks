/*
State vs ref 
~ both persist between render of component,
BUT ref doesn't re-render component when it changes
ref is seperated from update cycle
*/

import React from "react";
import { useState, useEffect, useRef } from "react";

function AppUseRef() {
  const [name, setName] = useState("");
  /* ================ FIRST USE CASE =================
  const renderCount = useRef(1); // object {current: 0}
  //remember to pass object.current

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  + <h3>This has re-rendered {renderCount.current} times</h3>
*/

  //second use case -  !!!! like QUERYSELECTOR !!!!!!!

  const inputRef = useRef();

  function focus() {
    inputRef.current.focus(); //inputRef is an object {current: ""}
    // inputRef.current.value = 'some value' <- NO-NO - doesn't update state
    // appendChild <- NO-NO
  }

  // third use case - storing previous state

  const prevName = useRef("");

  useEffect(() => {
    prevName.current = name;
  }, [name]); // watching only name

  return (
    <div className="main">
      <h1>Simple example of React useRef hook</h1>
      <div className="container">
        <input
          type="text"
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="nameTag">
          My name is {name}, but it used to be {prevName.current}
        </div>
        <button onClick={focus}>Focus</button>
      </div>
    </div>
  );
}

export default AppUseRef;
