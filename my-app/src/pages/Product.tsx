import React,{useState} from 'react'

import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';

import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { Button, Typography } from '@mui/material';


const Product = (props:any) => {
   console.log('props:', props)
   
  const [done, setDone] = useState(false);

const {el} =props.value

  return (
       <Card sx={{ maxWidth: 325,minWidth: 325}} className="ml-auto mr-auto cursor-pointer" >
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
      <CardActions>
              <MdOutlineFavoriteBorder onClick={() => setDone(!done)} className={ done?"text-pink-600 cursor-pointer hover:text-blue-200 text-xl":"cursor-pointer hover:text-blue-200 text-lg"}/>
      </CardActions>
    </Card>
  )
}

export default Product

