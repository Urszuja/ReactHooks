import React, { useReducer } from "react";

function AppUseReducer() {
  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT": {
        return { count: state.count + action.amount };
      }
      case "DECREMENT": {
        return { count: state.count - action.amount };
      }
      case "RESET": {
        return { count: 0 };
      }
    }
  }
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div className="main">
      <h1>Simple example of React useReducer hook</h1>
      <div className="container">
        <button onClick={() => dispatch({ type: "DECREMENT", amount: 1 })}>
          -
        </button>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "INCREMENT", amount: 1 })}>
          +
        </button>
      </div>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset Button</button>
    </div>
  );
}

export default AppUseReducer;
