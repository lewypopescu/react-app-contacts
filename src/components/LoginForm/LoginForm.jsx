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
    <UniversalForm
      initialValues={initialValues}
      validationSchema={LogInSchema}
      operation={logIn}
      labelButtonSbmit="Log in"
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
  );
};

export default LoginForm;
