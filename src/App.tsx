import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [ countByOne, setCountByOne ] = useState(0);
  const [ countByFive, setCountByFive ] = useState(0);
  const [ sum, setSum ] = useState(0);

  const incrementOne = (): void => {
    setCountByOne(countByOne + 1);
  };

  const incrementFive = (): void => {
    setCountByFive(countByFive + 5);
  };

  useEffect(() => {
    setSum(countByOne + countByFive);
  }, [countByOne, countByFive]);

  return (
    <div className="App">
      <h1>Reactコース</h1>
      <p>{ countByOne }</p>
      <button onClick={incrementOne}>1加算</button>
      <p>{ countByFive }</p>
      <button onClick={incrementFive}>5加算</button>
      <p>合計：{ sum }</p>
    </div>
  );
};

export default App;
