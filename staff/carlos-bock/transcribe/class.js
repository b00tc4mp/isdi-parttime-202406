class Persona {

    constructor (nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const hommer = new Persona("Hommer", 37);
hommer.saludar();

///////////////////////////////////////////////////

class Bombero extends Persona {
    constructor (nombre, edad, estacion) {

        super(nombre, edad);
        this.estacion = estacion;
    }

    apagarIncendio() {
        console.log(
            `${this.nombre} está apagando un incendio desde la estación ${this.estacion}.`
        );
    }
}

const paco = new Bombero("Paco", 27, "Barcelona Sants");
paco.saludar();
paco.apagarIncendio();
