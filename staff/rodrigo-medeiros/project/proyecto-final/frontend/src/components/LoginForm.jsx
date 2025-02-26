// LoginForm.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '../../../backend/logic/login';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const result = await login(email, password);
    if (result.success) {
      toast.success('Login successful!', {
        position: 'top-center',
        autoClose: 3000,
      });
      navigate('/');
    } else {
      setError(result.message);
    }
  };

  return (
    <form className="bg-blue-900 p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        className="bg-yellow-500 text-black p-2 rounded-lg w-full mb-4"
      >
        Login
      </button>
      <div className="flex justify-between">
        <Link to="/forgot-password" className="text-white">Forgot Password?</Link>
        <Link to="/register" className="text-white">Register</Link>
      </div>
    </form>
  );
};

export default LoginForm;
