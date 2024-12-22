import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import CounterWithInput from "./components/CounterWithInput";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Counter /> */}
      <CounterWithInput />
    </div>
  );
}

export default App;
