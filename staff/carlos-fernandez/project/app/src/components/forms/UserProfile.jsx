import React, { useState, useEffect } from "react";
import getUser from "../../logic/getUser";

function UserProfile() {
  const [user, setUser] = useState(null); // Estado para guardar los datos del usuario
  const [loading, setLoading] = useState(true); // Estado para mostrar el indicador de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Llamada a la lógica
        const userData = await getUser();
        if (userData) {
          // Seteamos los datos del usuario
          setUser(userData.user);
        } else {
          setError("Error fetching user data");
        }
      } catch (error) {
        setError(error.message || "Unexpected error occurred");
      } finally {
        // Acaba la carga
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error: {error}</p>;

  /////////////////////////////////////////////////////// COMPONENTE ///////////////////////////////////////////////////////
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
        <p>
          <strong>Surname:</strong> {user.surname}
        </p>
        <p>
          <strong>Phone Number:</strong> {user.phoneNumber}
        </p>
        <p>
          <strong>NIF:</strong> {user.nif}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
