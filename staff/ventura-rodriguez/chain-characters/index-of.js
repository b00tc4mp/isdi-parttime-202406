function indexOf(searchTerm) {
  for (let i = 0; i < this.length; i++) {
    let subString = "";
    for (let j = 0; j < searchTerm.length; j++) {
      subString += this.value[j + i];
    }
    if (searchTerm === subString) {
      return i;
    }
  }

  return -1;
}

module.exports = indexOf;
