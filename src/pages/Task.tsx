import React from 'react';
import { useParams } from 'react-router-dom';

const Task: React.FC = () => {
  const { taskId } = useParams();

  return (
    <div>
      <h3>Taskコンポーネント</h3>
      <p>パラメータ：{taskId}</p>
    </div>
  );
};

export default Task;
