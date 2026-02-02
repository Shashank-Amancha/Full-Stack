import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Increment
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement (prevent below zero)
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  // Reset
  const reset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Application</h1>
      <h2>Count: {count}</h2>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement} style={{ margin: "0 10px" }}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>

      {/* BONUS MESSAGE */}
      {count === 5 && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          🎉 You reached 5!
        </p>
      )}

      {/* OPTIONAL MESSAGE when trying to go below zero */}
      {count === 0 && (
        <p style={{ color: "red" }}>
          Counter cannot go below zero
        </p>
      )}
    </div>
  );
}

export default Counter;
