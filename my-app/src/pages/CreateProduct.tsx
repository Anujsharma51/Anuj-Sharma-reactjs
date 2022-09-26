
import React, { useState } from "react";
import Box from "@mui/material/Box";

// import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { AddToNewProduct } from "../redux/action";
const CreateProduct = () => {
 
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const [x, setForm] = useState({
   
  });
  const handleFill = (e:any) => {
    setForm({ ...x, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e:any) => {
    e.preventDefault();

   dispatch(AddToNewProduct(x,navigate))
  };
  return (
    <div>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "35ch" },
        }}
        autoComplete="off"
      >
        <TextField
         className="w-72 mt-5"
          onChange={handleFill}
          focused
          placeholder="Name"
          name="name"
        />
        <br></br>
        <TextField
              className="w-72 mt-5"
          // className="w-1"
          //
          onChange={handleFill}
          focused
          placeholder="Price"
          name="price"
        />
        <br></br>
        <TextField
             className="w-72 mt-5"
          onChange={handleFill}
          focused
          placeholder="Category"
          name="category"
        />
        <br></br>
        <TextField
             className="w-72 mt-5"
          onChange={handleFill}
          focused
          placeholder="Description"
          name="description"
        />
        <br></br>
        <TextField
             className="w-72 mt-5"
          onChange={handleFill}
          focused
          placeholder="Avatar"
          name="avatar"
        />
        <br></br>
        <TextField
             className="w-72 mt-5"
          onChange={handleFill}
          focused
          placeholder="DeveloperEmail"
          name="developerEmail"
        />
        <br></br>

        <input className="cursor-pointer bg-green-800 p-2 text-white rounded-lg" type="submit" value="Create Product" />
      </Box>
    </div>
  );
  
}

export default CreateProduct