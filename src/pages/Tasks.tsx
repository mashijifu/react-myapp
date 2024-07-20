import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Tasks: React.FC = () => {
  const navigate = useNavigate();

  const tasks = [
    { id: 1, title: "Reactコースの学習" },
    { id: 2, title: "Vueコースの学習" },
    { id: 3, title: "Angularコースの学習" },
  ];

  return (
    <div>
      <h2>Tasksコンポーネント</h2>
      {tasks.map((task) => {
        return (
          <div key={task.id}>
            {task.title}
            <button onClick={() => navigate(task.id.toString())}>詳細</button>
          </div>
        )
      })}
      <Outlet />
    </div>
  );
};

export default Tasks;
