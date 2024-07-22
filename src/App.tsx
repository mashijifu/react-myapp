import React from 'react';
import { useState, useMemo } from "react";

const App: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  const heavyProcess = (count: number): number =>  {
    let i = 0;
    while (i < 1000000000) i++;
    return i + count;
  }

  const heavyCount = useMemo(() => heavyProcess(count2), [count2]);

  const onChangeInputValue = (e: any) => {
    setInputValue(Number(e.target.value));
  }

  return (
    <div>
      <input type="number" onChange={(onChangeInputValue)}/>
      <div>
        <p>Count: {count1}</p>
        <button onClick={()=>setCount1(count1 + inputValue)}>ボタン1</button>
      </div>
      <div>
        <p>HeavyCount: {heavyCount}</p>
        <button onClick={()=>setCount2(count2 + inputValue)}>ボタン2</button>
      </div>
    </div>
  );
};

export default App;
