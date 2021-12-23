import Counter from "./classCounter";
import ClassCounterone from "./ClassCounterOne";
import HooksCounter from "./HooksCounter";
import HooksCounterOne from "./Hookscounterone";

const App = () => {
  return (
    <>
      <h1>hello world</h1>
      {/* <Counter /> */}
      {/* <HooksCounter /> */}
      <p>Conditionally run effects</p>
      {/* <ClassCounterone /> */}
      <HooksCounterOne />
    </>
  );
};

export default App;
