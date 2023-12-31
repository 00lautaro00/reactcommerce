import { BrowserRouter, Route, Routes as RoutesApp } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Main } from "../main/Main";
import { Products } from "./products/Products";
import { Cart } from "../cart/Cart";
import { CartAddContainer } from "../cart/CartAddContainer";
import { Login } from "../login/Login";
import { AuthProvider } from "../../context/AuthContext";
import { Profile } from "./profile/Profile";

export const Routes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <RoutesApp>
            <Route path="/" element={<Main />} />
            <Route path="/products">
              <Route index element={<Products />} />
              <Route path=":product" element={<Products />} />
            </Route>
            <Route path="/cart">
              <Route index element={<Cart />} />
              <Route path={":product"} element={<CartAddContainer />} />
            </Route>
            <Route path="/login">
              <Route index element={<Login />} />
            </Route>
            <Route path="/profile" >
              <Route index element={<Profile />} />
              <Route path=":username"/>
            </Route>
          </RoutesApp>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};
