import Counter from "./classCounter";
import ClassCounterone from "./ClassCounterOne";
import HooksCounter from "./HooksCounter";

const App = () => {
  return (
    <>
      <h1>hello world</h1>
      {/* <Counter /> */}
      {/* <HooksCounter /> */}
      <p>Conditionally run effects</p>
      <ClassCounterone />
    </>
  );
};

export default App;
