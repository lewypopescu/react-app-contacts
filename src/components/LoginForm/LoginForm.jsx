import { logIn } from "../../redux/auth/operations";
import FormInput from "../FormInput/FormInput";
import UniversalForm from "../UniversalForm/UniversalForm";
import { LogInSchema } from "../../yupSchemas/index";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
        Log In
      </h2>
      <UniversalForm
        initialValues={initialValues}
        validationSchema={LogInSchema}
        operation={logIn}
        labelButtonSubmit="Log in"
      >
        <FormInput
          name="email"
          type="email"
          label="Email"
          placeholder="Enter email"
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          placeholder="Enter password"
        />
      </UniversalForm>
    </div>
  );
};

export default LoginForm;
