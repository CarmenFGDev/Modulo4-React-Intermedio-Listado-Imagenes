import React from "react";
import { Header } from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListCats } from "./scenes/ListCats";
import { LisDogs } from "./scenes/ListDogs";
import Paper from "@mui/material/Paper";
import { PetProvider } from "./core/Providers/petProvider";
import { CartProvider } from "./core/Providers/cartProvider";
import { ListCart } from "./scenes/ListCart";

export const App = () => {
  return (
    <>
      <Router>
        <Header />
        <CartProvider>
          <div className="container">
            <Paper className="lists" elevation={1}>
              <Routes>
                <Route path="/cats" element={<ListCats />} />
                <Route path="/dogs" element={<LisDogs />} />
                <Route path="/" element={<ListCats />} />
              </Routes>
            </Paper>
            <Paper className="cart" elevation={1}>
              <ListCart />
            </Paper>
          </div>
        </CartProvider>
      </Router>
    </>
  );
};
