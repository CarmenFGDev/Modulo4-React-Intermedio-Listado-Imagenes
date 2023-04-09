import React from "react";
import { PET } from "../../common/pet.model";

interface PetProviderModel {
  pet: PET;
  setPet: (name: PET) => void;
}

interface Props {
  children: React.ReactNode;
}

export const PetContext = React.createContext<PetProviderModel>({
  pet: PET.CATS,
  setPet: () => {},
});
export const PetProvider: React.FC<Props> = ({ children }) => {
  const [pet, setPet] = React.useState(PET.CATS);

  return (
    <PetContext.Provider value={{ pet, setPet }}>
      {children}
    </PetContext.Provider>
  );
};
