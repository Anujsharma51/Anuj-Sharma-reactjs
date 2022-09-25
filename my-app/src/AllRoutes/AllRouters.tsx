import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import CreateProduct from "../pages/CreateProduct";
import HomePage from "../pages/HomePage";

const AllRouters = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreateProduct />}></Route>
      </Routes>
    </>
  );
};

export default AllRouters;
