import { useState } from "react";
import "./App.css";

function App() {
  const [counter, SetCounter] = useState(0);
  return (
    <div className="App">
      <button onClick={() => SetCounter((counter) => counter - 1)}> - </button>
      <span>{counter}</span>
      <button onClick={() => SetCounter((counter) => counter + 1)}> + </button>
    </div>
  );
}

export default App;
