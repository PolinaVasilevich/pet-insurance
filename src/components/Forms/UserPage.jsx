import { Button } from "@mui/material";
import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FormActionCreators } from "../../store/reducers/action-creators";

const UserPage = ({ pets }) => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleClick = (formId) => {
    const formIndex = pets.findIndex((p) => p.id === formId);

    dispatch(FormActionCreators.changeCurrentFormIndex(formIndex));
    dispatch(
      FormActionCreators.changeFormData({
        id: formId,
        currentStep: 1,
      })
    );
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
