// Toggle Form Display
const toggleOrgForm = (e) => {
  const formStatus = document.querySelector("#org-form-container");

  if (formStatus.style.display == "none") {
    formStatus.style.display = "block";
  } else if (formStatus.style.display == "block") {
    formStatus.style.display = "none";
  }
};

export default toggleOrgForm;
