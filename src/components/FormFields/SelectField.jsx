import React from "react";
import { useField } from "formik";
import { Select, MenuItem } from "@mui/material";

const SelectField = (props) => {
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;

  const isError = meta.touched && meta.error;

  // const renderHelperText = () => {
  //   if (isError) {
  //     return <FormHelperText>{meta.error}</FormHelperText>;
  //   }
  // };

  return (
    <>
      <Select
        displayEmpty
        {...field}
        value={selectedValue ? selectedValue : ""}
      >
        {props.data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      {isError ? <p>{meta.error}</p> : null}
    </>
  );
};

export default SelectField;
