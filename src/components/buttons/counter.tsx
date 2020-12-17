import React from 'react';
import style from './buttons.module.scss';

type Props = {
  countingValue: number;
};

export const Counter = ({ countingValue }: Props) => {

  return (

    <h2 
      className={style.counterNumbers}
    >
      {countingValue}
    </h2>
  );
};