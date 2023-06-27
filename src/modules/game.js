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
