/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import style from './field.module.scss';

type Props = {
  x: number;
  y: number;
  id: string;
  open: boolean;
  bomb: boolean;
  openHandler: (x: number, y: number) => void;
  bombNumber: number;
  numberColor: string;
};

export const Squer = ({ x, y, id, openHandler, open, bomb, bombNumber, numberColor }: Props) => {

  return (
    <>
      {!open ?
        <button
          type='button'
          className={style.squer}
          style={{ top: `${y}%`, left: `${x}%` }}
          onClick={() => openHandler(x, y)}
        />
        :
        <button
          type='button'
          className={`${style.squer} ${style.squerOpen}`}
          style={{ top: `${y}%`, left: `${x}%`, color: `${numberColor}` }}
          onClick={() => openHandler(x, y)}
          
        >{bombNumber}
        </button>}
      {bomb && open &&
        <button
          type='button'
          className={`${style.squer} ${style.squerBomb}`}
          style={{ top: `${y}%`, left: `${x}%` }}
          onClick={() => openHandler(x, y)}
        />}


    </>

  );
};