import { useSelector } from "react-redux";
import { CarouselContainer } from "../carousel/Carousel";
import { Box, Container } from "@mui/material";

export const Main = () => {
  const state = useSelector((state) => state);
  return (
    <>
      <Container sx={{padding:"2rem 0"}}>
        {/* <Box>
        <CarouselContainer product={state.cell.value.results} text={"Ofertas"} />
          <CarouselContainer product={state.electronics.value.results} text={"Mas Ofertas"} />
        </Box> */}
        <Box>
          <CarouselContainer product={state.products.value} text={"Tal vez te interese"} />
        </Box>
          
      </Container>
    </>
  );
};
