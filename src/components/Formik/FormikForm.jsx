import { Form, Formik } from "formik";
import React from "react";

import { FormButton, FormFormik } from "../../styles/StyledComponents";

const FormikForm = ({
  initialValues,
  validationSchema,
  handleSubmit,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => handleSubmit(values)}
    >
      <FormFormik>
        {children}
        <FormButton type="submit" sx={{ marginTop: "1rem" }}>
          Next
        </FormButton>
      </FormFormik>
    </Formik>
  );
};

export default FormikForm;
