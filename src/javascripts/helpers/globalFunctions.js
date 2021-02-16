// Print to DOM function
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// Create card function
const createCards = (arr, card, id) => {
  let domString = "";

  for (let [i, item] of arr.entries()) {
    domString += card(item, i);
  }
  printToDom(id, domString);
};

export default { printToDom, createCards };
