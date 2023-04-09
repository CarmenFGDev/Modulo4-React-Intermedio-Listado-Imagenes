import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

interface Props {
  checked: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Header: React.FC<Props> = (props) => {
  const { checked, handleChange } = props;
  const navigate = useNavigate();
  return (
    <header>
      <div className="header">
        <PetsIcon color="primary" fontSize="large" />
        <Link
          component="button"
          variant="body1"
          underline="hover"
          onClick={() => {
            navigate("/cats");
          }}
        >
          Cats
        </Link>
        <Link
          component="button"
          variant="body1"
          underline="hover"
          onClick={() => {
            navigate("/dogs");
          }}
        >
          Dogs
        </Link>
      </div>
      <div>
        <FormControlLabel
          label="Details"
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
        />
      </div>
    </header>
  );
};
