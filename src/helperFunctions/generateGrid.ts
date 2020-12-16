import { v4 as uuidv4 } from 'uuid';

export const Grid = (size: number) => {
  const example = { id: '1', x: 0, y: 0, open: false, flag: false, bomb: false, bombNumber: 0, color: 'red' };
  const gridArray = [];
  let generate = example;
  for (let j = 0; j <= size-1; j++) {
    for (let i = 0; i <= size-1; i++) {
      const setId = uuidv4();
      generate = {
        id: setId, x: i * 10, y: j * 10, open: false, bomb: false,
        flag: false, bombNumber: 0, color: 'red'
      };
      gridArray.push(generate);
    }
  }
  return gridArray;
};

