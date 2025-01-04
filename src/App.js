import "./App.css";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import CounterWithInput from "./components/InputCounter/CounterWithInput";
import MockingFunction from "./components/MockingFunction/MockingFunction";
import { useCallback, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementHandler = useCallback(() => {
    setCount(count + 1);
  });
  const decrementHandler = useCallback(() => {
    setCount(count - 1);
  });
  return (
    <div className="App">
      {/* <Header />
      <Counter />
      <CounterWithInput /> */}
      <MockingFunction
        count={count}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
      />
    </div>
  );
}

export default App;
