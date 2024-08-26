import React from "react";
import { Link as RouterLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <div className="p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="mt-4 text-gray-700">Page Not Found</p>
        <p className="mt-2 text-gray-500">
          You just hit a route that doesn't exist...
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
          <RouterLink to="/">Click here, back to Home Page</RouterLink>
        </button>
      </div>
    </section>
  );
};

export default NotFound;
