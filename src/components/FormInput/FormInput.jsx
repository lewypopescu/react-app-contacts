import { useState } from "react";
import { Field, useField } from "formik";
import { MdVisibility, MdVisibilityOff, MdCheckCircle } from "react-icons/md";

const FormInput = ({ name, type = "text", label, placeholder = label }) => {
  const [visible, setVisible] = useState(false);
  const [field, meta] = useField(name);

  const { error, touched, value } = meta;
  const { name: inputName } = field;

  const typeIsPassword = type === "password";

  return (
    <div>
      <label htmlFor={inputName}>{label}</label>
      <div>
        <Field
          id={inputName}
          {...field}
          type={typeIsPassword ? (visible ? "text" : "password") : type}
          placeholder={placeholder}
          autoComplete="new-password"
        />
        {typeIsPassword && (
          <button type="button" onClick={() => setVisible(!visible)}>
            {visible ? <MdVisibility /> : <MdVisibilityOff />}
          </button>
        )}
      </div>
      {error && touched && <div style={{ color: "red" }}>{error}</div>}

      {!error && value && (
        <div style={{ color: "green" }}>
          <MdCheckCircle /> Success {inputName}
        </div>
      )}
    </div>
  );
};

export default FormInput;
