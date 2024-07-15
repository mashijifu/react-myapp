import React, { createContext, useState } from 'react';
import './App.css';
import Counter from './components/Counter';

export type CounterContextType = {
  text: string
  count: number;
  setCount: (count: number) => void;
};

export const CounterContext = createContext<CounterContextType>({
  text: "",
  count: 0,
  setCount: () => {}
});

const App: React.FC = () => {
  const [ count, setCount ] = useState(0);
  const text: string = "Reactコース";

  const increment = (): void => {
    setCount(count + 1);
  };

  const contextValue = {
    text, count, setCount
  };

  return (
    <div className="App">
      <CounterContext.Provider value={contextValue}>
        <Counter />
      </CounterContext.Provider>
    </div>
  );
};

export default App;
