import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-100">
      <div className="flex space-x-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-blue-500 text-white rounded shadow"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-4 py-2 bg-green-500 text-white rounded shadow"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
