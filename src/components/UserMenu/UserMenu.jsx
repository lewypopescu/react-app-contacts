import { useState } from "react";
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
    <div>
      <p>Hello, {user.name}</p>
      <button onClick={handleLogOut} disabled={isLoading}>
        {isLoading ? "Logging out..." : "LogOut"}
      </button>
    </div>
  );
};

export default UserMenu;
