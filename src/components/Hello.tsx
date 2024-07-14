import React from 'react';

interface Props {
  text: string;
}

const Hello: React.FC<Props> = (props) => {

  return (
    <div>
      <h1>Helloコンポーネント</h1>
      <p>Hello,{props.text}</p>
    </div>
  );
};

export default Hello;
