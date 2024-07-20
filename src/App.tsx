import React from 'react';
import { useState } from 'react';

const App: React.FC = () => {
  const [ count, setCount ] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p style={ count !== 0 && count % 3 === 0 ? { color: "red" } : { color: "black" }}>{ count }</p>
      <button onClick={increment}>+</button>
    </div>
  )
};

export default App;
