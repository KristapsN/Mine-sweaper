
export const GenerateBombs = (bombs: number) => {

  const bombArray: number[][] = [];
 
  while (bombArray.length < bombs) {
    const num = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
   
    if (!bombArray.find(item => item[0] === num * 10 
      && item[1] === num2 * 10)) {
      bombArray.push([num * 10, num2 * 10]);    
    }
  }
  return bombArray;
};

