import React from "react";

import SelectField from "../FormFields/SelectField";

const KindPetForm = ({ petName, petType }) => {
  const kinds = [
    { value: "Mixed Breed", label: "Mixed Breed" },
    { value: "Abyssinian", label: "Abyssinian" },
    { value: "Alley Cat", label: "Alley Cat" },
    { value: "American Curl", label: "American Curl" },
  ];

  return (
    <div>
      <div>
        <h1>
          What Kind Of {petType?.toUpperCase()} Is {petName}?
        </h1>
        <p>Different breeds have different needs.</p>
      </div>
      <SelectField data={kinds} id="petKind" name="petKind" />
    </div>
  );
};

export default KindPetForm;
