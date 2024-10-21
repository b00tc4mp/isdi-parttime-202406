const Biblio = require("./constructor");

function splice(start, deleteCount, ...item) {
  if (start > this.length) start = this.length;
  if (start < 0) start = this.length + start;
  if (deleteCount === undefined || deleteCount > this.length - start) {
    deleteCount = this.length - start;
  }
  if (deleteCount < 0) deleteCount = 0;

  const element = [];

  // Copiar los elementos a eliminar en el array `element`
  for (let i = start; i < start + deleteCount; i++) {
    element[element.length] = this[i];
  }

  // Desplazar los elementos restantes a la izquierda para cubrir el hueco
  for (let i = start + deleteCount; i < this.length; i++) {
    this[i - deleteCount] = this[i];
  }

  // Ajustar la longitud del array después de eliminar los elementos
  this.length = this.length - deleteCount;

  // Desplazar los elementos hacia la derecha para hacer espacio para los nuevos elementos
  for (let i = this.length - 1; i >= start; i--) {
    this[i + item.length] = this[i];
  }

  // Insertar los nuevos elementos
  for (let i = 0; i < item.length; i++) {
    this[start + i] = item[i];
  }

  return element;
}

module.exports = splice;
