import { ImageListItem, ImageListItemBar, IconButton } from "@mui/material";
import React from "react";
import { PictureInfo } from "../list/list.vm";
import HomeIcon from "@mui/icons-material/Home";
import { useCartDispatch } from "../../core/Providers/cartProvider";
import { actionsIds } from "../../core/Reducers/cartReducer";
export interface Props {
  item: PictureInfo;
}

export const PictureInfoComponent: React.FC<Props> = (props) => {
  const handleOnClick = (event) => {
    const id = event.target.id;
    dispatch({ type: actionsIds.CHANGE_SELECTED, payload: id });
  };
  const { item } = props;
  const dispatch = useCartDispatch();

  return (
    <ImageListItem key={item.id}>
      <img
        src={item.picUrl}
        srcSet={`${item.picUrl}?w=248&fit=crop&auto=format&dpr=2 3x`}
        alt={item.title}
        loading="lazy"
        id={item.id}
        onClick={handleOnClick}
        className={`${item.selected ? "opacity-img" : ""} `}
      />
      <ImageListItemBar
        title={item.title}
        actionIcon={
          <IconButton
            sx={{ color: "rgba(255, 255, 255, 1)" }}
            aria-label={`info about ${item.title}`}
          >
            {item.selected && <HomeIcon />}
          </IconButton>
        }
      />
    </ImageListItem>
  );
};
