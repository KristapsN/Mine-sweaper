/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import './App.css';
import 'flexboxgrid';
import { Squer } from './components/field/squer';
import { Start } from './components/buttons/start';
import { Grid } from './helperFunctions/generateGrid';
import { GenerateBombs } from './helperFunctions/generateBombs';
import { NumberColor } from './helperFunctions/generateNumberColor';
import { TougleSlider } from './components/buttons/flagSlider';
import { Restart } from './components/buttons/restar';
import { Counter } from './components/buttons/counter';
import { WinLose } from './components/popUpMesages/winLose';
import { Select } from './components/inputFields/dropdown';
import { Level } from './helperFunctions/generateLevel';


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
  const [mesage, setMesage] = useState('');
  const [bombCount, setBombCount] = useState(0);
  const [flags, setFlags] = useState(false);
  const [launchDraw, setLaunchDraw] = useState(false);
  const [hideStart, setHideStart] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [bombsInLevel, setBombsInLevel] = useState(10);

  const size = 10;
  // const bombs = 20;



  const winLoseHandler = () => {
    setOpenPopup(!openPopup);
  };

  useEffect(() => {
    let interval = 0;
    if (isActive) {
      // @ts-ignore
      interval = setTimeout(() => {
        let count = seconds;
        setSeconds(count += 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearTimeout(interval);
    }
    return () => clearTimeout(interval);
  }, [isActive, seconds]);


  useEffect(() => {
    draw();
    setBombCount(0);
  }, [launchDraw]);


  const draw = () => {
    setCells(Grid(size));
  };

  const start = () => {
    putBombs();
    putNumberColor();
    setHideStart(!hideStart);
    bombsRemaining();
    setIsActive(true);
  };

  const reStart = () => {
    let clearField = [...cells];
    clearField = [];
    setCells(clearField);
    setLaunchDraw(!launchDraw);
    setHideStart(!hideStart);
    setMesage('');
    setIsActive(false);
    setSeconds(0);
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
    const winLength = cells.length - bombsInLevel;
    const winField = cells.filter(item => item.open === true);
    if (winField.length === winLength) {
      setMesage('You Win!');
      const winOpenAll = [...cells];
      winOpenAll.map((item) => {
        item.open = true;
        setCells(winOpenAll);
        setIsActive(false);
        setOpenPopup(!openPopup);
      });
    }
  };
  const youLose = () => {
    setMesage('You Loese');
    const loseOpenAll = [...cells];
    loseOpenAll.map((item) => {
      item.open = true;
      setCells(loseOpenAll);
      setIsActive(false);
      setOpenPopup(!openPopup);
    });
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
    const chekNextZerosCircle = [...cells];
    const filterNextOpenZeros = cells.filter(item => item.bombNumber ===
      0 && item.open === true);
    cells.map((itemCells) => {
      filterNextOpenZeros.map((itemZero) => {
        for (let i = -1; i < 2; i++) {
          for (let l = -1; l < 2; l++) {
            if (itemCells.x === itemZero.x + 10 * i && itemCells.y ===
              itemZero.y + 10 * l && itemCells.bomb === false) {
              itemCells.open = true;
              setCells(chekNextZerosCircle);
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



  const putBombs = () => {
    const bombPlacement = GenerateBombs(bombsInLevel);
    console.log(GenerateBombs(bombsInLevel));
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
      item.color = NumberColor(item.bombNumber);
      setCells(allNumberColors);
    });
  };

  const sletctLevelHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    console.log(e.target.value);
    setBombsInLevel(Level(e.target.value));
    console.log(Level(e.target.value));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6 col-xs-12">
            <WinLose
              openPopup={openPopup}
              title={mesage}
              paragraph='Play again?'
              winLoseHandler={() => winLoseHandler()}
              yourResult={seconds}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-3 col-md-6 col-xs-12">
            <div className="top--menu margin--botom--20">
              <Select
                selectHandler={(e) => sletctLevelHandler(e)}
                valueLevel={selectedOption}
              />
              <Restart
                restartHandler={() => reStart()}
              />
            </div>
            <div className="counter margin--botom--20">
              <div className="counter--bombs">
                <i className="fas fa-clock" />
                <Counter
                  countingValue={seconds}
                />
              </div>
              <TougleSlider
                flagSwitchHandler={() => flagHandler()}
                checkedSwitch={flags}
              />
              <div className="counter--bombs">
                <i className="fas fa-bomb" />
                <Counter
                  countingValue={bombCount}
                />
              </div>
            </div>
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
