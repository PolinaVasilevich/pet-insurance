import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import SignUpStepTitle from "./SignUpStepTitle";
import SignUpStepSubTitle from "./SignUpStepSubTitle";
import SignUpForm from "./Forms/SignUpForm/SignUpForm";

import { FormActionCreators } from "../store/actions/formActions/formActions";

import { useSignUpFormData } from "../hooks/useSignUpFormData";

import { LAST_STEP_PET_FORM } from "../utils/consts";
import { RouteNames } from "../router";
import { createPet } from "../store/actions/petsActions/petsActions";
import {
  createUser,
  fetchUser,
} from "../store/actions/userActions/userActions";

const MultiStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const { currentStep, currentFormIndex } = useSelector(
    (state) => state.form.signUpForm
  );

  const pets = useSelector((state) => state.form.pets);

  console.log("RENDER MULTISTEP");

  const signUpFormData = useSignUpFormData(currentStep);

  const isSkipLastStep =
    user.username && currentStep === LAST_STEP_PET_FORM - 1;
  const isLastStep = currentStep === LAST_STEP_PET_FORM && !user.username;

  const addUser = (values) => {
    const { id, username, email } = values;
    const user = { id, username, email };
    dispatch(createUser(user));
    dispatch(createPet(pets[currentFormIndex]));

    dispatch(FormActionCreators.changeCurrentStep(1));
    navigate(RouteNames.CHECKOUT);
  };

  const nextStep = (values) => {
    const { id, petName, petBreed, petType } = values.pets[currentFormIndex];
    const pet = { id, petName, petBreed, petType };
    dispatch(FormActionCreators.changePet(pet));
    dispatch(FormActionCreators.changeCurrentStep(currentStep + 1));

    if (isSkipLastStep) {
      dispatch(createPet(pets[currentFormIndex]));
      dispatch(FormActionCreators.changeCurrentStep(1));
      navigate(RouteNames.CHECKOUT);
    } else {
      navigate(`/registration/${currentStep + 1}`);
    }
  };

  const handleSubmit = (values) => {
    if (isLastStep) {
      addUser(values);
    } else {
      nextStep(values);
    }
  };

  return (
    <div>
      <SignUpStepTitle>{signUpFormData.title}</SignUpStepTitle>
      <SignUpStepSubTitle>{signUpFormData.subTitle}</SignUpStepSubTitle>
      <SignUpForm
        handleSubmit={handleSubmit}
        currentStep={currentStep}
        currentFormIndex={currentFormIndex}
      />
    </div>
  );
};

export default MultiStep;
