# SafeMind

<img src="F:\Descargas\Gemini_Generated_Image_b3hv4xb3hv4xb3hv (1).png" alt="Gemini_Generated_Image_b3hv4xb3hv4xb3hv (1)" style="zoom:25%;" />

------

## 🧠 Introducción

**SafeMind** es una aplicación diseñada para realizar un **seguimiento personal de crisis y sucesos derivados de problemas de salud mental**.

Además, permite un acceso rápido a **contactos de emergencia** en situaciones críticas.

## 📌 Descripción Funcional

### 🔍 Casos de Uso

- **👤 Gestión de usuarios**
  - 📝 Registro e inicio de sesión
  - 🚪 Logout
    - 🔜 Por añadir en versión 2.0:
      - ❌ Eliminación del usuario
      - 🔄 Modificación de datos
      - 🏥 Conexión con perfiles de personal médico
      - 👀 Seguimiento por personas autorizadas
- **📞 Contactos de emergencia**
  - ➕ Creación y visualización de contactos
  - ❌ Eliminación de contactos
    - 🔜Por añadir en versión 2.0:
      - ✏️ Modificación de datos
      - 🔑 Acceso de personas autorizadas
      - 🚨 Botón de emergencia para 112 y 024
      - 🎥 Videollamada a servicios de emergencia
- **📅 Eventos en el calendario**
  - 🆕 Creación y visualización de eventos
  - 📆 Navegación por calendario
    -  🔜Por añadir en versión 2.0:
      - ✏️ Modificación y eliminación de eventos
      - 🔗 Vinculación con Google Calendar
      - 🔑 Acceso a eventos por personas autorizadas

## 🎨 UI/UX Design

<iframe width="768" height="432" src="https://miro.com/app/live-embed/uXjVIbQrS7U=/?moveToViewport=1468,-5460,15216,14581&embedId=115020920882" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>

## ⚙️ Descripción Técnica

### 🛠️ Tecnologías & Librerías

- **Frontend:** React, TailwindCSS, DaisyUI, Vite
- **Backend:** Node.js, Express
- **Base de datos:** MongoDB con Mongoose
- **Infraestructura:** Docker
- **Testing:** Mocha + Chai
- **Seguridad:** bcrypt para hashing de contraseñas

### 🗄️ Modelos de Datos

#### 👤 User Model

- ✉️ Email (String)
- 👤 Username (String)
- 🔒 Password (String, hasheado con bcrypt)
- 📅 Events (ObjectID - Mongoose)
- 📞 Contacts (ObjectID - Mongoose)

#### 📞 Emergency Contacts Model

- 🏷️ ContactName (String)
- 📱 Phone (String)
- 🤝 Relationship (String)
- 👤 User (ObjectID - Mongoose)

#### 📅 Events Model

- 🏷️ EventName (String)
- 📆 StartDateTime (Date)
- ⏳ Duration (Number)
- 🎨 Color (String - HEX)
- 🏷️ Category (String)
- 👤 User (ObjectID - Mongoose)

### ✅ Test Coverage

![Test Coverage](file:///D:/%5Cworkspace%5CTestCoverage.png)

## 🚀 Epics & Stories

### 🌟 **Epic: Registro y Seguimiento de Crisis**

#### 📌 Historia de Usuario 1: Registro de eventos de crisis

- 💭 Como usuario, quiero registrar crisis en el calendario para poder hacer un seguimiento de mis episodios de ansiedad y ver patrones en el tiempo.

##### 🔗 Casos de Uso Relacionados

- 🆕 Creación de eventos
- 📆 Visualización de eventos en el calendario

#### 📌 Historia de Usuario 2: Contactos de emergencia

- 📞 Como usuario, quiero agregar contactos de emergencia para que alguien pueda ayudarme en situaciones de crisis.

##### 🔗 Casos de Uso Relacionados

- ➕ Creación y eliminación de contactos
- 🚨 Acceso rápido a contactos

## 🌍 Proyecto

🔜 **Pronto disponible en despliegue!**

### Agradecimientos

## 💙 Agradecimientos

Quiero expresar mi más sincero agradecimiento a todas las personas que han hecho posible este proyecto:

- **Portal, Rodrigo, Ángela, Limón, Bock y Rafa**, mis compañeros del bootcamp, por su apoyo constante y por ayudarme a resolver dudas en cada paso del camino.
- **Ventura y, sobre todo, Flors**, por enseñarme tanto, por su paciencia infinita y por aguantar mis miles de dudas que muchas veces se solucionaban con unos pocos clics.
- **ISDI**, como empresa del bootcamp, por brindarme la oportunidad de aprender y crecer, aunque haya sido pagando.
- **Carlos Maraña**, mi amigo de toda la vida, mi hermano. Gracias por estar siempre ahí, por aguantar horas y horas de dudas, cambios y estructuración. Por nunca dejarme rendirme y hacer que este proyecto sea una realidad.

💡 **Este proyecto no habría sido posible sin vosotrxs. Gracias de corazón.**