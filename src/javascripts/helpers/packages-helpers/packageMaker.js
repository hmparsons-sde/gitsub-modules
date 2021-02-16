// Creates new packages after package form is submitted
const packageMaker = (e) => {
  e.preventDefault();

  const name = document.querySelector("#package-name").value;
  const description = document.querySelector("#package-description").value;
  const iconImgSrc = document.querySelector("#package-img-src").value;

  const newPackage = {
    name,
    description,
    iconImgSrc,
  };

  if (!name) {
    alert("Please input name");
  } else {
    packages.push(newPackage);
    createCards(packages, packageCardString, '#package-container');
    document.querySelector('form').reset();
  }
};

export default packageMaker;
