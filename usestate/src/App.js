import ClassCounter from "./ClassCounter";
import ClassCounterTwo from "./ClassCounter2";
import HooksCounter from "./HooksCounter";
import HooksCounter2 from "./HooksCounter2";
import HooksCounterThree from "./HooksCounter3";
import HooksCounterFour from "./HooksCounterFour";

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
      <div>
        <p>Use State with Array</p>
        <center>
          <HooksCounterFour />
        </center>
      </div>
    </>
  );
}

export default App;
