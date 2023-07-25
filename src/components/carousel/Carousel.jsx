import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { CardProduct } from '../card/Card';
import { Box} from '@mui/material';

export const CarouselContainer = ({product}) => {

    const productCarousel = [product.slice(0,5), product.slice(5,10)];

    return (

        <Box sx={{marginBottom:"3rem", background:"#f5f5f5", padding:"2rem"}}>
         
            <Carousel height={300} sx={{width:"100%"}} autoPlay={false} indicators={false}>
           {
               productCarousel.map((item, i) => <CardProduct key={i} item={item} />)
            }
    
        </Carousel>
        </Box>
    )
}

