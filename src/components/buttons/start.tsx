import React from 'react';
import style from './buttons.module.scss';

type Props = {
  labelText: string;
  startHandler: () => void;
  hideStart: boolean;
};

export const Start = ({ labelText, startHandler, hideStart }: Props) => {

  return (
    <>
      {!hideStart &&
        <div className={style.wrapper}>
          <button
            type='button'
            className={style.start}
            onClick={() => startHandler()}
          >{labelText}
          </button>
        </div>}
    </>

  );
};