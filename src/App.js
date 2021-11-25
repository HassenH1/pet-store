import { Routes, Route } from "react-router-dom";

import "./App.css";

import Home from "./screen/Home/Home";
import ShopAll from "./screen/ShopAll";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="shopall" element={<ShopAll />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
