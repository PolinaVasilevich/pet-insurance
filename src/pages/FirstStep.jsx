import React from "react";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FormActionCreators } from "../store/reducers/action-creators";
import { RouteNames } from "../router";

import FormikForm from "../components/Formik/FormikForm";
import InputField from "../components/FormFields/InputField";

const FirstStep = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const petName = useSelector((state) => state?.pet?.name);

  const ValidationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
  });

  const handleSubmit = (values) => {
    dispatch(FormActionCreators.changeCurrentStep(2));
    dispatch(FormActionCreators.addNamePet(values.name));

    navigate(RouteNames.REGISTRATION + "/2");
  };

  return (
    <div>
      <h1>What Is Your Pet's Name?</h1>

      <FormikForm
        initialValues={{ name: petName }}
        validationSchema={ValidationSchema}
        handleSubmit={handleSubmit}
      >
        <InputField id="name" name="name" placeholder="Name*" />
      </FormikForm>
    </div>
  );
};

export default FirstStep;
