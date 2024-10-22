import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-300 to-blue-500">
      <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg max-w-lg mx-auto text-center transform transition duration-300 hover:shadow-[0_15px_30px_rgba(0,119,255,0.3)] hover:scale-105 hover:bg-blue-50">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Welcome to your new digital address book!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-800 transition duration-300 cursor-pointer"
          >
            Log In
          </Link>{" "}
          or{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:text-blue-800 transition duration-300 cursor-pointer"
          >
            Sign Up
          </Link>{" "}
          To Continue
        </p>
        <p className="text-lg text-gray-900 font-semibold">Enjoy!</p>
      </div>
    </section>
  );
};

export default HomePage;
