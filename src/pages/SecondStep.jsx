import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormActionCreators } from "../store/reducers/action-creators";

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
      <div onClick={selectType}>
        <Button name="cat">Cat</Button>
        <Button name="dog">Dog</Button>
      </div>
    </div>
  );
};

export default SecondStep;
