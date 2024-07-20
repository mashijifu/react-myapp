import React from 'react';
import { useContext } from 'react';
// import { CountContext, CountContextType } from '../App';

const Counter: React.FC = () => {
  // const { count, setCount }: CountContextType = useContext<CountContextType>(CountContext);

  // const increment = (): void => {
  //   setCount(count + 1);
  // };

  // const decrement = (): void => {
  //   setCount(count - 1);
  // };

  return (
    <div>
      {/* <button onClick={increment}>加算</button> */}
      {/* <button onClick={decrement}>減算</button> */}
    </div>
  );
};

export default Counter;
