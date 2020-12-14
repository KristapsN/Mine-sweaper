/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import './App.css';
import 'flexboxgrid';
import { v4 as uuidv4 } from 'uuid';
import { Squer } from './components/field/squer';

const example = { id: '1', x: 0, y: 1, open: false, firstCircel: false, secondCircle: false, bomb: false, bombNumber: 0 };
const bombPlaces: Array<Array<number>> = [[]];

const App = () => {

  const [fieldSquers, setFieldSquers] = useState([
    example
  ]);
  const [mesage, setMesage] = useState('');
  const [bombCount, setBombCount] = useState(0);

  const checkWin = () => {
    const winLength = fieldSquers.length - bombPlaces.length;
    console.log('Test win');
    const winField = fieldSquers.filter(item => item.open === true);
    console.log('Now', winField.length, 'Should', winLength - 1);
    if (winField.length === winLength) {
      setMesage('You Win!');
    }
  };
  const checkIfZero = (x: number, y: number) => {
    const chekZeros = [...fieldSquers];
    chekZeros.map((item) => {
      for (let i = -1; i < 2; i++) {
        for (let l = -1; l < 2; l++) {
          if (item.x === x + 10 * i && item.y === y + 10 * l
            && item.bomb === false) {
            item.open = true;
          }
        }
      }
    });
  };

  const checkNextOpenZeroStep = () => {
    const chekNextZeros2 = [...fieldSquers];
    const chekNextZeros = fieldSquers.filter(item => item.bombNumber === 0 && item.open === true);
    fieldSquers.map((item2) => {
      chekNextZeros.map((item3) => {
        for (let i = -1; i < 2; i++) {
          for (let l = -1; l < 2; l++) {
            if (item2.x === item3.x + 10 * i && item2.y === item3.y + 10 * l && item2.bomb === false) {
              item2.open = true;
              setFieldSquers(chekNextZeros2);
            }
          }
        }
      });
    });
  };
  const callCheckNext = () => {
    for (let i = 0; i < 10; i++) {
      checkNextOpenZeroStep();
    }
  };
  const openHandler = (x: number, y: number) => {
    const openFieldSquers = [...fieldSquers];
    openFieldSquers.map((item) => {
      if (item.x === x && item.y === y) {

        item.open = true;
        if (item.bomb) {
          youLose();
        }
        if (item.bombNumber === 0) {
          checkIfZero(x, y);
        }
      }
    });
    setFieldSquers(openFieldSquers);
    callCheckNext();
    checkWin();
  };

  const youLose = () => {
    setMesage('You Loese');
    const loseOpenAll = [...fieldSquers];
    loseOpenAll.map((item) => {
      item.open = true;
      setFieldSquers(loseOpenAll);
    });
  };

  const draw = () => {
    const newFieldSquers = [...fieldSquers];
    let generate = example;
    for (let j = 0; j <= 9; j++) {
      for (let i = 0; i <= 9; i++) {
        const setId = uuidv4();
        generate = {
          id: setId, x: i * 10, y: j * 10, open: false, bomb: false,
          firstCircel: false, secondCircle: false, bombNumber: 0
        };
        newFieldSquers.push(generate);
        setFieldSquers(newFieldSquers);
      }
    }
  };

  const putBombs = () => {
    const bombField = [...fieldSquers];
    bombField.map((item) => {
      for (let i = 0; i < 11; i++) {
        const num = Math.floor(Math.random() * 11);
        const num2 = Math.floor(Math.random() * 11);
        if (item.x / 10 === num && item.y / 10 === num2) {
          bombPlaces.push([item.x, item.y]);
          item.bomb = true;
        }
      }
    });
    setFieldSquers(bombField);
    bombCounter();
  };

  const bombCounter = () => {
    const bombLength = fieldSquers.filter(item => item.bomb === true);
    setBombCount(bombLength.length);
  };

  const putBombNumbers = () => {
    const bombNumberField = [...fieldSquers];
    fieldSquers.map((item) => {
      for (let j = 0; j < bombPlaces.length; j++) {
        for (let i = -1; i < 2; i++) {
          for (let l = -1; l < 2; l++) {
            if (item.x === bombPlaces[j][0] + 10 * i &&
              item.y === bombPlaces[j][1] + -10 * l) {
              item.bombNumber += 1;
            }
          }
        }
      }
    });
    setFieldSquers(bombNumberField);
  };

  useEffect(() => {
    draw();
  }, []);

  const start = () => {
    putBombs();
    putBombNumbers();
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xs-offset-3 col-xs-6">
            <button type="button" onClick={() => start()}>Start</button>
            <button type="button" onClick={() => callCheckNext()}>Test</button>
            <h2>{mesage}</h2>
            <h2>{bombCount}</h2>
            <div className="game--grid">
              {fieldSquers.map((item) =>
                <div key={item.id}>
                  <Squer
                    x={item.x}
                    y={item.y}
                    id={item.id}
                    openHandler={(x, y) =>
                      openHandler(item.x, item.y)}
                    open={item.open}
                    bomb={item.bomb}
                    bombNumber={item.bombNumber}
                  />
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
