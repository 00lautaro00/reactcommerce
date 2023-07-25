import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CarouselContainer } from "../carousel/Carousel";
import { CartAdd } from "./CartAdd";

export const CartAddContainer = () => {
  const params = useParams();
  const allProduct = useSelector((state) => state.products.value);
  const product = allProduct.find((pr) =>pr.title.toLowerCase().trim() ===params.product.toLowerCase().trim());
  const category = allProduct.filter(categories => product.category.toLowerCase().trim() === categories.category.toLowerCase().trim());
  

  return (
    <Container >
      <Box >
        <CartAdd product={product}/>
      </Box>
      <Box>
        <Typography variant="h5">
            Similares
        </Typography>
        <CarouselContainer product={category} />
      </Box>
    </Container>
  );
};
