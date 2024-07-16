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

  const onClickButton = (text: string): void => {
    console.log(text);
  };

  const submitOut = (e: any): void => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <div className="App">
      <button onClick={() => {onClickButton("clickされました！")}}>
        ボタン
      </button>
      <form onSubmit={submitOut}>
        <button type="submit">送信</button>
      </form>
      <CountContext.Provider value={contextValue}>
        <Content />
      </CountContext.Provider>
    </div>
  );
};

export default App;
