import buildReposPage from '../javascripts/helpers/reposPage/buildReposPage.js';
import repoEvents from '../javascripts/helpers/reposPage/repoEvents.js';
import createCards from '../javascripts/helpers/globalFunctions.js';
import pinButtonEvent from '../javascripts/components/overview2/pinButtonEvent.js';
import packageCardString from '../javascripts/components/packages/packageCardString.js';
import packageMaker from '../javascripts/helpers/packages-helpers/packageMaker.js';
import deletePackage from '../javascripts/helpers/packages-helpers/deletePackage';
import orgCard from '../javascripts/components/orgs/orgCard.js';
import projectCards from '../javascripts/components/projects/projectCards.js';
import sortProjectCards from '../javascripts/helpers/project helpers/sortProjectCards.js';
import projectsForm from '../javascripts/components/projects/projectsForm';

// Runs page's functions
const pageInit = () => {
  const fileName = location.pathname.split("/").slice(-1);

  if (fileName[0] === "repos.html") {
    buildReposPage();
    repoEvents();
  } else if (fileName[0] === "") {
    createCards(pins, pinCard, "#pin-container");
    pinButtonEvent();
  } else if (fileName[0] === "packages.html") {
    createCards(packages, packageCardString, "#package-container");
    document
      .querySelector("#create-package")
      .addEventListener("click", packageMaker);
    document
      .querySelector('#package-container')
      .addEventListener('click', deletePackage);  
  } else if (fileName[0] === 'organizations.html') {
    createCards(organizations, orgCard, '#org-objects-container');
  } else if (fileName[0] === 'projects.html') {
    createCards(projects, projectCards, '#project-container');
    document.querySelector('#sort-btn').addEventListener('click', sortProjectCards);
    projectsForm();
  }
};

export default pageInit;
