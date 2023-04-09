import React from "react";
import { ListComponent } from "./list.component";
import { getAllPets } from "./list.repository";
import { useCart, useCartDispatch } from "../../core/Providers/cartProvider";
import { actionsIds } from "../../core/Reducers/cartReducer";
import { PET } from "../../common/model/pet.model";

interface Props {
  selectedPet: PET;
}
export const ListContainer: React.FC<Props> = (props) => {
  const { selectedPet } = props;
  const dispatch = useCartDispatch();
  const pets = useCart();

  React.useEffect(() => {
    if (pets.cats.length === 0) {
      const petsCollection = getAllPets();
      dispatch({ type: actionsIds.SET_CATS, payload: petsCollection.cats });
      dispatch({ type: actionsIds.SET_DOGS, payload: petsCollection.dogs });
    }
  }, []);

  return <ListComponent selectedPet={selectedPet} />;
};
