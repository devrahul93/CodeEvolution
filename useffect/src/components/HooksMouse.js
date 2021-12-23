import { useEffect, useState } from "react";

const HooksMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  return (
    <center>
      <h2>X:{x}</h2>
      <h2>y:{y}</h2>
    </center>
  );
};

export default HooksMouse;
