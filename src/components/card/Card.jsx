import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { AddShoppingCart } from '@mui/icons-material';

export const CardProduct = ({data}) => {
  console.log("data", data)
  return (
    <Card sx={{ maxWidth: 200, height:300}}style={{paddingTop:"1rem", margin:"1rem"}}>
      <CardMedia
        sx={{ height: 120 }}
        image={data.thumbnail}
        title={data.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ${parseInt(data.installments.amount, 10)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {data.title.slice(0,30)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          <AddShoppingCart />
        </Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
