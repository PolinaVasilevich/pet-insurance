import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FieldArray, Formik } from "formik";
import { PersistFormikValues } from "formik-persist-values";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { NamePetForm, KindPetForm, UserInfoForm, UserPage } from "./Forms";
import { validationSchema } from "../validationSchema";
import { FormActionCreators } from "../store/reducers/action-creators";

import { FormButton, FormFormik } from "../styles/StyledComponents";
import { useFormData } from "../hooks/useFormData";

const MultiStep = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const { currentFormIndex, currentStep, pets } = useFormData();

  console.log(currentFormIndex);

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

    if (isLastStep) {
      const { username, password } = formData;
      const user = { username, password };
      dispatch(FormActionCreators.addUser(user));
    }

    dispatch(
      FormActionCreators.changeFormData({
        id: formData.id,
        currentStep: nextStep,
      })
    );

    navigate(`/registration/${nextStep}`);
  };

  const addNewPet = () => {
    dispatch(FormActionCreators.changeCurrentFormIndex(currentFormIndex + 1));
    navigate("/registration/1");
  };

  const renderStep = (step, formIndex, values) => {
    switch (step) {
      case 1:
        return <NamePetForm formIndex={formIndex} />;
      case 2:
        return (
          <KindPetForm
            petData={values.pets[currentFormIndex]}
            formIndex={formIndex}
          />
        );
      case 3:
        return <UserInfoForm formIndex={formIndex} />;
      case 4:
        return (
          <UserPage
            formIndex={formIndex}
            username={user?.username}
            pets={pets}
          />
        );
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
        petType: "",
        username: "",
        password: "",
      },
    ],
  };

  return (
    <div>
      <Formik
        initialValues={{ ...initialValues }}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={validationSchema[currentStep - 1]}
      >
        {({ values }) => (
          <FormFormik>
            <FieldArray name="pets">
              {({ push }) => (
                <div>
                  {values.pets.map((p, index) => {
                    return (
                      <div key={p.id}>
                        {currentFormIndex === index
                          ? renderStep(currentStep, index, values)
                          : null}
                      </div>
                    );
                  })}

                  {currentStep !== 4 ? (
                    <FormButton type="submit">Next</FormButton>
                  ) : (
                    <FormButton
                      onClick={() => {
                        push({
                          id: uuidv4(),
                          petName: "",
                          petKind: "",
                          petType: "",
                          username: "",
                          password: "",
                        });
                        addNewPet();
                      }}
                    >
                      Add another pet
                    </FormButton>
                  )}
                </div>
              )}
            </FieldArray>

            <PersistFormikValues name={"PETS"} />
          </FormFormik>
        )}
      </Formik>
    </div>
  );
};

export default MultiStep;
