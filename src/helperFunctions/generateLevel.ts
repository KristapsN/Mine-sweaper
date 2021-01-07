export const Level = (selectedOptio: string) => {
  let bombCount = 10;
  switch (selectedOptio) {
    case 'Easy':
      bombCount = 10;
      break;
    case 'Medium':
      bombCount = 15;
      break;
    case 'Hard':
      bombCount = 20;
      break;
  }
  return bombCount;
};