import "./styles.css";
import React, { useState, useEffect } from "react";
export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearInterval(interval);
  });
  return <div>Count: {count}</div>;
}
