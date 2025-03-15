# 🐶 Doo(g)king

## 📌 Introducción

Este proyecto es un sistema de reservas para una residencia canina. Los usuarios pueden registrar sus mascotas y gestionar reservas en función de la disponibilidad de la residencia. Está diseñado para impedir realizar una reserva en caso de que se supere el aforo de **50 mascotas/día**.

## ⚙️ Descripción funcional

### 🔹 Casos de uso

- **👤 Usuarios**:

  - 📝 Registro, inicio de sesión y logout
  - 🔍 Consultar su información
  - ✏️ Editar número de teléfono y contraseña

- **🐾 Mascotas**:

  - 📋 Formulario de registro para registrar mascotas asociadas al usuario.
  - 👀 Consultar las mascotas registradas.
  - 🗑️ Posibilidad de eliminarlas de la BBDD.

- **📅 Reservas**:
  - 🚫 El sistema siempre tendrá en cuenta el aforo de **50 perros/día**.
  - 🏨 Crear reservas para tus mascotas.
  - 📖 Consultar las reservas creadas.
  - ✍️ Posibilidades de edición:
    - ❌ Eliminar la reserva completa.
    - 🔽 Eliminar algunas mascotas o todas de la reserva.
    - ➕ Añadir nuevas mascotas a reservas ya existentes.

## 💻 Descripción técnica

### 🚀 Tecnologías y librerías

- **Frontend:** ⚛️ React, ⚡ Vite, 🎨 TailwindCSS, 🌼 DaisyUI
- **Backend:** 🟢 Node.js, ⚙️ Express, 🗄️ MongoDB
- **Base de datos:** 🗃️ MongoDB, 🏛️ Mongoose
- **Autenticación:** 🔑 JSON Web Tokens (JWT)
- **Testing:** 🧪 Mocha, 🏹 Chai

### 📂 Modelos de datos

- **🧑 User schema**:

  - 🆔 Username - _(String)_
  - 🏷️ Surname - _(String)_
  - 📞 Phone - _(String)_
  - 🏛️ DNI - _(String)_
  - 📧 Email - _(String)_
  - 🔒 Password - _(String, hashed)_
  - 🐶 Dogs - _(array of ObjectID - Mongoose)_

- **🐕 Dog schema**:

  - 👤 Owner - _(array of ObjectID - Mongoose)_
  - 🔢 Chip - _(String)_
  - 🏷️ DogName - _(String)_
  - 🐩 Breed - _(String)_
  - 🎂 Birth date - _(Date)_
  - 🤝 Sociability - _(Boolean)_
  - 🏥 Disease - _(String)_
  - 🌾 Allergy - _(String)_

- **📅 Booking schema**:
  - 👤 Owner - _(ObjectID - Mongoose)_
  - 🐶 Dogs - _(array of ObjectID - Mongoose)_
  - 📆 StartDate - _(Date)_
  - 📆 EndDate - _(Date)_

## ✅ Test coverage

![📊 Test Coverage](ruta/a/la/imagen.png)

## 🎨 UX/UI

![🖌️ Diseño UX/UI](ruta/a/la/imagen.png)

## 🏗️ Epic & Stories

### 📖 Historia de usuario 1: Registro y reserva de mascotas

#### 📝 Descripción:

Juan es un usuario nuevo en la plataforma. Primero, registra a su perro **Max** en el sistema. Luego, selecciona las fechas en las que Max se quedará en la residencia y confirma su reserva.

#### 🔹 Casos de uso relacionados:

- 🐶 Registrar una mascota.
- 📅 Seleccionar fechas disponibles.

### 📖 Historia de usuario 2: Modificación de reserva

#### 📝 Descripción:

Ana ya tiene una reserva hecha para su perra **Luna**, pero necesita añadir también a su perra **Kora**. Ingresa al sistema, crea una nueva reserva para las mismas fechas de su reserva anterior, pero esta vez selecciona a **Kora**.

#### 🔹 Casos de uso relacionados:

- 📖 Ver reservas existentes.
- ➕ Crear nueva reserva con otra mascota.

## 🔮 Futuras versiones

- Editar fechas de reserva.
- Identificar el aforo desde el calendario.
- Rol administrador y rol cliente.
- Descarga del contrato en PDF.
- Agregar mascota a la reserva desde la propia reserva.
