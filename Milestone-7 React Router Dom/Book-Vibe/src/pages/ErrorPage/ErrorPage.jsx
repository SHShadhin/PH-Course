import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center max-w-lg w-full border border-white/20">
        <h1 className="text-8xl font-extrabold text-white drop-shadow-lg">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-white mt-4">
          Oops! Page Not Found
        </h2>

        <p className="text-gray-200 mt-3 mb-6">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 rounded-lg bg-white text-purple-600 font-semibold shadow-md hover:bg-purple-100 transition duration-300"
        >
          ⬅ Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
