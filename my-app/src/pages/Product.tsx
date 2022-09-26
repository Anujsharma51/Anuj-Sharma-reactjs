import React,{useState} from 'react'

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';


import { MdOutlineFavoriteBorder } from 'react-icons/md';
import {  Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AddToFavorite } from '../redux/action';
import { useNavigate } from 'react-router-dom';
import swal from "sweetalert";

const Product = (props:any) => {

   
  const [done, setDone] = useState(false);
const dispatch= useDispatch<any>()
const {el} =props.value
  const handleClick = (e: any, el: Object) => {
    e.stopPropagation()
    setDone((prv) => !prv)
swal("Added!", "Your Product has been added favorite list ", "success");
    dispatch(AddToFavorite(el))
  }
  
  const navigate= useNavigate()
 const hanldeNextPage = (e:any) => {
    e.stopPropagation()

    navigate(`/description/${el._id}`)

  }
  return (
       <Card onClick={hanldeNextPage} sx={{ maxWidth: 325,minWidth: 325}} className="ml-auto mr-auto cursor-pointer mb-2 hover:border border-solid border-red-40 rounded-sm" >
      <CardMedia
        component="img"
      className="max-h-60 h-5/6"
        image={el.avatar}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {el.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        price ₹{el.price}
        </Typography>
      </CardContent>
      <CardActions>
        <MdOutlineFavoriteBorder onClick={(e) => handleClick(e, el)} className={done ? "text-pink-600 cursor-pointer hover:text-blue-200 text-xl" : "cursor-pointer hover:text-blue-200 text-lg"} />
         <span className="text-gray-400">Add to favorite  </span>
      </CardActions>
    </Card>
  )
}

export default Product

