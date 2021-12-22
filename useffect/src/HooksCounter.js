import { useEffect, useState } from "react";
const HooksCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
    </>
  );
};

export default HooksCounter;
