import { useState } from "react";
import ClassMouse from "./ClassMouse";
import HooksMouse from "./HooksMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);
  return (
    <>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HooksMouse />}
    </>
  );
};

export default MouseContainer;
