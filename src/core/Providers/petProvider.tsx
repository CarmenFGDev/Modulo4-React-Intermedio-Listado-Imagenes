import React from "react";

interface PetProviderModel {
  pet: string;
  setPet: (name: string) => void;
}

interface Props {
  children: React.ReactNode;
}

export const PetContext = React.createContext<PetProviderModel>({
  pet: "cats",
  setPet: () => {},
});
export const PetProvider: React.FC<Props> = ({ children }) => {
  const [pet, setPet] = React.useState("cats");

  return (
    <PetContext.Provider value={{ pet, setPet }}>
      {children}
    </PetContext.Provider>
  );
};
