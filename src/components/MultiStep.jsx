import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

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
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(
      FormActionCreators.changeCurrentStep(+pathname[pathname.length - 1])
    );
  }, [pathname]);

  const user = useSelector((state) => state.user);

  const { currentStep, currentFormIndex } = useSelector(
    (state) => state.signUpForm
  );

  console.log("RENDER MULTISTEP");

  const signUpFormData = useSignUpFormData(currentStep);

  const isSkipLastStep =
    user.username && currentStep === LAST_STEP_PET_FORM - 1;
  const isLastStep = currentStep === LAST_STEP_PET_FORM && !user.username;

  const handleSubmit = (values) => {
    let nextStep;
    if (isSkipLastStep) {
      nextStep = LAST_STEP_PET_FORM;
    } else {
      nextStep = currentStep + 1;
    }

    if (isLastStep) {
      const { id, username, password } = values;
      const user = { id, username, password };
      dispatch(FormActionCreators.addUser(user));
      dispatch(FormActionCreators.changeCurrentStep(1));
      navigate(RouteNames.CHECKOUT);
    } else {
      const { id, petName, petBreed } = values.pets[currentFormIndex];
      const pet = { id, petName, petBreed };
      dispatch(FormActionCreators.addPet(pet));
      dispatch(FormActionCreators.changeCurrentStep(nextStep));
      navigate(`/registration/${nextStep}`);
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
