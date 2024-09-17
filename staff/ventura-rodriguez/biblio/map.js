function map(callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result[i] = callback(this[i]);
  }

  return result;
}

module.exports = map;
