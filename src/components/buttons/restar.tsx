import React from 'react';
import style from './buttons.module.scss';

type Props = {
  restartHandler: () => void;
};

export const Restart = ({ restartHandler }: Props) => {
  
  return (
    <button
      type='button'
      onClick={() => restartHandler()}
      className={style.restarButton}
    >
      <i className="fas fa-sync" />
    </button>
  );
};