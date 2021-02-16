const repoEvents = () => {
  document
    .querySelector("#repoForm")
    .addEventListener("submit", repoFormSubmit);
};

export default repoEvents;
