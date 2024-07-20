import React from 'react';

const App: React.FC = () => {
  const num: number = 10;

  return (
    <h1>
      {(() => {
        if(num >= 10) {
          return <h1>TypeScript</h1>
        } else {
          return <h1>JavaScript</h1>
        }
      })()}
    </h1>
  )
};

export default App;
