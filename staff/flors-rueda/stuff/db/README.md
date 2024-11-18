# **Bases de Datos Relacionales (Analogía con Excel)**
- Imagina una **hoja de cálculo de Excel** con múltiples hojas, cada una estructurada en filas y columnas.
- Cada hoja representa una **tabla** en una base de datos relacional.
- Los datos tienen una estructura fija: Cada fila es un registro, y cada columna corresponde a un atributo específico (por ejemplo, Nombre, Edad, Dirección).
- Las **relaciones** se gestionan mediante claves (por ejemplo, una columna en una hoja que se vincula con otra hoja).

## **Ventajas de las Bases de Datos Relacionales:**
1. **Esquema estructurado**: Una estructura clara y rígida garantiza la consistencia.
2. **Gestión de relaciones**: Optimizado para escenarios con relaciones complejas entre datos, usando joins para conectar tablas.
3. **Seguridad transaccional**: El cumplimiento de ACID asegura la fiabilidad de los datos, especialmente en sistemas que requieren consistencia estricta.

### **Desafíos de las Bases de Datos Relacionales:**
1. **Escalabilidad**: Escalar horizontalmente (añadir más servidores) es más difícil debido a su estructura rígida.
2. **Rigidez del esquema**: Agregar nuevos campos o alterar el esquema requiere migraciones, lo cual puede ser lento.
3. **Manejo de datos no estructurados**: No son ideales para datos muy variables o jerárquicos.

---

# **Bases de Datos No Relacionales (Analogía con JSON)**
- Ahora, piensa en un **archivo JSON**. En lugar de filas y columnas, JSON organiza los datos en **pares clave-valor** y puede incluir objetos y arreglos anidados.
- Cada documento JSON es como un registro en una base de datos no relacional, independiente y sin necesidad de un esquema estricto.

### **Ejemplo:**
```json
{
  "nombre": "Percy",
  "edad": 4,
  "direccion": {
    "ciudad": "Granada",
    "codigo_postal": "10001"
  },
  "hobbies": ["dormir", "comer"]
}
```

Este formato JSON corresponde a un único documento en MongoDB. Puede manejar:
- **Datos anidados** (la dirección como un objeto).
- **Campos variables** (por ejemplo, los hobbies pueden variar en tipo y cantidad entre registros).

#### **Ventajas de las Bases de Datos No Relacionales:**
1. **Flexibilidad**: No tienen un esquema rígido; los campos pueden variar entre documentos. Útil para requisitos de datos en evolución.
2. **Manejo de Datos Complejos**: Pueden almacenar fácilmente datos anidados y jerárquicos (como los campos `address` y `hobbies`).
3. **Escalabilidad**: La escalabilidad horizontal está integrada, lo que las hace ideales para grandes volúmenes de datos y sistemas distribuidos.
4. **Velocidad**: Consultar un único documento es más rápido porque no se necesitan uniones para obtener datos relacionados.

#### **Cuándo Usar Bases de Datos No Relacionales Como MongoDB:**
- Aplicaciones con estructuras de datos que cambian frecuentemente (por ejemplo, catálogos de productos, perfiles de usuario).
- Sistemas que necesitan almacenar datos no estructurados o semi-estructurados (por ejemplo, registros, datos de IoT).
- Cargas de trabajo de alto volumen y distribuidas que requieren una escalabilidad eficiente.

---

### **Comparación de Excel vs. JSON:**
| **Aspecto**             | **Excel (BD Relacional)**               | **JSON (BD No Relacional)**         |
|-------------------------|-----------------------------------------|-------------------------------------|
| **Estructura**          | Filas y columnas fijas (esquema rígido) | Flexible, permite campos variables |
| **Relaciones**          | Gestionadas mediante tablas vinculadas  | Embebidas en documentos            |
| **Escalabilidad**       | Más difícil de escalar horizontalmente  | Fácil de escalar entre servidores  |
| **Complejidad de Datos**| Mal ajuste para datos jerárquicos       | Excelente para estructuras anidadas|
| **Cambios de Esquema**  | Toman tiempo, requieren migraciones     | Dinámico, esquemas flexibles  |

---

# Instalar MongoDB

## Mongodb:

- Download ZIP

```sh
Flors@Phoenix MINGW64 ~
$ cd workspace/

Flors@Phoenix MINGW64 ~/workspace
$ unzip mongodb-windows-x86_64-8.0.3.zip
Archive:  mongodb-windows-x86_64-8.0.3.zip
  inflating: mongodb-win32-x86_64-windows-8.0.3/LICENSE-Community.txt
  inflating: mongodb-win32-x86_64-windows-8.0.3/MPL-2
  inflating: mongodb-win32-x86_64-windows-8.0.3/README
  inflating: mongodb-win32-x86_64-windows-8.0.3/THIRD-PARTY-NOTICES
  inflating: mongodb-win32-x86_64-windows-8.0.3/bin/Install-Compass.ps1
  inflating: mongodb-win32-x86_64-windows-8.0.3/bin/mongod.exe
  inflating: mongodb-win32-x86_64-windows-8.0.3/bin/mongod.pdb
  inflating: mongodb-win32-x86_64-windows-8.0.3/bin/mongos.exe
  inflating: mongodb-win32-x86_64-windows-8.0.3/bin/mongos.pdb
  inflating: mongodb-win32-x86_64-windows-8.0.3/bin/vc_redist.x64.exe

Flors@Phoenix MINGW64 ~/workspace
$ cd mongodb-win32-x86_64-windows-8.0.3/

Flors@Phoenix MINGW64 ~/workspace/mongodb-win32-x86_64-windows-8.0.3
$ ls
LICENSE-Community.txt  MPL-2  README  THIRD-PARTY-NOTICES  bin/

Flors@Phoenix MINGW64 ~/workspace/mongodb-win32-x86_64-windows-8.0.3
$ mkdir data

Flors@Phoenix MINGW64 ~/workspace/mongodb-win32-x86_64-windows-8.0.3
$ ./bin/mongod.exe --dbpath data

```

## Mongo-shell

```sh
Flors@Phoenix MINGW64 ~/workspace
$ unzip mongo
mongodb-win32-x86_64-windows-8.0.3/ mongosh-2.3.3-win32-x64.zip

Flors@Phoenix MINGW64 ~/workspace
$ unzip mongosh-2.3.3-win32-x64.zip
Archive:  mongosh-2.3.3-win32-x64.zip
   creating: mongosh-2.3.3-win32-x64/
  inflating: mongosh-2.3.3-win32-x64/.sbom.json
   creating: mongosh-2.3.3-win32-x64/bin/
  inflating: mongosh-2.3.3-win32-x64/bin/mongosh.exe
  inflating: mongosh-2.3.3-win32-x64/bin/mongosh_crypt_v1.dll
  inflating: mongosh-2.3.3-win32-x64/LICENSE-crypt-library
  inflating: mongosh-2.3.3-win32-x64/LICENSE-mongosh
 extracting: mongosh-2.3.3-win32-x64/mongosh.1.gz
  inflating: mongosh-2.3.3-win32-x64/README
  inflating: mongosh-2.3.3-win32-x64/THIRD_PARTY_NOTICES

Flors@Phoenix MINGW64 ~/workspace
$ cd mongosh-2.3.3-win32-x64/

Flors@Phoenix MINGW64 ~/workspace/mongosh-2.3.3-win32-x64
$ ls
LICENSE-crypt-library  README               bin/
LICENSE-mongosh        THIRD_PARTY_NOTICES  mongosh.1.gz

Flors@Phoenix MINGW64 ~/workspace/mongosh-2.3.3-win32-x64
$ ./bin/mongosh
mongosh.exe           mongosh_crypt_v1.dll

Flors@Phoenix MINGW64 ~/workspace/mongosh-2.3.3-win32-x64
$ ./bin/mongosh.exe
Current Mongosh Log ID: 673b935d38706e9e100d818f
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.3
Using MongoDB:          8.0.3
Using Mongosh:          2.3.3

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-11-18T20:16:33.800+01:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
   2024-11-18T20:16:33.800+01:00: This server is bound to localhost. Remote systems will be unable to connect to this server. Start the server with --bind_ip <address> to specify which IP addresses it should serve responses from, or with --bind_ip_all to bind to all interfaces. If this behavior is desired, start the server with --bind_ip 127.0.0.1 to disable this warning
------

test> show databases
admin   40.00 KiB
config  12.00 KiB
local   72.00 KiB
test> use social
switched to db social

```

## Inside Mongo-shell

```sh
test> show databases
admin   40.00 KiB
config  12.00 KiB
local   40.00 KiB

test> use social
switched to db social

social> db.users.insertOne({ name: 'Cosmito', email: 'cosm@ito.com', username: 'cosmito', password: 'C05m0!' });
{
  acknowledged: true,
  insertedId: ObjectId('672c9e573dbfe92085400b86')
}
social> show collections
users
social> db.users.find()
```

# Uso de Mongo:

## Primero el servidor:
