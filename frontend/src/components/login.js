import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api'; 
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', { email, password });
      toast.success('Login successful!');
      navigate('/'); 
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-2/4 max-w-4xl p-5">
          <h1 className="font-bold text-2xl mb-5">Login</h1>
          <div className="flex flex-col space-y-4 w-full">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg w-full"
            />
            <button type="submit" className="bg-gray-950 rounded-lg text-white font-bold px-5 py-2 cursor-pointer w-full hover:bg-white hover:text-black hover:border-solid hover:border-3 border-transparent hover:border-black">
              Login
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <p className="mt-4">
              Don't have an account?{' '}
              <button className="text-blue-500 hover:underline" onClick={() => navigate('/register')}>
                Register
              </button>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
