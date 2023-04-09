import React from "react";
import { ListContainer } from "../pods/list";
import { PET } from "../common/model/pet.model";
export const LisDogs = () => {
  return <ListContainer selectedPet={PET.DOGS} />;
};
