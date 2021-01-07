import React from 'react';
import style from './input.module.scss';

type Props = {
  inputValue: string
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;

};

export const ChoseNumber = ({ inputValue, inputHandler }: Props) => {

  return (
    <div>
      <input 
        type="text"
        value={inputValue} 
        onChange={(e)=> inputHandler(e)}
        className={style.dropdown}
      />
    </div>
  );
};