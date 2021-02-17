import toggleOrgForm from '../../components/orgs/toggleOrgForm.js';
import submitOrgForm from '/sortOrgForm.js';
import removeOrg from '/removeOrg.js';

// Listen for Button Clicks
const orgButtonEvents = () => {
  const fileName = location.pathname.split("/").slice(-1);
  if (fileName[0] === "organizations.html") {
    document
      .querySelector("#new-org-btn")
      .addEventListener("click", toggleOrgForm);
    document.querySelector("form").addEventListener("submit", submitOrgForm);
    document
      .querySelector("#org-objects-container")
      .addEventListener("click", removeOrg);
  }
};

export default orgButtonEvents;
