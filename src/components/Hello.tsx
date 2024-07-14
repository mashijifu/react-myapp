import React from 'react';

interface Props {
  text: string;
  onClickButton: () => void;
}

const Hello: React.FC<Props> = (props) => {

  return (
    <div>
      <h1>Helloコンポーネント</h1>
      <p>Hello,{props.text}</p>
      <button onClick={props.onClickButton}>ボタン</button>
    </div>
  );
};

export default Hello;
