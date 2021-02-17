import createCards from '../globalFunctions.js';
import repoCard from '../../components/reposPage/repoCard.js';

const buildReposPage = () => {
  createCards(repos, repoCard, "#reposContainer");
};

export default buildReposPage;
