import { GenerateBombs } from '../helperFunctions/generateBombs';

describe('Generate bombs for game field', () => {
  it('Should generate 4 bombs', () => {
    const summerize = GenerateBombs(4);
    expect(summerize.length).toEqual(4);  
  });
});