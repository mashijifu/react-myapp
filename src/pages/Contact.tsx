import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const onClickButton = (): void => {
    navigate('/');
  }

  return (
    <div>
      <h2>Contactコンポーネント</h2>
      <button onClick={onClickButton}>Homeへ</button>
    </div>
  );
};

export default Contact;
