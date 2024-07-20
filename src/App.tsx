import React from 'react';
import { useState } from 'react';

const App: React.FC = () => {
  const [name, setName] = useState("");

  const changeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>氏名: </label>
        <input
          type="text"
          value={name}
          onChange={changeName}
        />
      </div>
      <div>
        <input type="submit" value="送信" />
      </div>
    </form>
  );
};

export default App;
