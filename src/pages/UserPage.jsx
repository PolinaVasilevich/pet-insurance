import React from "react";
import { useSelector } from "react-redux";

const UserPage = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>Hello, {user.username}</h1>
      <div>
        <h3>Your pets: </h3>
        {user.pets.map((pet) => {
          return <p key={pet.petName}>{pet.petName}</p>;
        })}
      </div>
    </div>
  );
};

export default UserPage;
