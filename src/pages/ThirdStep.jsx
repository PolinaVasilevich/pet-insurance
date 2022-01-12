import React from "react";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import FormForThirdStep from "../components/Forms/FormForThirdStep";
import { FormActionCreators } from "../store/reducers/action-creators";
import { RouteNames } from "../router";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  kind: Yup.string().required("Required"),
});

const ThirdStep = () => {
  const pet = useSelector((state) => state.pet);
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const kinds = [
    "Mixed Breed",
    "Abyssinian",
    "Alley Cat",
    "American Bobtail",
    "American Curl",
  ];

  const handleSubmit = async (values) => {
    dispatch(FormActionCreators.addKindPet(values.kind));

    if (!user.username) {
      dispatch(FormActionCreators.changeCurrentStep(4));
      navigate(RouteNames.REGISTRATION + "/4");
    } else {
      await dispatch(FormActionCreators.addPet(pet));
      dispatch(FormActionCreators.resetApp());
      navigate(RouteNames.USERPAGE);
    }
  };

  return (
    <div>
      <div>
        <h1>
          What Kind Of {pet.type?.toUpperCase()} Is {pet.name}?
        </h1>
        <p>Different breeds have different needs.</p>
      </div>
      <FormForThirdStep
        options={kinds}
        initialValues={{ kind: pet.kind }}
        validationSchema={validationSchema}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ThirdStep;
