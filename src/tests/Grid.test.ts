import { v4 as uuidv4 } from 'uuid';
import { Grid } from '../helperFunctions/generateGrid';

jest.mock('uuid');

describe('Generate grid for game field', () => {
  it('Should generate 2x2 grid', () => {
    const summerize = Grid(2);

    expect(summerize).toEqual([
      { id: uuidv4(), x: 0, y: 0, open: false, flag: false, bomb: false, bombNumber: 0, color: 'red' },
      { id: uuidv4(), x: 10, y: 0, open: false, flag: false, bomb: false, bombNumber: 0, color: 'red' },
      { id: uuidv4(), x: 0, y: 10, open: false, flag: false, bomb: false, bombNumber: 0, color: 'red' },
      { id: uuidv4(), x: 10, y: 10, open: false, flag: false, bomb: false, bombNumber: 0, color: 'red' }
    ]);
  });
}); 
