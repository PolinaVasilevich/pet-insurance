import React from "react";
import { useSelector } from "react-redux";
import { ButtonsBox, FieldButton } from "../../styles/StyledComponents";

const TypePetForm = () => {
  const name = useSelector((state) => state.pet.name);

  return (
    <>
      <h1>Is {name}...</h1>
      <ButtonsBox type="submit">
        <FieldButton name="kind" value="Cat" />
        <FieldButton name="kind" value="Dog" />
      </ButtonsBox>
    </>
  );
};

export default TypePetForm;
