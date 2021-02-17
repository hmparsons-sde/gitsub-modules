import createCards from '../globalFunctions.js';
import projectCards from '../../components/projects/projectCards.js';
import sortProjectCards from './sortProjectCards.js';

// Gabby - updating projects when form is filled in
const projectsFormInfo = (e) => {
  e.preventDefault();

  const name = document.querySelector('#project-board-name').value;
  const description = document.querySelector('#project-description').value;
  const date = new Date();

  const obj = {
    name,
    description,
    date,
  };
  projects.push(obj);
  createCards(projects, projectCards, '#project-container');
  document.querySelector('form').reset();
  document.querySelector('#sort-btn').addEventListener('click', sortProjectCards);
};

export default projectsFormInfo;
