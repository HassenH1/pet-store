import React from "react";
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
      </div>
    </>
  );
}

export default Home;
