import React from "react";
import { CartComponent } from "./cart.component";
import { PictureInfo } from "../list/list.vm";

export interface Props {
 pet: PictureInfo;
}

export const CartContainer:  React.FC<Props> = (props) => {
    const {pet} = props;
   return <CartComponent  pet={pet}/>;
};