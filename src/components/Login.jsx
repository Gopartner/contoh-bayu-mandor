// src/components/Login.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Implementasikan logika login di sini
    navigate('/profile');
  };

  return (
    <div className="bg-gray-800 text-white p-6 max-w-md mx-auto">
      <h2 className="text-xl mb-4 font-bold">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-600 rounded bg-gray-700"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="w-full p-2 border border-gray-600 rounded bg-gray-700"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded w-full"
        >
          Login
        </button>
      </form>
      <p className="mt-4">Belum punya akun? <Link to="/register" className="text-yellow-500 hover:underline">Daftar di sini</Link></p>
    </div>
  );
};

export default Login;

