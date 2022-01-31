import styledComponents from "styled-components";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const PetListHeader = styledComponents.div`
  width: 100%;
  padding: 2rem;
  color: #014476;
  display: flex;
  justify-content: center;
  gap: 1rem;

  .selected-pet {
    color: orange;
  }
`;

export const PetListHeaderText = styledComponents.h5`
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: orange;
  }
`;

export const PetListContentWrapper = styledComponents.div`
  padding: 1.3rem 0;
  display: flex;
  flex-direction: column;
  background-color: #4ca2d1;
  background-image: url(https://s3.amazonaws.com/wagmo-static-prod/checkout_header_background.png);
`;

export const PetListContentHeader = styledComponents.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
`;

export const PetListButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #fff;
  font-weight: bold;

  &:hover {
    color: orange;
  }
`;

export const PetListContent = styledComponents.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  text-align: center;

  font-size: 1.2rem;

  p {
    margin-top: 0;
  }
`;
