import "./styles.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalTimer;

    if (isRunning) {
      intervalTimer = setInterval(() => {
        setTimer(timer + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalTimer);
    };
  }, [isRunning, timer]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setTimer(0);
    setIsRunning(false);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  return (
    <div className="App">
      <p>{timer}</p>
      <button
        className={isRunning ? "btn btnPause" : "btn btnStart"}
        onClick={isRunning ? handlePause : handleStart}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      &nbsp; &nbsp;
      <button className="btn btnReset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
