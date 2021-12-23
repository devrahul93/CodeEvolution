import { useEffect, useState } from "react";

const HooksCounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `clicked ${count} times`;
  }, [count]);

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
      <p>Heloo My name is {name}</p>
    </>
  );
};

export default HooksCounterOne;
