import { Button } from "@mui/material";
import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormActionCreators } from "../../store/reducers/action-creators";

const UserPage = React.memo(({ username, pets }) => {
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
      <h1>Hello, {username}</h1>
      <p>You can select Insurance and Wellness plans for your pets</p>

      <div>
        {pets.map((p) => (
          <Button
            sx={{ marginBottom: "1rem" }}
            key={p.id}
            variant="outlined"
            onClick={() => handleClick(p.id)}
          >
            {p.petName}
          </Button>
        ))}
      </div>
    </div>
  );
});

export default UserPage;
