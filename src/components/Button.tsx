import React from 'react';
import '../styles/button.css';

const Button: React.FC = () => {
  const onClickButton = (): void => {
    alert('Reactコースを順調に学習中！');
  };

  return (
    <button
      className="blueberry M"
      onClick={onClickButton}
    >
      ボタンコンポーネント
    </button>
  );
};

export default Button;
