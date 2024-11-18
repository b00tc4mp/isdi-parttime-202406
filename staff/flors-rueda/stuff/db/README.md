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

```

## Mongo-shell

```sh

```

## Inside Mongo-shell

```sh
test> show databases
admin   40.00 KiB
config  12.00 KiB
local   40.00 KiB

test> use social
switched to db social

social> db.users.insertOne({ name: 'Cosmito', email: 'cosm@ito.com', username: 'cosmito', password: 'C05m0!' })
{
  acknowledged: true,
  insertedId: ObjectId('672c9e573dbfe92085400b86')
}
social> show collections
users
social> db.users.find()
```