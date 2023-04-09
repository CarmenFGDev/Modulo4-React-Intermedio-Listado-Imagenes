import Chip from '@mui/material/Chip/Chip';
import Divider from '@mui/material/Divider/Divider';
import React from 'react';

export interface Props {
 label: string;
 alignment: any;
 marginBottom: string;
 marginTop: string;
}

export const DividerComponent: React.FC<Props> = (props) => {
    const {label, alignment, marginBottom , marginTop} = props;
    return(
        <Divider textAlign={alignment} sx={{ marginBottom: marginBottom , marginTop:marginTop }}>
            <Chip
              label={label}
              sx={{
                backgroundColor: "#1976D2!important",
                fontSize: "1.5rem",
                color: "white",
              }}
            />
        </Divider>
    )
    }    