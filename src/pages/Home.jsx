import React from "react";
import { useSelector } from "react-redux";
import { UserPage } from "../components/Forms";
import { useFormData } from "../hooks/useFormData";

const Home = () => {
  const { pets } = useFormData();
  const user = useSelector((state) => state.user);
  return (
    <div>
      {user.username ? (
        <UserPage pets={pets} username={user.username} />
      ) : (
        <h1>HELLO</h1>
      )}
    </div>
  );
};

export default Home;
