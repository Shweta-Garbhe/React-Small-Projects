import "./styles.css";
import { useState } from "react";

export default function App() {
  const [activeContent, setActiveContent] = useState(1);

  return (
    <div className="App">
      {Array(15)
        .fill(0, 1)
        .map((item, index) => {
          return (
            <button
              style={{ padding: "2rem", margin: "1rem" }}
              className={activeContent === index ? "active" : ""}
              onClick={() => setActiveContent(index)}
            >
              {index}
            </button>
          );
        })}
    </div>
  );
}
