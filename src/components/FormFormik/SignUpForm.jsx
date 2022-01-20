import React from "react";
import { v4 as uuidv4 } from "uuid";

import { PersistFormikValues } from "formik-persist-values";
import { FieldArray, Formik } from "formik";

import { FormButton, FormFormik } from "../../styles/StyledComponents";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormActionCreators } from "../../store/reducers/action-creators";

const SignUpForm = ({
  initialValues,
  handleSubmit,

  currentFormIndex,
  currentStep,
  renderStep,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addNewForm = () => {
    dispatch(FormActionCreators.changeCurrentFormIndex(currentFormIndex + 1));
    dispatch(FormActionCreators.changeCurrentStep(1));
    navigate("/registration/1");
  };

  console.log("SIGNUPFORM");

  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      {({ values }) => (
        <FormFormik>
          <FieldArray name="pets">
            {({ push, remove }) => (
              <div>
                {values.pets.map((p, index) => {
                  return (
                    <div key={p.id}>
                      {currentFormIndex === index
                        ? renderStep(currentStep, index, remove)
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
                      });
                      addNewForm();
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
  );
};

export default SignUpForm;
