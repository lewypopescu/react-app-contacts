import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";

const UniversalForm = ({
  initialValues,
  validationSchema,
  labelButtonSubmit,
  operation,
  handleSubmit,
  children,
}) => {
  const dispatch = useDispatch();

  const defaultHandleSubmit = (values, { resetForm, setSubmitting }) => {
    dispatch(operation(values)).then(({ error, payload }) => {
      setSubmitting(false);
      if (error) {
        alert(`Error: ${payload}`);
        return;
      }
      resetForm();
    });
  };

  const onSubmit = handleSubmit || defaultHandleSubmit;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange
      onSubmit={onSubmit}
    >
      {(props) => (
        <form
          onSubmit={props.handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">{children}</div>
          <button
            type="submit"
            disabled={props.isSubmitting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {labelButtonSubmit}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default UniversalForm;
