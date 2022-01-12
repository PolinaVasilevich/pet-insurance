import React from "react";
import * as Yup from "yup";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FormActionCreators } from "../store/reducers/action-creators";
import { RouteNames } from "../router";

import FirsteForm from "../components/Forms/FirstForm";

const FirstStep = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const petName = useSelector((state) => state?.pet?.name);

  const validationSchema = Yup.object().shape({
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
      <FirsteForm
        initialValues={{ name: petName }}
        validationSchema={validationSchema}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default FirstStep;
