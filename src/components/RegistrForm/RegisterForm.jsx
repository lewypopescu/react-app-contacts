import { register } from "../../redux/auth/operations";
import FormInput from "../FormInput/FormInput";
import UniversalForm from "../UniversalForm/UniversalForm";
import { SignUpSchema } from "../../yupSchemas/index";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  return (
    <UniversalForm
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      operation={register}
      labelButtonSbmit="Sign up"
    >
      <FormInput name="name" label="Name" placeholder="Enter nick-name" />
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

export default RegisterForm;
