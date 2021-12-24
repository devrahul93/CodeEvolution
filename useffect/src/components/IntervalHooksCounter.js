import { useEffect, useState } from "react";

const IntervalHooksCounter = () => {
  const [count, setCount] = useState(0);

  let click = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    let interval = setInterval(click, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return (
    <>
      <center>
        <h1>{count}</h1>
      </center>
    </>
  );
};

export default IntervalHooksCounter;
