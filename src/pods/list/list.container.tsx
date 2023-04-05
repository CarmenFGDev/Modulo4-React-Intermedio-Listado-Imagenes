import React from "react";
import { ListComponent } from "./list.component";
import { PictureInfo } from "./list.vm";
import { getAllPets } from "./list.repository";

interface Props {
  animal: string;
}

export const ListContainer: React.FC<Props> = (props) => {
  const {animal} = props;
  const [pets, setPets] = React.useState<PictureInfo[]>([]);
  React.useEffect(() => {
   const petsCollection = getAllPets(animal);
   setPets(petsCollection);
  }, [animal]);

  return <ListComponent pets={pets} animal={animal}/>;
};