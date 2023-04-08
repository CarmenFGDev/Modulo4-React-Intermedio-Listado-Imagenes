import React from "react";
import { ListComponent } from "./list.component";
import { getAllPets } from "./list.repository";
import { useCartDispatch } from "../../core/Providers/cartProvider";
import { actionsIds } from "../../core/Reducers/cartReducer";

interface Props {
  selectedPet: string;
}
export const ListContainer: React.FC<Props> = (props) => {
  const { selectedPet } = props;
  const dispatch = useCartDispatch();

  React.useEffect(() => {
    const petsCollection = getAllPets(selectedPet);
    if (selectedPet === "cats") {
      dispatch({ type: actionsIds.SET_CATS, payload: petsCollection });
    } else {
      dispatch({ type: actionsIds.SET_DOGS, payload: petsCollection });
    }
  }, [selectedPet]);

  return <ListComponent selectedPet={selectedPet} />;
};
