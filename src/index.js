import './style.css';
import { addScore } from './modules/addScore.js';
import { showScore, formSubmit, refreshList } from './modules/showScore.js';

window.addEventListener('load', () => {
  showScore();
  addScore();
  formSubmit();
  refreshList();
});
