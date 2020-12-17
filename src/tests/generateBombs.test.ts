import { NumberColor } from '../helperFunctions/generateNumberColor';

describe('Generate number colors', () => {
  it('Should generate color rgb(201, 201, 201, 0)', () => {
    const summerize = NumberColor(0);
    expect(summerize).toEqual('rgb(201, 201, 201, 0)'); 
  });
  it('Should generate color rgb(0, 4, 212)', () => {
    const summerize = NumberColor(1);
    expect(summerize).toEqual('rgb(0, 4, 212)'); 
  });
  it('Should generate color rgb(0, 177, 59)', () => {
    const summerize = NumberColor(2);
    expect(summerize).toEqual('rgb(0, 177, 59)'); 
  });
  it('Should generate color rgb(177, 130, 0)', () => {
    const summerize = NumberColor(3);
    expect(summerize).toEqual('rgb(177, 130, 0)'); 
  });
  it('Should generate color rgb(0, 142, 177)', () => {
    const summerize = NumberColor(4);
    expect(summerize).toEqual('rgb(0, 142, 177)'); 
  });
  it('Should generate color rgb(121, 0, 177)', () => {
    const summerize = NumberColor(5);
    expect(summerize).toEqual('rgb(121, 0, 177)'); 
  });
  it('Should generate color rgb(177, 0, 147)', () => {
    const summerize = NumberColor(6);
    expect(summerize).toEqual('rgb(177, 0, 147)'); 
  });
  it('Should generate color rgb(177, 0, 0)', () => {
    const summerize = NumberColor(7);
    expect(summerize).toEqual('rgb(177, 0, 0)'); 
  });
  it('Should generate color rgb(0, 0, 0)', () => {
    const summerize = NumberColor(8);
    expect(summerize).toEqual('rgb(0, 0, 0)'); 
  });
});

