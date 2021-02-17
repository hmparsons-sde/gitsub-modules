import createCards from '../globalFunctions.js';

// Remove Org From Page
const removeOrg = (e) => {
  // Capture type and Id of button click
  const targetType = e.target.type;
  const targetId = e.target.id;
  // Remove that specific element from array
  if (targetType === "button") {
    organizations.splice(targetId, 1);
  }
  // Re-print organizations array
  createCards(organizations, orgCard, "#org-objects-container");
};

export default removeOrg;
