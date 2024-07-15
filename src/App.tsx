import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = (): void => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <h1>Reactコース</h1>
      <p>{ count }</p>
      <button onClick={increment}>加算</button>
    </div>
  );
};

export default App;
