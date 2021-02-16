// Submit Org Form
const submitOrgForm = (e) => {
  // Prevent page refresh from form submission
  e.preventDefault();
  // Grab form name value
  const formName = document.querySelector("#org-text-input").value;
  // Create img array
  const imgArr = [
    "images/orgImgs/oi_nss.png",
    "images/orgImgs/oi_org1.png",
    "images/orgImgs/oi_org2.png",
    "images/orgImgs/oi_org3.png",
  ];
  // Generate random repos between 35 and 20
  const randomRepos = Math.floor(Math.random() * (35 - 20 + 1)) + 20;
  // Create new object properties
  const img = imgArr[Math.floor(Math.random() * imgArr.length)];
  const name = formName;
  const repos = randomRepos;
  // Create generic top-five repos
  const topFive = ['favRepo1','favRepo2','favRepo3','favRepo4','favRepo5'];
  // Create new object
  const obj = {
    img,
    name,
    repos,
    topFive,
  };
  // Push object into organizations array
  organizations.push(obj);
  // Rebuild the DOM
  createCards(organizations, orgCard, "#org-objects-container");
  // Reset the form fields
  document.querySelector("form").reset();
};

export default submitOrgForm;
