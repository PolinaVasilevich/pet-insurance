import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { FormActionCreators } from "../store/actions/formActions/formActions";

import PetList from "../components/PetList/PetList";
import { usePets } from "../hooks/usePets";
import { fetchPets } from "../store/actions/petsActions/petsActions";
import { fetchUser } from "../store/actions/userActions/userActions";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const { pets, loading: petsLoading } = useSelector((state) => state.pets);
  const { user, loading: userLoading } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchPets());
    dispatch(fetchUser());
  }, []);

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

  if (petsLoading || userLoading) {
    return <div>LOADING...</div>;
  }

  return (
    <PetList
      handleClick={handleClick}
      addNewPet={addNewPet}
      handleRemovePet={onRemovePet}
      pets={pets}
      user={user}
    />
  );
};

export default Checkout;
