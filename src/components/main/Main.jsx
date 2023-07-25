import { useSelector } from "react-redux";
import { CarouselContainer } from "../carousel/Carousel";
import { Box, Container, Typography } from "@mui/material";
import { Categories } from "../categories/Categories";

export const Main = () => {
  const state = useSelector((state) => state);
  return (
    <Container sx={{ padding: "4rem 0" }}>
      <Box>
        <Typography variant="h4">Maybe you are interested</Typography>
        <CarouselContainer
          product={state.products.value}
        />
      </Box>
      <Box>
        <Typography variant="h4">Categories</Typography>
        <Categories product={state.products.value} />
      </Box>
    </Container>
  );
};
