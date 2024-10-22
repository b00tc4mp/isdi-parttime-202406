const Biblio = require("./constructor.js")

function copyWithin(_target, _start, _end = this.length) {

    if (!(this instanceof Biblio)) {
      throw new TypeError('The provided object needs to have been created with Biblio constructor')
    }

    const elementsToCopy = new Biblio();
  
    const target = _target >= 0 ? _target : this.length + _target;
    const start = _start >= 0 ? _start : this.length + _start;
    const end = _end >= 0 ? _end : this.length + _end;
  
    let i = 0;
    while (elementsToCopy.length < end - start) {
      elementsToCopy[i] = this[start + i];
      elementsToCopy.length += 1;
      i++;
    }
  
    for (let i = 0; i < elementsToCopy.length; i++)
      this[target + i] = elementsToCopy[i];
  
    return this;
  }

module.exports = copyWithin