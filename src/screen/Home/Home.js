import React from "react";
import Blog from "./Blog";
import Carousel from "./Carousel";
import MostPopular from "./MostPopular";
import ShopDropOption from "./ShopDropOption";

function Home() {
  return (
    <>
      <Carousel />
      <div className="container">
        <MostPopular />
        <ShopDropOption />
        <Blog />
      </div>
    </>
  );
}

export default Home;
