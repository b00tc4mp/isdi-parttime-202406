import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";  // Keep BrowserRouter here

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Only one BrowserRouter here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);






