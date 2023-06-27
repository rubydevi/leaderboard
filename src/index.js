import './index.css';
import { createGame, fetchScores, submitScore } from './modules/game.js';

// Set up event listeners
document.getElementById('btnRefreshScore').addEventListener('click', fetchScores);
document.getElementById('scoreContent').addEventListener('submit', submitScore);

// Create a new game
createGame();
