import React from 'react';
import style from './field.module.scss';

type Props = {
  place: number;
  name: string;
  score: number;
};

export const Score = ({ place, name, score }: Props) => {

  return (
    <div className={style.socoreLine}>

      <span>{place + 1}. </span>
      <span>{name} </span>
      <span>: {score}s </span>
    </div>
  );
};