import URL from './api.js';
import { postScore } from './addScore.js';

// Fetch Score
export const fetchScore = async () => {
  const response = await fetch(
    URL,
  );
  const getScore = await response.json();
  return getScore.result;
};

const listContainer = document.querySelector('.names-score-list-container');

// Show Scores
export const showScore = async () => {
  const data = await fetchScore();
  data.sort((a, b) => b.score - a.score);
  listContainer.innerHTML = '';
  const listItems = data.map((item) => `<tr> 
      <td id="table-user">${item.user}</td> 
      <td id="table-score">${item.score}</td> 
    </tr>`);
  listContainer.innerHTML = `<table><tbody>${listItems.join('')}</tbody></table>`;
};

// Form Submit
const nameInput = document.querySelector('#name');
const scoreInput = document.querySelector('#score');
const formSubmitButton = document.querySelector('#form-submit-btn');

export const formSubmit = () => {
  formSubmitButton.addEventListener('click', (event) => {
    event.preventDefault();
    postScore();
    nameInput.value = '';
    scoreInput.value = '';
  });
};

// Refresh List
const refreshButton = document.getElementById('refresh-btn');

export const refreshList = () => {
  refreshButton.addEventListener('click', (e) => {
    e.preventDefault();
    fetchScore();
    showScore();
  });
};