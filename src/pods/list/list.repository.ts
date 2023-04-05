import { PictureInfo } from "./list.vm";
import {getAllPets as getAllPetsApi } from "./list.api";
import { mapPicturesInfoFromApiToVm } from "./list.mapper";

export const getAllPets = (animal): PictureInfo[] => {
  const pets = getAllPetsApi(animal);
  return mapPicturesInfoFromApiToVm(pets); 
};