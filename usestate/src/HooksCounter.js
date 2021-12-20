import { useState } from "react";

const HooksCounter = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={increaseCount}>count {count}</button>
    </>
  );
};

export default HooksCounter;
