import React from "react";
import { Header } from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListCats } from "./scenes/ListCats";
import { LisDogs } from "./scenes/ListDogs";
import Paper from "@mui/material/Paper";
import { CartProvider } from "./core/Providers/cartProvider";
import { ListCart } from "./scenes/ListCart";

export const App = () => {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <Router>
        <Header checked={checked} handleChange={handleChange} />
        <CartProvider>
          <div className="container">
            <Paper className={checked ? "lists" : "list-100"} elevation={1}>
              <Routes>
                <Route path="/cats" element={<ListCats />} />
                <Route path="/dogs" element={<LisDogs />} />
                <Route path="/" element={<ListCats />} />
              </Routes>
            </Paper>
            {checked && (
              <Paper className="cart" elevation={1}>
                <ListCart />
              </Paper>
            )}
          </div>
        </CartProvider>
      </Router>
    </>
  );
};
