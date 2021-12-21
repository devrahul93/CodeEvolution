import ClassCounter from "./ClassCounter";
import ClassCounterTwo from "./ClassCounter2";
import HooksCounter from "./HooksCounter";
import HooksCounter2 from "./HooksCounter2";
import HooksCounterThree from "./HooksCounter3";

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
        <p>UseState With Previous State</p>
        <center>
          <HooksCounter2 />
          <ClassCounterTwo />
        </center>
      </div>
      <div>
        <p>UseState with Object</p>
        <center>
          <HooksCounterThree />
        </center>
      </div>
    </>
  );
}

export default App;
