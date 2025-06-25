// función constructora o esquema cosntructor
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// esta función es un método del esquema persona, se adhiere a su prototipo
Persona.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
};

//
const hommer = new Persona("Hommer", 37);
hommer.saludar();

////////////////////////////////////////////////////////////////////////////////////////////////

function Bombero(nombre, edad, estacion) {
  // Llamar al constructor de `Persona`
  Persona.call(this, nombre, edad);
  // Propiedad específica de `Bombero`
  this.estacion = estacion;
}

// Heredar del prototipo `Persona`
Bombero.prototype = Object.create(Persona.prototype);
Bombero.prototype.constructor = Bombero;

//
const paco = new Bombero("Paco", 27, "Barcelona Sants");
paco.saludar();

////////////////////////////////////////////////////////////////////////////////////////////////

function Sanitario(nombre, edad, hospital) {
  // Llamar al constructor de `Persona`
  Persona.call(this, nombre, edad);
  // Propiedad específica de `Sanitario`
  this.hospital = hospital;
  this.identificador = Math.random();
}

// Heredar del prototipo `Persona`
Sanitario.prototype = Object.create(Persona.prototype);
Sanitario.prototype.constructor = Sanitario;

//
Sanitario.prototype.COLOR = "blanco";

//
const pedro = new Sanitario("Pedro", 52, "La paz");
pedro.saludar();

const juan = new Sanitario("Juan", 32, "PTS");
juan.saludar();
