import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <ul className="flex justify-center space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-b-2 border-white"
                : "text-blue-100 hover:text-white"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold border-b-2 border-white"
                : "text-blue-100 hover:text-white"
            }
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
