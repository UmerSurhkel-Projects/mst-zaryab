import './Game.css';
import Board from './components/Board';

function Game() {
  return (
    <div className="snake-game">
      {/* TODO */}
      {/* <div className='game-score'>
				<h2>Score 100</h2>
			</div> */}
      <Board />
    </div>
  );
}

export default Game;
