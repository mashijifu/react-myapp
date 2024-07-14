import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Hello from './components/Hello';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Reactコース</h1>
      <Button />
      <Hello />
    </div>
  );
}

export default App;
