import React from 'react'

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import {  Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DeleteProduct } from '../redux/action';
const FavoritePageData = (props:any) => {
  const { el } = props.value;
    const navigate= useNavigate()
   const hanldeNextPage = (e:any) => {
    e.stopPropagation()

    navigate(`/description/${el._id}`)

  }
const dispatch = useDispatch<any>()
  const hanldeDelete = (e: any, id: any) => {
        e.stopPropagation()
    // console.log('id:', id)
    dispatch(DeleteProduct(id))

  }
  return (
    <Card sx={{ maxWidth: 425,minWidth: 365}} className="ml-auto mr-auto cursor-pointer" onClick={(e)=>hanldeNextPage(e)} >
      <CardMedia
        component="img"
      className="max-h-80 h-5/6 object-contain"
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
      <CardActions className="flex justify-center ">
          <button onClick={(e)=>hanldeDelete(e,el._id)} className=" w-1/4 bg-red-500 text-white border border-solid border-red-50 rounded-sm cursor-pointer hover:bg-pink-500">Delete</button>
      </CardActions>
    </Card>
  )
}

export default FavoritePageData