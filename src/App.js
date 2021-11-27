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
    <div className="container">
      <h3>{count > 0 ? `How many ${dish} ?` : `C'mon order some dumplings`}</h3>
      <>
        <button onClick={decrementtOrder}> - </button>
        <span>
          {count} {dish}
        </span>
        <button onClick={incrementOrder}> + </button>
      </>
    </div>
  );
}

export default App;
