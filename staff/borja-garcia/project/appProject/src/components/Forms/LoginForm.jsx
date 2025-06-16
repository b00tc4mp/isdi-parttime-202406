/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import userAuth from "../../logic/userAuth.js";
import "../../styles/main.css";
import { useAuth } from "../../context/AuthContext";

const Login = ({ setStamp }) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const userLogin = async (email, password) => {
    try {
      const jsonToken = await userAuth(email, password);
      login(jsonToken.token);
        navigate("/home");
      setStamp();
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    userLogin(email, password);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="header">
          <h1>¡Bienvenido de nuevo!</h1>
          <p>Inicia sesión para continuar</p>
        </div>
        <form onSubmit={handleSubmit} className="form">
          <input type="email" name="email" placeholder="E-Mail" required />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
          />
          <button type="submit">Iniciar Sesión</button>
          <p>
            ¿Sin cuenta? <a href="/register">¡Regístrate aquí!</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
