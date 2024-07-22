import React from 'react';
import './App.css';
import { useState, useMemo } from 'react';


const App: React.FC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const double = (count: number): number =>  {
    let i = 0;
    while (i < 1000000000) i++;
    return count * 2;
  }

  const doubleCount = useMemo(() => double(count1), [count1]);

  // useMemoを利用しない場合の記述
  // const doubleCount = double(count1);

  return (
    <div className='App'>
      <p>Count1:{count1}</p>
      <p>doubleCount:{doubleCount}</p>
      <button onClick={()=>setCount1(count1 + 1)}>加算1</button>
      <p>Count2:{count2}</p>
      <button onClick={()=>setCount2(count2 + 1)}>加算2</button>
    </div>
  );
};

export default App;
