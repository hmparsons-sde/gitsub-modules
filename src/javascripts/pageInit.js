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
