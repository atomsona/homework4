import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="counter-container">
      <h1 className="counter-display">Count: {count}</h1>
      <button className="counter-button" onClick={increment}>Increment</button>
      <button className="counter-button" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
