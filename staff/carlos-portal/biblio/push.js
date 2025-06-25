const Biblio = require("./constructor")

function push (...elements) {
  let length = this.length; // Usamos 'this' para referirnos al array en el que se llama el método

  // Iteramos sobre los elementos y los añadimos al array
  for (let i = 0; i < elements.length; i++) {
    this[length] = elements[i];
    length++;
  }
};
