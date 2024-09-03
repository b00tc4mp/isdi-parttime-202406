

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

Persona.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.numbre} y tengo ${this.edad} años.`);
};

const hommer = new Persona("Hommer", 37);
hommer.saludar();

///////////////////

function Bombero(nombre, edad, estacion) {
    Persona.call(this, nombre, edad);

    this.estacion = estacion;
}

Bombero.prototype = Object.create(Persona.prototype);
Bombero.prototype.constructor = Bombero;

const paco = new Bombero("Paco", 27, "Barcelona Sants");
paco.saludar();

///////////////////////////////////////////////////////

function Sanitario(nombre, edad hospital) {
    Persona.call(this, nombre, edad);

    this.hospital = hospital;
    this.identificador = Math.random();
}

Sanitario.prototype = Object.create(Persona.prototype);
Sanitario.prototype.constructor = Sanitario;

Sanitario.prototype.COLOR = "blanco";

const pedro = new Sanitario ("Pedro", 52, "La paz");
pedro.saludar();

const juan = new Sanitario("Juan", 32, "PTS");
juan.saludar();