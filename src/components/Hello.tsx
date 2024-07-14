import React from 'react';

interface Props {
  text: string;
  onClickButton: () => void;
  children: string;
}

const Hello: React.FC<Props> = (props) => {

  return (
    <div>
      <h1>{props.children}コンポーネント</h1>
      <p>{props.children},{props.text}</p>
      <button onClick={props.onClickButton}>ボタン</button>
    </div>
  );
};

export default Hello;
