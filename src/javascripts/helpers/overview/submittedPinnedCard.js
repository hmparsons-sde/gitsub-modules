//Holly - this will take in the form info + push to pins array; then will reset form
const submitPinnedCard = (e) => {
  e.preventDefault();

  const name = document.querySelector("#text-input").value;
  const description = document.querySelector("#pin-description").value;
  const id = 1;

  const newPin = {
    name,
    description,
    id,
  };

  pins.push(newPin);
  createCards(pins, pinCard, "#pin-container");
  pins.forEach((pin) =>
    document
      .getElementById(pin.id)
      .addEventListener("click", (e) => removePin(e))
  );
  document.querySelector("form").reset();
};

export default submitPinnedCard;
