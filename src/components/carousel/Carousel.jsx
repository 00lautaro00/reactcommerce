import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { CardProduct } from '../card/Card';
import { Box, Typography } from '@mui/material';

export const CarouselContainer = ({product, text}) => {

    const productCarousel = [product.slice(0,5), product.slice(5,10), product.slice(10,15)];

    return (

        <Box sx={{margin:"3rem 0", background:"#f5f5f5", padding:"2rem"}}>
            <Typography variant='h4' sx={{marginBottom:"2rem"}}>
                {text}
            </Typography>
            <Carousel height={300} sx={{width:"100%"}} autoPlay={false} indicators={false}>
           {
               productCarousel.map((item, i) => <CardProduct key={i} item={item} />)
            }
    
        </Carousel>
        </Box>
    )
}

