import { Formik } from "formik";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { FormButton, FormFormik } from "../styles/StyledComponents";
import { NamePetForm, KindPetForm, UserInfoForm } from "./Forms";

import validationSchema from "../validationSchema";

import { FormActionCreators } from "../store/reducers/action-creators";

const MultiStep = () => {
  const currentStep = useSelector((state) => state.currentStep);
  const formData = useSelector((state) => state.formData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const renderStep = (step) => {
    switch (step) {
      case 1:
        return <NamePetForm />;
      case 2:
        return (
          <KindPetForm petName={formData.petName} petType={formData.petType} />
        );
      case 3:
        return <UserInfoForm />;
      default:
        return <NamePetForm />;
    }
  };

  const initialValues = {
    petName: formData.petName,
    petKind: formData.petKind,
    petType: "",
    username: "",
    password: "",
  };

  const submitForm = async (values) => {
    const { username, password, petName, petKind, petType } = values;
    const user = { username, password };
    const pet = { petName, petKind, petType };
    await dispatch(FormActionCreators.addUser(user));
    await dispatch(FormActionCreators.addPet(pet));
    dispatch(FormActionCreators.changeCurrentStep(1));
    dispatch(FormActionCreators.resetApp());
    navigate(`/userpage`);
  };

  const handleSubmit = (values) => {
    if (currentStep !== 3) {
      console.log(values);
      dispatch(FormActionCreators.changeCurrentStep(currentStep + 1));
      dispatch(FormActionCreators.addFormData(values));
      navigate(`/registration/${currentStep}`);
    } else {
      submitForm(values);
    }
  };

  return (
    <div>
      <Formik
        initialValues={{ ...initialValues }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema[currentStep - 1]}
      >
        {() => (
          <FormFormik>
            {renderStep(currentStep)}
            <FormButton type="submit">Next</FormButton>
          </FormFormik>
        )}
      </Formik>
    </div>
  );
};

export default MultiStep;
