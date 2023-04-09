import { Pets } from "./list.vm";
import {getAllPets as getAllPetsApi } from "./list.api";
import { mapPetFromApiToVm } from "./list.mapper";
export const getAllPets = (): Pets => {
  const pets = getAllPetsApi();
  return mapPetFromApiToVm(pets); 
};