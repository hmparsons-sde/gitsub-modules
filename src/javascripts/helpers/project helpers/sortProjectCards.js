import createCards from '../globalFunctions.js';
import projectCards from '../../components/projects/projectCards.js';

//Gabby stretch goal - sort cards 
const sortProjectCards = (e) => {
  if (e.target.id === 'sort-btn') {
    sortedProjects = projects.sort((a, b) => b.date - a.date);
  };
  createCards(sortedProjects, projectCards, '#project-container');
};

export default sortProjectCards;
