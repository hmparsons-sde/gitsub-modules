import submitPinnedCard from '../../helpers/overview/submittedPinnedCard.js';
import removePin from '../../helpers/overview/removePins.js';

const pinButtonEvent = () => {
  document
    .querySelector("#pin-form")
    .addEventListener("submit", submitPinnedCard);
  // document.querySelector(".card").addEventListener("click", (e) => {
  //   console.log(e);
  //   removePin(e); 
  // });
  pins.forEach((pin) =>
    document
      .getElementById(pin.id)
      .addEventListener("click", (e) => removePin(e)) 
  );
};

export default pinButtonEvent;
