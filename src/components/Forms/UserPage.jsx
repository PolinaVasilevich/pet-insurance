import { Button } from "@mui/material";
import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FormActionCreators } from "../../store/reducers/action-creators";

const UserPage = ({ removePet }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const pets = JSON.parse(localStorage.getItem("PETS"))?.pets;

  const handleClick = (formId) => {
    const formIndex = pets.findIndex((p) => p.id === formId);

    dispatch(FormActionCreators.changeCurrentFormIndex(formIndex));
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
    </div>
  );
};

export default UserPage;
