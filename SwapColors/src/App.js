import Box from "./Box";
import "./index.css";
import { useState } from "react";

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="App m-2 d-flex">
      {Array(15)
        .fill()
        .map((item, index) => {
          return (
            <Box
              key={index}
              index={index}
              coloredBox={activeIndex}
              setColoredBox={() => setActiveIndex(index)}
            />
          );
        })}
    </div>
  );
}
