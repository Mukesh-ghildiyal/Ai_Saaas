// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    if (query) {
      navigate(`/search?query=${query}`);
    }
  };

 const handleButton = () => {
    navigate('/guided');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="absolute top-4 right-4">
        <button className="text-sm text-gray-300 hover:text-white mr-4">Register</button>
        <button className="text-sm text-green-500 hover:text-white">Login</button>
      </div>
      <h1 className="text-4xl font-bold mb-6 text-center">
        Create Structured & Customised Learning Content.
      </h1>
      <div className="w-full max-w-xl mx-auto flex flex-col items-center">
        <div className="flex w-full bg-white rounded-full shadow p-2">
          <input
            type="text"
            placeholder="what do you want to learn? e.g. blogging, etc"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow px-4 py-2 text-gray-700 rounded-l-full focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600"
          >
            Create Quickly
          </button>
        </div>
        <p className="mt-4 text-gray-400">or</p>
        <button onClick={handleButton} className="mt-2 text-orange-500 hover:underline">
          Create with Advanced Options
        </button>
      </div>
    </div>
  );
};

export default Hero;
