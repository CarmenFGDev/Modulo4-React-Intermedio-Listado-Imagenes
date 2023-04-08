import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  return (
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
  );
};
