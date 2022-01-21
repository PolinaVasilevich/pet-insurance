import React from "react";
import { useBreedsPet } from "../../../../../../hooks/useBreedsPet";
import SelectField from "../../../../../FormFields/SelectField";

import { validate } from "./validate";

const BreedPetSection = ({ formIndex }) => {
  console.log("RENDER BREED_PET_SECTION");
  const breedsPet = useBreedsPet();
  return (
    <SelectField
      validate={validate}
      data={breedsPet}
      name={`pets[${formIndex}].petBreed`}
    />
  );
};

export default BreedPetSection;
