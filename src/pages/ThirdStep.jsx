import {
  Button,
  FormControl,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormActionCreators } from "../store/reducers/action-creators";

const ThirdStep = () => {
  const pet = useSelector((state) => state.pet);
  const dispatch = useDispatch();
  const [kind, setKind] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setKind(value);
  };

  const kinds = [
    "Mixed Breed",
    "Abyssinian",
    "Alley Cat",
    "American Bobtail",
    "American Curl",
  ];

  const onClick = () => {
    dispatch(FormActionCreators.addKindPet(kind));
    console.log(pet);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <div>
        <h1>
          What Kind Of {pet.type?.toUpperCase()} Is {pet.name}?
        </h1>
        <p>Different breeds have different needs.</p>
      </div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={kind}
          onChange={handleChange}
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
        >
          {kinds.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
        <Button
          sx={{ marginTop: "1rem" }}
          variant="contained"
          onClick={onClick}
        >
          Next
        </Button>
      </FormControl>
    </div>
  );
};

export default ThirdStep;
