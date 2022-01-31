import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  PetListContentWrapper,
  PetListHeader,
  PetListContentHeader,
  PetListContent,
  PetListHeaderText,
  PetListButton,
} from "./styles";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PetList = ({ handleRemovePet, handleClick, addNewPet }) => {
  const user = useSelector((state) => state.user);
  const pets = useSelector((state) => state.pets).filter((p) => p.petBreed);

  const [selectedPet, setSelectedPet] = useState(() => pets[pets.length - 1]);

  return (
    <div>
      {pets.length > 1 ? (
        <PetListHeader>
          {pets.map((p) => (
            <PetListHeaderText
              key={p.id}
              onClick={() => setSelectedPet(p)}
              className={p.id === selectedPet.id ? "selected-pet" : ""}
            >
              {p.petName}
            </PetListHeaderText>
          ))}
        </PetListHeader>
      ) : null}
      <PetListContentWrapper>
        {pets.length ? (
          <>
            <PetListContentHeader>
              <PetListButton onClick={() => handleClick(selectedPet.id)}>
                <ArrowBackIcon />
                Retake the quiz
              </PetListButton>
              <PetListButton onClick={() => handleRemovePet(selectedPet.id)}>
                Remove Pet
              </PetListButton>
            </PetListContentHeader>
            <PetListContent>
              <h1>
                {user.username}! {selectedPet.petName} has been approved for
                Wellness!
              </h1>
              <p>
                Get 5% off Insurance when you{" "}
                <span
                  onClick={() => addNewPet()}
                  style={{
                    color: "orange",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  add another pet
                </span>
              </p>
            </PetListContent>
          </>
        ) : (
          <PetListContent>
            <h1>Hello, {user.username}!</h1>
            <p>
              <span
                onClick={() => addNewPet()}
                style={{
                  color: "orange",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Add your pets
              </span>{" "}
              to get an Insurance and Wellness for them
            </p>
          </PetListContent>
        )}
      </PetListContentWrapper>
    </div>
  );
};

export default PetList;
