import React from 'react';
import { useState } from 'react';

const App: React.FC = () => {
  const [ count, setCount ] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  let isMultipleOfThree: boolean = false;
  if (count % 3 === 0 && count !== 0) {
    isMultipleOfThree = true;
  }

  return (
    <div>
      <p style={ isMultipleOfThree ? { color: "red" } : {} }>{ count }</p>
      <button onClick={increment}>+</button>
    </div>
  )
};

export default App;
