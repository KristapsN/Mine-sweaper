import React, { useState, } from 'react';

// export const Timer = (isActive) => {
//   const [seconds, setSeconds] = useState(0);
  

//   let interval = 0;
//   if (isActive) {

//     // @ts-ignore
//     interval = setTimeout(() => {
//       let count = seconds;
//       setSeconds(count += 1);
//     }, 100);
//   } else if (!isActive && seconds !== 0) {
//     clearTimeout(interval);
//   }
//   return () => clearTimeout(interval);
// }; 