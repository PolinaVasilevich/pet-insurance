import React from "react";
import { v4 as uuidv4 } from "uuid";

import { Button } from "@mui/material";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FormActionCreators } from "../store/reducers/action-creators";
import { useSelector } from "react-redux";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const pets = useSelector((state) => state.pets);

  const handleClick = (formId) => {
    const formIndex = pets.findIndex((p) => p.id === formId);
    dispatch(FormActionCreators.changeCurrentFormIndex(formIndex));
    dispatch(FormActionCreators.changeCurrentStep(1));
    navigation("/registration/1");
  };

  const addNewPet = () => {
    dispatch(FormActionCreators.changeCurrentFormIndex(pets.length));

    dispatch(
      FormActionCreators.addPet({ id: uuidv4(), petName: "", petBreed: "" })
    );

    dispatch(FormActionCreators.changeCurrentStep(1));
    navigation("/registration/1");
  };

  return (
    <div>
      {pets.map((p) => (
        <Button
          sx={{ margin: "1rem" }}
          key={p.id}
          variant="outlined"
          color="inherit"
          onClick={() => handleClick(p.id)}
        >
          {p.petName}
        </Button>
      ))}

      <Button onClick={addNewPet}>Add new pet</Button>
    </div>
  );
};

export default Checkout;
