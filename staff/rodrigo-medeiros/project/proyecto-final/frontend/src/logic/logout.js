// logout.js
export function logout(navigate) {
  // Remover o token de autenticação do sessionStorage
  sessionStorage.removeItem("authToken");

  // Redirecionar para a página de login
  navigate("/signin");
}
