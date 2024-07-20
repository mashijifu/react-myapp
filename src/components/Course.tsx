import React from 'react';

interface Props {
  id: number;
  name: string;
  release: Date;
}

const Course: React.FC<Props> = (props) => {
  const formatDate: string = `${props.release.getFullYear()}年${props.release.getMonth()}月${props.release.getDate()}日`;

  return (
    <li>
      <p>{ props.name }</p>
      <p>公開日：{ formatDate }</p>
    </li>
  );
};

export default Course;
