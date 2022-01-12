import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import FormForFourthStep from "../components/Forms/FormForFourthStep";
import { RouteNames } from "../router";
import { FormActionCreators } from "../store/reducers/action-creators";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be more than 3 characters")
    .required("Required"),
  password: Yup.string()
    .min(3, "Password must be more than 3 characters")
    .required("Required"),
});

const FourthStep = () => {
  const dispatch = useDispatch();
  const nagigate = useNavigate();

  const pet = useSelector((state) => state.pet);

  const handleSubmit = async (values) => {
    const { username, password } = values;

    await dispatch(FormActionCreators.addUser({ username, password }));
    await dispatch(FormActionCreators.addPet(pet));
    dispatch(FormActionCreators.resetApp());
    nagigate(RouteNames.USERPAGE);
  };

  return (
    <div>
      <h1>Tell Us About The Human</h1>
      <p>
        Someone's got to pay the bills. Share your name and email to get your
        personalized recommendation!
      </p>

      <FormForFourthStep
        initialValues={{ username: "", password: "" }}
        handleSubmit={handleSubmit}
        validationSchema={validationSchema}
      />
    </div>
  );
};

export default FourthStep;
