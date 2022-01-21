import React from "react";

import { FieldArray } from "formik";
import { PersistFormikValues } from "formik-persist-values";

import { NamePetSection, BreedPetSection } from "./SectionsForm";
import { FormSectionWrapper } from "../../../../styles/FormStyles";

const PetArray = ({ values, currentStep, currentFormIndex }) => {
  const renderStep = (step) => {
    switch (step) {
      case 1:
        return <NamePetSection formIndex={currentFormIndex} />;
      case 2:
        return <BreedPetSection formIndex={currentFormIndex} />;
      default:
        return <NamePetSection formIndex={currentFormIndex} />;
    }
  };

  return (
    <FieldArray
      name="pets"
      render={() => (
        <>
          {values.pets.map((p, index) => {
            return (
              <FormSectionWrapper key={p.id}>
                {currentFormIndex === index ? renderStep(currentStep) : null}
              </FormSectionWrapper>
            );
          })}
          {/* <PersistFormikValues name={"PETS"} /> */}
        </>
      )}
    />
  );
};

export default PetArray;
