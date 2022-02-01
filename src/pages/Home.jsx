import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { usePets } from "../hooks/usePets";
import { fetchUser } from "../store/actions/userActions/userActions";
import { FormButton } from "../styles/FormStyles";

const Home = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const { addNewPet } = usePets();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Your Pet Bills Made Easy.</h1>
      <h4>From every day to rainy day, we've got you covered.</h4>
      <FormButton
        variant="outlined"
        sx={{ borderColor: "inherit" }}
        onClick={() => addNewPet()}
      >
        {user.username ? "Add another pet" : "Get started"}
      </FormButton>
    </div>
  );
};

export default Home;
