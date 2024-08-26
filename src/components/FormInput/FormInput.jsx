import React, { useState } from "react";
import { Field, useField } from "formik";
import { MdVisibility, MdVisibilityOff, MdCheckCircle } from "react-icons/md";

const FormInput = ({ name, type = "text", label, placeholder = label }) => {
  const [visible, setVisible] = useState(false);
  const [field, meta] = useField(name);
  const { error, touched, value } = meta;
  const inputName = field.name;
  const typeIsPassword = type === "password";

  return (
    <div className="mb-4">
      <label
        htmlFor={inputName}
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <Field
          id={inputName}
          {...field}
          type={typeIsPassword ? (visible ? "text" : "password") : type}
          placeholder={placeholder}
          autoComplete="new-password"
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            error && touched ? "border-red-500" : ""
          }`}
        />
        {typeIsPassword && (
          <button
            type="button"
            onClick={() => setVisible(!visible)}
            className="absolute inset-y-0 right-0 flex items-center px-2"
          >
            {visible ? <MdVisibility /> : <MdVisibilityOff />}
          </button>
        )}
      </div>
      {error && touched && (
        <div className="text-red-500 text-xs italic">{error}</div>
      )}
      {!error && value && (
        <div className="flex items-center text-green-500 text-sm">
          <MdCheckCircle className="mr-1" /> Success {inputName}
        </div>
      )}
    </div>
  );
};

export default FormInput;
