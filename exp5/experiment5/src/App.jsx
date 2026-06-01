import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <h1>React Counter Application</h1>

        <h2 className="counter">{count}</h2>

        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>
            Increment (+)
          </button>

          <button onClick={() => setCount(count - 1)}>
            Decrement (-)
          </button>

          <button onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;