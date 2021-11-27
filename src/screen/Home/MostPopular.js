import React from "react";
import { Link } from "react-router-dom";

import { mostPopularImages } from "../../data/data";

function MostPopular() {
  const renderCards = mostPopularImages.map((card, index) => (
    <div className="col-lg" key={index}>
      <Link to={card.pathname} className="text-decoration-none">
        <div className="card mb-3 text-center border-0">
          <img src={card.img} className="card-img-top" alt="" />
          <p className="text-muted lead" style={{ fontSize: "1.5em" }}>
            {card.text}
          </p>
        </div>
      </Link>
    </div>
  ));

  return (
    <>
      <p className="fs-3 my-5 text-center">Most Popular</p>
      {/* <h5 className="display-5 text-center text-muted my-5">Most Popular</h5> */}
      <div className="row">{renderCards}</div>
    </>
  );
}

export default MostPopular;
