import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const navigate = useNavigate()
  const {cart, user} = useSelector(state => state);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography onClick={() => navigate("/")} variant="h6" component="div" sx={{ flexGrow: 1, cursor:"pointer" }}>
            Anastasia Commerce
          </Typography>
          <Button onClick={() => navigate("/cart")}>
            <Badge badgeContent={cart.cart} color="error" sx={{ marginRight: "1rem" }}>
              <ShoppingCart color="white" />
            </Badge>
          </Button>
          <Button onClick={() => user.user ? navigate("login") : navigate(`/profile/${user.user.username}`)} color="inherit">{user.user ? "Profile":"Login"}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
