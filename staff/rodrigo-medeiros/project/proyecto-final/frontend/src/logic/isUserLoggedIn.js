export function isUserLoggedIn() {
  const token = sessionStorage.getItem("authToken");
  if (token) {
    return true;
  } else {
    return false;
  }
}
