import ClassCounter from "./ClassCounter";
import ClassCounterTwo from "./ClassCounter2";
import HooksCounter from "./HooksCounter";
import HooksCounter2 from "./HooksCounter2";

function App() {
  return (
    <>
      <div>
        <center>
          <ClassCounter />
          <HooksCounter />
        </center>
      </div>
      <div>
        <p>Counter With Previous State</p>
        <center>
          <HooksCounter2 />
          <ClassCounterTwo />
        </center>
      </div>
    </>
  );
}

export default App;
