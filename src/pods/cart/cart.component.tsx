import Chip from "@mui/material/Chip/Chip";
import Divider from "@mui/material/Divider";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import {
  Avatar,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { PictureInfo } from "../list/list.vm";
import { useCartDispatch } from "../../core/Providers/cartProvider";
import { actionsIds } from "../../core/Reducers/cartReducer";
export interface Props {
  cartList: PictureInfo[];
}
export const CartComponent: React.FC<Props> = (props) => {
  const { cartList } = props;
  const handleOnClick = (id: string) => {
    dispatch({ type: actionsIds.CHANGE_SELECTED, payload: id });
  };

  const dispatch = useCartDispatch();
  return (
    <>
      <Divider
        textAlign="right"
        sx={{ marginBottom: "4rem", marginTop: "1rem" }}
      >
        <Chip
          label="Go to home"
          sx={{
            backgroundColor: "#1976D2!important",
            fontSize: "1.5rem",
            color: "white",
          }}
        />
      </Divider>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {cartList.map((item) => (
          <>
            <ListItem
              alignItems="flex-start"
              onClick={() => handleOnClick(item.id)}
            >
              <ListItemAvatar>
                <Avatar alt={item.title} src={item.picUrl} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.title}
                    </Typography>
                  </React.Fragment>
                }
                secondary={item.age}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
    </>
  );
};
