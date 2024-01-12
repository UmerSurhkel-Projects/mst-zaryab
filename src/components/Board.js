import { useState, useEffect } from 'react';
import Snake from './Snake';
import Dot from './Dot';
import Swal from 'sweetalert2';

const Board = () => {
	const [snakeDots, setSnakeDots] = useState([{ x: 2, y: 2 }, { x: 2, y: 1 }, { x: 2, y: 0 }]);
	const [direction, setDirection] = useState('RIGHT');
	const [dot, setDot] = useState(getRandomCoordinates());
	const [isGameOver, setIsGameOver] = useState(false);
	const BOARD_SIZE = 34;


	console.log(BOARD_SIZE, "BOARD_SIZE..................")


	const handleKeyPress = (e) => {
		switch (e.key) {
			case 'ArrowUp':
				if (direction !== 'DOWN') setDirection('UP');
				break;
			case 'ArrowDown':
				if (direction !== 'UP') setDirection('DOWN');
				break;
			case 'ArrowLeft':
				if (direction !== 'RIGHT') setDirection('LEFT');
				break;
			case 'ArrowRight':
				if (direction !== 'LEFT') setDirection('RIGHT');
				break;
			default:
				break;
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', handleKeyPress);

		return () => window.removeEventListener('keydown', handleKeyPress);
	}, [direction]);

	const moveSnake = () => {
		setSnakeDots(prevSnake => {
			let newSnake = [...prevSnake];
			let newHead = { ...newSnake[0] };

			// Move the snake head
			switch (direction) {
				case 'UP':
					newHead.y -= 1;
					break;
				case 'DOWN':
					newHead.y += 1;
					break;
				case 'LEFT':
					newHead.x -= 1;
					break;
				case 'RIGHT':
					newHead.x += 1;
					break;
				default:
					break;
			}

			
        // Check for self-collision
        for (let i = 1; i < newSnake.length; i++) {
            if (newSnake[i].x === newHead.x && newSnake[i].y === newHead.y) {
                setIsGameOver(true);
                return newSnake;
            }
        }
			newSnake.unshift(newHead); // Add the new head to the front

			// Check if the snake's head has collided with the dot
			if (newHead.x === dot.x && newHead.y === dot.y) {
				console.log('Snake ate the dot!');
				setDot(getRandomCoordinates()); // Generate a new dot
				// Do not pop the last segment to let the snake grow
			} else {
				newSnake.pop(); // Remove the last segment if not eating
			}

			// Check for boundary collision
			if (newHead.x < 1 || newHead.x >= BOARD_SIZE || newHead.y < 1 || newHead.y >= BOARD_SIZE) {
				setIsGameOver(true);
			}

			return newSnake;
		});
	};



	useEffect(() => {
		if (isGameOver) {
			Swal.fire({
				title: 'Game Over',
				text: 'Do you want to play again?',
				imageUrl: 'https://i.pinimg.com/564x/2a/97/59/2a9759e8cf97da57ccbb06ef09128df7.jpg',
				imageWidth: '100%',
				imageHeight: 300,
				confirmButtonText: 'Play Again'
			}).then((result) => {
				if (result.isConfirmed) {
					resetGame();
				}
			});
		}
	}, [isGameOver]); // Run this effect when isGameOver changes



	useEffect(() => {
		if (isGameOver) {
			return;
		}

		const interval = setInterval(() => {
			moveSnake();
		}, 100); // Adjust the speed as needed

		return () => clearInterval(interval);
	}, [direction, isGameOver]);


	const resetGame = () => {
		setSnakeDots([{ x: 0, y: 2 }, { x: 0, y: 1 }, { x: 0, y: 0 }]); // Reset snake to initial state
		setDirection('RIGHT'); // Reset direction
		setDot(getRandomCoordinates()); // Get new food position
		setIsGameOver(false); // Set game over to false
	};

	return (
		<div className='game-board' tabIndex={0}>
			<Snake snakeDots={snakeDots} />
			<Dot dot={dot} />
		</div>
	);
};

const getRandomCoordinates = () => {
	const min = 1;
	const max = 30;
	const x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
	const y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;

	return { x, y };
}

export default Board;