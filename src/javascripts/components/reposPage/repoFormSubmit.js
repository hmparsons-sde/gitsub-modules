import buildReposPage from '../../helpers/reposPage/buildReposPage.js';

const repoFormSubmit = (e) => {
  e.preventDefault();

  const repoName = document.querySelector("#repoName").value;
  const repoDescription = document.querySelector("#repoDescription").value;

  document.querySelector("#repoName").value = "";
  document.querySelector("#repoDescription").value = "";

  const newRepo = {
    name: repoName,
    description: repoDescription,
  };

  repos.push(newRepo);
  buildReposPage();
};

export default repoFormSubmit;
