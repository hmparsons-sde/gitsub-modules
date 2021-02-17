import createCards from '../globalFunctions.js';

//loop through pin array for each- add EL that takes item.id on click
const removePin = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;

  if (targetType === "button" && targetId.includes("remove")) {
    const id = targetId.split("-")[1];
    const pinToDelete = pins.find((pin) => pin.id === id);
    const deleteIndex = pins.indexOf(pinToDelete); //we have to do this by index

    pins.splice(deleteIndex, 1);
    createCards(pins, pinCard, "#pin-container");
    resetEventListenersForPins()
  }
};

//Without this function, removePin only removes one item from the array. It looks like it works, but it doesn't. SSOOO we need to reset those event listeners so we can run it again!
const resetEventListenersForPins = () => {
  pins.forEach((pin) =>
    document
      .getElementById(pin.id)
      .removeEventListener("click", (e) => removePin(e))
  );
  pins.forEach((pin) =>
    document
      .getElementById(pin.id)
      .addEventListener("click", (e) => removePin(e))
  );
};

export default { removePin, resetEventListenersForPins };
