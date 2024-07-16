import React from 'react';
import './App.css';
import { createContext, useState } from 'react';
import Content from './components/Content';

export type CountContextType = {
  count: number;
	setCount: (count: number) => void;
}

export const CountContext = createContext<CountContextType>({
  count: 0,
  setCount: () => {}
});

const App: React.FC = () => {
  const [ count, setCount ] = useState(0);

  const contextValue = {
    count, setCount
  }

  const clickAlert = (): void => {
    alert('ボタンがクリックされました');
  };

  return (
    <div className="App">
      <button onClick={clickAlert}>ボタン</button>
      <CountContext.Provider value={contextValue}>
        <Content />
      </CountContext.Provider>
    </div>
  );
};

export default App;
