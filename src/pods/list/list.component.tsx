import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ListSubheader from "@mui/material/ListSubheader";
import { PictureInfoContainer } from "../pictureInfo/pictureInfo.container";
import { useCart } from "../../core/Providers/cartProvider";
import { PET } from "../../common/pet.model";
import { DividerContainer } from "../../common/components/divider/divider.container";

interface Props {
  selectedPet: PET;
}

export const ListComponent: React.FC<Props> = (props) => {
  const { selectedPet } = props;
  const pets = useCart()[selectedPet];

  return (
    <ImageList sx={{ padding: 3 }}>
      <ImageListItem key="Subheader" cols={3}>
        <ListSubheader component="div">
          <DividerContainer  label={`Our ${selectedPet === PET.CATS ? "Kittens" : "Puppies"} `} alignment={"left"} marginBottom={"4rem"} marginTop={"0rem"} />
        </ListSubheader>
      </ImageListItem>
      {pets?.map((item) => (
        <PictureInfoContainer item={item} key={item.id}/>
      ))}
    </ImageList>
  );
};
