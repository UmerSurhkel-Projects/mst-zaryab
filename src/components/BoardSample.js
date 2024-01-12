// // import React, { useState, useEffect } from 'react';
// // import Snake from './Snake';
// // import Dot from './Dot';

// // const Board = () => {
//    const [snakeDots, setSnakeDots] = useState([{ x: 2, y: 2 }, { x: 2, y: 1 }, { x: 2, y: 0 }]);
//    const [direction, setDirection] = useState('');

//   const handleKeyPress = (e) => {
//     switch (e.key) {
//       case 'ArrowUp':
//         if (direction !== 'DOWN') setDirection('UP');
//         break;
//       case 'ArrowDown':
//         if (direction !== 'UP') setDirection('DOWN');
//         break;
//       case 'ArrowLeft':
//         if (direction !== 'RIGHT') setDirection('LEFT');
//         break;
//       case 'ArrowRight':
//         if (direction !== 'LEFT') setDirection('RIGHT');
//         break;
//       default:
//         break;
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyPress);

//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, [direction]);

//   const moveSnake = () => {
//     setSnakeDots((prevSnake) => {
//       const newSnake = [...prevSnake];
//       let newHead = { ...newSnake[0] };

//       switch (direction) {
//         case 'UP':
//           newHead.y -= 1;
//           break;
//         case 'DOWN':
//           newHead.y += 1;
//           break;
//         case 'LEFT':
//           newHead.x -= 1;
//           break;
//         case 'RIGHT':
//           newHead.x += 1;
//           break;
//         default:
//           break;
//       }

//       newSnake.unshift(newHead);
      
//       newSnake.pop();

//       return newSnake;
//     });
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       moveSnake();
//     }, 200); // Adjust speed as needed

//     return () => clearInterval(interval);
//   }, [direction]);

// //   return (
// //     <div className='game-board' tabIndex={0}>
// //       <Snake snakeDots={snakeDots} />
// //       <Dot />
// //     </div>
// //   );
// // };

// // export default Board;
