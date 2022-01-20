import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import SignUpStepTitle from "./SignUpStepTitle";
import SignUpStepSubTitle from "./SignUpStepSubTitle";
import SignUpForm from "./FormFormik/SignUpForm";
import { NamePetForm, BreedPetForm, UserInfoForm, UserPage } from "./Forms";

import { FormActionCreators } from "../store/reducers/action-creators";

import { useSignUpFormData } from "../hooks/useSignUpFormData";
import { useBreedsPet } from "../hooks/useBreedsPet";

// const pets = (state) => state.pets;

const MultiStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(
      FormActionCreators.changeCurrentStep(+pathname[pathname.length - 1])
    );
  }, [pathname]);

  const user = useSelector((state) => state.user);
  // const petsSelector = useSelector(
  //   pets,
  //   (prev, current) => prev.id === current.id
  // );

  const { currentStep, currentFormIndex } = useSelector(
    (state) => state.signUpForm
  );

  console.log("RENDER MULTISTEP");

  const { breedsPet } = useBreedsPet();
  const signUpFormData = useSignUpFormData(currentStep);

  const isSkipLastStep = user.username && currentStep === 2;
  const isLastStep = currentStep === 3 && !user.username;

  const handleSubmit = (values) => {
    const formData = values.pets[currentFormIndex];
    let nextStep;

    if (isSkipLastStep) {
      nextStep = 4;
    } else {
      nextStep = currentStep + 1;
    }

    const { username, password } = formData;

    if (isLastStep) {
      const user = { id: uuidv4(), username, password };
      dispatch(FormActionCreators.addUser(user));
    }

    // dispatch(FormActionCreators.changeCurrentStep(nextStep));

    navigate(`/registration/${nextStep}`);
  };

  const renderStep = (step, formIndex, action) => {
    switch (step) {
      case 1:
        return <NamePetForm formIndex={formIndex} />;
      case 2:
        return <BreedPetForm formIndex={formIndex} options={breedsPet} />;
      case 3:
        return <UserInfoForm formIndex={formIndex} />;
      case 4:
        return <UserPage removePet={action} />;
      default:
        return <NamePetForm formIndex={formIndex} />;
    }
  };

  const initialValues = {
    pets: [
      {
        id: uuidv4(),
        petName: "",
        petKind: "",
        username: "",
        password: "",
      },
    ],
  };

  return (
    <div>
      <SignUpStepTitle>{signUpFormData.title}</SignUpStepTitle>
      <SignUpStepSubTitle>{signUpFormData.subTitle}</SignUpStepSubTitle>
      <SignUpForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        renderStep={renderStep}
        currentFormIndex={currentFormIndex}
        currentStep={currentStep}
      />
    </div>
  );
};

export default MultiStep;
