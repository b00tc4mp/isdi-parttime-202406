function concat() {
  let result = this.value;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  return result;
}

module.exports = concat;
