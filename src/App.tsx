/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import './App.css';
import 'flexboxgrid';
import { v4 as uuidv4 } from 'uuid';
import { Squer } from './components/field/squer';
import { Start } from './components/buttons/start';
import { Grid } from './helperFunctions/generateGrid';
import { GenerateBombs } from './helperFunctions/generateBombs';


// const example = { id: '1', x: 0, y: 0, open: false, flag: false, bomb: false, bombNumber: 0, color: 'red' };

type Cells = {
  id: string
  x: number
  y: number
  open: boolean
  flag: boolean
  bomb: boolean
  bombNumber: number
  color: string
};

const App = () => {

  const [cells, setCells] = useState<Cells[]>([]);
  const [bombPlaces, setBombPlaces] = useState<Array<Array<number>>>([[]]);
  const [mesage, setMesage] = useState('');
  const [bombCount, setBombCount] = useState(0);
  const [flags, setFlags] = useState(false);
  const [launchDraw, setLaunchDraw] = useState(false);
  const [hideStart, setHideStart] = useState(false);

  useEffect(() => {
    draw();
  }, [launchDraw]);

  const size = 10;
  const draw = () => {
    setCells(Grid(size));
  };

  const start = () => {
    putBombs();
    putNumberColor();
    setHideStart(!hideStart);
    bombsRemaining();
  };

  const reStart = () => {
    let clearField = [...cells];
    clearField = [];
    setCells(clearField);
    setBombPlaces([[]]);
    setLaunchDraw(!launchDraw);
    setHideStart(!hideStart);
  };

  const flagHandler = () => {
    setFlags(!flags);
  };

  const bombsRemaining = () => {
    const bombLength = cells.filter(item => item.bomb === true);
    const flagLength = cells.filter(item => item.flag === true);
    setBombCount(bombLength.length - flagLength.length);
  };

  const openHandler = (x: number, y: number) => {
    const opencells = [...cells];
    opencells.map((item) => {
      if (item.x === x && item.y === y && flags) {
        item.flag = !item.flag;
        item.open = false;
      } else if (item.x === x && item.y === y) {
        item.open = true;
        if (item.bomb) {
          youLose();
        }
        if (item.bombNumber === 0) {
          checkIfZero(x, y);
        }
      }
    });
    setCells(opencells);
    callCheckNext();
    checkWin();
    bombsRemaining();
  };

  const checkWin = () => {
    const winLength = cells.length - size;
    const winField = cells.filter(item => item.open === true);
    if (winField.length === winLength) {
      setMesage('You Win!');
      const winOpenAll = [...cells];
      winOpenAll.map((item) => {
        item.open = true;
        setCells(winOpenAll);
      });
    }
  };

  const checkIfZero = (x: number, y: number) => {
    const chekZeros = [...cells];
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
    const chekNextZeros2 = [...cells];
    const chekNextZeros = cells.filter(item => item.bombNumber ===
      0 && item.open === true);
    cells.map((item2) => {
      chekNextZeros.map((item3) => {
        for (let i = -1; i < 2; i++) {
          for (let l = -1; l < 2; l++) {
            if (item2.x === item3.x + 10 * i && item2.y ===
              item3.y + 10 * l && item2.bomb === false) {
              item2.open = true;
              setCells(chekNextZeros2);
            }
          }
        }
      });
    });
  };

  const callCheckNext = () => {
    if (!flags) {
      for (let i = 0; i < 20; i++) {
        checkNextOpenZeroStep();
      }
    }
  };

  const youLose = () => {
    setMesage('You Loese');
    const loseOpenAll = [...cells];
    loseOpenAll.map((item) => {
      item.open = true;
      setCells(loseOpenAll);
    });
  };

  const putBombs = () => {
    const bombPlacement = GenerateBombs(size);
    console.log(GenerateBombs(size));
    const bombField = [...cells];
    bombField.map((item) => {
      for (let i = 0; i < bombPlacement.length; i++) {
        if (item.x === bombPlacement[i][0] && item.y === bombPlacement[i][1]
          && item.bomb === false) {
          item.bomb = true;
        }
      }
    });
    setCells(bombField);
    const bombNumberField = [...cells];
    cells.map((item) => {
      for (let j = 0; j < bombPlacement.length; j++) {
        for (let i = -1; i < 2; i++) {
          for (let l = -1; l < 2; l++) {
            if (item.x === bombPlacement[j][0] + 10 * i &&
              item.y === bombPlacement[j][1] + -10 * l) {
              item.bombNumber += 1;
            }
          }
        }
      }
    });
    setCells(bombNumberField);
  };

  const putNumberColor = () => {
    const allNumberColors = [...cells];
    cells.map((item) => {
      switch (item.bombNumber) {
        case 0:
          item.color = 'rgb(201, 201, 201, 0)';
          break;
        case 1:
          item.color = 'rgb(0, 4, 212)';
          break;
        case 2:
          item.color = 'rgb(0, 177, 59)';
          break;
        case 3:
          item.color = 'rgb(177, 130, 0)';
          break;
        case 4:
          item.color = 'rgb(0, 142, 177)';
          break;
        case 5:
          item.color = 'rgb(121, 0, 177)';
          break;
        case 6:
          item.color = 'rgb(177, 0, 147)';
          break;
        case 7:
          item.color = 'rgb(177, 0, 0)';
          break;
        case 8:
          item.color = 'rgb(0, 0, 0)';
          break;
      }
      setCells(allNumberColors);
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6 col-xs-12">

            <button type="button" onClick={() => flagHandler()}>Flag</button>
            <button type="button" onClick={() => reStart()}>Test</button>
            <h2>{mesage}</h2>


          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-3 col-md-6 col-xs-12">
            <div className="countingLine"> <h2>0:00</h2><h2>{bombCount}</h2></div>
            <div className="game--grid">
              <Start
                labelText='Start'
                startHandler={() => start()}
                hideStart={hideStart}
              />
              {cells.map((item) =>
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
                    numberColor={item.color}
                    flag={item.flag}
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
