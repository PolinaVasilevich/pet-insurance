import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { FormActionCreators } from "../store/reducers/action-creators";
import { ButtonsBox, FormButton } from "../styles/StyledComponents";

const SecondStep = () => {
  const name = useSelector((state) => state.pet.name);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectType = (e) => {
    dispatch(FormActionCreators.addTypePet(e.target.name));
    dispatch(FormActionCreators.changeCurrentStep(3));
    navigate("/registration/3");
  };

  return (
    <div>
      <h1>Is {name}...</h1>
      <ButtonsBox onClick={selectType}>
        <FormButton name="cat">Cat</FormButton>
        <FormButton name="dog">Dog</FormButton>
      </ButtonsBox>
    </div>
  );
};

export default SecondStep;
