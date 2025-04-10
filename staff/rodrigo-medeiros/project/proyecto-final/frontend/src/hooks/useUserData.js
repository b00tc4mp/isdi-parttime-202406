import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useUserData() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      navigate("/signin");
      return;
    }
    try {
      const response = await fetch("http://localhost:5000/api/user/profile", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      setUserData({
        username: data.username,
        dateOfBirth: data.dateOfBirth,
        email: data.email,
        password: "",
      });
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [navigate]);

  return { userData, error, fetchUserData };
}
