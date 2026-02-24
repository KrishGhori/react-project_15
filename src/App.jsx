import { useCallback, useState } from "react";
import "./App.css";
import ChildComponents from "./Components/ChildComponents";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div className="app">
      <h1>useCallback + memo</h1>

      <button className="btn" onClick={handleClick}>
        Increment (Parent)
      </button>

      <p className="count">{count}</p>

      <ChildComponents
        buttonName="Increment (Child)"
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;