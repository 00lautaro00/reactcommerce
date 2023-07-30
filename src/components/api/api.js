import { url } from "../../constans/url";
import { categories, product } from "../../endpoints/product";

const urlElectronics ="https://api.mercadolibre.com/sites/MLA/search?category=MLA1648";
const urlVideoGames ="https://api.mercadolibre.com/sites/MLA/search?category=MLA1144";
const urlCell ="https://api.mercadolibre.com/sites/MLA/search?category=MLA1051";
const urlProduct = "https://fakestoreapi.com/products";
const urlProductLimits = 'https://fakestoreapi.com/products?limit=8';
const urlProductCategories = 'https://fakestoreapi.com/products/categories';
const urlUsers = 'https://fakestoreapi.com/users';


const options = {
    headers:{
        authorization:"Bearer APP_USR-3078457136538659-122209-eb5082e18caa1f5171cfc9ddd649a169-480197504"
    }
}

const getData = async (url, options) => {
    const response = await fetch(url, options)
               .then(res => res.json())
               .then(data => data)
    return response
}

const responseElectronics = await getData(urlElectronics, options);
const responseCell = await getData(urlCell, options);
const responseVideoGames  = await getData(urlVideoGames, options);
const responseProduct = await getData(`${url}${product}`);
const responseProductLimit = await getData(urlProductLimits);
const responseProductCategories = await getData(`${url}${categories}`);
const responseUsers = await getData(urlUsers);

const allProduct = [...responseCell.results, ...responseElectronics.results, ...responseVideoGames.results];

export {
    responseCell,
    responseElectronics,
    responseVideoGames,
    allProduct,
    responseProduct,
    responseProductLimit,
    responseProductCategories,
    responseUsers
}



