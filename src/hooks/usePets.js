import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { FormActionCreators } from "../store/actions/formActions/formActions";

export const usePets = () => {
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const pets = useSelector((state) => state.form.pets);

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

  return { addNewPet };
};
