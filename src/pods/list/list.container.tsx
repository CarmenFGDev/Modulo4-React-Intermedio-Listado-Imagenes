import React from "react";
import { ListComponent } from "./list.component";
import { getAllPets } from "./list.repository";
import { useCartDispatch } from "../../core/Providers/cartProvider";
import { actionsIds } from "../../core/Reducers/cartReducer";
import { PET } from "../../common/pet.model";

interface Props {
  selectedPet: PET;
}
export const ListContainer: React.FC<Props> = (props) => {
  const { selectedPet } = props;
  const dispatch = useCartDispatch();

  React.useEffect(() => {
    const petsCollection = getAllPets();
    dispatch({ type: actionsIds.SET_CATS, payload: petsCollection.cats });
    dispatch({ type: actionsIds.SET_DOGS, payload: petsCollection.dogs });
  }, []);

  return <ListComponent selectedPet={selectedPet} />;
};
