import React from 'react';
import style from './popup.module.scss';
import { ChoseNumber } from '../inputFields/textInput';
import { Submit } from '../buttons/submit';

type Props = {
  title: string;
  paragraph: string;
  openPopup: boolean;
  winLoseHandler: () => void;
  yourResult: number;
  inputValue: string;
  inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submittHandler: () => void;
  submitValue: string;
  lose: string

};

export const WinLose = ({ title, paragraph, openPopup, winLoseHandler,
  yourResult, inputValue, inputHandler, submittHandler, submitValue, lose }: Props) => {

  return (
    <>
      {lose === 'You Win!' ?
        <>
          { openPopup &&
            <div className={style.outerWrapper}>
              <div className={style.innerWrapper}>
                <button
                  type="button"
                  onClick={() => winLoseHandler()}
                  className={style.closeButton}
                >
                  x
                </button>
                <h1>{title}</h1>
                <h3>Your score: {yourResult}s</h3>
                <p>{paragraph}</p>
                <ChoseNumber
                  inputValue={inputValue}
                  inputHandler={(e) => inputHandler(e)}
                />
                <Submit
                  submittHandler={() => submittHandler()}
                  submitValue={submitValue}
                />
              </div>
            </div>}
        </>
        :
        <>
          { openPopup &&
            <div className={style.outerWrapper}>
              <div className={style.innerWrapper}>
                <button
                  type="button"
                  onClick={() => winLoseHandler()}
                  className={style.closeButton}
                >
                  x
                </button>
                <h1>{title}</h1>
              </div>
            </div>}
        </>}
    </>
  );
};