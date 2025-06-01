import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-purple-800 to-gray-700 text-white px-6">
      <div className="text-center max-w-xl">
        <h1 className="text-7xl font-extrabold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-lg mb-6 text-gray-300">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-white text-gray-900 font-semibold rounded-md shadow-md hover:bg-gray-100 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
