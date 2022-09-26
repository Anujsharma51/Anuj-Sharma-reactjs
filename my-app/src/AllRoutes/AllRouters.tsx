import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import CreateProduct from "../pages/CreateProduct";
import Description from "../pages/Description";
import FavoritePage from "../pages/FavoritePage";

import HomePage from "../pages/HomePage";


const AllRouters = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreateProduct />}></Route>
        <Route path="/description/:id" element={<Description />}></Route>
        <Route path="/favorite" element={<FavoritePage />}></Route>
      </Routes>
    </>
  );
};

export default AllRouters;
