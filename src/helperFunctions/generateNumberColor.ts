export const NumberColor = (bombNumber: number) => {

  let color = 'red';
  switch (bombNumber) {
    case 0:
      color = 'rgb(201, 201, 201, 0)';
      break;
    case 1:
      color = 'rgb(0, 4, 212)';
      break;
    case 2:
      color = 'rgb(0, 177, 59)';
      break;
    case 3:
      color = 'rgb(177, 130, 0)';
      break;
    case 4:
      color = 'rgb(0, 142, 177)'; 
      break;
    case 5:
      color = 'rgb(121, 0, 177)';
      break;
    case 6:
      color = 'rgb(177, 0, 147)';
      break;
    case 7:
      color = 'rgb(177, 0, 0)';
      break;
    case 8:
      color = 'rgb(0, 0, 0)';
      break;
  }
  return color;
};

