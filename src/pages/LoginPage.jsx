import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selector";
import LoginForm from "../components/LoginForm/LoginForm";

const LoginPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <section>
      <div>{!isLoggedIn && <LoginForm />}</div>
    </section>
  );
};

export default LoginPage;
