import baseURL from './base.js';

let gameId = '';

const submitStatus = () => {
  const status = document.getElementById('submitStatus');
  status.innerHTML = '';
  status.classList.add('success-status');
  status.innerHTML = 'Successfully submitted';
};

export const createGame = async () => {
  try {
    const response = await fetch(`${baseURL}games/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Awesome Game',
      }),
    });
    const data = await response.json();
    gameId = data.result.split(':')[1].trim();
    return `Game created with ID: ${gameId}`;
  } catch (error) {
    return `Error creating game: ${error}`;
  }
};

export const fetchScores = async () => {
  try {
    const response = await fetch(`${baseURL}games/${gameId}/scores/`);
    const data = await response.json();
    const scoreList = document.getElementById('scoreList');
    scoreList.innerHTML = '';

    data.result.forEach((score) => {
      const li = document.createElement('li');
      li.className = 'table-row';
      li.innerHTML = `<span class="table-cell">${score.user}: ${score.score}</span>`;
      scoreList.appendChild(li);
    });
    return 'Fetched all scores';
  } catch (error) {
    return `Error fetching scores: ${error}`;
  }
};
