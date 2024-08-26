import React from "react";
import { Form, Formik } from "formik";
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
        alert(`Error: ${payload}`); // Folosirea unei alerte simple în loc de toast
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
        <form onSubmit={props.handleSubmit}>
          {children}
          <button type="submit" disabled={props.isSubmitting}>
            {labelButtonSubmit}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default UniversalForm;
