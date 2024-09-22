const Biblio = require("./constructor.js");

function concat() {
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      newArr[newArr.length] = arguments[i][j];
    }
  }

  return newArr;
}

module.exports = concat;
