# Lista de errores que cometí intentando conectar node a mongo el 18/11/2024

![](https://i.pinimg.com/originals/ae/47/6d/ae476d8033bcf74d4a8dbad7741eaeaa.gif)

## El bucle mental:

Cruce la idea de conectarme a la db y luego a las colecciones con crear el MongoClient y luego conectarme a las colecciones. Después lo intenté reemplazar por crear el MongoClient y luego conectarme a la db pero sin conectarme nunca a las colecciones...

En gran parte estaba sesgada por la costumbre de trabajar con Mongoose en lugar de directamente con Mongo y ese "saltarme pasos porque yo lo recuerdo distinto" me hizo entrar en un bucle muy malo. `while(flors.state === 'confused')` fue como un `while(true)`.

Antes de empezar vamos a ver la forma correcta de hacerlo y luego revisemos tooodos los intentos mal.

### Modo bien:

```js
import { MongoClient } from 'mongodb';
import 'dotenv/config';

// Crear el cliente de Mongo en una constante global
const mongo = new MongoClient(process.env.MONGO_URI);

// Nos conectamos al servidor de Mongo
mongo.connect()
        .then(() => {
            console.log('connected');

            // Abrimos la base de datos de nombre "social"
            const db = mongo.db('social');

            // Nos conectamos a la coleccion "users"
            const users = db.collection('users');

            // Ejemplo de usar un metodo de la coleccion de Mongo
            users.find({}).toArray()
                .then(users => console.log(users))
                .catch(error => console.log(error))

        })
        .catch(error => console.log(error))
```

### Intento mal 1:

```js
import { MongoClient } from 'mongodb';
import 'dotenv/config';

const mongo = new MongoClient(process.env.MONGO_URI);

mongo.connect() 
    .then(() => {
        console.log('connected');

        // Me conecte al cliente sin considerar la db (social)

        //y luego acceder a users sin abrir siquiera la db correcta e inventandome el metodo de acceso a la colección
        mongo.users.find().then(users => console.log(users))

})
    .catch(error => console.log(error))
```

### Intento mal 2:

```js
import { MongoClient } from 'mongodb';
import 'dotenv/config';

const mongo = new MongoClient(process.env.MONGO_URI);

mongo.connect() 
    .then(() => {
        console.log('connected');

        // puestos a inventarme cosas me inventé como acceder a la db y a la colección, ya que estaba.
        mongo.social.users.find().then(users => console.log(users))

        // ¿Qué la documentación me decía que había metodos para ello dentro de la instancia de MongoClient?
        // Aparentemente a mi yo de ayer le daba muy igual la documentación porque "me acuerdo de que era más fácil!"

})
    .catch(error => console.log(error))
```

### Intento mal 3:

```js
import { MongoClient } from 'mongodb';
import 'dotenv/config';

const mongo = new MongoClient(process.env.MONGO_URI);

mongo.connect() 
    .then(() => {
        console.log('connected');
        const db = mongo.db('social') //hey, hasta aquí lo estaba haciendo bien :D

        //ya la he liao, en lugar de usar el método correcto para acceder a la colección sigo inventandome pasos
        db.users.find().then(users => console.log(users))

})
    .catch(error => console.log(error))
```

### Intento mal 4:

Aquí se pueden unir bastantes intentos en que me centre en cosas que eran indiferentes:
- Focalizar la atención en cuando inicio el servidor de express, cuando ni siquiera importaba en ese momento.
- Cambiar la variable de entorno con la uri de mongo para que incluya la db (`mongodb://127.0.0.1:27017/social`). Eso funciona en Mongoose (por eso lo recordaba tan bien), pero **no en Mongo**. Deje ese cambio durante el resto de la noche y fue un fallo recurrente que por puro sesgo de mis recuerdos fui incapaz de detectar.

```js
import { MongoClient } from 'mongodb';
import 'dotenv/config';

const mongo = new MongoClient(process.env.MONGO_URI);

mongo.connect() 
    .then(() => {
        console.log('connected');
        const db = mongo.db('social')

        //casi, con un toArray final esto habría funcionado... si no fuera porque tenía mal puesta la variable de entorno.
        db.collection('users').find().then(users => console.log(users))

})
    .catch(error => console.log(error))
```

### Intento mal 5:

Añadí el toArray() y lo manejé con callbacks siguiendo el ejemplo de [w3schools](https://www.w3schools.com/nodejs/nodejs_mongodb_find.asp). Habría funcionado, si no fuera porque me había cargado la variable de entorno con la URI.

```js
import { MongoClient } from 'mongodb';
import 'dotenv/config';

const mongo = new MongoClient(process.env.MONGO_URI);

mongo.connect() 
    .then(() => {
        console.log('connected');
        const db = mongo.db('social')

        db.collection("users").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
})
    .catch(error => console.log(error))

// Este código esta bien, lo malo es que la variable de entorno no y no me di cuenta
```

### Intentos mal posteriores:

Luego vinieron varios intentos en los que intente ejecutar el código en archivos que no eran el `index.js` en los que importaba mal la variable de entorno (ya ni siquiera era la incorrecta, era `undefined`) o ejecutaba la conexión a la base de datos mal y me pensaba que era por culpa de la carpeta `node_modules` y algún fallo en la instalación de la libreria de mongodb...

## Conclusión:

1. La memoria **es muy falible**. Si alguna vez tu cerebro dice *'pero yo lo recuerdo más fácil'* y la documentación dice *'esto es así sí o sí'*... Quién tiene razón es, evidentemente, la documentación.

2. **Hacer cambios pequeños y probarlos uno a uno**. No puedo cambiar algo, ver que no funciona y construir cambios sobre ese cambio roto que no funcionaba. Seguramente se pueden acabar descartando soluciones que servirian y el fallo no se esta tomando ni en consideración por ser algo que lleva rato ahí.