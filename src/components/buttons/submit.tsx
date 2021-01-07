import React from 'react';
import style from './buttons.module.scss';

type Props = {
  submittHandler: () => void;
  submitValue: string;
};

export const Submit = ({ submittHandler, submitValue }: Props) => {
  
  return (
    <button
      type='button'
      onClick={() => submittHandler()}
      className={style.submitButton}
    >
      {submitValue}
    </button>
  );
};