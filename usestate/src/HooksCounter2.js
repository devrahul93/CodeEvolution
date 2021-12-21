import { useState } from "react";

function HooksCounter2() {
  const prevState = 0;
  const [count, setCount] = useState(prevState);

  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(prevState)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
      <button
        onClick={() =>
          count <= 0 ? prevState : setCount((prevCount) => prevCount - 1)
        }
      >
        Decrement
      </button>
      <button onClick={incrementFive}>add by 5</button>
    </>
  );
}

export default HooksCounter2;
