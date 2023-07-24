import { BrowserRouter, Route, Routes as RoutesApp } from "react-router-dom"
import { Layout } from "../layout/Layout"
import { Main } from "../main/Main"
import { Products } from "./products/Products"







export const Routes = () => {
    return(
        <BrowserRouter >
        <Layout>
        <RoutesApp>
            <Route path="/" element={<Main/>} />
            <Route path="/products" >
                <Route index element={<Products />}/>
                <Route path=":product" element={<Products />}/>
            </Route>
        </RoutesApp>
        </Layout>
        </BrowserRouter>
           
    )
}