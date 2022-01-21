import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import { PersistFormikValues } from "formik-persist-values";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import InputField from "../../../FormFields/InputField";

import { validateUsername, validateEmail } from "./validate";

const UserInfoForm = ({ handleSubmit }) => {
  const initialValues = {
    id: uuidv4(),
    username: "",
    email: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => handleSubmit(values)}
    >
      {() => (
        <Form>
          <InputField
            validate={validateUsername}
            name="username"
            placeholder="Username*"
          />

          <InputField
            validate={validateEmail}
            name="email"
            type="email"
            placeholder="Email*"
          />

          <Button type="submit">Next</Button>
          <PersistFormikValues name={"USER"} />
        </Form>
      )}
    </Formik>
  );
};

export default UserInfoForm;
