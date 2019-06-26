import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  return (
    <div>
      <h1>Counter App</h1>
      <p>
        Count: <span data-cy='count'>{count}</span>
      </p>
      <button onClick={handleIncrement} data-cy='increment'>
        Increment
      </button>
      <button onClick={handleDecrement} data-cy='decrement'>
        Decrement
      </button>
    </div>
  );
};

export default App;
