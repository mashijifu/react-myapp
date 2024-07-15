import React, { useContext } from 'react';
import { CounterContextType, CounterContext } from '../App';

const Counter: React.FC = () => {
  const { text, count, setCount } = useContext<CounterContextType>(CounterContext);

  return (
    <div>
      <p>{count}</p>
      <p>{text}</p>
      <button onClick={() => setCount(count + 1)}>ボタン</button>
    </div>
  );
};

export default Counter;
