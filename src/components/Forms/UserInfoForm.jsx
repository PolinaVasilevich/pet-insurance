import React from "react";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { RouteNames } from "../../router";

import InputField from "../FormFields/InputField";
import FormikForm from "../Formik/FormikForm";
import { FormActionCreators } from "../../store/reducers/action-creators";

const ValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be more than 3 characters")
    .required("Required"),
  password: Yup.string()
    .min(3, "Password must be more than 3 characters")
    .required("Required"),
});

const UserInfoForm = () => {
  const dispatch = useDispatch();
  const nagigate = useNavigate();

  const pet = useSelector((state) => state.pet);

  const handleSubmit = async (values) => {
    const { username, password } = values;

    await dispatch(FormActionCreators.addUser({ username, password }));
    await dispatch(FormActionCreators.addPet(pet));
    dispatch(FormActionCreators.resetApp());
    nagigate(RouteNames.USERPAGE);
  };

  return (
    <FormikForm
      initialValues={{ username: "", password: "" }}
      handleSubmit={handleSubmit}
      validationSchema={ValidationSchema}
    >
      <InputField id="username" name="username" placeholder="Username*" />
      <InputField
        id="password"
        name="password"
        type="password"
        placeholder="Password*"
      />
    </FormikForm>
  );
};

export default UserInfoForm;
