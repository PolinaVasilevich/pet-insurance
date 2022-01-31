import React from "react";
import { v4 as uuidv4 } from "uuid";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FormActionCreators } from "../store/reducers/action-creators";
import { useSelector } from "react-redux";

import PetCardList from "../components/PetCardList/PetCardList";

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
      FormActionCreators.addPet({
        id: uuidv4(),
        petName: "",
        petType: "",
        petBreed: "",
      })
    );

    dispatch(FormActionCreators.changeCurrentStep(1));
    navigation("/registration/1");
  };

  const onRemovePet = (petId) => {
    dispatch(FormActionCreators.removePet(petId));
  };

  return (
    <PetCardList
      handleClick={handleClick}
      addNewPet={addNewPet}
      handleRemovePet={onRemovePet}
    />
  );
};

export default Checkout;
