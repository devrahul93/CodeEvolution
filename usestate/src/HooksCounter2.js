import { useState } from "react";

function HooksCounter2() {
  const prevState = 0;
  const [count, setCount] = useState(prevState);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(prevState)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => (count <= 0 ? prevState : setCount(count - 1))}>
        Decrement
      </button>
      <button onClick={() => setCount(count + 5)}>add by 5</button>
    </>
  );
}

export default HooksCounter2;
