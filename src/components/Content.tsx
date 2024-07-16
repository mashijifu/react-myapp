import React from 'react';
import Counter from './Counter';
import { useContext } from 'react';
import { CountContext, CountContextType } from '../App';

const Content: React.FC = () => {
  const { count }: CountContextType = useContext<CountContextType>(CountContext);

  return (
    <>
      <p>{ count }</p>
      <Counter />
    </>
  );
};

export default Content;
