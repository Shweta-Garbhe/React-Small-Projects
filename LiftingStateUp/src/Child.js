import "./styles.css";
import React from "react";

export default function Child({ setCounter }) {
  return <button onClick={() => setCounter()}> Click me </button>;
}
