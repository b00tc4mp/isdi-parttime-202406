import { useNavigate } from "react-router-dom";
import { useState } from "react";
import createUser from "../../logic/registerUser";
import "../../styles/main.css";

const RegisterUser = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const createUserFunc = async (email, username, password, repeatPassword) => {
    try {
      await createUser(username, email, password, repeatPassword);
      navigate("/login")
    } catch (err) {
      console.error("Error al crear el usuario:", err.message);
      setError(err.message || "Error al crear el usuario.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const username = event.target.username.value;
    const password = event.target.password.value;
    const repeatPassword = event.target.repeatPassword.value;

    setError("");
    createUserFunc(email, username, password, repeatPassword);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h1>¡Únete ahora!</h1>
          <p>¡Regístrate ya!</p>
        </div>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit} className="form">
          <input type="text" name="username" placeholder="Nombre de Usuari@" required />
          <input type="email" name="email" placeholder="E-Mail" required />
          <input type="password" name="password" placeholder="Contraseña" required />
          <input type="password" name="repeatPassword" placeholder="Repite la contraseña" required />
          <button type="submit">¡Regístrate!</button>
          <p>
            ¿Ya eres miembro?{" "}
            <a href="/login">¡Inicia sesión aquí!</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
