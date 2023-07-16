import "./styles.css";
import React, { useState } from "react";
import Child from "./Child";

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      {counter} <br />
      <br />
      <Child setCounter={() => setCounter(counter + 1)} />
    </div>
  );
}
