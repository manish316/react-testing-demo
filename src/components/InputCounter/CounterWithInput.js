import React, { useEffect, useState } from "react";

const CounterWithInput = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const [inputValue, setInputValue] = useState(0);
  return (
    <div>
      <div data-testid={"count-div"}>{count}</div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      ></input>
      <button
        onClick={() => setCount(inputValue == "" ? 0 : parseInt(inputValue))}
      >
        Set
      </button>
    </div>
  );
};

export default CounterWithInput;
