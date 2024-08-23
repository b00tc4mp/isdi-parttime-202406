// str.charAt(indice). el indice siempre será un parámetro

//str.charAt(indice)
//Version stand alone
function charAt(index) {
  let result = this.value[index];

  if (typeof index !== "number") {
    result = this.value[0];
  } else if (index >= this.length) {
    result = "";
  }

  return result;
}

module.exports = charAt;
