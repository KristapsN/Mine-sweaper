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
  const openHandler = (x: number, y: number) => {
    const openFieldSquers = [...fieldSquers];
    openFieldSquers.map((item) => {
      if (item.x === x && item.y === y) {
        item.open = true;
        if (item.bomb ){
          setMesage('You Loese');
        }
      } 
      if (item.bombNumber === 0) {
        console.log('true');
        for (let i = -1; i < 2; i++) {
          for (let l = -1; l < 2; l++) {
            if (item.x === x + 10 * i && item.y === y + 10 * l
              && item.bomb === false) {
              item.open = true;
            }
          } 
        }
      }
    });
    setFieldSquers(openFieldSquers);
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
      if (item.x / 10 %2 === 0 && item.y / 10 % 2 === 0) {
        bombPlaces.push([item.x, item.y]);
        item.bomb = true;
      }
    });
    setFieldSquers(bombField);
  };

  // console.log(bombPlaces);
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
            <h2>{mesage}</h2>
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
