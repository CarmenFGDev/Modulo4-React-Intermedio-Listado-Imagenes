import React from "react";
import { CartComponent } from "./cart.component";
import { useCart } from "../../core/Providers/cartProvider";

export const CartContainer: React.FC = () => {
  const cats = useCart()["cats"];
  const pets = cats.concat(useCart()["dogs"]);
  const petsSelectedCart = pets.filter((pet) => pet.selected);
  return <CartComponent cartList={petsSelectedCart} />;
};
