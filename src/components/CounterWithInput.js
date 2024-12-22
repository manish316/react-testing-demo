import React, { useEffect, useState } from "react";

const CounterWithInput = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  return (
    <div>
      <div>{count}</div>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(parseInt(e.target.value))}
      ></input>
      <button onClick={() => setCount(inputValue)}>Set</button>
    </div>
  );
};

export default CounterWithInput;
