import React from 'react';
import './App.css';
import Button from './components/Button';

const App: React.FC = () => {
  const onClickButtonFirst = (): void => {
    alert('ボタン１をクリックしました！');
  };

  const onClickButtonSecond = (): void => {
    alert('ボタン２をクリックしました！');
  };

  const onClickButtonThird = (): void => {
    alert('ボタン３をクリックしました！');
  };

  return (
    <div className="App">
      <h1>Reactコース</h1>
      <Button
        text="ボタン１"
        color="blueberry"
        size="S"
        isHollow={false}
        onClickButton={onClickButtonFirst}
      />
      <Button
        text="ボタン２"
        color="grape"
        size="M"
        isHollow={true}
        onClickButton={onClickButtonSecond}
      />
      <Button
        text="ボタン3"
        color="apple"
        size="L"
        isHollow={false}
        onClickButton={onClickButtonThird}
      />
    </div>
  );
};

export default App;
