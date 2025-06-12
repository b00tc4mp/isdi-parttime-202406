# Mongoose

## ¿Qué es?

Mongoose es una libreria de [ODM (Object Document Mapper)](https://www.dctacademy.com/blog/what-is-object-document-mapper-odm) diseñada para trabajar con MongoDB en aplicaciones de Node. Si bien puedes usar el controlador oficial de MongoDB directamente, Mongoose ofrece una serie de ventajas que lo hacen ser un plus interesante en muchas situaciones.

## Ventajas de usar Mongoose

### Estructuración de Datos con Esquemas:

Con Mongoose, defines esquemas que estructuran los datos, especificando qué campos tiene un documento, sus tipos y reglas (como si fueran migraciones en SQL).

Esto proporciona consistencia en los datos y facilita el desarrollo.


### Validación Integrada:

Mongoose incluye validaciones predefinidas (como requerir un campo, longitud mínima/máxima, formato, etc.) y la posibilidad de definir validaciones personalizadas.


### Middleware (Hooks):

Puedes ejecutar lógica antes o después de eventos como guardar, eliminar, o actualizar documentos (e.g., cifrar contraseñas antes de guardar un usuario).


### Populate Automático (Relaciones):

Mongoose permite rellenar de forma automática en base a referencias (relaciones) entre colecciones usando populate, lo que simplifica el trabajo con datos relacionados.

### Consultas Simplificadas:

Los métodos como findById, findOne, updateOne, y deleteMany están integrados directamente en los modelos, lo que facilita las operaciones CRUD.

### Soporta consultas avanzadas y filtros con una sintaxis más amigable.

### Plugins:

Mongoose soporta un ecosistema de plugins que extienden sus funcionalidades, como agregar soporte de paginación, manejo de usuarios, etc.

### Compatibilidad con Tipos de Datos de MongoDB:

Aunque usa una abstracción superior, sigue permitiendo el uso de tipos de datos nativos de MongoDB, como ObjectId, Date, y Buffer.

## Docs de Mongoose

- [Link a la documentación oficial de mongoose](https://mongoosejs.com/docs/guide.html)
- [Más sobre diferencias entre MongoDB y mongoose](https://www.scaler.com/topics/mongoose-vs-mongodb/)
