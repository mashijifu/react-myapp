import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Tasks: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Tasksコンポーネント</h2>
      <button onClick={() => navigate('task')}>Task</button>
      <Outlet />
    </div>
  );
};

export default Tasks;
