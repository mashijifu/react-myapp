import React from 'react';

const App: React.FC = () => {
  const items: Array<string> = [
    "React", "Vue", "Angular"
  ];

  const itemList = items.map((item, index) =>
    <li key={index}>
      { item }
    </li>
  );

  return (
    <ul>{ itemList }</ul>
  );
};

export default App;
