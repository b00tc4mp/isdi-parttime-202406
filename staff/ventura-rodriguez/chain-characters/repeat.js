function repeat(count) {
  let result = "";

  for (let i = 0; i < count; i++) {
    result += this.value;
  }

  return result;
}

module.exports = repeat;
