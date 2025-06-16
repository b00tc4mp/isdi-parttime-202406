# Social-Common

## Intro:

Esta carpeta se instala como dependencia y contiene valdiadores y errores utilizables tanto en social-api como en social-app.

## Validator:

- Una clase llamada `Validator` que incluye distintos metodos estaticos (para no tener que crear instancias y poder acceder a ellos desde el nombre de la clase, como el `Date.now()`)
- Estos metodos comprueban que un input introducido por el usuario en el lado del cliente (la app, o llamadas ejecutadas a la api) cumple una serie de requisitos.
- En caso de que no los cumplan... nos interesa lanzar error directamente, uno de los errores que tengamos definidos en el archivo correspondiente.

```js
class Validator {
  static email(value) {
    if (typeof value !== 'string') throw new TypeError('Email is not a string');
    if (value.trim().length === 0) throw new ContentError('Email is empty');
    const regExp = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if(!regExp.test(value)) throw new EmailNotValidError('Email format is not valid')
  }
}
```

## Errors:

- Generar distintas clases de Errores que se extienden de la clase ya existente de `Error` en JS.
- Al extenderse de la clase ya existente "absorve" el comportamiento de un error, pudiendo manejar aspectos como el mensaje de error o el StackTrace.
- Al pasarle como variable del constructor el message y pasarselo con "super" lo que hacemos es asignar al "message" correspondiente a `Error` el valor que pasamos en el constructor. De esta forma la instancia del error personalizado lleva el mensaje de error asignado.
- Con el `this` de "name" nos aseguramos que el error que tiene el nombre que estamos asignando con el constructor.
- Con StackTrace (compatible con Node.js y Chrome, por ejemplo) podemos mostrar encontrar el punto donde se da ese error (linea, archivo, jerarquia de la llamada). En el error comprobamos que estamos en un entorno en el que se puede usar y al ejecutarlo de esta forma (con el `this`) "ignora" la parte de la llamada del error correspondiente a la clase `Error` y a la instancia que estemos manejando en ese momento en sí.

```js
export class EmailNotValidError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, EmailNotValidError);
    }
  }
}
```

### Tipos de Errores incluidos:

- **1. Type Error**: El tipado no es el que debería, este tipo de error ya existe, no tenemos que crearlo.
- **2. Content Error**: El contenido no encaja con lo que debería (espero un 'nombredeusuariodeejemplo' y recibo un '    ' vacio).
- **3. Format Error**: Aplico una norma de regex y no se cumple (adaptamos los existentes a "format" de cada cosa concreta).
- **4. Unexpected Error**: Ha pasado algo que no me esperaba ni es consecuencia de mis comprobaciones y validaciones.
- **5. Duplicity Error**: En caso de que intente usar un email ya registrado, o username.
- **6. Existence Error**: Sea lo que sea lo que estoy buscando, no lo encuentro.
- **7. Credentials Error**: Esta contraseña no corresponde a este usuario.
- **8. Auth Error**: Este token con el que dices haberte loggeado no corresponde a nadie.
- **9. Server Error**: El server esta apagado.
- **10. BadRequestError**: Error en caso de que la api determine que es culpa del front por enviar lo que no era.
- **11. Confirmation Error**: Se ha hecho mal algo que sirve para confirmar algo (e.g. repetir la contraseña).

