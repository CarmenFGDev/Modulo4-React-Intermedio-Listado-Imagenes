import React from "react";
import { Header } from "./Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListCats } from "./scenes/ListCats";
import { LisDogs } from "./scenes/ListDogs";
import Paper from '@mui/material/Paper';
export const App = () => {
  return (
    <>
    
     <Router>
      <Header/>
      <div className="container">
        <Paper className="lists" elevation={1}>
        
            <Routes>
              <Route path="/cats" element={<ListCats/>} />
              <Route path="/dogs" element={<LisDogs/>} /> 
              <Route path="/" element={<ListCats/>} />
            </Routes>
            
         
        </Paper>
        <Paper className="cart" elevation={1}>
            Carro
        </Paper>
      </div>
      </Router>
    </>
    
  )
};
