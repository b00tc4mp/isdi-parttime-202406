// src/logic/logout.js

export function logout() {
  console.log("🔒 logout() chamado");
  // Remove token do sessionStorage
  sessionStorage.removeItem("authToken");
  console.log("🔓 Token removido:", sessionStorage.getItem("authToken")); // Deve ser null
}
