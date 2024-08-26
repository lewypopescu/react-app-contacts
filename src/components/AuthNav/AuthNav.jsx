import React from "react";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <ul className="flex space-x-4">
      <li>
        <NavLink
          to="/register"
          className="text-lg font-semibold text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out hover:scale-105"
        >
          Sign Up
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className="text-lg font-semibold text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out hover:scale-105"
        >
          Log In
        </NavLink>
      </li>
    </ul>
  );
};

export default AuthNav;
