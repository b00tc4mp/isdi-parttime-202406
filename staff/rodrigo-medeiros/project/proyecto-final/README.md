# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# ✈️ Rotatur - Flight Search API

## 📌 Descripción (Español)

**Rotatur** es una aplicación completa para buscar vuelos, guardar rutas favoritas y administrar datos personales. Está compuesta por un backend en Node.js y un frontend en React, utilizando la API de Amadeus.

---

## 🧱 Arquitectura del Proyecto

```
proyecto-final/
├── backend/                  # API REST Express + MongoDB
│   ├── handlers/             # Controladores
│   ├── logic/                # Lógica de negocio
│   ├── models/               # Esquemas Mongoose
│   ├── tools/                # Utilidades (encriptación, tokens, etc.)
│   ├── errors/               # Manejo centralizado de errores
│   ├── validator.js          # Validación de entradas
│   └── server.js             # Punto de entrada
│
├── frontend/                 # Aplicación React
│   ├── components/           # Componentes y contenedores
│   ├── context/              # Contextos globales (Auth, Alert)
│   ├── handlers/             # Lógica de interacción con API
│   ├── hooks/                # Hooks personalizados
│   ├── logic/                # Autenticación local
│   ├── pages/                # Rutas principales (Login, Perfil...)
│   └── AppRoutes.jsx         # Definición de rutas (React Router)
```

---

## 🚀 Cómo ejecutar el proyecto

### Backend

```bash
cd backend
npm install
node server.js
```

Crear `.env` con:

```env
PORT=3000
AMADEUS_API_KEY=tu_api_key
AMADEUS_API_SECRET=api_secret
MONGO_URI=mongodb://localhost:27017/rotatur
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## ✅ Tests Backend

```bash
npm run test
```

- Cobertura: >96%
- Framework: Jest
- Archivos probados: lógica, validaciones, servicios

Rotatur cuenta con una cobertura de pruebas rigurosa. La siguiente imagen muestra el resultado completo de los tests:

-------------------------------|---------|----------|---------|---------|-------------------
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------------------|---------|----------|---------|---------|-------------------
All files | 96.71 | 73.91 | 100 | 98.15 |  
 logic/user | 97.04 | 76.85 | 100 | 98.6 |  
 addNewFavouriteRoute.js | 100 | 85.71 | 100 | 100 | 28  
 addNewFavouriteRoute.spec.js | 100 | 100 | 100 | 100 |  
 deleteFavouriteRoute.js | 100 | 100 | 100 | 100 |  
 deleteFavouriteRoute.spec.js | 100 | 100 | 100 | 100 |  
 deleteUserService.js | 100 | 100 | 100 | 100 |  
 deleteUserService.spec.js | 100 | 100 | 100 | 100 |  
 forgotPassword.js | 100 | 94.11 | 100 | 100 | 49  
 forgotPassword.spec.js | 98.48 | 50 | 100 | 100 | 23  
 getFavouriteRoutes.js | 100 | 100 | 100 | 100 |  
 getFavouriteRoutes.spec.js | 93.18 | 50 | 100 | 95.34 | 27-28  
 registerUser.js | 100 | 100 | 100 | 100 |  
 registerUser.spec.js | 97.5 | 50 | 100 | 100 | 22  
 updateDateOfBirth.js | 96.15 | 78.57 | 100 | 100 | 14,36-40  
 updateDateOfBirth.spec.js | 98.46 | 50 | 100 | 100 | 23  
 updateEmail.js | 95.65 | 78.57 | 100 | 95.45 | 15  
 updateEmail.spec.js | 98.46 | 50 | 100 | 100 | 23  
 updatePassword.js | 70.58 | 50 | 100 | 76.66 | 24,47-54  
 updatePassword.spec.js | 98.48 | 50 | 100 | 100 | 23  
 updateUsername.js | 96.15 | 78.57 | 100 | 100 | 15,37-40  
 updateUsername.spec.js | 98.46 | 50 | 100 | 100 | 23  
 models | 100 | 100 | 100 | 100 |  
 User.js | 100 | 100 | 100 | 100 |  
 tools | 90.24 | 52.94 | 100 | 87.87 | updateUsername.spec.js | 98.4 updateUsername.spec.js | 98.46 | 50 | 100 | 100 | 23  
 models | 100 | 100 | 100 | 100 |  
 User.js | 100 | 100 | 100 | 100 |  
 tools | 90.24 | 52.94 | 100 | 87.87 | updateUsername.spec.js | 98.46 | 50 | 100 | 100 | 23
models | 100 | 100 | 100 | 100 |  
 User.js | 100 | 100 | 100 | 100 |  
 tools | 90.24 | 52.94 | 100 | 87.87 |  
 errors.js | 100 | 50 | 100 | 100 | 4
validator.js | 80.95 | 53.33 | 100 | 80.95 | 19,27,39,46  
-------------------------------|---------|----------|---------|---------|-------------------

---

## 🔐 Seguridad

- Autenticación por token (JWT)
- Middleware de validación por rol
- Validación de entradas con Express Validator

---

# ✈️ Rotatur - Flight Search API (English)

## 📌 Overview

**Rotatur** is a full-stack application to search flights, save favorite routes, and manage user info. It combines a Node.js backend with a React frontend and connects to Amadeus API.

## 🧱 Architecture

(see project tree above)

## ⚙️ Setup

### Backend

```bash
cd backend
npm install
node server.js
```

Create `.env`:

```env
PORT=3000
AMADEUS_API_KEY=your_api_key
AMADEUS_API_SECRET=api_secret
MONGO_URI=mongodb://localhost:27017/rotatur
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🧪 Tests

```bash
npm run test
```

## 🔐 Security

- JWT authentication
- Role-based middleware
- Input validation

## 📄 License

MIT License
