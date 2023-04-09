import React from 'react';
import { PictureInfo } from '../list/list.vm';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar/ListItemAvatar';
import { Avatar, ListItemText, Typography, Divider } from '@mui/material';
import { actionsIds } from '../../core/Reducers/cartReducer';
import { useCartDispatch } from '../../core/Providers/cartProvider';

export interface Props {
 pet: PictureInfo;
}

export const CartComponent: React.FC<Props> = (props) => {
    const {pet} = props;
    const handleOnClick = (id: string) => {
    dispatch({ type: actionsIds.CHANGE_SELECTED, payload: id });
  };

  const dispatch = useCartDispatch();
    return(
         <>
            <ListItem
              alignItems="flex-start"
              onClick={() => handleOnClick(pet.id)}
              className='pointer-mouse'
            >
              <ListItemAvatar>
                <Avatar alt={pet.title} src={pet.picUrl} />
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
                      {pet.title}
                    </Typography>
                  </React.Fragment>
                }
                secondary={pet.age}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
    )
}    