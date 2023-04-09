import React from "react";
import List from "@mui/material/List";
import { PictureInfo } from "../list/list.vm";
import { CartContainer } from "../cart/cart.container";
import { DividerContainer } from "../../common/components/divider/divider.container";
export interface Props {
  cartList: PictureInfo[];
}
export const ListCartComponent: React.FC<Props> = (props) => {
  const { cartList } = props;

  return (
    <>
      <DividerContainer  label={"Go to home"} alignment={"right"} marginBottom={"4rem"} marginTop={"1rem"} />
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {cartList.map((item) => (
          <CartContainer pet={item} key={item.id} />
        ))}
      </List>
    </>
  );
};
