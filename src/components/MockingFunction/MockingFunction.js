import React from "react";

const MockingFunction = ({ count, incrementHandler, decrementHandler }) => {
  return (
    <>
      <p>count{count}</p>
      {incrementHandler && (
        <button onClick={incrementHandler}>Increment</button>
      )}
      {decrementHandler && (
        <button onClick={decrementHandler}>Decrement</button>
      )}
    </>
  );
};

export default MockingFunction;
