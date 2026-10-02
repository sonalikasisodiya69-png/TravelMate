import React, { useState } from "react";

function SmartCounter() {
  const [count, setCount] = useState(10);

  const increaseOne = () => {
    setCount(count + 1);
  };

  const decreaseOne = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increaseFive = () => {
    setCount(count + 5);
  };

  const reset = () => {
    setCount(10);
  };

  return (
    <div>
      <h2>1.Smart Counter :-</h2>

      <h2>{count}</h2>

      <p>{count % 2 === 0 ? "Even" : "Odd"}</p>

      <button onClick={increaseOne}>+1</button>
      &nbsp;
      <button onClick={decreaseOne}>-1</button>
      &nbsp;  
      <button onClick={increaseFive}>+5</button>
      &nbsp;
      <button onClick={reset}>Reset</button>
      &nbsp;
    </div>
  );
}

export default SmartCounter;