import React from "react";
import { ListContainer } from "../pods/list";
import { PET } from "../common/pet.model";
export const ListCats = () => {
  return <ListContainer selectedPet={PET.CATS} />;
};
