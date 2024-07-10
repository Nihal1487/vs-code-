import React, { useState } from "react";

const App = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setTime] = useState(time);

  const UpdateTime = () => {
    let ctime = new Date().toLocaleTimeString();
    setTime(ctime);
  };

  return (
    <>
      <h1>{ctime}</h1>
      <button onClick={UpdateTime}>Get time</button>
    </>
  );
};

export default App;
