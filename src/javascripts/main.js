import printToDom from '../javascripts/helpers/globalFunctions.js';
import profileString from '../javascripts/components/profileString.js';
import pageInit from '../javascripts/pageInit.js';
import orgButtonEvents from '../javascripts/helpers/orgs-helpers/orgButtonEvents.js';

// Init function
const init = () => {
  printToDom("#profile-card", profileString);
  pageInit();
  orgButtonEvents();
};

init();
