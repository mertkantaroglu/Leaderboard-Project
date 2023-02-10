import { URL } from './api.js';

// Post Score
export const postScore = async () => {
  const nameInput = document.querySelector('#name');
  const scoreInput = document.querySelector('#score');

  const response = await fetch(
    URL, 
    {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: nameInput.value,
      score: scoreInput.value
    })
  });

  return await response.json();
};

// Add Score
export const addScore = async () => {
  const response = await fetch(
    URL, 
    {
    method: 'POST',
    body: JSON.stringify({ 
    name: 'Naruto game',
    }),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
  return await response.json();
};
