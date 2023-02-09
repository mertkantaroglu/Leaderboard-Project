// Scorelist class
export default class ScoreList {
  constructor() {
    this.scoreList = [];
  }

  // Add Score
  addScore(event) {
    event.preventDefault();
    const name = document.getElementById('name');
    const score = document.getElementById('score');
    this.scoreList.push(`${name.value} : ${score.value}`);
    name.value = '';
    score.value = '';
  }

  // Show Scores
  showScores() {
    const scoreBoard = document.getElementById('scoreboard');
    scoreBoard.classList.toggle('show', this.scoreBoard.length > 0);

    this.scoreList.forEach((entry) => {
      const li = document.createElement('li');
      li.innerHTML = entry;
      scoreBoard.appendChild(li);
    });
  }
}

// // Input Form
// const scoreList = new ScoreList();

// const inputForm = document.querySelector('.score-form');
// inputForm.addEventListener('submit', (event) => {
//   event.preventDefault();
//   scoreList.addScore();
//   scoreList.showScores();
// });