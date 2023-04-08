import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { PictureInfoContainer } from "../pictureInfo/pictureInfo.container";
import { useCart } from "../../core/Providers/cartProvider";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";

interface Props {
  selectedPet: string;
}

export const ListComponent: React.FC<Props> = (props) => {
  const { selectedPet } = props;
  const pets = useCart()[selectedPet];

  return (
    <ImageList sx={{ padding: 3 }}>
      <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div">
          <Divider textAlign="left" sx={{ marginBottom: "4rem" }}>
            <Chip
              label={`Our ${selectedPet === "cats" ? "Kittens" : "Puppies"} `}
              sx={{
                backgroundColor: "#1976D2!important",
                fontSize: "1.5rem",
                color: "white",
              }}
            />
          </Divider>
        </ListSubheader>
      </ImageListItem>
      {pets?.map((item) => (
        <PictureInfoContainer item={item} />
      ))}
    </ImageList>
  );
};
