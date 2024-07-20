import React from 'react';
import { useState } from 'react';

const App: React.FC = () => {
  // フォームの各項目をstateで管理
  const [name, setName] = useState("");
  const [course, setCourse] = useState(1);
  const [checkedLanguages, setCheckedLanguages] = useState({
    1: false, 2: false, 3: false, 4: false
  });

  // 氏名の入力内容の変更を検知してstateを書き換える
  const handleChangeName = (e: any) => {
    setName(e.target.value);
  };

  // コース選択ボックスの選択変更を検知してstateを書き換える
  const handleChangeCourse = (e: any) => {
    setCourse(e.target.value);
  };

  // 言語チェックボックスのチェック有無を検知してstateを書き換える
  const handleChangeLanguage = (e: any) => {
    setCheckedLanguages({
      ...checkedLanguages,
      [e.target.id]: e.target.checked
    });
  };

  // 送信ボタンクリック時の処理
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name);
    console.log(course);
    console.log(checkedLanguages);
  };

  const courses = [
    { id: 1, name: "React"},
    { id: 2, name: "Vue"},
    { id: 3, name: "Angular"},
  ];

  const languages = [
    { id: 1, name: "HTML", checked: false},
    { id: 2, name: "CSS", checked: false},
    { id: 3, name: "JavaScript", checked: false},
    { id: 4, name: "TypeScript", checked: false},
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>氏名: </label>
        <input type="text" name="name" value={name} onChange={handleChangeName} />
      </div>
      <div>
        <label>コース: </label>
        <select value={course} onChange={handleChangeCourse}>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        {languages.map((language) => {
          return (
            <div key={language.id}>
              <label htmlFor={language.id.toString()}>{language.name}: </label>
              <input
                id={language.id.toString()}
                type="checkbox"
                value={language.id}
                onChange={handleChangeLanguage} />
            </div>
          )
        })}
      </div>
      <div>
        <input type="submit" value="送信" />
      </div>
    </form>
  );
};

export default App;
