import React from "react";
import List from "@mui/material/List";
import { PictureInfo } from "../list/list.vm";
import { CartContainer } from "../cart/cart.container";
import { DividerContainer } from "../../common/components/divider/divider.container";
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import Fab from "@mui/material/Fab/Fab";
import Typography from "@mui/material/Typography/Typography";
import { useCartDispatch } from "../../core/Providers/cartProvider";
import { actionsIds } from "../../core/Reducers/cartReducer";
export interface Props {
  cartList: PictureInfo[];
}
export const ListCartComponent: React.FC<Props> = (props) => {
  const { cartList } = props;
  const dispatch = useCartDispatch();
  const handleOnclick = () => {
      dispatch({ type: actionsIds.CHANGE_INITIAL_VALUES, payload: null });

  }

  return (
    <>
      <DividerContainer  label={"Go to home"} alignment={"right"} marginBottom={"4rem"} marginTop={"1rem"} />
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {cartList.map((item) => (
          <CartContainer pet={item} key={item.id} />
        ))}
      </List>
      {cartList.length > 0 
        ? (<span className="cart-clean">
          <Fab color="primary" aria-label="add"  size="small"  variant="extended" sx={{ mr: 1 }} onClick={handleOnclick}>
            <CleaningServicesIcon /> Clean
          </Fab>
            </span>)
         :(
          <div>
            <Typography variant="h6" component="h6" color="darkgrey" textAlign={'justify'}>
              What pets are you going to take home?
             </Typography>

          </div>
         )}
    </>
  );
};
