import React from "react";

function BtnComponent(props) {
  const zero = props.status === 0 ? (
    <button
      className="stopwatch-btn stopwatch-btn-gre"
      onClick={props.start}
    >
      Start
    </button>
  ) : ""

  const one = props.status === 1 ? (
    <div><button
      className="stopwatch-btn stopwatch-btn-red"
      onClick={props.stop}
    >
      Stop
    </button>
    <button
    className="stopwatch-btn stopwatch-btn-yel"
    onClick={props.reset}
  >
    Reset
  </button>
</div> ): ""

const two = props.status === 2 ? (
  <div><button
    className="stopwatch-btn stopwatch-btn-gre"
    onClick={props.resume}
  >
    Resume
  </button>
  <button
  className="stopwatch-btn stopwatch-btn-yel"
  onClick={props.reset}
>
  Reset
</button>
</div> ): "";

  return (
    <div>
      {zero}
      {one}
      {two}
    </div>
  );
}

export default BtnComponent;
