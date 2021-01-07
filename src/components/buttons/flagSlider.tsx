/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import './switch.css';

type Props = {
  flagSwitchHandler: () => void;
  checkedSwitch: boolean;
};

export const TougleSlider = ({ flagSwitchHandler, checkedSwitch }: Props) => {

  return (
    <div className="switch--box">
      <i className="fas fa-bomb" />
      <label className="switch">
        <input
          type="checkbox"
          onChange={() => flagSwitchHandler()}
          checked={checkedSwitch}
        />
        <span className="slider round"></span>
      </label>
      <i className="fas fa-flag" />
    </div>
  );
};