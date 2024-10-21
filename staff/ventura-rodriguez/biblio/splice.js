const Biblio = require("./contructor");

function splice(_start, _deleteCount = 0) {
  const initialLength = this.length;
  const start = _start >= 0 ? _start : this.length + _start;
  const deleteCount =
    _deleteCount < this.length - start ? _deleteCount : this.length - start;

  const elementsToAdd = new Biblio();
  for (let i = 2; i < arguments.length; i++) {
    elementsToAdd[elementsToAdd.length] = arguments[i];
    elementsToAdd.length += 1;
  }

  const elementsToCopyAfter = new Biblio();
  for (let i = deleteCount; i < this.length - start; i++) {
    elementsToCopyAfter[i] = this[start + i];
    elementsToCopyAfter.length += 1;
  }

  for (let i = deleteCount; i < elementsToAdd.length; i++)
    this[i + start] = elementsToAdd[i];

  for (let i = deleteCount; i < elementsToCopyAfter.length; i++)
    this[i + start + elementsToAdd.length] = elementsToCopyAfter[i];

  if (deleteCount > 0)
    this.length = initialLength - deleteCount - elementsToAdd.length;
  else this.length = initialLength - deleteCount + elementsToAdd.length;
}

module.exports = splice;
