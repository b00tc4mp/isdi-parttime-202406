import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    dateOfBirth: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      navigate("/signin");
      return;
    }

    const fetchUserData = async () => {
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

    fetchUserData();
  }, [navigate]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem("authToken");
    
    if (!token) {
      navigate("/signin");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      alert("Profile updated successfully");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleUpdate} className="bg-blue-900 p-6 rounded-lg shadow-lg">
      {error && <p className="text-red-500">{error}</p>}
      <input
        type="text"
        placeholder="Full Name"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
        value={userData.username}
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
        required
      />
      <input
        type="date"
        placeholder="Date of Birth"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
        value={userData.dateOfBirth}
        onChange={(e) => setUserData({ ...userData, dateOfBirth: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        required
      />
      <input
        type="password"
        placeholder="New Password"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
        value={userData.password}
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <button
        type="submit"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
      >
        Update Profile
      </button>
    </form>
  );
};

export default MyProfile;
