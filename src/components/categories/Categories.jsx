import { Box, Button, Container, Pagination } from "@mui/material";
import { CardCategory } from "./CardCategory";
import { useState } from "react";

export const Categories = ({ product, fetchCategories }) => {

  const [productPages, setproductPages] = useState (product.filter(pr => pr.id<11));
  const [pageView, setPageView] = useState(true)
  const totalPages = parseInt(product.length / 10 , 10);

  const handlePages = (e, value) => {
    if(value > 1){
      setproductPages( product.filter(pr => pr.id>10))
    }
    if(value < 2){
        setproductPages(product.filter(pr => pr.id<11))
    }
  }

  const filterProductForCategory = (e) => {
    e.preventDefault();
    const productFiltered = product.filter(
      (pr) =>
        pr.category.toLowerCase().trim() ===
        e.target.outerText.toLowerCase().trim()
    );
    setproductPages(productFiltered);
    setPageView(false)
  };
  const defaultProductForCategory = (e) => {
    e.preventDefault();
    setproductPages(product.filter(pr=> pr.id < 11))
    setPageView(true)
  };

  return (
    <Container
      sx={{
        background: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "2rem 0",
      }}
    >
      <Box>
        <Button onClick={(e) => defaultProductForCategory(e)}>All</Button>
        {fetchCategories.map((cat, i) => (
          <Button key={i} onClick={(e) => filterProductForCategory(e)}>
            {cat}
          </Button>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 0",
        }}
      >
        <CardCategory product={productPages} />
      </Box>
      {
        pageView ? 
      <Pagination count={totalPages} variant="outlined" color="primary" onChange={handlePages} />
      : ""
      }
    </Container>
  );
};
