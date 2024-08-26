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
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
        Sign Up
      </h2>
      <UniversalForm
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        operation={register}
        labelButtonSubmit="Sign up"
      >
        <FormInput
          name="name"
          label="Name"
          placeholder="Name"
          className="mb-4"
        />
        <FormInput
          name="email"
          type="email"
          label="Email"
          placeholder="Email"
          className="mb-4"
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          placeholder="Password"
          className="mb-4"
        />
      </UniversalForm>
    </div>
  );
};

export default RegisterForm;
