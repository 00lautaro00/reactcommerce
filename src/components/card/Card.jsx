import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AddShoppingCart } from '@mui/icons-material';
import {  Link } from 'react-router-dom';

export const CardProduct = ({item}) => {
  // const navigate = useNavigate()
  return (
    <div style={{width:"100%", height:"100%", display:"flex", justifyContent:"space-around", alignItems:"center"}}>
      {
      item?.map(data => (
        <Card key={data.id} sx={{ maxWidth: 200, height:300}}>
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
          <Button size="small">
            <AddShoppingCart />
          </Button>
          <Button size="small">
            <Link style={{textDecoration:"none"}} to={`products/${data.title}`}>
            Learn More
            </Link>
          </Button>
        </CardActions>
      </Card>
      ))
      }

    </div>
   
  );
}
