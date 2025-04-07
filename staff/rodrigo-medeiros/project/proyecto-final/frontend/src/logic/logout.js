// logout.js
export function logout(navigate) {
  console.log("logout() chamado");
  // Remover o token de autenticação do sessionStorage
  sessionStorage.removeItem("authToken");
  console.log("Token removido:", sessionStorage.getItem("authToken")); // Deve ser null
  // Redirecionar para a página de login
  navigate("/signin");
  console.log("Navegando para /signin");
}
