import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./screen/Home/Home";
import ShopAll from "./screen/ShopAll";
import Navbar from "./component/Navbar";
import ShowProduct from "./screen/ShowProduct";
import Footer from "./component/Footer";
import ShoppingCart from "./screen/ShoppingCart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="shopall" element={<ShopAll />} />
        <Route exact path="item/:id" element={<ShowProduct />} />
        <Route exact path="shoppingcart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
