import React from 'react';
import Course from './components/Course';

interface Courses {
  id: number;
  name: string;
  release: Date;
}

const App: React.FC = () => {
  const courses: Courses[] = [
    {id: 1, name: "Vueコース", release: new Date(2023, 2, 10)},
    {id: 2, name: "Angularコース", release: new Date(2023, 2, 17)},
    {id: 3, name: "Reactコース", release: new Date(2023, 3, 24)},
  ];

  return (
    <div>
      <ul>
        {
          courses.map((course: Courses) => {
            return (
              <Course
                key={course.id}
                id={course.id}
                name={course.name}
                release={course.release}
              />
            );
          })
        }
      </ul>
    </div>
  );
};

export default App;
