import React from "react";
import InputField from "../FormFields/InputField";

const NamePetForm = React.memo(({ formIndex }) => {
  return (
    <>
      <h1>What Is Your Pet's Name?</h1>
      <InputField name={`pets[${formIndex}].petName`} placeholder="Name*" />
    </>
  );
});

export default NamePetForm;
