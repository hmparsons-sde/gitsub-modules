import repoFormSubmit from '../../components/reposPage/repoFormSubmit.js';

const repoEvents = () => {
  document
    .querySelector("#repoForm")
    .addEventListener("submit", repoFormSubmit);
};

export default repoEvents;
