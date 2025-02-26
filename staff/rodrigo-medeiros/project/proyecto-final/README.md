# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
proyecto-final
├─ backend
│  ├─ .env
│  ├─ logic
│  │  ├─ registerUser.js
│  │  └─ registerUserAux.js
│  ├─ models
│  │  ├─ User.js
│  │  └─ UserAux.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  └─ userRoutes.js
│  └─ server.js
├─ db.json
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ airports.js
│  ├─ App.jsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ components
│  │  ├─ AirportPicker.jsx
│  │  ├─ DatePickerYellow.jsx
│  │  ├─ Footer.jsx
│  │  ├─ handlers.jsx
│  │  ├─ Header.jsx
│  │  ├─ icons.jsx
│  │  ├─ index.jsx
│  │  ├─ LoginForm.jsx
│  │  ├─ RegisterForm.jsx
│  │  ├─ RegisterFormAUX.jsx
│  │  └─ SearchFlightsForm.jsx
│  ├─ index.css
│  ├─ index.jsx
│  ├─ locales
│  │  └─ es.json
│  ├─ pages
│  │  ├─ Home.jsx
│  │  ├─ index.jsx
│  │  ├─ Register.jsx
│  │  └─ SignIn.jsx
│  ├─ reportWebVitals.js
│  └─ tools
│     ├─ errors.js
│     ├─ index.js
│     └─ validator.js
├─ tailwind.config.js
└─ vite.config.js

```