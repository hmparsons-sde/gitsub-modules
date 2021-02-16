// complex-data function
const favRepoString = (arr) => {
  let string = "Highlighted Repos:   ";
  for (i = 0; i < arr.length; i++) {
    string += `(${i+1})${arr[i]} `;
  }
  return string;
};

export default favRepoString;
