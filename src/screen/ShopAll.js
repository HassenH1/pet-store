import React from "react";
import { Link } from "react-router-dom";
import { allProducts } from "../data/data";

function ShopAll() {
  const renderCard = allProducts.map((card, index) => (
    <div className="col-lg-4 col-sm-5 my-4 bg-image hover-zoom" key={index}>
      <Link to={`/item/${card.id}`} className="text-decoration-none text-black">
        <img src={card.img} className="img-fluid" alt="..." height="260" />
        <div className="card-body">
          <h5 className="card-title">{card.title || "Card title"}</h5>
          <p className="card-text mb-0">{card.price}</p>
          <p className="card-text">
            <small className="text-muted text-decoration-none">
              Same Day Delivery Eligible
            </small>
          </p>
        </div>
      </Link>
    </div>
  ));

  return (
    <div className="container">
      <div className="row align-items-center">{renderCard}</div>
    </div>
  );
}

export default ShopAll;
