import React from 'react';
import style from './buttons.module.scss';

type Props = {
  restartHandler: () => void;
  deactivate: boolean;
};

export const Restart = ({ restartHandler, deactivate }: Props) => {

  return (
    <>
      {deactivate ?
        <button
          type='button'
          onClick={() => restartHandler()}
          className={style.restarButton}
        >
          <i className="fas fa-sync" />
        </button> :
        <button
          type='button'
          disabled
          className={style.restarButton}
        >
          <i className="fas fa-sync" />
        </button>}
    </>
  );
};