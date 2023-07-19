import { useSelector } from "react-redux";
import { CarouselContainer } from "../carousel/Carousel";
import { Container } from "@mui/material";

export const Main = () => {
  const state = useSelector((state) => state);
  return (
    <>
      <Container sx={{padding:"2rem 0"}}>
          <CarouselContainer product={state.cell.value.results} text={"Ofertas"} />
          <CarouselContainer product={state.electronics.value.results} text={"Mas Ofertas"} />
          <CarouselContainer product={state.videogames.value.results} text={"Tal vez te interese"} />
      </Container>
    </>
  );
};
