import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [order, SetOrder] = useState({ count: 0, dish: "dumplings" });
  const count = order.count;
  const dish = order.dish;

  function incrementOrder() {
    SetOrder((prevOrder) => {
      return { ...prevOrder, count: prevOrder.count + 1 };
    });
  }

  function decrementtOrder() {
    SetOrder((prevOrder) => {
      return { ...prevOrder, count: prevOrder.count - 1 };
    });
  }

  return (
    <div className="main">
      <h1>Simple example of React useState hook</h1>
      <h3>{count > 0 ? `How many ${dish} ?` : `C'mon order some dumplings`}</h3>
      <div className="container">
        <button onClick={decrementtOrder}> - </button>
        <span>
          {count} {dish}
        </span>
        <button onClick={incrementOrder}> + </button>
      </div>
    </div>
  );
}

export default App;
