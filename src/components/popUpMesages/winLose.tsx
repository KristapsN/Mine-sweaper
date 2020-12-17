import React from 'react';
import style from './popup.module.scss';

type Props = {
  title: string;
  paragraph: string;
  openPopup: boolean;
  winLoseHandler: () => void;
  yourResult: number;
};

export const WinLose = ({ title, paragraph, openPopup, winLoseHandler, yourResult }: Props) => {

  return (
    <>
      { openPopup &&
        <div className={style.outerWrapper}>
          <div className={style.innerWrapper}>
            <h1>{title}</h1>
            <h2>{yourResult}</h2>
            <p>{paragraph}</p>
            
            <button
              type="button"
              onClick={() => winLoseHandler()}
            >
              x
            </button>
          </div>
        </div>}
    </>
  );
};