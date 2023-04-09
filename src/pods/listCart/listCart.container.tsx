import React from "react";
import { ListCartComponent } from "./listCart.component";
import { useCart } from "../../core/Providers/cartProvider";
import { PET } from "../../common/model/pet.model";

export const ListCartContainer: React.FC = () => {
  const cats = useCart()[PET.CATS];
  const pets = cats.concat(useCart()[PET.DOGS]);
  const petsSelectedCart = pets.filter((pet) => pet.selected);
  return <ListCartComponent cartList={petsSelectedCart} />;
};
