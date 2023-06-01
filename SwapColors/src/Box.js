import { useEffect, useState } from "react";
const Box = ({ index, coloredBox, setColoredBox }) => {
  return (
    <div
      className={"box-container  " + (coloredBox == index && "bg-red")}
      onClick={() => setColoredBox()}
    >
      {index}
    </div>
  );
};

export default Box;
