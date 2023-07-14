import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [activeContent, settActiveContent] = useState(0);
  const content = [
    [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem",
    ],
    [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering",
    ],
    [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)",
    ],
  ];

  return (
    <div id="tabs">
      <menu>
        <button
          className={activeContent === 0 ? "active" : ""}
          onClick={() => settActiveContent(0)}
        >
          React Benefits
        </button>
        <button
          className={activeContent === 1 ? "active" : ""}
          onClick={() => settActiveContent(1)}
        >
          Core Features
        </button>
        <button
          className={activeContent === 2 ? "active" : ""}
          onClick={() => settActiveContent(2)}
        >
          Related Resources
        </button>
      </menu>
      <div id="tab-content">
        <ul>
          {content[activeContent].map((item) => {
            return <li> {item} </li>;
          })}
        </ul>
      </div>
    </div>
  );
}
