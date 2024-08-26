import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selector";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogOut = () => {
    setIsLoading(true);
    dispatch(logOut()).then(() => setIsLoading(false));
  };

  return (
    <div className="flex items-center space-x-4">
      <p className="text-blue-600">Hello, {user.name}</p>
      <button
        onClick={handleLogOut}
        disabled={isLoading}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isLoading ? "Logging out..." : "LogOut"}
      </button>
    </div>
  );
};

export default UserMenu;
