import React from "react";
import { useLocation } from "react-router-dom"
import { PictureInfo } from "./list.vm";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

interface Props {
  pets: PictureInfo[];
  animal: string;
}

export const ListComponent: React.FC<Props> = (props) => {
  const { pets, animal } = props;
 
  return (
      <ImageList sx={{padding: 3}}>
        <ImageListItem key="Subheader" cols={3}>
          <ListSubheader component="div">{animal.toUpperCase()}</ListSubheader>
        </ImageListItem>
        {pets.map((item) => (
          <ImageListItem key={item.id}>
          <img
            src={`http://localhost:8080/${animal}/${item.picUrl}`}
            srcSet={`http://localhost:8080/${animal}/${item.picUrl}?w=248&fit=crop&auto=format&dpr=2 3x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 1)' }}
                aria-label={`info about ${item.title}`}
              >
              {!item.selected
                ? <ShoppingCartIcon/>
                : <DeleteOutlinedIcon />
              }
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};