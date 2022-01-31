import React from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { FormActionCreators } from "../store/reducers/action-creators";

import PetList from "../components/PetList/PetList";
import { usePets } from "../hooks/usePets";

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

  const { addNewPet } = usePets();

  const onRemovePet = (petId) => {
    dispatch(FormActionCreators.removePet(petId));
  };

  return (
    <PetList
      handleClick={handleClick}
      addNewPet={addNewPet}
      handleRemovePet={onRemovePet}
    />
  );
};

export default Checkout;
