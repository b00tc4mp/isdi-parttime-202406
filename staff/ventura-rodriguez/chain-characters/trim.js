function trim() {
  let result = "";
  let firstPosition = 0;
  let lastPosition = this.length - 1;

  while (this.value[firstPosition] === " ") firstPosition++;
  while (this.value[lastPosition] === " ") lastPosition--;

  for (let i = firstPosition; i <= lastPosition; i++) result += this.value[i];

  return result;
}

module.exports = trim;
