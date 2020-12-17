export const Level = (selectedOptio: string) => {
  let bombCount = 10;
  switch (selectedOptio) {
    case 'Easy':
      bombCount = 10;
      break;
    case 'Medium':
      bombCount = 20;
      break;
    case 'Hard':
      bombCount = 30;
      break;
  }

  // if (selectedOptio === 'Easy'){
  //   bombCount = 10;
  // } else if (selectedOptio === 'Medium'){
  //   bombCount = 20;
  // } else if (selectedOptio === 'Hard'){
  //   bombCount = 30;
  // }
  return bombCount;
};