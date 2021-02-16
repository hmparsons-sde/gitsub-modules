// Deletes package when delete button is clicked
const deletePackage = (e) => {
  let targetId = e.target.id;
  let targetType = e.target.type;

  if (targetType === "button") {
    packages.splice(targetId, 1);
  }
  createCards(packages, packageCardString, "#package-container");
};

export default deletePackage;
