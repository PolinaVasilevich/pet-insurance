import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import SignUpStepTitle from "./SignUpStepTitle";
import SignUpStepSubTitle from "./SignUpStepSubTitle";
import SignUpForm from "./Forms/SignUpForm/SignUpForm";

import { FormActionCreators } from "../store/reducers/action-creators";

import { useSignUpFormData } from "../hooks/useSignUpFormData";
import { useGoogleOptimize } from "../hooks/useGoogleOptimize";
import { LAST_STEP_PET_FORM } from "../utils/consts";
import { RouteNames } from "../router";

const MultiStep = () => {
  const variantForm = useGoogleOptimize(process.env.REACT_APP_EXPERIMENT_ID);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const { currentStep, currentFormIndex } = useSelector(
    (state) => state.signUpForm
  );

  console.log("RENDER MULTISTEP");

  const signUpFormData = useSignUpFormData(currentStep);

  const isSkipLastStep =
    user.username && currentStep === LAST_STEP_PET_FORM - 1;
  const isLastStep = currentStep === LAST_STEP_PET_FORM && !user.username;

  const addPet = (values) => {
    const { id, petName, petBreed } = values.pets[currentFormIndex];
    const pet = { id, petName, petBreed };
    dispatch(FormActionCreators.addPet(pet));
    dispatch(FormActionCreators.changeCurrentStep(currentStep + 1));
    if (isSkipLastStep) {
      dispatch(FormActionCreators.changeCurrentStep(1));
      navigate(RouteNames.CHECKOUT);
    } else {
      navigate(`/registration/${currentStep + 1}`);
    }
  };

  const addUser = (values) => {
    const { id, username, password } = values;
    const user = { id, username, password };
    dispatch(FormActionCreators.changeCurrentStep(1));
    dispatch(FormActionCreators.addUser(user));

    navigate(RouteNames.CHECKOUT);
  };

  const handleSubmit = (values) => {
    if (isLastStep) addUser(values);
    else addPet(values);
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
