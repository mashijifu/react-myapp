import React from 'react';
import { useState } from 'react';

interface Courses {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [name, setName] = useState("");
  const [checkedCourse, setCheckedCourse] = useState(1);

  const courses: Courses[] = [
    { id: 1, name: "Vueコース"},
    { id: 2, name: "Angularコース"},
    { id: 3, name: "Reactコース"},
  ];

  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  const handleChangeCourse = (e: any) => {
    setCheckedCourse(Number(e.target.value));
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name);
    console.log(checkedCourse);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>氏名: </label>
        <input
          type="text"
          value={name}
          onChange={handleChangeName} 
        />
      </div>
      <div>
        <label>コース: </label>
        {
          courses.map((course) => {
            return (
              <label htmlFor={course.id.toString()} key={course.id}>
                <input
                  id={course.id.toString()}
                  type="radio"
                  name="course"
                  value={course.id}
                  checked={checkedCourse === course.id}
                  onChange={handleChangeCourse}
                />
                {course.name}
              </label>
            );
          })
        }
      </div>
      <div>
        <input type="submit" value="送信" />
      </div>
    </form>
  );
};

export default App;
