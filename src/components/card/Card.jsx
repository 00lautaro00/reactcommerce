import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AddShoppingCart } from '@mui/icons-material';
import {  Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartCount, cartState } from '../redux/slicerCart/slicerCart';
import { handles } from '../helpers/handles';

export const CardProduct = ({item}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {handleCart} = handles(dispatch,navigate,cartCount,cartState)

  return (
    <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
      {
      item?.map(data => (
        <Card key={data.id} sx={{ maxWidth: 200, height:270}}>
        <CardMedia
          sx={{ height: 120, boxShadow:"1px 1px 1px gray "}}
          image={data.image}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ${parseInt(data.price, 10)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {data.title.slice(0,20)}
          </Typography>
        </CardContent>
        <CardActions >
          <Button size="small" onClick={() => handleCart(data)}>
            <AddShoppingCart />
          </Button>
          <Button size="small">
            <Link style={{textDecoration:"none"}} to={`/products/${data.title}`}>
            See More
            </Link>
          </Button>
        </CardActions>
      </Card>
      ))
      }

    </div>
   
  );
}
