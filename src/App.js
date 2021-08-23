import React, { useState } from "react";
import DisplayComponent from "./components/DisplayComponent";
import BtnComponent from "./components/BtnComponent";
import "./App.css";

function App() {
  const initialTime = { ms: 0, s: 0, m: 0, h: 0 };
  const [time, setTime] = useState(initialTime);
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };
  var updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      ++updatedH;
      updatedM = 0;
    }
    if (updatedS === 60) {
      ++updatedM;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      ++updatedS;
      updatedMs = 0;
    }
    updatedMs++;
    setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };
  const resume = () => start();
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime(initialTime);
  };

  return (
    <div className="main-section">
      <h1>Stopwatch</h1>
      <div className="stopwatch">
        <DisplayComponent time={time} />
        <BtnComponent
          status={status}
          start={start}
          stop={stop}
          resume={resume}
          reset={reset}
        />
      </div>
    </div>
  );
}

export default App;
