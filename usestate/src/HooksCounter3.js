import { useState } from "react";

const HooksCounterThree = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <>
      <div>
        FirstName :
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        ></input>
        LastName:
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        ></input>
        <p>
          My firstname is {name.firstName} and my lastName is {name.lastName}
        </p>
        <p>
          note:-usestate will not merge the state while setstate in class
          component will merge and update the state
        </p>
      </div>
    </>
  );
};

export default HooksCounterThree;
